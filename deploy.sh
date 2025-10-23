#!/bin/bash

# ==========================================
# Скрипт автоматического развертывания
# Людмила Чипизубова - Персональный тренер
# ==========================================

set -e  # Остановка при ошибке

echo "🚀 Начинаем развертывание проекта..."
echo ""

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Функция для вывода сообщений
log_info() {
    echo -e "${GREEN}✓${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

# Проверка, что скрипт запущен на Ubuntu/Debian
if [ -f /etc/os-release ]; then
    . /etc/os-release
    if [[ "$ID" != "ubuntu" && "$ID" != "debian" ]]; then
        log_warn "Этот скрипт оптимизирован для Ubuntu/Debian"
        read -p "Продолжить? (y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
fi

echo "📋 Шаг 1/10: Обновление системы..."
sudo apt update
log_info "Система обновлена"

echo ""
echo "📦 Шаг 2/10: Установка зависимостей..."

# Проверка Node.js
if ! command -v node &> /dev/null; then
    echo "Устанавливаем Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
    log_info "Node.js установлен: $(node --version)"
else
    log_info "Node.js уже установлен: $(node --version)"
fi

# Проверка PostgreSQL
if ! command -v psql &> /dev/null; then
    echo "Устанавливаем PostgreSQL..."
    sudo apt install -y postgresql postgresql-contrib
    sudo systemctl start postgresql
    sudo systemctl enable postgresql
    log_info "PostgreSQL установлен"
else
    log_info "PostgreSQL уже установлен"
fi

# Проверка PM2
if ! command -v pm2 &> /dev/null; then
    echo "Устанавливаем PM2..."
    sudo npm install -g pm2
    log_info "PM2 установлен"
else
    log_info "PM2 уже установлен"
fi

# Проверка Nginx
if ! command -v nginx &> /dev/null; then
    echo "Устанавливаем Nginx..."
    sudo apt install -y nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx
    log_info "Nginx установлен"
else
    log_info "Nginx уже установлен"
fi

echo ""
echo "💾 Шаг 3/10: Настройка базы данных..."

# Запрос данных для БД
read -p "Введите имя пользователя БД [lusy_user]: " DB_USER
DB_USER=${DB_USER:-lusy_user}

read -sp "Введите пароль для БД: " DB_PASSWORD
echo
if [ -z "$DB_PASSWORD" ]; then
    DB_PASSWORD=$(openssl rand -base64 16)
    log_warn "Сгенерирован случайный пароль: $DB_PASSWORD"
fi

read -p "Введите имя базы данных [lusy_db]: " DB_NAME
DB_NAME=${DB_NAME:-lusy_db}

# Создание базы данных
sudo -u postgres psql <<EOF
-- Создание пользователя
DO \$\$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_user WHERE usename = '$DB_USER') THEN
        CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';
    END IF;
END
\$\$;

-- Создание базы данных
SELECT 'CREATE DATABASE $DB_NAME' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$DB_NAME')\gexec

-- Выдача прав
GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;

-- Для PostgreSQL 15+
\c $DB_NAME
GRANT ALL ON SCHEMA public TO $DB_USER;
EOF

log_info "База данных настроена"

echo ""
echo "📁 Шаг 4/10: Создание директории проекта..."

PROJECT_DIR="/var/www/lusy"
if [ ! -d "$PROJECT_DIR" ]; then
    sudo mkdir -p $PROJECT_DIR
    sudo chown -R $USER:$USER $PROJECT_DIR
    log_info "Директория создана: $PROJECT_DIR"
else
    log_warn "Директория уже существует: $PROJECT_DIR"
fi

echo ""
echo "🔑 Шаг 5/10: Настройка переменных окружения..."

# Генерация NEXTAUTH_SECRET
NEXTAUTH_SECRET=$(openssl rand -base64 32)

# Запрос домена
read -p "Введите ваш домен (например: example.com) [localhost]: " DOMAIN
DOMAIN=${DOMAIN:-localhost}

if [ "$DOMAIN" = "localhost" ]; then
    NEXTAUTH_URL="http://localhost:3000"
else
    NEXTAUTH_URL="https://$DOMAIN"
fi

# Создание .env.local
cat > $PROJECT_DIR/.env.local <<EOF
# Database
DATABASE_URL="postgresql://$DB_USER:$DB_PASSWORD@localhost:5432/$DB_NAME?schema=public"

# NextAuth
NEXTAUTH_URL="$NEXTAUTH_URL"
NEXTAUTH_SECRET="$NEXTAUTH_SECRET"

# Analytics (заполните по необходимости)
NEXT_PUBLIC_GA_MEASUREMENT_ID=""
NEXT_PUBLIC_YANDEX_METRIKA_ID=""

# Environment
NODE_ENV="production"
EOF

log_info "Переменные окружения настроены"
log_warn "Сохраните эти данные:"
echo "  DATABASE_URL: postgresql://$DB_USER:$DB_PASSWORD@localhost:5432/$DB_NAME"
echo "  NEXTAUTH_SECRET: $NEXTAUTH_SECRET"
echo ""

echo "📥 Шаг 6/10: Загрузка проекта..."

cd $PROJECT_DIR

# Если это Git репозиторий
if [ -d ".git" ]; then
    log_info "Обновление из Git..."
    git pull
else
    log_warn "Git репозиторий не найден. Скопируйте файлы проекта в $PROJECT_DIR"
    read -p "Нажмите Enter после копирования файлов..."
fi

echo ""
echo "📦 Шаг 7/10: Установка npm пакетов..."
npm ci --production=false
log_info "Пакеты установлены"

echo ""
echo "🗄️ Шаг 8/10: Настройка Prisma..."
npx prisma generate
npx prisma db push
log_info "Prisma настроена, схема применена к БД"

echo ""
echo "🏗️ Шаг 9/10: Сборка проекта..."
npm run build
log_info "Проект собран"

echo ""
echo "🚀 Шаг 10/10: Запуск приложения..."

# Остановка предыдущего процесса если есть
pm2 delete lusy 2>/dev/null || true

# Запуск нового процесса
pm2 start npm --name "lusy" -- start
pm2 save
pm2 startup | tail -n 1 | sudo bash

log_info "Приложение запущено через PM2"

echo ""
echo "🌐 Настройка Nginx..."

# Создание конфигурации Nginx
sudo tee /etc/nginx/sites-available/lusy > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Активация конфигурации
sudo ln -sf /etc/nginx/sites-available/lusy /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Проверка конфигурации
sudo nginx -t
sudo systemctl reload nginx

log_info "Nginx настроен"

echo ""
echo "🔒 Установка SSL сертификата..."

if [ "$DOMAIN" != "localhost" ]; then
    read -p "Установить SSL сертификат с Let's Encrypt? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sudo apt install -y certbot python3-certbot-nginx
        sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --register-unsafely-without-email || \
        log_warn "Не удалось установить SSL автоматически. Запустите: sudo certbot --nginx -d $DOMAIN"
    fi
else
    log_warn "SSL пропущен (localhost)"
fi

echo ""
echo "✅ РАЗВЕРТЫВАНИЕ ЗАВЕРШЕНО!"
echo ""
echo "=============================================="
echo "📊 Информация о развертывании:"
echo "=============================================="
echo "🌐 URL: $NEXTAUTH_URL"
echo "📁 Директория: $PROJECT_DIR"
echo "💾 База данных: $DB_NAME"
echo "👤 Пользователь БД: $DB_USER"
echo ""
echo "=============================================="
echo "🛠 Полезные команды:"
echo "=============================================="
echo "pm2 status              # Статус приложения"
echo "pm2 logs lusy           # Логи приложения"
echo "pm2 restart lusy        # Перезапуск"
echo "pm2 stop lusy           # Остановка"
echo "npm run db:studio       # Визуальный редактор БД"
echo "sudo nginx -t           # Проверка конфигурации Nginx"
echo "sudo systemctl reload nginx  # Перезагрузка Nginx"
echo ""
echo "=============================================="
echo "📝 Следующие шаги:"
echo "=============================================="
echo "1. Откройте $NEXTAUTH_URL в браузере"
echo "2. Зарегистрируйте первого пользователя: $NEXTAUTH_URL/auth/signup"
echo "3. Войдите в систему: $NEXTAUTH_URL/auth/signin"
echo "4. Откройте админ-панель: $NEXTAUTH_URL/admin"
echo ""
echo "🎉 Готово! Ваш сайт работает!"

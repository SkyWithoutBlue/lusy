#!/bin/bash

# ==========================================
# Скрипт развертывания через Docker
# Людмила Чипизубова - Персональный тренер
# ==========================================

set -e

echo "🐳 Развертывание через Docker..."
echo ""

# Цвета
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() {
    echo -e "${GREEN}✓${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Проверка Docker
if ! command -v docker &> /dev/null; then
    echo "Устанавливаем Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    log_info "Docker установлен"
    log_warn "Перезайдите в систему для применения прав Docker"
    exit 0
fi

# Проверка Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "Устанавливаем Docker Compose..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    log_info "Docker Compose установлен"
fi

# Запрос переменных
read -sp "Введите пароль для БД: " DB_PASSWORD
echo
DB_PASSWORD=${DB_PASSWORD:-$(openssl rand -base64 16)}

read -p "Введите ваш домен [localhost]: " DOMAIN
DOMAIN=${DOMAIN:-localhost}

if [ "$DOMAIN" = "localhost" ]; then
    NEXTAUTH_URL="http://localhost:3000"
else
    NEXTAUTH_URL="https://$DOMAIN"
fi

NEXTAUTH_SECRET=$(openssl rand -base64 32)

# Создание .env для Docker Compose
cat > .env <<EOF
DB_PASSWORD=$DB_PASSWORD
NEXTAUTH_URL=$NEXTAUTH_URL
NEXTAUTH_SECRET=$NEXTAUTH_SECRET
EOF

log_info "Переменные окружения созданы"

# Остановка существующих контейнеров
docker-compose down 2>/dev/null || true

# Запуск
echo ""
echo "🚀 Запуск контейнеров..."
docker-compose up -d --build

log_info "Контейнеры запущены"

echo ""
echo "⏳ Ожидание запуска сервисов (30 секунд)..."
sleep 30

echo ""
echo "✅ РАЗВЕРТЫВАНИЕ ЗАВЕРШЕНО!"
echo ""
echo "=============================================="
echo "📊 Информация:"
echo "=============================================="
echo "🌐 URL: $NEXTAUTH_URL"
echo "💾 Пароль БД: $DB_PASSWORD"
echo ""
echo "=============================================="
echo "🛠 Команды Docker:"
echo "=============================================="
echo "docker-compose ps       # Статус контейнеров"
echo "docker-compose logs -f  # Логи"
echo "docker-compose restart  # Перезапуск"
echo "docker-compose down     # Остановка"
echo ""
echo "🎉 Готово!"

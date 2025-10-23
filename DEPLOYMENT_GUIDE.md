# 🚀 Руководство по развертыванию на сервере

## 📋 Содержание
1. [Требования](#требования)
2. [Настройка базы данных](#настройка-базы-данных)
3. [Настройка переменных окружения](#настройка-переменных-окружения)
4. [Локальная разработка](#локальная-разработка)
5. [Развертывание на продакшн](#развертывание-на-продакшн)
6. [Доступ к админ-панели](#доступ-к-админ-панели)

---

## 🔧 Требования

- Node.js 18.17 или выше
- PostgreSQL 12 или выше
- npm или yarn

---

## 💾 Настройка базы данных

### 1. Установка PostgreSQL

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

**macOS:**
```bash
brew install postgresql@15
brew services start postgresql@15
```

**Windows:**
Скачайте установщик с [официального сайта](https://www.postgresql.org/download/windows/)

### 2. Создание базы данных

```bash
# Войдите в PostgreSQL
sudo -u postgres psql

# Создайте базу данных
CREATE DATABASE lusy_db;

# Создайте пользователя
CREATE USER lusy_user WITH ENCRYPTED PASSWORD 'ваш_пароль';

# Дайте права
GRANT ALL PRIVILEGES ON DATABASE lusy_db TO lusy_user;

# Выйдите
\q
```

### 3. Настройка Prisma

После создания базы данных выполните:

```bash
# Генерация Prisma Client
npm run db:generate

# Применение миграций
npm run db:push

# Или создание миграции
npm run db:migrate
```

---

## 🔐 Настройка переменных окружения

### 1. Создайте файл `.env.local`

Скопируйте содержимое из файла `ENV_TEMPLATE.txt` и создайте `.env.local` в корне проекта:

```bash
cp ENV_TEMPLATE.txt .env.local
```

### 2. Заполните переменные

```env
# DATABASE_URL - подключение к базе данных
DATABASE_URL="postgresql://lusy_user:ваш_пароль@localhost:5432/lusy_db?schema=public"

# NEXTAUTH_URL - URL вашего приложения
NEXTAUTH_URL="http://localhost:3000"

# NEXTAUTH_SECRET - секретный ключ (сгенерируйте новый!)
NEXTAUTH_SECRET="сгенерируйте-случайную-строку-минимум-32-символа"

# Analytics (опционально)
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_YANDEX_METRIKA_ID="XXXXXXXX"

NODE_ENV="development"
```

### 3. Генерация NEXTAUTH_SECRET

**Вариант 1 (OpenSSL):**
```bash
openssl rand -base64 32
```

**Вариант 2 (Node.js):**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Вариант 3 (онлайн):**
Используйте [generate-secret.vercel.app](https://generate-secret.vercel.app/32)

---

## 💻 Локальная разработка

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка базы данных

```bash
# Генерация Prisma Client
npm run db:generate

# Применение схемы к базе данных
npm run db:push
```

### 3. Запуск dev сервера

```bash
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

### 4. Просмотр базы данных (Prisma Studio)

```bash
npm run db:studio
```

Откроется визуальный редактор базы данных по адресу: `http://localhost:5555`

---

## 🌐 Развертывание на продакшн

### Вариант 1: Vercel (Рекомендуется для Next.js)

1. **Создайте аккаунт на [Vercel](https://vercel.com)**

2. **Подключите репозиторий GitHub**
   - Push ваш код на GitHub
   - Импортируйте проект в Vercel

3. **Настройте переменные окружения в Vercel:**
   ```
   DATABASE_URL=postgresql://user:pass@host:5432/db
   NEXTAUTH_URL=https://ваш-домен.vercel.app
   NEXTAUTH_SECRET=ваш-секретный-ключ
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_YANDEX_METRIKA_ID=XXXXXXXX
   NODE_ENV=production
   ```

4. **База данных для продакшн:**
   - Используйте [Supabase](https://supabase.com) (бесплатный PostgreSQL)
   - Или [Neon](https://neon.tech) (serverless PostgreSQL)
   - Или [PlanetScale](https://planetscale.com)

5. **Примените миграции:**
   ```bash
   npx prisma db push --skip-generate
   ```

### Вариант 2: VPS (Ubuntu/Nginx)

1. **Подключитесь к серверу:**
   ```bash
   ssh user@your-server-ip
   ```

2. **Установите зависимости:**
   ```bash
   # Node.js
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs

   # PostgreSQL
   sudo apt install postgresql postgresql-contrib

   # Nginx
   sudo apt install nginx

   # PM2 (процесс-менеджер)
   sudo npm install -g pm2
   ```

3. **Клонируйте проект:**
   ```bash
   cd /var/www
   git clone your-repo-url lusy
   cd lusy
   npm install
   ```

4. **Создайте .env.local на сервере:**
   ```bash
   nano .env.local
   # Вставьте ваши production переменные
   ```

5. **Подготовьте приложение:**
   ```bash
   npm run db:generate
   npm run db:push
   npm run build
   ```

6. **Запустите с PM2:**
   ```bash
   pm2 start npm --name "lusy" -- start
   pm2 save
   pm2 startup
   ```

7. **Настройте Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/lusy
   ```

   Добавьте конфигурацию:
   ```nginx
   server {
       listen 80;
       server_name ваш-домен.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Активируйте конфигурацию:
   ```bash
   sudo ln -s /etc/nginx/sites-available/lusy /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Установите SSL (Let's Encrypt):**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d ваш-домен.com
   ```

### Вариант 3: Docker

1. **Создайте Dockerfile:**
   ```dockerfile
   FROM node:20-alpine AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM node:20-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npx prisma generate
   RUN npm run build

   FROM node:20-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static

   EXPOSE 3000
   CMD ["node", "server.js"]
   ```

2. **Создайте docker-compose.yml:**
   ```yaml
   version: '3.8'
   services:
     db:
       image: postgres:15
       environment:
         POSTGRES_USER: lusy_user
         POSTGRES_PASSWORD: your_password
         POSTGRES_DB: lusy_db
       volumes:
         - postgres_data:/var/lib/postgresql/data
       ports:
         - "5432:5432"

     app:
       build: .
       ports:
         - "3000:3000"
       environment:
         DATABASE_URL: postgresql://lusy_user:your_password@db:5432/lusy_db
         NEXTAUTH_URL: http://localhost:3000
         NEXTAUTH_SECRET: your-secret-key
       depends_on:
         - db

   volumes:
     postgres_data:
   ```

3. **Запустите:**
   ```bash
   docker-compose up -d
   ```

---

## 👨‍💼 Доступ к админ-панели

После развертывания:

1. **Зарегистрируйте первого пользователя:**
   - Перейдите на `/auth/signup`
   - Создайте аккаунт

2. **Войдите в систему:**
   - Перейдите на `/auth/signin`
   - Войдите с вашими учетными данными

3. **Откройте админ-панель:**
   - Перейдите на `/admin`
   - Вы увидите список всех зарегистрированных пользователей

### Функции админ-панели:
- ✅ Просмотр всех пользователей
- ✅ Email и имя пользователя
- ✅ Дата регистрации
- ✅ Количество активных сессий
- ✅ Автоматическое обновление данных

---

## 🔍 Проверка работы

### Проверка базы данных:
```bash
npm run db:studio
```

### Проверка аутентификации:
1. Зарегистрируйте тестового пользователя на `/auth/signup`
2. Войдите на `/auth/signin`
3. Проверьте профиль на `/profile`
4. Откройте админку на `/admin`

### Проверка API:
```bash
# Регистрация (должно вернуть 201)
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'

# Получение пользователей (требует авторизации)
curl http://localhost:3000/api/admin/users \
  -H "Cookie: your-session-cookie"
```

---

## 📊 Мониторинг и логи

### PM2 (на VPS):
```bash
# Логи
pm2 logs lusy

# Статус
pm2 status

# Перезапуск
pm2 restart lusy

# Остановка
pm2 stop lusy
```

### Vercel:
- Логи доступны в панели управления Vercel
- Real-time функции мониторинга

---

## 🛠 Команды для разработки

```bash
# Разработка
npm run dev

# Продакшн сборка
npm run build
npm start

# База данных
npm run db:generate  # Генерация Prisma Client
npm run db:push      # Применение схемы
npm run db:migrate   # Создание миграции
npm run db:studio    # Визуальный редактор
npm run db:reset     # Сброс БД (осторожно!)
```

---

## 🐛 Решение проблем

### Ошибка подключения к БД:
```bash
# Проверьте статус PostgreSQL
sudo systemctl status postgresql

# Проверьте DATABASE_URL в .env.local
# Проверьте права пользователя в PostgreSQL
```

### Ошибка NextAuth:
```bash
# Проверьте NEXTAUTH_SECRET (должен быть установлен)
# Проверьте NEXTAUTH_URL (должен совпадать с URL приложения)
```

### Prisma ошибки:
```bash
# Очистите и пересоздайте Prisma Client
rm -rf node_modules/.prisma
npm run db:generate
```

---

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи приложения
2. Проверьте логи базы данных
3. Убедитесь, что все переменные окружения установлены
4. Проверьте firewall и порты

---

## ✅ Чеклист развертывания

- [ ] PostgreSQL установлен и запущен
- [ ] База данных создана
- [ ] .env.local создан и заполнен
- [ ] NEXTAUTH_SECRET сгенерирован
- [ ] npm install выполнен
- [ ] Prisma миграции применены
- [ ] npm run build выполнен успешно
- [ ] Приложение запущено
- [ ] Тестовый пользователь создан
- [ ] Админ-панель доступна
- [ ] SSL сертификат установлен (для продакшн)
- [ ] Backup базы данных настроен

---

**Готово! 🎉 Ваше приложение развернуто и готово к использованию!**

# 📊 Инструкция по настройке базы данных

## Быстрый старт

### 1️⃣ Создайте файл .env.local

Скопируйте содержимое из `ENV_TEMPLATE.txt` и создайте файл `.env.local` в корне проекта.

**Важно:** Файл `.env.local` НЕ должен быть в Git! Он добавлен в `.gitignore`.

### 2️⃣ Установите PostgreSQL

#### Windows:
1. Скачайте с https://www.postgresql.org/download/windows/
2. Установите (запомните пароль для пользователя postgres)
3. Добавьте путь к PostgreSQL в PATH

#### macOS:
```bash
brew install postgresql@15
brew services start postgresql@15
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 3️⃣ Создайте базу данных

```bash
# Войдите в PostgreSQL (пароль при установке)
psql -U postgres

# В консоли PostgreSQL выполните:
CREATE DATABASE lusy_db;
CREATE USER lusy_user WITH ENCRYPTED PASSWORD 'ваш_надежный_пароль';
GRANT ALL PRIVILEGES ON DATABASE lusy_db TO lusy_user;

# Для PostgreSQL 15+ также выполните:
\c lusy_db
GRANT ALL ON SCHEMA public TO lusy_user;

# Выйдите
\q
```

### 4️⃣ Обновите .env.local

```env
DATABASE_URL="postgresql://lusy_user:ваш_надежный_пароль@localhost:5432/lusy_db?schema=public"
NEXTAUTH_SECRET="сгенерируйте_секретный_ключ_32_символа"
NEXTAUTH_URL="http://localhost:3000"
```

**Генерация NEXTAUTH_SECRET:**
```bash
# Способ 1 (openssl):
openssl rand -base64 32

# Способ 2 (node):
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Способ 3: используйте любой генератор случайных строк
```

### 5️⃣ Примените схему базы данных

```bash
# Сгенерируйте Prisma Client
npm run db:generate

# Примените схему к базе данных
npm run db:push
```

### 6️⃣ Запустите проект

```bash
# Установите зависимости (если еще не установлены)
npm install

# Запустите dev сервер
npm run dev
```

## ✅ Проверка работы

### Просмотр базы данных через Prisma Studio:
```bash
npm run db:studio
```
Откроется браузер с визуальным редактором БД на http://localhost:5555

### Тестирование регистрации:
1. Откройте http://localhost:3000/auth/signup
2. Зарегистрируйте пользователя
3. Проверьте в Prisma Studio, что пользователь создан

### Тестирование авторизации:
1. Откройте http://localhost:3000/auth/signin
2. Войдите с учетными данными
3. Перейдите на http://localhost:3000/profile

### Доступ к админ-панели:
1. Войдите в систему
2. Откройте http://localhost:3000/admin
3. Увидите список всех пользователей

## 🗄 Команды для работы с БД

```bash
# Сгенерировать Prisma Client
npm run db:generate

# Применить изменения схемы (для разработки)
npm run db:push

# Создать миграцию (для продакшн)
npm run db:migrate

# Открыть Prisma Studio (визуальный редактор)
npm run db:studio

# Сбросить БД (удалит все данные!)
npm run db:reset
```

## 🔧 Структура базы данных

### Таблица: users
- `id` - уникальный идентификатор (cuid)
- `email` - email пользователя (уникальный)
- `name` - имя пользователя (опционально)
- `password` - хешированный пароль
- `createdAt` - дата создания
- `updatedAt` - дата обновления

### Таблица: accounts
- Для OAuth провайдеров (Google, GitHub и т.д.)
- Связана с users

### Таблица: sessions
- Хранит сессии пользователей
- Связана с users

### Таблица: verificationtokens
- Для верификации email и сброса пароля

## 🚨 Частые проблемы

### Ошибка: "Can't reach database server"
```bash
# Проверьте, запущен ли PostgreSQL
# Windows:
services.msc -> найдите postgresql-x64-15

# macOS:
brew services list

# Linux:
sudo systemctl status postgresql

# Если не запущен - запустите:
sudo systemctl start postgresql
```

### Ошибка: "Invalid username/password"
```bash
# Проверьте DATABASE_URL в .env.local
# Убедитесь, что пользователь и пароль правильные
# Попробуйте пересоздать пользователя в PostgreSQL
```

### Ошибка: "Schema.prisma changed"
```bash
# Пересоздайте Prisma Client
npm run db:generate
```

### Ошибка: "Prisma Client not found"
```bash
# Сгенерируйте Prisma Client
npm run db:generate

# Переустановите зависимости
rm -rf node_modules
npm install
```

## 🌐 База данных для продакшн

Для развертывания на сервере используйте один из следующих сервисов:

### 1. Supabase (Рекомендуется)
- ✅ Бесплатный уровень
- ✅ PostgreSQL
- ✅ Простая настройка
- 🔗 https://supabase.com

```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

### 2. Neon (Serverless PostgreSQL)
- ✅ Бесплатный уровень
- ✅ Автоматическое масштабирование
- 🔗 https://neon.tech

### 3. Railway
- ✅ Простое развертывание
- ✅ PostgreSQL включен
- 🔗 https://railway.app

### 4. PlanetScale (MySQL)
- ⚠️ Требует изменения provider в schema.prisma
- 🔗 https://planetscale.com

## 📦 Backup базы данных

### Создание backup:
```bash
# PostgreSQL
pg_dump -U lusy_user -d lusy_db > backup.sql

# Или через Prisma Studio - Export data
```

### Восстановление из backup:
```bash
psql -U lusy_user -d lusy_db < backup.sql
```

## 📋 Чеклист настройки

- [ ] PostgreSQL установлен
- [ ] База данных lusy_db создана
- [ ] Пользователь lusy_user создан с правами
- [ ] .env.local создан и заполнен
- [ ] DATABASE_URL корректный
- [ ] NEXTAUTH_SECRET сгенерирован
- [ ] `npm run db:generate` выполнен
- [ ] `npm run db:push` выполнен без ошибок
- [ ] `npm run dev` запускается
- [ ] Регистрация работает
- [ ] Авторизация работает
- [ ] Админ-панель доступна

---

**Готово! База данных настроена и готова к использованию! 🎉**

Если возникли проблемы - проверьте раздел "Частые проблемы" выше.

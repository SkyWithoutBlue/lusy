# 🚀 Быстрый старт

## Шаг 1: Установка зависимостей

```bash
npm install
```

## Шаг 2: Настройка базы данных

1. **Установите PostgreSQL** (если ещё не установлен)

2. **Создайте базу данных:**

```bash
# Войдите в PostgreSQL
psql -U postgres

# Создайте БД и пользователя
CREATE DATABASE lusy_db;
CREATE USER lusy_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE lusy_db TO lusy_user;

# Для PostgreSQL 15+
\c lusy_db
GRANT ALL ON SCHEMA public TO lusy_user;
\q
```

## Шаг 3: Создайте .env.local

Скопируйте содержимое из `ENV_TEMPLATE.txt` и создайте файл `.env.local`:

```env
DATABASE_URL="postgresql://lusy_user:your_password@localhost:5432/lusy_db?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="ваш-секретный-ключ-32-символа"
```

**Сгенерируйте NEXTAUTH_SECRET:**

```bash
openssl rand -base64 32
```

## Шаг 4: Настройте Prisma

```bash
# Сгенерируйте Prisma Client
npm run db:generate

# Примените схему к базе данных
npm run db:push
```

## Шаг 5: Запустите проект

```bash
npm run dev
```

Откройте http://localhost:3000

## Шаг 6: Создайте первого пользователя

1. Перейдите на http://localhost:3000/auth/signup
2. Зарегистрируйтесь
3. Войдите на http://localhost:3000/auth/signin

## Шаг 7: Откройте админ-панель

Перейдите на http://localhost:3000/admin

Вы увидите всех зарегистрированных пользователей!

---

## 📚 Полная документация

- **DATABASE_INSTRUCTIONS.md** - Подробная настройка базы данных
- **DEPLOYMENT_GUIDE.md** - Развертывание на сервер
- **OPTIMIZATION_GUIDE.md** - Оптимизация производительности
- **ENV_TEMPLATE.txt** - Шаблон переменных окружения

---

## 🛠 Полезные команды

```bash
# Разработка
npm run dev

# Продакшн сборка
npm run build
npm start

# База данных
npm run db:generate   # Сгенерировать Prisma Client
npm run db:push       # Применить схему
npm run db:studio     # Визуальный редактор БД
npm run db:migrate    # Создать миграцию

# Docker
docker-compose up -d  # Запустить с Docker
```

---

## ✅ Что уже настроено

- ✅ Next.js 15 с TypeScript
- ✅ Prisma ORM с PostgreSQL
- ✅ NextAuth аутентификация
- ✅ Админ-панель для просмотра пользователей
- ✅ Защита роутов (middleware)
- ✅ SEO оптимизация
- ✅ Favicon для всех устройств
- ✅ Security headers
- ✅ Оптимизация изображений
- ✅ Yandex Metrika
- ✅ Google Analytics (опционально)
- ✅ Docker поддержка

---

**Готово! Проект настроен и готов к разработке! 🎉**

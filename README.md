# 💪 Людмила Чипизубова - Персональный тренер

Профессиональный сайт персонального тренера с онлайн марафонами и тренировками.

## ✨ Возможности

- 🔐 **Аутентификация** - Регистрация и вход пользователей (NextAuth)
- 👨‍💼 **Админ-панель** - Просмотр всех зарегистрированных пользователей
- 💾 **База данных** - PostgreSQL + Prisma ORM
- 🚀 **Оптимизация** - Security headers, оптимизация изображений, SEO
- 📱 **Адаптивный дизайн** - Работает на всех устройствах
- 🐳 **Docker** - Поддержка контейнеризации

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка базы данных

Создайте PostgreSQL базу данных:

```bash
psql -U postgres
CREATE DATABASE lusy_db;
CREATE USER lusy_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE lusy_db TO lusy_user;
```

### 3. Переменные окружения

Создайте файл `.env.local` (см. `ENV_TEMPLATE.txt`):

```env
DATABASE_URL="postgresql://lusy_user:your_password@localhost:5432/lusy_db?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
```

### 4. Настройка Prisma

```bash
npm run db:generate
npm run db:push
```

### 5. Запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## 📚 Документация

**⭐ Начните отсюда:**
- [QUICK_START.md](./QUICK_START.md) - Быстрый старт за 7 шагов
- [ИТОГОВЫЙ_ОТЧЕТ.md](./ИТОГОВЫЙ_ОТЧЕТ.md) - Полный обзор проекта

**Подробные инструкции:**
- [DATABASE_INSTRUCTIONS.md](./DATABASE_INSTRUCTIONS.md) - Настройка базы данных
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Развертывание на сервер
- [ADMIN_PANEL_GUIDE.md](./ADMIN_PANEL_GUIDE.md) - Работа с админ-панелью
- [OPTIMIZATION_GUIDE.md](./OPTIMIZATION_GUIDE.md) - Оптимизация производительности

## 🎯 Основные URL

| URL | Описание |
|-----|----------|
| `/` | Главная страница |
| `/auth/signup` | Регистрация |
| `/auth/signin` | Вход |
| `/profile` | Профиль пользователя 🔒 |
| `/admin` | Админ-панель 🔒 |

🔒 - требует авторизации

## 🛠 Команды

### Разработка

```bash
npm run dev              # Dev сервер (http://localhost:3000)
npm run build            # Production сборка
npm start                # Запуск production сервера
```

### База данных

```bash
npm run db:generate      # Генерация Prisma Client
npm run db:push          # Применение схемы к БД
npm run db:migrate       # Создание миграции
npm run db:studio        # Визуальный редактор БД (http://localhost:5555)
```

### Docker

```bash
docker-compose up -d     # Запустить весь стек
docker-compose down      # Остановить
docker-compose logs -f   # Просмотр логов
```

## 🏗 Технологический стек

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS 4
- **Backend:** Next.js API Routes
- **База данных:** PostgreSQL + Prisma ORM
- **Аутентификация:** NextAuth.js
- **Валидация:** Zod
- **Хеширование:** bcryptjs
- **Аналитика:** Yandex Metrika, Google Analytics

## 📂 Структура проекта

```
├── src/
│   ├── app/
│   │   ├── admin/              # Админ-панель
│   │   ├── api/                # API routes
│   │   ├── auth/               # Страницы авторизации
│   │   └── profile/            # Профиль пользователя
│   ├── components/             # React компоненты
│   ├── lib/                    # Утилиты и конфигурация
│   └── middleware.ts           # Защита роутов
├── prisma/
│   └── schema.prisma           # Схема базы данных
├── public/                     # Статические файлы
├── Dockerfile                  # Docker образ
└── docker-compose.yml          # Docker compose конфигурация
```

## 👨‍💼 Админ-панель

Для доступа к админ-панели:

1. Зарегистрируйтесь на `/auth/signup`
2. Войдите на `/auth/signin`
3. Откройте `/admin`

В админ-панели вы увидите:
- Список всех пользователей
- Email и имя
- Дата регистрации
- Количество активных сессий

## 🚀 Развертывание

### Vercel (рекомендуется)

1. Push на GitHub
2. Импортируйте проект в Vercel
3. Добавьте переменные окружения
4. Готово!

### VPS

См. [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) для детальных инструкций.

### Docker

```bash
docker-compose up -d
```

## 🔐 Безопасность

- ✅ Security Headers (HSTS, CSP, XSS Protection)
- ✅ Хеширование паролей (bcrypt 12 rounds)
- ✅ JWT сессии
- ✅ Защита роутов через middleware
- ✅ Валидация входных данных (Zod)

## 📊 Оптимизация

- ✅ Оптимизация изображений (AVIF, WebP)
- ✅ SEO метаданные
- ✅ Open Graph для соцсетей
- ✅ Favicon для всех устройств
- ✅ PWA манифест
- ✅ Gzip/Brotli сжатие

## 🐛 Решение проблем

См. раздел "Решение проблем" в [ИТОГОВЫЙ_ОТЧЕТ.md](./ИТОГОВЫЙ_ОТЧЕТ.md)

## 📝 Лицензия

Все права защищены © 2024 Людмила Чипизубова

## 🤝 Контакты

- **Instagram:** [@ludmila_cipizubova_](https://www.instagram.com/ludmila_cipizubova_/)
- **Telegram:** [@Chipizubova_Lyudmila](https://t.me/Chipizubova_Lyudmila)
- **VK:** [lyudmila_chipizubova](https://vk.com/lyudmila_chipizubova)

---

**Создано с ❤️ для достижения ваших фитнес-целей**

# Функционал восстановления пароля

## 📋 Что было реализовано

### 1. База данных

-   Добавлены поля в модель `User`:
    -   `resetToken` - хешированный токен для восстановления
    -   `resetTokenExpiry` - время истечения токена (1 час)

### 2. API Endpoints

#### POST `/api/auth/forgot-password`

Запрос на восстановление пароля

```json
{
    "email": "user@example.com"
}
```

#### POST `/api/auth/reset-password`

Сброс пароля с новым паролем

```json
{
    "token": "reset-token-from-email",
    "password": "newPassword123"
}
```

### 3. Страницы

-   `/auth/forgot-password` - форма запроса восстановления пароля
-   `/auth/reset-password?token=xxx` - форма установки нового пароля
-   Добавлена ссылка "Забыли пароль?" на странице входа

### 4. Email система

-   Настроена отправка писем через nodemailer
-   Красивые HTML шаблоны писем
-   Два типа писем:
    -   Восстановление пароля (с ссылкой)
    -   Уведомление об изменении пароля

## 🚀 Инструкция по запуску

### Шаг 1: Установка зависимостей (уже выполнено)

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### Шаг 2: Настройка переменных окружения

Добавьте в `.env` файл:

```env
# Email Configuration
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
EMAIL_FROM="your-email@gmail.com"
EMAIL_FROM_NAME="Lusy Fitness"
```

#### Настройка Gmail:

1. Включите двухфакторную аутентификацию
2. Создайте App Password:
    - Google Account → Security → 2-Step Verification
    - Создайте App Password для "Mail"
    - Используйте этот пароль в `EMAIL_PASSWORD`

### Шаг 3: Применение миграции базы данных

```bash
# Для разработки
npx prisma migrate dev --name add_password_reset_fields

# Для production
npx prisma migrate deploy
```

### Шаг 4: Генерация Prisma Client

```bash
npx prisma generate
```

### Шаг 5: Перезапуск приложения

```bash
npm run dev
```

## 📝 Как использовать

### Для пользователей:

1. **Забыли пароль?**

    - Перейдите на страницу входа `/auth/signin`
    - Нажмите "Забыли пароль?"
    - Введите email
    - Проверьте почту (и папку "Спам")

2. **Получили письмо?**
    - Нажмите на кнопку "Сбросить пароль" в письме
    - Введите новый пароль (минимум 6 символов)
    - Подтвердите пароль
    - Войдите с новым паролем

### Для разработчиков:

#### Структура файлов:

```
src/
├── lib/
│   └── email.ts              # Утилиты для отправки email
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── forgot-password/
│   │       │   └── route.ts  # API запроса восстановления
│   │       └── reset-password/
│   │           └── route.ts  # API сброса пароля
│   └── auth/
│       ├── forgot-password/
│       │   └── page.tsx      # Страница запроса
│       └── reset-password/
│           └── page.tsx      # Страница установки нового пароля
└── components/
    └── forms/
        └── LoginForm.tsx     # Форма входа (добавлена ссылка)
```

## 🔒 Безопасность

-   ✅ Токены хешируются SHA-256
-   ✅ Срок действия токена - 1 час
-   ✅ Токены удаляются после использования
-   ✅ Пароли хешируются bcrypt (12 раундов)
-   ✅ API не раскрывает существование пользователя
-   ✅ Защита от перебора токенов
-   ✅ HTTPS обязателен в production

## 🎨 Email шаблоны

Шаблоны находятся в `src/lib/email.ts`:

-   `getPasswordResetEmailTemplate()` - письмо с ссылкой
-   `getPasswordChangedEmailTemplate()` - уведомление об изменении

Можете кастомизировать:

-   HTML разметку
-   Цвета и стили
-   Текст сообщений
-   Логотип (добавьте изображение)

## 🧪 Тестирование

### Локальное тестирование:

1. Используйте [Mailtrap.io](https://mailtrap.io) для тестирования email
2. Или используйте Gmail с App Password

### Пример настройки Mailtrap:

```env
EMAIL_HOST="smtp.mailtrap.io"
EMAIL_PORT="2525"
EMAIL_SECURE="false"
EMAIL_USER="your-mailtrap-username"
EMAIL_PASSWORD="your-mailtrap-password"
```

## 📧 Провайдеры Email

### Gmail (для начала)

```env
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="app-password"
```

### SendGrid (для production - рекомендуется)

```env
EMAIL_HOST="smtp.sendgrid.net"
EMAIL_PORT="587"
EMAIL_USER="apikey"
EMAIL_PASSWORD="your-sendgrid-api-key"
```

-   [Регистрация](https://sendgrid.com/)
-   100 писем/день бесплатно

### Yandex

```env
EMAIL_HOST="smtp.yandex.ru"
EMAIL_PORT="465"
EMAIL_SECURE="true"
EMAIL_USER="your-email@yandex.ru"
EMAIL_PASSWORD="your-password"
```

## 🐛 Troubleshooting

### Письма не приходят:

1. Проверьте переменные окружения
2. Проверьте папку "Спам"
3. Проверьте логи сервера
4. Убедитесь, что App Password создан (для Gmail)

### Ошибка "Invalid credentials":

-   Gmail: используйте App Password, не обычный пароль
-   Включите двухфакторную аутентификацию

### Токен истек:

-   Токены действительны 1 час
-   Запросите новую ссылку восстановления

### База данных не обновилась:

```bash
npx prisma migrate reset  # Осторожно! Удалит все данные
npx prisma migrate dev
npx prisma generate
```

## 🔄 Будущие улучшения

-   [ ] Rate limiting для предотвращения спама
-   [ ] История изменений пароля
-   [ ] Email верификация при регистрации
-   [ ] SMS восстановление пароля
-   [ ] Уведомления о подозрительной активности
-   [ ] Рассылки новостей и акций

## 📚 Дополнительно

### Расширение функционала email:

Файл `src/lib/email.ts` можно использовать для:

-   Приветственных писем
-   Уведомлений о покупках
-   Напоминаний о тренировках
-   Рассылок новостей
-   Подтверждения регистрации

### Пример использования:

```typescript
import { sendEmail } from "@/lib/email";

await sendEmail({
    to: "user@example.com",
    subject: "Добро пожаловать!",
    html: "<h1>Привет!</h1>",
    text: "Привет!",
});
```

## 📞 Поддержка

Если возникли вопросы:

1. Проверьте документацию выше
2. Проверьте логи в консоли
3. Проверьте настройки email провайдера
4. См. файл `EMAIL_SETUP.md` для детальной настройки

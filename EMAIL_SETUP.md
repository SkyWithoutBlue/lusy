# Настройка Email для восстановления пароля

## Необходимые переменные окружения

Добавьте следующие переменные в ваш файл `.env`:

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

## Настройка для разных провайдеров

### Gmail

1. Включите двухфакторную аутентификацию в вашем Google аккаунте
2. Создайте App Password:
    - Перейдите в Google Account → Security
    - В разделе "2-Step Verification" создайте App Password
    - Используйте этот пароль в `EMAIL_PASSWORD`

```env
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="nikitachebotov@gmail.com"
EMAIL_PASSWORD="!Suicide230875boy"
```

### Yandex Mail

```env
EMAIL_HOST="smtp.yandex.ru"
EMAIL_PORT="465"
EMAIL_SECURE="true"
EMAIL_USER="your-email@yandex.ru"
EMAIL_PASSWORD="your-password"
```

### Mail.ru

```env
EMAIL_HOST="smtp.mail.ru"
EMAIL_PORT="465"
EMAIL_SECURE="true"
EMAIL_USER="your-email@mail.ru"
EMAIL_PASSWORD="your-password"
```

### SendGrid (рекомендуется для production)

```env
EMAIL_HOST="smtp.sendgrid.net"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="apikey"
EMAIL_PASSWORD="your-sendgrid-api-key"
```

### Mailgun

```env
EMAIL_HOST="smtp.mailgun.org"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="your-mailgun-username"
EMAIL_PASSWORD="your-mailgun-password"
```

## Применение миграции базы данных

После настройки email, примените миграцию Prisma для добавления полей восстановления пароля:

```bash
npx prisma migrate dev --name add_password_reset_fields
```

Или для production:

```bash
npx prisma migrate deploy
```

## Тестирование

1. Запустите приложение
2. Перейдите на страницу `/auth/forgot-password`
3. Введите email зарегистрированного пользователя
4. Проверьте почту (в том числе папку "Спам")
5. Перейдите по ссылке и установите новый пароль

## Функционал восстановления пароля

### Новые API endpoints:

-   `POST /api/auth/forgot-password` - запрос восстановления пароля
-   `POST /api/auth/reset-password` - сброс пароля с новым паролем

### Новые страницы:

-   `/auth/forgot-password` - запрос восстановления пароля
-   `/auth/reset-password?token=...` - установка нового пароля

### Изменения в базе данных:

-   `resetToken` - хешированный токен для восстановления
-   `resetTokenExpiry` - время истечения токена (1 час)

## Безопасность

-   Токены хешируются с помощью SHA-256
-   Срок действия токена - 1 час
-   Токены удаляются после использования
-   Пароли хешируются с помощью bcrypt
-   В ответе API не раскрывается, существует ли пользователь

## Email шаблоны

Система отправляет два типа писем:

1. **Восстановление пароля** - с ссылкой для сброса
2. **Пароль изменен** - уведомление об успешной смене пароля

Шаблоны можно настроить в файле `src/lib/email.ts`.

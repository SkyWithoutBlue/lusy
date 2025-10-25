# 🚀 Быстрый старт - Восстановление пароля

## ⚡ 5 минут до запуска

### 1. Добавьте переменные в `.env`:

```env
# Email Configuration (Gmail пример)
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="ваш-email@gmail.com"
EMAIL_PASSWORD="ваш-app-password"
EMAIL_FROM="ваш-email@gmail.com"
EMAIL_FROM_NAME="Lusy Fitness"
```

### 2. Получите Gmail App Password:

1. Откройте: https://myaccount.google.com/security
2. Включите "2-Step Verification"
3. Перейдите в "App passwords"
4. Создайте пароль для "Mail"
5. Скопируйте 16-значный пароль
6. Вставьте в `EMAIL_PASSWORD`

### 3. Примените миграцию БД:

```bash
npx prisma migrate dev --name add_password_reset_fields
```

### 4. Перезапустите сервер:

```bash
npm run dev
```

## ✅ Готово!

Теперь доступны:

-   🔗 `/auth/forgot-password` - запрос восстановления
-   🔗 `/auth/reset-password?token=xxx` - установка нового пароля
-   🔗 `/auth/signin` - на форме входа есть ссылка "Забыли пароль?"

## 🧪 Тест

1. Откройте `/auth/signin`
2. Нажмите "Забыли пароль?"
3. Введите email существующего пользователя
4. Проверьте почту
5. Перейдите по ссылке из письма
6. Установите новый пароль
7. Войдите с новым паролем

## ⚠️ Важно для production

В production НЕ используйте Gmail! Используйте:

-   ✅ SendGrid (100 писем/день бесплатно)
-   ✅ Mailgun
-   ✅ AWS SES
-   ✅ Другой транзакционный email сервис

### Production конфигурация (SendGrid):

```env
EMAIL_HOST="smtp.sendgrid.net"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="apikey"
EMAIL_PASSWORD="ваш-sendgrid-api-key"
```

## 📖 Полная документация

См. `PASSWORD_RESET_README.md` для подробностей.

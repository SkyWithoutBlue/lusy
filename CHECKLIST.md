# ✅ Чеклист для запуска восстановления пароля

## 🎯 Что нужно сделать СЕЙЧАС

### 1️⃣ Настроить Email (5 минут)

-   [ ] Открыть файл `.env` в корне проекта
-   [ ] Добавить следующие строки:

```env
# Email Configuration
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="ваш-email@gmail.com"
EMAIL_PASSWORD="ваш-app-password"
EMAIL_FROM="ваш-email@gmail.com"
EMAIL_FROM_NAME="Lusy Fitness"
```

#### Для Gmail:

-   [ ] Открыть https://myaccount.google.com/security
-   [ ] Включить "2-Step Verification"
-   [ ] Перейти в "App passwords"
-   [ ] Создать пароль для "Mail"
-   [ ] Скопировать 16-значный пароль
-   [ ] Вставить в `EMAIL_PASSWORD` (без пробелов)

### 2️⃣ Применить миграцию БД (1 минута)

```bash
npx prisma migrate dev --name add_password_reset_fields
```

-   [ ] Выполнить команду выше
-   [ ] Дождаться сообщения "Migration applied"

### 3️⃣ Перезапустить сервер (1 минута)

```bash
# Остановить текущий сервер (Ctrl+C)
# Запустить заново
npm run dev
```

-   [ ] Остановить dev сервер
-   [ ] Запустить снова
-   [ ] Проверить, что нет ошибок в консоли

## 🧪 Тестирование (2 минуты)

-   [ ] Открыть http://localhost:3000/auth/signin
-   [ ] Кликнуть "Забыли пароль?"
-   [ ] Ввести email существующего пользователя
-   [ ] Проверить, что появилось сообщение об успехе
-   [ ] Проверить почту (включая папку "Спам")
-   [ ] Открыть письмо
-   [ ] Кликнуть "Сбросить пароль"
-   [ ] Ввести новый пароль (минимум 6 символов)
-   [ ] Подтвердить пароль
-   [ ] Кликнуть "Сохранить новый пароль"
-   [ ] Проверить, что произошло перенаправление на страницу входа
-   [ ] Войти с новым паролем
-   [ ] ✅ Успех!

## 📊 Что было создано

### Backend:

-   ✅ `src/lib/email.ts` - утилиты email
-   ✅ `src/app/api/auth/forgot-password/route.ts` - API запроса
-   ✅ `src/app/api/auth/reset-password/route.ts` - API сброса

### Frontend:

-   ✅ `src/app/auth/forgot-password/page.tsx` - страница запроса
-   ✅ `src/app/auth/reset-password/page.tsx` - страница сброса
-   ✅ `src/components/forms/LoginForm.tsx` - добавлена ссылка

### База данных:

-   ✅ `prisma/schema.prisma` - добавлены поля resetToken, resetTokenExpiry

### Документация:

-   ✅ `PASSWORD_RESET_README.md` - полная документация
-   ✅ `QUICK_START_PASSWORD_RESET.md` - быстрый старт
-   ✅ `EMAIL_SETUP.md` - настройка email
-   ✅ `PASSWORD_RESET_FLOW.md` - схема работы
-   ✅ `SUMMARY_PASSWORD_RESET.md` - сводка
-   ✅ `CHECKLIST.md` - этот файл

## ⚠️ Важно для Production

Перед деплоем:

-   [ ] Заменить Gmail на транзакционный сервис:

    -   SendGrid (рекомендуется)
    -   Mailgun
    -   AWS SES
    -   Postmark

-   [ ] Обновить переменные в production `.env`:

```env
EMAIL_HOST="smtp.sendgrid.net"
EMAIL_PORT="587"
EMAIL_USER="apikey"
EMAIL_PASSWORD="ваш-sendgrid-api-key"
NEXTAUTH_URL="https://ваш-домен.com"
```

-   [ ] Применить миграцию на production:

```bash
npx prisma migrate deploy
```

-   [ ] Настроить DKIM/SPF для домена
-   [ ] Добавить rate limiting
-   [ ] Настроить мониторинг отправки email

## 🐛 Проблемы?

### Email не приходит:

1. Проверьте переменные окружения в `.env`
2. Проверьте папку "Спам"
3. Проверьте консоль на ошибки
4. Убедитесь, что используете App Password (не обычный пароль)

### Ошибка "Invalid credentials":

-   Для Gmail: используйте App Password
-   Включите 2FA в Google аккаунте
-   Убедитесь, что пароль скопирован без пробелов

### Токен истек:

-   Токены действуют 1 час
-   Запросите новую ссылку

### Ошибка миграции:

```bash
# Посмотреть статус
npx prisma migrate status

# Если нужно, сбросить и применить заново (ОСТОРОЖНО!)
npx prisma migrate reset
npx prisma migrate dev
```

## 📚 Документация

-   Быстрый старт: `QUICK_START_PASSWORD_RESET.md`
-   Полная документация: `PASSWORD_RESET_README.md`
-   Настройка email: `EMAIL_SETUP.md`
-   Схема работы: `PASSWORD_RESET_FLOW.md`
-   Сводка: `SUMMARY_PASSWORD_RESET.md`

## 🎉 Готово!

После выполнения всех пунктов функционал восстановления пароля полностью работает!

### Доступные URL:

-   `/auth/signin` - вход (с ссылкой "Забыли пароль?")
-   `/auth/forgot-password` - запрос восстановления
-   `/auth/reset-password?token=xxx` - установка нового пароля

### API Endpoints:

-   `POST /api/auth/forgot-password` - запрос токена
-   `POST /api/auth/reset-password` - сброс пароля

Удачи! 🚀

#!/bin/bash

# Скрипт для применения миграции восстановления пароля

echo "🔄 Применение миграции базы данных для восстановления пароля..."

# Применяем миграцию
npx prisma migrate dev --name add_password_reset_fields

# Генерируем Prisma Client
echo "📦 Генерация Prisma Client..."
npx prisma generate

# Проверяем статус миграций
echo "✅ Проверка статуса миграций..."
npx prisma migrate status

echo ""
echo "✨ Готово! Функционал восстановления пароля настроен."
echo ""
echo "📝 Не забудьте:"
echo "   1. Настроить переменные EMAIL_* в .env"
echo "   2. Перезапустить сервер разработки (npm run dev)"
echo ""
echo "📚 См. QUICK_START_PASSWORD_RESET.md для инструкций"

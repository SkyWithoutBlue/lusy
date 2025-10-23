#!/bin/bash

# ==========================================
# Скрипт обновления проекта на сервере
# ==========================================

set -e

echo "🔄 Обновление проекта..."

PROJECT_DIR="/var/www/lusy"
cd $PROJECT_DIR

# Обновление кода
if [ -d ".git" ]; then
    echo "📥 Получение изменений из Git..."
    git pull
else
    echo "⚠️  Git не используется. Скопируйте обновленные файлы вручную."
    read -p "Нажмите Enter после копирования..."
fi

# Установка зависимостей
echo "📦 Обновление зависимостей..."
npm ci --production=false

# Обновление Prisma
echo "🗄️  Обновление Prisma..."
npx prisma generate
npx prisma db push

# Сборка
echo "🏗️  Сборка проекта..."
npm run build

# Перезапуск
echo "🔄 Перезапуск приложения..."
pm2 restart lusy

echo "✅ Обновление завершено!"
pm2 status

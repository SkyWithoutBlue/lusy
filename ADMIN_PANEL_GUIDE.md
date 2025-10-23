# 👨‍💼 Руководство по админ-панели

## 📋 Обзор

Админ-панель позволяет просматривать всех зарегистрированных пользователей вашего приложения. Доступ к панели имеют только авторизованные пользователи.

**URL:** `/admin`

---

## 🎯 Функции админ-панели

### ✅ Реализованные функции:

1. **Просмотр пользователей**
   - Список всех зарегистрированных пользователей
   - Сортировка по дате регистрации (новые первыми)

2. **Отображаемая информация:**
   - ID пользователя (первые 8 символов)
   - Email
   - Имя
   - Дата регистрации (формат: ДД.ММ.ГГГГ ЧЧ:ММ)
   - Количество активных сессий

3. **UI/UX:**
   - Адаптивный дизайн
   - Современный интерфейс
   - Счётчик общего количества пользователей
   - Анимация загрузки
   - Автоматическое обновление при входе

4. **Безопасность:**
   - Доступ только для авторизованных пользователей
   - Автоматический редирект на `/auth/signin` для неавторизованных
   - API защищён middleware

---

## 🚀 Как использовать

### Шаг 1: Войдите в систему

```
1. Откройте http://localhost:3000/auth/signin
2. Введите ваши учетные данные
3. Нажмите "Войти"
```

### Шаг 2: Откройте админ-панель

```
Перейдите на http://localhost:3000/admin
```

### Шаг 3: Просмотр пользователей

В таблице вы увидите:

| Колонка | Описание |
|---------|----------|
| **ID** | Уникальный идентификатор (первые 8 символов) |
| **Email** | Email пользователя |
| **Имя** | Имя пользователя (или "—" если не указано) |
| **Дата регистрации** | Когда пользователь зарегистрировался |
| **Активные сессии** | Количество открытых сессий |

---

## 🔧 Техническая информация

### Архитектура

```
┌─────────────────────┐
│   /admin (page)     │
│   React Component   │
└──────────┬──────────┘
           │
           │ fetch('/api/admin/users')
           ▼
┌─────────────────────┐
│  API Route Handler  │
│  getServerSession() │
└──────────┬──────────┘
           │
           │ Prisma query
           ▼
┌─────────────────────┐
│   PostgreSQL DB     │
│   users table       │
└─────────────────────┘
```

### Файлы

**Frontend:**
- `src/app/admin/page.tsx` - UI компонент админ-панели

**Backend:**
- `src/app/api/admin/users/route.ts` - API для получения пользователей

**Middleware:**
- `src/middleware.ts` - Защита роута `/admin`

### API Endpoint

**GET /api/admin/users**

**Защита:** Требует авторизацию

**Response:**
```json
{
  "users": [
    {
      "id": "clxxxx123456",
      "email": "user@example.com",
      "name": "John Doe",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z",
      "_count": {
        "sessions": 2
      }
    }
  ]
}
```

**Errors:**
- `401` - Требуется авторизация
- `500` - Внутренняя ошибка сервера

---

## 🔐 Безопасность

### Реализованные меры:

1. **Middleware защита**
   ```typescript
   // src/middleware.ts
   export const config = {
       matcher: ["/profile/:path*", "/admin/:path*"],
   };
   ```

2. **Server-side проверка**
   ```typescript
   const session = await getServerSession(authOptions);
   if (!session) {
       return NextResponse.json({ error: "Требуется авторизация" }, { status: 401 });
   }
   ```

3. **Client-side защита**
   ```typescript
   const { data: session, status } = useSession();
   if (status === "unauthenticated") {
       router.push("/auth/signin");
   }
   ```

### Что НЕ отображается:

- ❌ Пароли (никогда не выбираются из БД)
- ❌ Токены
- ❌ Sensitive данные

---

## 📊 Просмотр данных через Prisma Studio

Альтернативный способ просмотра пользователей:

```bash
npm run db:studio
```

Откроется http://localhost:5555 с визуальным редактором БД

**Преимущества Prisma Studio:**
- Просмотр всех таблиц
- Редактирование данных
- Выполнение запросов
- Фильтрация и сортировка

---

## 🎨 Кастомизация админ-панели

### Изменение стиля

Откройте `src/app/admin/page.tsx` и измените цвета:

```typescript
// Заголовок
<div className="bg-[#9A8A88] px-6 py-4">  // Замените цвет

// Таблица
<tr className="hover:bg-gray-50 transition-colors">  // Hover эффект
```

### Добавление фильтрации

```typescript
const [filter, setFilter] = useState("");

const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(filter.toLowerCase())
);
```

### Добавление пагинации

```typescript
const [page, setPage] = useState(1);
const perPage = 20;
const startIndex = (page - 1) * perPage;
const paginatedUsers = users.slice(startIndex, startIndex + perPage);
```

### Добавление сортировки

```typescript
const [sortBy, setSortBy] = useState<'email' | 'createdAt'>('createdAt');
const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

const sortedUsers = [...users].sort((a, b) => {
    if (sortBy === 'email') {
        return sortOrder === 'asc'
            ? a.email.localeCompare(b.email)
            : b.email.localeCompare(a.email);
    }
    // ... и т.д.
});
```

---

## 🚀 Расширение функционала

### Добавление удаления пользователей

**1. Создайте API endpoint:**

`src/app/api/admin/users/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await prisma.user.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ message: "User deleted" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    }
}
```

**2. Добавьте кнопку в UI:**

```typescript
const handleDelete = async (userId: string) => {
    if (!confirm("Удалить пользователя?")) return;

    await fetch(`/api/admin/users/${userId}`, { method: "DELETE" });
    // Обновите список
    fetchUsers();
};

// В таблице:
<td>
    <button onClick={() => handleDelete(user.id)}>Удалить</button>
</td>
```

### Добавление редактирования

Аналогично создайте PUT/PATCH endpoint и форму редактирования.

### Добавление ролей

**1. Обновите схему:**

`prisma/schema.prisma`:
```prisma
model User {
  // ...
  role String @default("user") // "user" | "admin"
}
```

**2. Примените миграцию:**
```bash
npm run db:push
```

**3. Проверяйте роль в middleware:**
```typescript
const user = await prisma.user.findUnique({
    where: { email: token.email }
});

if (user?.role !== "admin") {
    return false; // Запретить доступ
}
```

---

## 📈 Статистика и аналитика

### Добавление дополнительной статистики

`src/app/api/admin/stats/route.ts`:
```typescript
export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const totalUsers = await prisma.user.count();
    const todayUsers = await prisma.user.count({
        where: {
            createdAt: {
                gte: new Date(new Date().setHours(0, 0, 0, 0)),
            },
        },
    });

    const weekUsers = await prisma.user.count({
        where: {
            createdAt: {
                gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            },
        },
    });

    return NextResponse.json({
        total: totalUsers,
        today: todayUsers,
        week: weekUsers,
    });
}
```

**Отобразите в UI:**
```typescript
<div className="grid grid-cols-3 gap-4 mb-6">
    <div className="bg-blue-50 p-4! rounded">
        <p className="text-sm text-gray-600">Всего</p>
        <p className="text-2xl font-bold">{stats.total}</p>
    </div>
    <div className="bg-green-50 p-4! rounded">
        <p className="text-sm text-gray-600">Сегодня</p>
        <p className="text-2xl font-bold">{stats.today}</p>
    </div>
    <div className="bg-purple-50 p-4! rounded">
        <p className="text-sm text-gray-600">За неделю</p>
        <p className="text-2xl font-bold">{stats.week}</p>
    </div>
</div>
```

---

## 🧪 Тестирование админ-панели

### Ручное тестирование:

1. ✅ Создайте несколько тестовых пользователей
2. ✅ Откройте админ-панель
3. ✅ Проверьте отображение всех пользователей
4. ✅ Проверьте корректность дат
5. ✅ Проверьте счётчик сессий
6. ✅ Выйдите и попробуйте открыть `/admin` (должен редирект)

### API тестирование:

```bash
# Без авторизации (должно вернуть 401)
curl http://localhost:3000/api/admin/users

# С cookie сессии (должно вернуть данные)
curl http://localhost:3000/api/admin/users \
  -H "Cookie: next-auth.session-token=ваш-токен"
```

---

## 🐛 Решение проблем

### Проблема: Пустая таблица

**Проверьте:**
1. Есть ли пользователи в БД (`npm run db:studio`)
2. Выполняется ли API запрос (откройте DevTools → Network)
3. Есть ли ошибки в консоли браузера

### Проблема: 401 Unauthorized

**Причины:**
1. Сессия истекла - войдите заново
2. NEXTAUTH_SECRET не совпадает
3. Cookie блокируются браузером

**Решение:**
```bash
# Проверьте .env.local
echo $NEXTAUTH_SECRET

# Очистите cookies
# DevTools → Application → Cookies → Удалите все
```

### Проблема: Медленная загрузка

**Оптимизация:**

1. Добавьте индекс в Prisma:
```prisma
model User {
  // ...
  @@index([createdAt])
}
```

2. Добавьте пагинацию (см. выше)

3. Используйте Server Components с кешированием

---

## 📚 Дополнительные ресурсы

- [NextAuth Documentation](https://next-auth.js.org/)
- [Prisma Queries](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
- [React Hooks](https://react.dev/reference/react)

---

## ✅ Чеклист админ-панели

- [x] UI компонент создан
- [x] API endpoint настроен
- [x] Защита middleware включена
- [x] Авторизация проверяется
- [x] Данные отображаются корректно
- [x] Адаптивный дизайн
- [x] Обработка ошибок
- [x] Состояние загрузки
- [ ] Фильтрация (опционально)
- [ ] Пагинация (опционально)
- [ ] Удаление пользователей (опционально)
- [ ] Редактирование (опционально)
- [ ] Роли пользователей (опционально)
- [ ] Статистика (опционально)

---

**Админ-панель полностью готова к использованию! 🎉**

Для начала работы просто войдите в систему и перейдите на `/admin`

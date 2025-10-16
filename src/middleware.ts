// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//     function middleware(req) {
//         // Дополнительная логика middleware может быть добавлена здесь
//     },
//     {
//         callbacks: {
//             authorized: ({ token, req }) => {
//                 // Разрешаем доступ к странице профиля только авторизованным пользователям
//                 if (req.nextUrl.pathname.startsWith("/profile")) {
//                     return !!token;
//                 }
//                 return true;
//             },
//         },
//     }
// );

// export const config = {
//     matcher: ["/profile/:path*"],
// };

// Временно отключено для тестирования
export default function middleware() {
    // Пустая функция middleware
}

export const config = {
    matcher: [],
};

import { withAuth } from "next-auth/middleware";

export default withAuth(
    function middleware(req) {
        // Дополнительная логика middleware может быть добавлена здесь
        console.log("Protected route accessed:", req.nextUrl.pathname);
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                // Разрешаем доступ к защищённым страницам только авторизованным пользователям
                if (
                    req.nextUrl.pathname.startsWith("/profile") ||
                    req.nextUrl.pathname.startsWith("/admin")
                ) {
                    return !!token;
                }
                return true;
            },
        },
    }
);

export const config = {
    matcher: ["/profile/:path*", "/admin/:path*"],
};

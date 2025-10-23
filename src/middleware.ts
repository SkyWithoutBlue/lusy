import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const isAdmin = token?.role === "admin";
        const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

        // Если пользователь пытается зайти на /admin без роли admin
        if (isAdminRoute && !isAdmin) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
                const isProfileRoute = req.nextUrl.pathname.startsWith("/profile");

                // Для админ-панели требуется авторизация
                if (isAdminRoute) {
                    return !!token;
                }

                // Для профиля требуется авторизация
                if (isProfileRoute) {
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

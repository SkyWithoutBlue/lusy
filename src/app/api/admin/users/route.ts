import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        // Проверка авторизации
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json(
                { error: "Требуется авторизация" },
                { status: 401 }
            );
        }

        // Проверка роли администратора
        if (session.user.role !== "admin") {
            return NextResponse.json(
                { error: "Доступ запрещён. Требуются права администратора." },
                { status: 403 }
            );
        }

        // Получение всех пользователей
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                createdAt: true,
                updatedAt: true,
                _count: {
                    select: {
                        sessions: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ users });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Ошибка при получении пользователей" },
            { status: 500 }
        );
    }
}

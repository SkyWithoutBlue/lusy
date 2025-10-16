import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import bcrypt from "bcryptjs";
import { z } from "zod";

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(2).optional(),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const validatedFields = registerSchema.safeParse(body);

        if (!validatedFields.success) {
            return NextResponse.json(
                { error: "Неверные данные" },
                { status: 400 }
            );
        }

        const { email, password, name } = validatedFields.data;

        // Временно для тестирования - имитируем успешную регистрацию
        // TODO: Подключить к базе данных когда она будет настроена
        return NextResponse.json(
            {
                message: "Пользователь успешно создан",
                user: {
                    id: "1",
                    email: email,
                    name: name || null,
                    createdAt: new Date().toISOString(),
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Внутренняя ошибка сервера" },
            { status: 500 }
        );
    }
}

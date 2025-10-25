import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import {
    sendEmail,
    getPasswordResetEmailTemplate,
} from "@/lib/email";

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        // Валидация email
        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { error: "Email обязателен" },
                { status: 400 }
            );
        }

        // Проверяем существование пользователя
        const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
        });

        // Из соображений безопасности всегда возвращаем успешный ответ,
        // даже если пользователь не найден
        if (!user) {
            return NextResponse.json({
                message:
                    "Если пользователь с таким email существует, на него будет отправлено письмо с инструкциями",
            });
        }

        // Генерируем токен восстановления
        const resetToken = crypto.randomBytes(32).toString("hex");
        const hashedToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");

        // Устанавливаем срок действия токена (1 час)
        const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 час

        // Сохраняем токен в базе данных
        await prisma.user.update({
            where: { id: user.id },
            data: {
                resetToken: hashedToken,
                resetTokenExpiry,
            },
        });

        // Создаем URL для сброса пароля
        const resetUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/auth/reset-password?token=${resetToken}`;

        // Получаем шаблон письма
        const emailTemplate = getPasswordResetEmailTemplate(
            resetUrl,
            user.name || undefined
        );

        // Отправляем email
        try {
            await sendEmail({
                to: user.email,
                subject: emailTemplate.subject,
                html: emailTemplate.html,
                text: emailTemplate.text,
            });
        } catch (emailError) {
            console.error("Ошибка отправки email:", emailError);
            return NextResponse.json(
                {
                    error: "Ошибка при отправке письма. Попробуйте позже.",
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            message:
                "Если пользователь с таким email существует, на него будет отправлено письмо с инструкциями",
        });
    } catch (error) {
        console.error("Ошибка при восстановлении пароля:", error);
        return NextResponse.json(
            { error: "Произошла ошибка. Попробуйте позже." },
            { status: 500 }
        );
    }
}


import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import {
    sendEmail,
    getPasswordChangedEmailTemplate,
} from "@/lib/email";

export async function POST(request: NextRequest) {
    try {
        const { token, password } = await request.json();

        // Валидация
        if (!token || typeof token !== "string") {
            return NextResponse.json(
                { error: "Токен обязателен" },
                { status: 400 }
            );
        }

        if (!password || typeof password !== "string") {
            return NextResponse.json(
                { error: "Пароль обязателен" },
                { status: 400 }
            );
        }

        // Валидация пароля
        if (password.length < 6) {
            return NextResponse.json(
                { error: "Пароль должен быть не менее 6 символов" },
                { status: 400 }
            );
        }

        // Хешируем токен для поиска в базе
        const hashedToken = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");

        // Ищем пользователя с действующим токеном
        const user = await prisma.user.findFirst({
            where: {
                resetToken: hashedToken,
                resetTokenExpiry: {
                    gt: new Date(), // Токен не истек
                },
            },
        });

        if (!user) {
            return NextResponse.json(
                {
                    error: "Недействительный или истекший токен. Запросите восстановление пароля заново.",
                },
                { status: 400 }
            );
        }

        // Хешируем новый пароль
        const hashedPassword = await bcrypt.hash(password, 12);

        // Обновляем пароль и удаляем токен
        await prisma.user.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                resetToken: null,
                resetTokenExpiry: null,
            },
        });

        // Отправляем уведомление об успешной смене пароля
        try {
            const emailTemplate = getPasswordChangedEmailTemplate(
                user.name || undefined
            );

            await sendEmail({
                to: user.email,
                subject: emailTemplate.subject,
                html: emailTemplate.html,
                text: emailTemplate.text,
            });
        } catch (emailError) {
            // Не блокируем успешный сброс пароля, если email не отправился
            console.error("Ошибка отправки уведомления:", emailError);
        }

        return NextResponse.json({
            message: "Пароль успешно изменен. Теперь вы можете войти с новым паролем.",
        });
    } catch (error) {
        console.error("Ошибка при сбросе пароля:", error);
        return NextResponse.json(
            { error: "Произошла ошибка. Попробуйте позже." },
            { status: 500 }
        );
    }
}


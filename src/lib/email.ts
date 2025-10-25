import nodemailer from "nodemailer";

// Создаем транспортер для отправки email
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.gmail.com",
        port: parseInt(process.env.EMAIL_PORT || "587"),
        secure: process.env.EMAIL_SECURE === "true", // true для 465, false для других портов
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
};

interface SendEmailOptions {
    to: string;
    subject: string;
    html: string;
    text?: string;
}

// Функция для отправки email
export const sendEmail = async ({
    to,
    subject,
    html,
    text,
}: SendEmailOptions) => {
    try {
        const transporter = createTransporter();

        const info = await transporter.sendMail({
            from: `"${process.env.EMAIL_FROM_NAME || "Lusy Fitness"}" <${
                process.env.EMAIL_FROM || process.env.EMAIL_USER
            }>`,
            to,
            subject,
            text,
            html,
        });

        console.log("Email sent: %s", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
};

// Шаблон письма для восстановления пароля
export const getPasswordResetEmailTemplate = (
    resetUrl: string,
    userName?: string
) => {
    return {
        subject: "Восстановление пароля - Lusy Fitness",
        html: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Восстановление пароля</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #2C2C2C 0%, #4a4a4a 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Lusy Fitness</h1>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <h2 style="margin: 0 0 20px; color: #2C2C2C; font-size: 24px;">
                                Восстановление пароля
                            </h2>

                            ${
                                userName
                                    ? `<p style="margin: 0 0 20px; color: #666; font-size: 16px; line-height: 1.5;">Привет, ${userName}!</p>`
                                    : ""
                            }

                            <p style="margin: 0 0 20px; color: #666; font-size: 16px; line-height: 1.5;">
                                Вы получили это письмо, потому что был сделан запрос на восстановление пароля для вашего аккаунта.
                            </p>

                            <p style="margin: 0 0 30px; color: #666; font-size: 16px; line-height: 1.5;">
                                Нажмите на кнопку ниже, чтобы создать новый пароль:
                            </p>

                            <!-- Button -->
                            <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="center" style="padding: 0 0 30px;">
                                        <a href="${resetUrl}"
                                           style="display: inline-block; padding: 16px 40px; background-color: #2C2C2C; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: bold; transition: background-color 0.3s;">
                                            Сбросить пароль
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p style="margin: 0 0 20px; color: #666; font-size: 14px; line-height: 1.5;">
                                Или скопируйте и вставьте эту ссылку в браузер:
                            </p>

                            <p style="margin: 0 0 30px; padding: 12px; background-color: #f8f8f8; border-radius: 4px; word-break: break-all;">
                                <a href="${resetUrl}" style="color: #2C2C2C; font-size: 14px;">${resetUrl}</a>
                            </p>

                            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; margin-top: 20px;">
                                <p style="margin: 0 0 10px; color: #999; font-size: 14px; line-height: 1.5;">
                                    <strong>Важно:</strong> Ссылка действительна в течение 1 часа.
                                </p>

                                <p style="margin: 0; color: #999; font-size: 14px; line-height: 1.5;">
                                    Если вы не запрашивали восстановление пароля, просто проигнорируйте это письмо. Ваш пароль останется без изменений.
                                </p>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f8f8; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                            <p style="margin: 0 0 10px; color: #999; font-size: 14px;">
                                © ${new Date().getFullYear()} Lusy Fitness. Все права защищены.
                            </p>
                            <p style="margin: 0; color: #999; font-size: 12px;">
                                Это автоматическое письмо. Пожалуйста, не отвечайте на него.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `,
        text: `
Восстановление пароля - Lusy Fitness

${userName ? `Привет, ${userName}!` : "Здравствуйте!"}

Вы получили это письмо, потому что был сделан запрос на восстановление пароля для вашего аккаунта.

Нажмите на ссылку ниже, чтобы создать новый пароль:
${resetUrl}

Ссылка действительна в течение 1 часа.

Если вы не запрашивали восстановление пароля, просто проигнорируйте это письмо. Ваш пароль останется без изменений.

© ${new Date().getFullYear()} Lusy Fitness. Все права защищены.
        `,
    };
};

// Шаблон письма об успешной смене пароля
export const getPasswordChangedEmailTemplate = (userName?: string) => {
    return {
        subject: "Пароль успешно изменен - Lusy Fitness",
        html: `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Пароль изменен</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <tr>
                        <td style="background: linear-gradient(135deg, #2C2C2C 0%, #4a4a4a 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Lusy Fitness</h1>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 40px 30px;">
                            <h2 style="margin: 0 0 20px; color: #2C2C2C; font-size: 24px;">
                                Пароль успешно изменен
                            </h2>

                            ${
                                userName
                                    ? `<p style="margin: 0 0 20px; color: #666; font-size: 16px; line-height: 1.5;">Привет, ${userName}!</p>`
                                    : ""
                            }

                            <p style="margin: 0 0 20px; color: #666; font-size: 16px; line-height: 1.5;">
                                Ваш пароль был успешно изменен. Теперь вы можете войти в систему с новым паролем.
                            </p>

                            <p style="margin: 0; color: #999; font-size: 14px; line-height: 1.5;">
                                Если вы не меняли пароль, немедленно свяжитесь с нами.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color: #f8f8f8; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                            <p style="margin: 0 0 10px; color: #999; font-size: 14px;">
                                © ${new Date().getFullYear()} Lusy Fitness. Все права защищены.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `,
        text: `
Пароль успешно изменен - Lusy Fitness

${userName ? `Привет, ${userName}!` : "Здравствуйте!"}

Ваш пароль был успешно изменен. Теперь вы можете войти в систему с новым паролем.

Если вы не меняли пароль, немедленно свяжитесь с нами.

© ${new Date().getFullYear()} Lusy Fitness. Все права защищены.
        `,
    };
};

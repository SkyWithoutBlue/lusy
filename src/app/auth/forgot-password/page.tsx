"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            const response = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({
                    type: "success",
                    text: data.message,
                });
                setEmail("");
            } else {
                setMessage({
                    type: "error",
                    text: data.error || "Произошла ошибка. Попробуйте снова.",
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Ошибка соединения. Попробуйте позже.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4! py-12!">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#2C2C2C] to-[#4a4a4a] px-8! py-6!">
                        <h1 className="text-2xl font-bold text-white text-center">
                            Восстановление пароля
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="px-8! py-8!">
                        <p className="text-gray-600 text-center mb-6!">
                            Введите email, который вы использовали при
                            регистрации. Мы отправим вам ссылку для сброса
                            пароля.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6!">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2!"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={isLoading}
                                    className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            {message && (
                                <div
                                    className={`p-4! rounded-lg ${
                                        message.type === "success"
                                            ? "bg-green-50 border border-green-200"
                                            : "bg-red-50 border border-red-200"
                                    }`}
                                >
                                    <p
                                        className={`text-sm ${
                                            message.type === "success"
                                                ? "text-green-800"
                                                : "text-red-800"
                                        }`}
                                    >
                                        {message.text}
                                    </p>
                                </div>
                            )}

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full"
                                disabled={isLoading || !email}
                            >
                                {isLoading ? "Отправка..." : "Отправить ссылку"}
                            </Button>
                        </form>

                        <div className="mt-6! text-center space-y-2!">
                            <Link
                                href="/auth/signin"
                                className="block text-sm text-[#2C2C2C] hover:text-gray-700 font-medium transition-colors"
                            >
                                ← Вернуться ко входу
                            </Link>
                            <div className="text-sm text-gray-500">
                                Нет аккаунта?{" "}
                                <Link
                                    href="/auth/signup"
                                    className="text-[#2C2C2C] hover:text-gray-700 font-medium transition-colors"
                                >
                                    Зарегистрироваться
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Card */}
                <div className="mt-6! bg-blue-50 border border-blue-200 rounded-lg p-4!">
                    <div className="flex items-start">
                        <div className="shrink-0">
                            <svg
                                className="h-5 w-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="ml-3!">
                            <h3 className="text-sm font-medium text-blue-800">
                                Важная информация
                            </h3>
                            <div className="mt-2! text-sm text-blue-700">
                                <ul className="list-disc list-inside space-y-1!">
                                    <li>Ссылка действительна 1 час</li>
                                    <li>
                                        Проверьте папку "Спам", если письмо не
                                        пришло
                                    </li>
                                    <li>
                                        Можно запросить новую ссылку в любой
                                        момент
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

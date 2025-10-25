"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";

function ResetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (!token) {
            setMessage({
                type: "error",
                text: "Токен восстановления не найден",
            });
        }
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage({
                type: "error",
                text: "Пароли не совпадают",
            });
            return;
        }

        if (password.length < 6) {
            setMessage({
                type: "error",
                text: "Пароль должен быть не менее 6 символов",
            });
            return;
        }

        setIsLoading(true);
        setMessage(null);

        try {
            const response = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({
                    type: "success",
                    text: data.message,
                });
                setPassword("");
                setConfirmPassword("");

                // Перенаправляем на страницу входа через 3 секунды
                setTimeout(() => {
                    router.push("/auth/signin");
                }, 3000);
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#2C2C2C] to-[#4a4a4a] px-8! py-6!">
                        <h1 className="text-2xl font-bold text-white text-center">
                            Новый пароль
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="px-8! py-8!">
                        {!token ? (
                            <div className="text-center space-y-4!">
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4!">
                                    <p className="text-sm text-red-800">
                                        {message?.text ||
                                            "Недействительная ссылка"}
                                    </p>
                                </div>
                                <Link href="/auth/forgot-password">
                                    <Button variant="primary" size="lg">
                                        Запросить новую ссылку
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <p className="text-gray-600 text-center mb-6!">
                                    Введите новый пароль для вашего аккаунта
                                </p>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700 mb-2!"
                                        >
                                            Новый пароль
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                                disabled={isLoading}
                                                className="w-full px-4! py-3! pr-12! border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                                                placeholder="Минимум 6 символов"
                                                minLength={6}
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                            >
                                                {showPassword ? (
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="confirmPassword"
                                            className="block text-sm font-medium text-gray-700 mb-2!"
                                        >
                                            Подтвердите пароль
                                        </label>
                                        <input
                                            id="confirmPassword"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                            required
                                            disabled={isLoading}
                                            className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                                            placeholder="Повторите пароль"
                                            minLength={6}
                                        />
                                    </div>

                                    {/* Password strength indicator */}
                                    {password && (
                                        <div className="space-y-2!">
                                            <div className="flex items-center text-xs text-gray-600">
                                                <span>Надежность пароля:</span>
                                            </div>
                                            <div className="flex gap-1">
                                                <div
                                                    className={`h-1 flex-1 rounded ${
                                                        password.length >= 6
                                                            ? "bg-green-500"
                                                            : "bg-gray-300"
                                                    }`}
                                                ></div>
                                                <div
                                                    className={`h-1 flex-1 rounded ${
                                                        password.length >= 8
                                                            ? "bg-green-500"
                                                            : "bg-gray-300"
                                                    }`}
                                                ></div>
                                                <div
                                                    className={`h-1 flex-1 rounded ${
                                                        password.length >= 10 &&
                                                        /[A-Z]/.test(
                                                            password
                                                        ) &&
                                                        /[0-9]/.test(password)
                                                            ? "bg-green-500"
                                                            : "bg-gray-300"
                                                    }`}
                                                ></div>
                                            </div>
                                        </div>
                                    )}

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
                                            {message.type === "success" && (
                                                <p className="text-xs text-green-600 mt-1!">
                                                    Перенаправление на страницу
                                                    входа...
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="w-full"
                                        disabled={
                                            isLoading ||
                                            !password ||
                                            !confirmPassword
                                        }
                                    >
                                        {isLoading
                                            ? "Сохранение..."
                                            : "Сохранить новый пароль"}
                                    </Button>
                                </form>

                                <div className="mt-6! text-center">
                                    <Link
                                        href="/auth/signin"
                                        className="text-sm text-[#2C2C2C] hover:text-gray-700 font-medium transition-colors"
                                    >
                                        ← Вернуться ко входу
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Tips Card */}
                {token && (
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
                                    Рекомендации для пароля
                                </h3>
                                <div className="mt-2! text-sm text-blue-700">
                                    <ul className="list-disc list-inside space-y-1!">
                                        <li>Минимум 6 символов</li>
                                        <li>Используйте буквы и цифры</li>
                                        <li>
                                            Добавьте заглавные буквы для большей
                                            надежности
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-gray-600">Загрузка...</div>
                </div>
            }
        >
            <ResetPasswordForm />
        </Suspense>
    );
}

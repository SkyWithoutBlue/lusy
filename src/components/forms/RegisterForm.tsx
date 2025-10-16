"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { registerSchema, type RegisterFormData } from "@/lib/validations";
import Button from "@/components/ui/Button";

export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                    name: data.name,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result.error || "Произошла ошибка при регистрации");
            } else {
                setSuccess(true);
                setTimeout(() => {
                    router.push("/auth/signin");
                }, 2000);
            }
        } catch (error) {
            setError("Произошла ошибка при регистрации");
        } finally {
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="max-w-md mx-auto!">
                <div className="glass rounded-2xl p-8! shadow-2xl text-center">
                    <div className="text-green-600 text-8xl mb-6!">✓</div>
                    <h2 className="text-3xl font-bold mb-4 text-black">
                        Регистрация успешна!
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Вы будете перенаправлены на страницу входа...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto!">
            <div className="glass rounded-2xl p-8! shadow-2xl transform transition-all duration-300 hover:scale-105">
                <div className="text-center mb-8!">
                    <h2 className="text-3xl font-bold text-black mb-4!">
                        Создать аккаунт
                    </h2>
                    <div className="w-full h-1 bg-gradient-to-r from-black to-gray-400 rounded-full mx-auto"></div>
                </div>

                {error && (
                    <div className="mb-6! p-4! bg-red-50 border border-red-200 text-red-700 rounded-xl">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-black mb-2!"
                        >
                            Имя (необязательно)
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            className="w-full px-4! py-3! border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-black transition-all duration-300 text-black placeholder-gray-500"
                            placeholder="Введите ваше имя"
                        />
                        {errors.name && (
                            <p className="mt-2! text-sm text-red-600 font-medium">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-black mb-2!"
                        >
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            id="email"
                            className="w-full px-4! py-3! border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-black transition-all duration-300 text-black placeholder-gray-500"
                            placeholder="Введите ваш email"
                        />
                        {errors.email && (
                            <p className="mt-2! text-sm text-red-600 font-medium">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-black mb-2!"
                        >
                            Пароль
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            id="password"
                            className="w-full px-4! py-3! border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-black transition-all duration-300 text-black placeholder-gray-500"
                            placeholder="Введите пароль"
                        />
                        {errors.password && (
                            <p className="mt-2! text-sm text-red-600 font-medium">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-semibold text-black mb-2!"
                        >
                            Подтвердите пароль
                        </label>
                        <input
                            {...register("confirmPassword")}
                            type="password"
                            id="confirmPassword"
                            className="w-full px-4! py-3! border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-black transition-all duration-300 text-black placeholder-gray-500"
                            placeholder="Подтвердите пароль"
                        />
                        {errors.confirmPassword && (
                            <p className="mt-2! text-sm text-red-600 font-medium">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full group relative overflow-hidden"
                        disabled={isLoading}
                    >
                        <span className="relative z-10">
                            {isLoading
                                ? "Регистрация..."
                                : "Зарегистрироваться"}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Button>
                </form>

                <div className="mt-8! text-center">
                    <p className="text-gray-600">
                        Уже есть аккаунт?{" "}
                        <a
                            href="/auth/signin"
                            className="text-black font-semibold hover:underline transition-all duration-300"
                        >
                            Войти
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

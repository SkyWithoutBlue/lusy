"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginFormData } from "@/lib/validations";
import Button from "@/components/ui/Button";

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (result?.error) {
                setError("Неверный email или пароль");
            } else {
                router.push("/profile");
                router.refresh();
            }
        } catch (error) {
            setError("Произошла ошибка при входе");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="glass rounded-2xl p-8! shadow-2xl transform transition-all duration-300 hover:scale-105">
                <div className="text-center mb-8!">
                    <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4!">
                        Вход в аккаунт
                    </h2>
                    <div className="w-full h-1 bg-gradient-to-r from-[#2C2C2C] to-gray-400 rounded-full mx-auto"></div>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6!">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-[#2C2C2C] mb-2!"
                        >
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            id="email"
                            className="w-full px-4! py-3! border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-[#2C2C2C] transition-all duration-300 text-[#2C2C2C] placeholder-gray-500"
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
                            className="block text-sm font-semibold text-[#2C2C2C] mb-2!"
                        >
                            Пароль
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            id="password"
                            className="w-full px-4! py-3! border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-0 focus:border-[#2C2C2C] transition-all duration-300 text-[#2C2C2C] placeholder-gray-500"
                            placeholder="Введите ваш пароль"
                        />
                        {errors.password && (
                            <p className="mt-2! text-sm text-red-600 font-medium">
                                {errors.password.message}
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
                            {isLoading ? "Вход..." : "Войти"}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Button>
                </form>

                <div className="mt-8! text-center">
                    <p className="text-gray-600">
                        Нет аккаунта?{" "}
                        <a
                            href="/auth/signup"
                            className="text-[#2C2C2C] font-semibold hover:underline transition-all duration-300"
                        >
                            Зарегистрироваться
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

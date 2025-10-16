"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "@/components/ui/Button";
import Header from "@/components/Header/Header";

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/signin");
        }
    }, [status, router]);

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Загрузка...</p>
                </div>
            </div>
        );
    }

    if (status === "unauthenticated") {
        return null;
    }

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            <Header />

            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-6 h-6 bg-gray-200 rotate-45 opacity-60"></div>
                <div className="absolute top-40 right-32 w-4 h-4 bg-gray-300 rotate-12 opacity-70"></div>
                <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-gray-200 rotate-45 opacity-50"></div>
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-gray-300 rotate-12 opacity-60"></div>
            </div>

            {/* Декоративные рамки */}
            <div className="hidden sm:block absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gray-300"></div>
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-gray-300"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-gray-300"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gray-300"></div>

            <div className="relative z-10 pt-32 pb-12! px-4 sm:px-6! lg:px-8!">
                <div className="max-w-4xl mx-auto!">
                    <div className="text-center my-12! mt-32!">
                        <div className="relative inline-block mb-8!">
                            <div className="w-32 h-32 bg-gradient-to-r from-black to-gray-600 rounded-full mx-auto! flex items-center justify-center shadow-2xl">
                                <span className="text-white text-4xl font-bold">
                                    {session?.user?.name?.charAt(0) ||
                                        session?.user?.email?.charAt(0) ||
                                        "U"}
                                </span>
                            </div>
                            <div
                                className="absolute -top-4 -right-4 w-8 h-8 border-4 border-gray-200 rounded-full animate-spin opacity-40"
                                style={{ animationDuration: "15s" }}
                            ></div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-200 rotate-45 opacity-60"></div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4!">
                            Добро пожаловать,{" "}
                            {session?.user?.name || "Пользователь"}!
                        </h1>
                        <div className="w-full h-1 bg-gradient-to-r from-black to-gray-400 rounded-full mx-auto! mb-4!"></div>
                        <p className="text-gray-600 text-lg">
                            {session?.user?.email}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Информация о профиле */}
                        <div className="glass rounded-2xl p-8! shadow-2xl transform transition-all duration-300 hover:scale-105">
                            <h2 className="text-2xl font-bold text-black mb-6!">
                                Информация о профиле
                            </h2>
                            <div className="space-y-6!">
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2!">
                                        Имя
                                    </label>
                                    <div className="p-3! bg-white/50 rounded-xl border border-gray-200">
                                        <p className="text-black font-medium">
                                            {session?.user?.name ||
                                                "Не указано"}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-black mb-2!">
                                        Email
                                    </label>
                                    <div className="p-3! bg-white/50 rounded-xl border border-gray-200">
                                        <p className="text-black font-medium">
                                            {session?.user?.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Управление аккаунтом */}
                        <div className="glass rounded-2xl p-8! shadow-2xl transform transition-all duration-300 hover:scale-105">
                            <h2 className="text-2xl font-bold text-black mb-6!">
                                Управление аккаунтом
                            </h2>
                            <div className="space-y-4!">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full group relative overflow-hidden"
                                >
                                    <span className="relative z-10">
                                        Редактировать профиль
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full group relative overflow-hidden"
                                >
                                    <span className="relative z-10">
                                        Изменить пароль
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </Button>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full group relative overflow-hidden"
                                    onClick={handleSignOut}
                                >
                                    <span className="relative z-10">
                                        Выйти из аккаунта
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

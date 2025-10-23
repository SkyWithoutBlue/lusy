"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type User = {
    id: string;
    email: string;
    name: string | null;
    role: string;
    createdAt: string;
    updatedAt: string;
    _count: {
        sessions: number;
    };
};

export default function AdminPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/signin");
        }
    }, [status, router]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/api/admin/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsers(data.users);
            } catch (err) {
                setError("Ошибка при загрузке пользователей");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (status === "authenticated") {
            fetchUsers();
        }
    }, [status]);

    if (status === "loading" || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F5F1EE]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9A8A88] mx-auto"></div>
                    <p className="mt-4 text-[#9A8A88]">Загрузка...</p>
                </div>
            </div>
        );
    }

    if (status === "unauthenticated") {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#F5F1EE] py-12! px-4! sm:px-6! lg:px-8!">
            <div className="max-w-7xl mx-auto!">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-[#9A8A88] px-6! py-4!">
                        <h1 className="text-2xl font-bold text-white">
                            Панель администратора
                        </h1>
                        <p className="text-white/80 mt-1!">
                            Управление пользователями
                        </p>
                    </div>

                    <div className="p-6!">
                        {error && (
                            <div className="mb-4! bg-red-50 border border-red-200 text-red-700 px-4! py-3! rounded">
                                {error}
                            </div>
                        )}

                        <div className="mb-4!">
                            <p className="text-gray-600">
                                Всего пользователей:{" "}
                                <span className="font-bold text-[#9A8A88]">
                                    {users.length}
                                </span>
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6! py-3! text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-6! py-3! text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6! py-3! text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Имя
                                        </th>
                                        <th className="px-6! py-3! text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Роль
                                        </th>
                                        <th className="px-6! py-3! text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Дата регистрации
                                        </th>
                                        <th className="px-6! py-3! text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Активные сессии
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => (
                                        <tr
                                            key={user.id}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-500">
                                                {user.id.substring(0, 8)}...
                                            </td>
                                            <td className="px-6! py-4! whitespace-nowrap text-sm font-medium text-gray-900">
                                                {user.email}
                                            </td>
                                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-500">
                                                {user.name || "—"}
                                            </td>
                                            <td className="px-6! py-4! whitespace-nowrap text-sm">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                    user.role === "admin"
                                                        ? "bg-purple-100 text-purple-800"
                                                        : "bg-gray-100 text-gray-800"
                                                }`}>
                                                    {user.role === "admin" ? "Администратор" : "Пользователь"}
                                                </span>
                                            </td>
                                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-500">
                                                {new Date(
                                                    user.createdAt
                                                ).toLocaleDateString("ru-RU", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </td>
                                            <td className="px-6! py-4! whitespace-nowrap text-sm text-gray-500">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    {user._count.sessions}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {users.length === 0 && !loading && (
                                <div className="text-center py-12!">
                                    <p className="text-gray-500">
                                        Пользователей пока нет
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-6! bg-white rounded-lg shadow-lg p-6!">
                    <h2 className="text-xl font-bold text-[#9A8A88] mb-4">
                        Информация
                    </h2>
                    <div className="space-y-2! text-sm text-gray-600">
                        <p>
                            • Вы вошли как:{" "}
                            <span className="font-medium">
                                {session?.user?.email}
                            </span>
                        </p>
                        <p>• Все пользователи отображаются в таблице выше</p>
                        <p>
                            • Данные обновляются автоматически при загрузке
                            страницы
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

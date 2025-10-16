"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ProfileIcon() {
    const { data: session, status } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
        setIsOpen(false);
    };

    if (status === "loading") {
        return (
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        );
    }

    if (status === "unauthenticated") {
        return (
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-2 p-2 rounded-full hover:scale-105 transition-all duration-300 group"
                >
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </div>
                    <svg
                        className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-5! w-48 glass rounded-2xl shadow-2xl border border-gray-200 py-2! z-50 transform transition-all duration-300 scale-100 bg-white!">
                        <div className="px-6! py-4! border-b border-gray-200">
                            <p className="text-sm font-semibold text-black">
                                Гость
                            </p>
                        </div>

                        <Link
                            href="/auth/signin"
                            className="block px-6! py-3! text-sm font-medium text-black hover:bg-white/50 transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Вход
                        </Link>

                        <Link
                            href="/auth/signup"
                            className="block px-6! py-3! text-sm font-medium text-black hover:bg-white/50 transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Регистрация
                        </Link>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-3! p-2! gap-6! rounded-full hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
                <div className="w-10 h-10 bg-gradient-to-r from-black to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white text-sm font-bold">
                        {session?.user?.name?.charAt(0) ||
                            session?.user?.email?.charAt(0) ||
                            "U"}
                    </span>
                </div>
                <span className="text-sm font-semibold text-black hidden sm:block">
                    {session?.user?.name || "Профиль"}
                </span>
                <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2! z-50 transform transition-all duration-300 scale-100">
                    <div className="px-6! py-4! border-b border-gray-200">
                        <p className="text-sm font-semibold text-black">
                            {session?.user?.name || "Пользователь"}
                        </p>
                        <p className="text-xs text-gray-600 mt-1!">
                            {session?.user?.email}
                        </p>
                    </div>

                    <Link
                        href="/profile"
                        className="block px-6! py-3! text-sm font-medium text-black hover:bg-white/50 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Мой профиль
                    </Link>

                    <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-6! py-3! text-sm font-medium text-black hover:bg-white/50 transition-all duration-300 cursor-pointer"
                    >
                        Выйти
                    </button>
                </div>
            )}
        </div>
    );
}

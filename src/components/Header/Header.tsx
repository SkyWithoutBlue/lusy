"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Button from "@/components/ui/Button";
import CartIcon from "@/components/ui/CartIcon";
import { ProfileIcon } from "@/components/ui";
import { navigationItems } from "@/constants/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
                <div className="mx-auto! max-w-7xl px-6! lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0">
                            <div className="flex items-center space-x-3">
                                <Link
                                    href="/"
                                    className="text-1xl text-center font-bold text-[#2C2C2C] tracking-tight"
                                >
                                    Lyudmila
                                    <br />
                                    Chipizubova
                                </Link>
                            </div>
                        </div>
                        <Navigation items={navigationItems} />

                        <div className="hidden lg:flex items-center justify-center space-x-4! gap-6!">
                            <CartIcon />
                            <ProfileIcon />
                        </div>

                        <div className="lg:hidden flex items-center space-x-2! gap-3!">
                            <CartIcon />
                            <ProfileIcon />
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-[#2C2C2C] hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-0"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">
                                    {isMenuOpen
                                        ? "Close main menu"
                                        : "Open main menu"}
                                </span>
                                <div className="relative w-6 h-6">
                                    <span
                                        className={`absolute top-1/2 left-1/2 h-0.5 w-5 bg-current transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                                            isMenuOpen
                                                ? "rotate-45 -translate-y-1/2"
                                                : "-translate-y-1.5"
                                        }`}
                                    ></span>
                                    <span
                                        className={`absolute top-1/2 left-1/2 h-0.5 w-5 bg-current transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                                            isMenuOpen
                                                ? "opacity-0"
                                                : "opacity-100 -translate-y-1/2"
                                        }`}
                                    ></span>
                                    <span
                                        className={`absolute top-1/2 left-1/2 h-0.5 w-5 bg-current transition-all duration-300 ease-in-out transform -translate-x-1/2 ${
                                            isMenuOpen
                                                ? "-rotate-45 -translate-y-1/2"
                                                : "translate-y-1.5"
                                        }`}
                                    ></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-6 py-4 bg-white border-t border-gray-100 shadow-lg">
                            <Navigation
                                items={navigationItems}
                                isMobile={true}
                                onItemClick={() => setIsMenuOpen(false)}
                            />
                            <div className="p-6! pt-6!">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full group relative overflow-hidden"
                                >
                                    <span className="relative z-10">
                                        Записаться
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

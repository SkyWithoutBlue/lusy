"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Button from "@/components/ui/Button";
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
                                    className="text-3xl font-bold text-black tracking-tight"
                                >
                                    Lusy.
                                </Link>
                            </div>
                        </div>
                        <Navigation items={navigationItems} />

                        <div className="hidden lg:flex items-center">
                            <Button variant="secondary" size="sm">
                                Записаться
                            </Button>
                        </div>

                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-0"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">
                                    {isMenuOpen
                                        ? "Close main menu"
                                        : "Open main menu"}
                                </span>
                                <div className="relative w-6 h-6">
                                    <span
                                        className={`absolute left-0 top-1/2 h-0.5 w-6 bg-current -translate-y-1/2 transition-transform duration-300 ease-in-out origin-center ${
                                            isMenuOpen
                                                ? "rotate-45"
                                                : "-translate-y-[6px]"
                                        }`}
                                    ></span>
                                    <span
                                        className={`absolute left-0 top-1/2 h-0.5 w-6 bg-current -translate-y-1/2 transition-opacity duration-200 ease-in-out ${
                                            isMenuOpen
                                                ? "opacity-0"
                                                : "opacity-100"
                                        }`}
                                    ></span>
                                    <span
                                        className={`absolute left-0 top-1/2 h-0.5 w-6 bg-current -translate-y-1/2 transition-transform duration-300 ease-in-out origin-center ${
                                            isMenuOpen
                                                ? "-rotate-45"
                                                : "translate-y-[6px]"
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
                                    className="w-full"
                                    style={{ backgroundColor: "#9A8A88" }}
                                >
                                    Записаться
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

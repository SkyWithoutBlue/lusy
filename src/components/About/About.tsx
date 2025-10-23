"use client";

import Image from "next/image";
import Link from "next/link";
import DecorativeElements from "@/components/ui/DecorativeElements";
import Button from "@/components/ui/Button";

const aboutDecorativeElements = [
    {
        type: "square" as const,
        position: "top-left" as const,
        size: "6rem",
        animation: "pulse" as const,
        className: "top-16 left-16 rotate-12",
    },
    {
        type: "square" as const,
        position: "top-right" as const,
        size: "4rem",
        animation: "spin" as const,
        animationDuration: "25s",
        className: "top-32 right-20 -rotate-12",
    },
    {
        type: "square" as const,
        position: "bottom-left" as const,
        size: "5rem",
        animation: "bounce" as const,
        className: "bottom-20 left-12 rotate-12",
    },
    {
        type: "square" as const,
        position: "bottom-right" as const,
        size: "3rem",
        animation: "pulse" as const,
        animationDelay: "1s",
        className: "bottom-32 right-16 -rotate-12",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative py-16! sm:py-20! lg:py-28! bg-white overflow-hidden"
        >
            <DecorativeElements elements={aboutDecorativeElements} />

            <div className="relative z-10 max-w-7xl mx-auto! px-6! sm:px-8!">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8! lg:gap-16! items-center!">
                    <div className="lg:col-span-7 order-1 lg:order-1">
                        <div className="space-y-8!">
                            <div className="space-y-4!">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] leading-tight">
                                    Обо мне
                                </h2>
                                <div className="w-full h-1 bg-gradient-to-r from-[#2C2C2C] to-gray-400 rounded-full"></div>
                            </div>
                            <div className="space-y-6! text-[#6B6B6B] text-lg leading-relaxed">
                                <p>
                                    Моя миссия — помочь людям раскрыть свой
                                    потенциал через{" "}
                                    <span className="text-[#2C2C2C] font-semibold">
                                        движение, осознанность и баланс
                                    </span>
                                    . Я верю, что тренировки - это не просто
                                    физическая активность, а путь к внутренней
                                    силе и гармонии.
                                </p>

                                <div className="space-y-4!">
                                    <p className="text-[#2C2C2C] font-semibold text-xl">
                                        Мои направления:
                                    </p>

                                    <p>
                                        <span className="text-[#2C2C2C] font-semibold">
                                            Кросс-тренинг
                                        </span>{" "}
                                        — система, где сочетаются сила,
                                        выносливость, гибкость, скорость и
                                        координация. Такие тренировки развивают
                                        вас всесторонне и делают функционально
                                        сильными не только в зале, но и в жизни.
                                    </p>

                                    <p>
                                        <span className="text-[#2C2C2C] font-semibold">
                                            Фулл-бади тренировки
                                        </span>{" "}
                                        — формат, при котором за одно занятие
                                        задействуются все основные группы мышц.
                                        Подходит для женщин, людей с
                                        ограниченным временем, а также для фазы
                                        сжигания жира или поддержания тонуса.
                                    </p>

                                    <p>
                                        Мои программы подходят для мужчин и
                                        женщин любого уровня подготовки. С нуля
                                        вы сможете научиться подтягиваться,
                                        отжиматься и выполнять сложные
                                        функциональные комплексы.
                                    </p>

                                    <p>
                                        В персональном формате вы получите
                                        индивидуальный план тренировок и
                                        питания, который приведёт именно к вашей
                                        цели.
                                    </p>
                                </div>

                                <div className="space-y-4!">
                                    <p className="text-[#2C2C2C] font-semibold text-xl">
                                        Мой подход:
                                    </p>

                                    <p>
                                        Для меня спорт — это не работа, а образ
                                        жизни. Я живу тем, чему учу: питание,
                                        регулярные тренировки, восстановление и
                                        позитивное мышление.
                                    </p>

                                    <p className="text-[#2C2C2C] font-semibold">
                                        Вместе мы сделаем ваше тело сильным, а
                                        дух — непоколебимым. Начни путь к лучшей
                                        версии себя уже сегодня!
                                    </p>
                                </div>
                            </div>

                            {/* Кнопки */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4!">
                                <Link href="/story">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="group relative overflow-hidden"
                                    >
                                        <span className="relative z-10">
                                            Моя история
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    </Button>
                                </Link>
                                <Button variant="secondary" size="lg">
                                    Связаться со мной
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 order-2 lg:order-2">
                        <div className="relative">
                            <div className="relative group">
                                <div className="relative bg-white rounded-2xl p-4 sm:p-6 shadow-xl transform transition-transform duration-500 mx-auto">
                                    <div className="relative overflow-hidden rounded-2xl max-h-[380px] sm:max-h-[480px] lg:max-h-[700px]">
                                        <Image
                                            src="/lusy-no-bg-preview.png"
                                            alt="Lusy"
                                            width={600}
                                            height={700}
                                            className="object-cover w-full h-auto mx-auto"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute -top-8 -right-8 w-16 h-16 border-4 border-gray-200 rounded-full animate-spin opacity-40"
                                style={{ animationDuration: "20s" }}
                            ></div>
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-3 border-gray-300 rounded-full animate-pulse opacity-50"></div>
                            <div className="absolute top-1/4 -left-3 w-6 h-6 bg-gray-200 rotate-45 opacity-60"></div>
                            <div className="absolute bottom-1/3 -right-2 w-4 h-4 bg-gray-300 rotate-12 opacity-70"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gray-300"></div>
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-gray-300"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-gray-300"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gray-300"></div>
        </section>
    );
}

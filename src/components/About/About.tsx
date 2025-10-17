"use client";

import Image from "next/image";
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

const achievements = [
    {
        number: "8+",
        label: "лет опыта",
        description: "в кросс-тренинге и фитнесе",
    },
    {
        number: "500+",
        label: "довольных клиентов",
        description: "достигли своих целей",
    },
    {
        number: "24/7",
        label: "здоровый образ жизни",
        description: "мой образ жизни и философия",
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
                                    Обо мне
                                </h2>
                                <div className="w-full h-1 bg-gradient-to-r from-black to-gray-400 rounded-full"></div>
                            </div>
                            <div className="space-y-6! text-gray-700 text-lg leading-relaxed">
                                <p>
                                    Привет! Меня зовут{" "}
                                    <span className="text-black font-semibold">
                                        Людмила Чипизубова
                                    </span>
                                    , и я персональный тренер с{" "}
                                    <span className="text-black font-semibold">
                                        8-летним стажем{" "}
                                    </span>
                                    в области кросс-тренинга и фитнеса.
                                </p>

                                <p>
                                    Моя страсть к здоровому образу жизни
                                    началась много лет назад, и с тех пор я
                                    помогаю людям раскрывать их потенциал через
                                    правильные тренировки и сбалансированное
                                    питание.
                                </p>

                                <p>
                                    Я специализируюсь на{" "}
                                    <span className="text-black font-semibold">
                                        кросс-тренинге
                                    </span>{" "}
                                    — это не просто тренировки, это философия
                                    жизни. Кросс-тренинг объединяет силу,
                                    выносливость, гибкость и координацию,
                                    создавая гармонично развитое тело.
                                </p>

                                <p>
                                    <span className="text-black font-semibold">
                                        Здоровый образ жизни
                                    </span>{" "}
                                    — это не просто моя работа, это мой образ
                                    жизни. Я практикую то, что проповедую:
                                    правильное питание, регулярные тренировки,
                                    достаточный сон и позитивное мышление.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6! py-8!">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="glass rounded-xl p-2! text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    >
                                        <div className="text-3xl sm:text-4xl font-bold text-black mb-2!">
                                            {achievement.number}
                                        </div>
                                        <div className="text-lg font-semibold text-black mb-1!">
                                            {achievement.label}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {achievement.description}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Кнопки */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4!">
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
                                <Button variant="secondary" size="lg">
                                    Связаться со мной
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 order-2 lg:order-2">
                        <div className="relative">
                            <div className="relative group">
                                <div className="relative bg-white rounded-2xl p-2! shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                                    <div className="relative overflow-hidden rounded-xl mt-12! pt-12! mb-12!">
                                        <Image
                                            src="/lusy-top.png"
                                            alt="Людмила Чипизубова - персональный тренер"
                                            width={500}
                                            height={500}
                                            className="object-cover w-full h-auto max-h-[650px]"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 right-4 w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
                                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
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

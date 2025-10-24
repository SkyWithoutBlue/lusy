"use client";

import { useState } from "react";
import DecorativeElements from "@/components/ui/DecorativeElements";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        id: "1",
        question: "Я ни разу не учвствовал в онлайн-марафоне, Он мне подойдет?",
        answer: "Да, конечно! Благодаря менеджеру и постоянной поддержке тренера в чате, вы сможете пройти марафон и получить результат.",
    },
    {
        id: "2",
        question: "Где будет проходить марафон?",
        answer: "Марафон будет проходить в закрытом чате VKontakte. Перед началом марафона наш менеджер добавит вас в чат. Там вы сможете задавать вопросы, общаться с другими участниками и получать поддержку от тренера.",
    },
    {
        id: "3",
        question: "В какое время будет проходить марафон?",
        answer: "Людмила будет тренироваться вместе с вами, предварительно анонсируя эфир, а так же сохранять запись эфира. Вы сможете выполнить тренировку в удобное для вас время, главное чтобы вы выполнили их в течение дня.",
    },
    {
        id: "4",
        question: "Подойдут ли тренировки для новичков?",
        answer: "Да! Мои программы адаптированы для любого уровня подготовки. Если вы никогда не занимались спортом — начнём с базовых движений и постепенно будем усложнять нагрузку. Главное — ваше желание меняться.",
    },
    {
        id: "5",
        question: "Что нужно для тренировок дома?",
        answer: "Для домашних тренировок достаточно минимального инвентаря: коврик, гантели или резиновые петли. Многие упражнения можно выполнять с собственным весом тела.",
    },
    {
        id: "6",
        question: "Есть ли органичения по возрасту и здоровью?",
        answer: "Участник должен быть не младше 18 лет. Если есть проблемы со здоровьем, то лучше проконсультироваться с врачом.",
    },
    {
        id: "7",
        question: "Мне не нужно худеть. Я хочу привести свое тело в форму. Нарастить мышечную массу. Подойдет ли онлайн-марафон для меня?",
        answer: "Да! в марафоне мы будем работать и над мышшечной силой.",
    },
    {
        id: "8",
        question: "Могу ли я купить доступ к марафону для другого человека?",
        answer: "Да! Оплачивать может любой человек, но данные нужно указать именно того, кому дарите доступ.",
    },
];

const faqDecorativeElements = [
    {
        type: "square" as const,
        position: "top-right" as const,
        size: "5rem",
        className: "top-12 right-12 rotate-12",
        animation: "spin" as const,
        animationDuration: "20s",
    },
    {
        type: "square" as const,
        position: "bottom-left" as const,
        size: "4rem",
        className: "bottom-16 left-16 -rotate-12",
        animation: "pulse" as const,
    },
];

export default function FAQ() {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <section
            id="faq"
            className="relative py-16! sm:py-20! lg:py-28! bg-[#F8F8F8] overflow-hidden"
        >
            <DecorativeElements elements={faqDecorativeElements} />

            <div className="relative z-10 max-w-4xl! mx-auto! px-6! sm:px-8!">
                <div className="text-center mb-12! sm:mb-16!">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] tracking-tight">
                        Часто задаваемые вопросы
                    </h2>
                    <p className="mt-4 text-[#6B6B6B] sm:text-lg">
                        Ответы на самые популярные вопросы о тренировках
                    </p>
                </div>

                <div className="space-y-4! ">
                    {faqItems.map((item, index) => {
                        const isOpen = openItems.has(item.id);
                        return (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
                                }}
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full cursor-pointer text-left px-6! sm:px-8! py-5! sm:py-6! flex justify-between items-center gap-4! focus:outline-none focus:ring-0"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg sm:text-xl font-semibold text-[#2C2C2C] pr-4!">
                                        {item.question}
                                    </span>
                                    <div
                                        className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#F8F8F8] transition-all duration-300 ${
                                            isOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                    >
                                        <svg
                                            className="w-5 h-5 text-[#2C2C2C]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        isOpen
                                            ? "max-h-96 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="px-6! sm:px-8! pb-6! pt-2!">
                                        <div className="w-full h-px bg-linear-to-r from-transparent via-[#E5E5E5] to-transparent mb-4!"></div>
                                        <p className="text-[#6B6B6B] leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12! text-center">
                    <p className="text-[#6B6B6B] mb-4!">
                        Не нашли ответ на свой вопрос?
                    </p>
                    <a
                        href="https://t.me/NikitaChebotov"
                        className="inline-block px-8! py-3! bg-[#2C2C2C] text-white font-semibold rounded-xl hover:bg-[#1A1A1A] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Связаться с менеджером
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}

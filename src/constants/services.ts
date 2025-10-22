export interface Service {
    id: string;
    title: string;
    description: string;
    priceFrom?: string;
    price: number;
}

export const services: Service[] = [
    {
        id: "video-course",
        title: "Видео курс по похудению",
        description:
            "Видео курс по похудению на 30 дней. Включает в себя 30 видео уроков с упражнениями и рецептами здоровой пищи.",
        priceFrom: "3 500₽",
        price: 3500,
    },
    {
        id: "group",
        title: "Онлайн-марафон",
        description:
            "20 тренировок в прямом эфире. (Интервальные, круговые и силовые)",
        priceFrom: "от 999₽",
        price: 999,
    },
    {
        id: "personal",
        title: "Персональные тренировки",
        description:
            "Индивидуальные занятия для достижения ваших целей: сила, рельеф, выносливость.",
        priceFrom: "от 2 500₽",
        price: 2500,
    },
];

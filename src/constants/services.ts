export interface Service {
    id: string;
    title: string;
    description: string;
    priceFrom?: string;
    price: number;
}

export const services: Service[] = [
    {
        id: "personal",
        title: "Персональные тренировки",
        description:
            "Индивидуальные занятия для достижения ваших целей: сила, рельеф, выносливость.",
        priceFrom: "от 2 500₽",
        price: 2500,
    },
    {
        id: "online",
        title: "Онлайн-сопровождение",
        description:
            "План тренировок и питания, контроль прогресса и обратная связь каждую неделю.",
        priceFrom: "от 3 500₽/мес",
        price: 3500,
    },
    {
        id: "group",
        title: "Групповые занятия",
        description:
            "Эффективные тренировки в небольшой группе с правильной техникой и мотивацией.",
        priceFrom: "от 900₽",
        price: 900,
    },
];

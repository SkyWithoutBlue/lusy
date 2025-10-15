export interface Advantage {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export const advantages: Advantage[] = [
    {
        id: "personal-approach",
        title: "Персональный подход",
        description:
            "Каждая программа тренировок разрабатывается индивидуально с учетом ваших целей, физических особенностей и образа жизни.",
        icon: "🎯",
    },
    {
        id: "professional-experience",
        title: "Профессиональный опыт",
        description:
            "Более 8 лет опыта в фитнесе, сертифицированный тренер с глубокими знаниями анатомии и физиологии.",
        icon: "💪",
    },
    {
        id: "proven-results",
        title: "Проверенные результаты",
        description:
            "Более 200 довольных клиентов, которые достигли своих целей и изменили свою жизнь к лучшему.",
        icon: "🏆",
    },
    {
        id: "flexible-schedule",
        title: "Гибкий график",
        description:
            "Тренировки в удобное для вас время, онлайн-сопровождение 24/7 и адаптация под ваш ритм жизни.",
        icon: "⏰",
    },
];

import Image from "next/image";

type Service = {
    id: string;
    title: string;
    description: string;
    priceFrom?: string;
};

const services: Service[] = [
    {
        id: "personal",
        title: "Персональные тренировки",
        description:
            "Индивидуальные занятия для достижения ваших целей: сила, рельеф, выносливость.",
        priceFrom: "от 2 500₽",
    },
    {
        id: "online",
        title: "Онлайн-сопровождение",
        description:
            "План тренировок и питания, контроль прогресса и обратная связь каждую неделю.",
        priceFrom: "от 3 500₽/мес",
    },
    {
        id: "group",
        title: "Групповые занятия",
        description:
            "Эффективные тренировки в небольшой группе с правильной техникой и мотивацией.",
        priceFrom: "от 900₽",
    },
    {
        id: "group",
        title: "Групповые занятия",
        description:
            "Эффективные тренировки в небольшой группе с правильной техникой и мотивацией.",
        priceFrom: "от 900₽",
    },
    {
        id: "group",
        title: "Групповые занятия",
        description:
            "Эффективные тренировки в небольшой группе с правильной техникой и мотивацией.",
        priceFrom: "от 900₽",
    },
    {
        id: "group",
        title: "Групповые занятия",
        description:
            "Эффективные тренировки в небольшой группе с правильной техникой и мотивацией.",
        priceFrom: "от 900₽",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative py-16 sm:py-20 lg:py-28 bg-white pb-6!"
        >
            <div className="absolute inset-0 pointer-events-none opacity-5 ">
                <div className="absolute top-8 left-8 w-16 h-16 border-2 border-black rotate-12"></div>
                <div className="absolute bottom-12 right-12 w-20 h-20 border-2  border-black -rotate-12"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto! px-6! sm:px-8">
                <div className="text-center max-w-2xl mx-auto! pt-12!">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                        Мои услуги
                    </h2>
                    <p className="mt-4 text-gray-700 sm:text-lg">
                        Выберите формат, который подойдёт именно вам. Все
                        программы нацелены на здоровый и устойчивый результат.
                    </p>
                </div>

                <div className="mt-20 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service) => (
                        <article
                            key={service.id}
                            className="group relative bg-white p-4! rounded-2xl shadow-xl border border-gray-100 hover:border-gray-200 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl will-change-transform"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none"></div>
                            {/* minimal highlight sweep */}
                            <div className="pointer-events-none absolute -inset-x-20 -top-px h-px bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 translate-x-[-40%] group-hover:opacity-100 group-hover:translate-x-[40%] transition-all duration-700 ease-out"></div>
                            <div className="p-6 sm:p-8">
                                <h3 className="text-xl font-semibold text-black">
                                    {service.title}
                                </h3>
                                {service.priceFrom && (
                                    <div
                                        className="mt-2 inline-flex items-center px-3! py-1! rounded-full text-xs font-semibold transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
                                        style={{
                                            backgroundColor: "#eee",
                                            color: "#444",
                                        }}
                                    >
                                        {service.priceFrom}
                                    </div>
                                )}
                                <p className="my-4! text-gray-700 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <button
                                        className="group relative px-4! py-2! bg-black text-white font-semibold rounded-full transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-0 cursor-pointer"
                                        style={{
                                            WebkitTapHighlightColor:
                                                "transparent",
                                        }}
                                    >
                                        Записаться
                                        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    </button>
                                    <button
                                        className="px-4! py-2! bg-transparent border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-transform duration-300 focus:outline-none focus:ring-0 cursor-pointer"
                                        style={{
                                            WebkitTapHighlightColor:
                                                "transparent",
                                        }}
                                    >
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

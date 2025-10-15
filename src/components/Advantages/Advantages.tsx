import DecorativeElements from "@/components/ui/DecorativeElements";
import { advantages } from "@/constants/advantages";

const advantagesDecorativeElements = [
    {
        type: "circle" as const,
        position: "top-right" as const,
        size: "6rem",
        animation: "spin" as const,
        animationDuration: "40s",
        className: "top-16 right-16",
    },
    {
        type: "square" as const,
        position: "bottom-left" as const,
        size: "5rem",
        animation: "pulse" as const,
        animationDelay: "2s",
        className: "bottom-20 left-20 rotate-45",
    },
];

export default function Advantages() {
    return (
        <section
            id="advantages"
            className="relative py-16 sm:py-20 lg:py-28 bg-gray-50"
        >
            <DecorativeElements elements={advantagesDecorativeElements} />

            <div className="relative z-10 max-w-7xl mx-auto! px-6 sm:px-8">
                <div className="text-center max-w-3xl mx-auto! mb-16!">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-6! pt-6!">
                        Почему выбирают именно нас
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Мы не просто тренируем — мы создаем долгосрочные
                        изменения в вашей жизни, помогая достичь гармонии между
                        телом и духом.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((advantage, index) => (
                        <div
                            key={advantage.id}
                            className="group relative bg-white p-8! rounded-2xl shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 rounded-2xl pointer-events-none"></div>
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

                            <div className="relative z-10">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {advantage.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-black mb-4! group-hover:text-gray-800 transition-colors">
                                    {advantage.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                                    {advantage.description}
                                </p>
                            </div>
                            <div className="absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12! pb-12! text-center">
                    <div className="bg-white rounded-2xl p-8! shadow-lg border border-gray-100 max-w-2xl mx-auto!">
                        <h3 className="text-2xl font-bold text-black mb-4!">
                            Готовы начать свой путь к лучшей версии себя?
                        </h3>
                        <p className="text-gray-700 mb-6!">
                            Присоединяйтесь к сотням людей, которые уже изменили
                            свою жизнь с нами
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8! py-3! bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-0 cursor-pointer">
                                Записаться на консультацию
                            </button>
                            <button className="px-8! py-3! bg-transparent border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-0 cursor-pointer">
                                Узнать больше
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

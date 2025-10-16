import Image from "next/image";
import Button from "@/components/ui/Button";
import DecorativeElements from "@/components/ui/DecorativeElements";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

const heroDecorativeElements = [
    {
        type: "square" as const,
        position: "top-left" as const,
        size: "8rem",
        animation: "spin" as const,
        animationDuration: "20s",
        className: "top-20 left-20",
    },
    {
        type: "square" as const,
        position: "top-right" as const,
        size: "6rem",
        animation: "pulse" as const,
        className: "top-40 right-32 rotate-12",
    },
    {
        type: "square" as const,
        position: "bottom-left" as const,
        size: "4rem",
        animation: "bounce" as const,
        className: "bottom-32 left-1/4",
    },
    {
        type: "square" as const,
        position: "bottom-right" as const,
        size: "5rem",
        animation: "pulse" as const,
        animationDelay: "1s",
        className: "bottom-20 right-20 rotate-12",
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
        >
            <div className="absolute inset-0 bg-white">
                <DecorativeElements elements={heroDecorativeElements} />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center h-full py-6 sm:py-10">
                    <div className="lg:col-span-7 lg:order-2 order-2">
                        <div className="space-y-8 mx-auto max-w-2xl lg:max-w-none text-center lg:text-left">
                            <div className="overflow-hidden">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-4! transform translate-y-0 opacity-100 transition-all duration-1000">
                                    Сильное тело. Уверенный дух.
                                    <span
                                        className="block mt-2!"
                                        style={{ color: "#9A8A88" }}
                                    >
                                        Твоя лучшая версия — вместе со мной.
                                    </span>
                                </h1>
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed transform translate-y-0 opacity-100 transition-all duration-1000 delay-300">
                                    Тренировки Людмилы Чипизубовой — это больше,
                                    чем фитнес. Это путь к силе, гармонии и
                                    уверенности в каждом движении. Персональный
                                    подход, реальный результат и энергия,
                                    которая меняет жизнь.
                                </p>
                            </div>
                            <div className="flex flex-col mt-4! sm:flex-row gap-4 transform translate-y-0 opacity-100 transition-all duration-1000 delay-500 justify-center lg:justify-start items-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="group relative overflow-hidden"
                                >
                                    <span className="relative z-10">
                                        Узнать больше
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </Button>
                                <Button variant="secondary" size="lg">
                                    Связаться со мной
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 lg:order-1 order-1 flex justify-center lg:justify-start">
                        <div className="relative max-w-[340px] sm:max-w-[420px] lg:max-w-none mx-auto mb-6 sm:mb-8 lg:mb-0">
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
                                className="hidden lg:block absolute top-0 right-0 w-24 h-24 border-2 border-gray-300 rounded-full -translate-y-16 translate-x-12 animate-spin"
                                style={{ animationDuration: "30s" }}
                            ></div>
                            <div
                                className="hidden lg:block absolute bottom-0 left-0 w-20 h-20 border-2 border-gray-400 rounded-full translate-y-12 -translate-x-12 animate-spin"
                                style={{
                                    animationDuration: "25s",
                                    animationDirection: "reverse",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollIndicator />
            <div className="hidden sm:block absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gray-300"></div>
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-gray-300"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-gray-300"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gray-300"></div>
        </section>
    );
}

"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import DecorativeElements from "@/components/ui/DecorativeElements";
import { services } from "@/constants/services";

const servicesDecorativeElements = [
    {
        type: "square" as const,
        position: "top-left" as const,
        size: "4rem",
        className: "top-8 left-8 rotate-12",
    },
    {
        type: "square" as const,
        position: "bottom-right" as const,
        size: "5rem",
        className: "bottom-12 right-12 -rotate-12",
    },
];

export default function Services() {
    const handleBookService = (serviceId: string) => {
        console.log("Booking service:", serviceId);
    };

    const handleLearnMore = (serviceId: string) => {
        console.log("Learn more about service:", serviceId);
    };

    return (
        <section
            id="services"
            className="relative py-16 sm:py-20 lg:py-28 bg-white pb-6!"
        >
            <DecorativeElements elements={servicesDecorativeElements} />

            <div className="relative z-10 max-w-7xl mx-auto! px-6! sm:px-8!">
                <div className="text-center max-w-2xl mx-auto! pt-12!">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] tracking-tight">
                        Мои услуги
                    </h2>
                    <p className="mt-4 text-[#6B6B6B] sm:text-lg">
                        Выберите формат, который подойдёт именно вам. Все
                        программы нацелены на здоровый и устойчивый результат.
                    </p>
                </div>
                <div className="mt-12! sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onBook={handleBookService}
                            onLearnMore={handleLearnMore}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

import Button from "../Button";

interface Service {
    id: string;
    title: string;
    description: string;
    priceFrom?: string;
}

interface ServiceCardProps {
    service: Service;
    onBook?: (serviceId: string) => void;
    onLearnMore?: (serviceId: string) => void;
}

export default function ServiceCard({
    service,
    onBook,
    onLearnMore,
}: ServiceCardProps) {
    return (
        <article className="group relative bg-white p-4! rounded-2xl shadow-xl border border-gray-100 hover:border-gray-200 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl will-change-transform">
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
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => onBook?.(service.id)}
                        className="group relative"
                    >
                        Записаться
                        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Button>

                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onLearnMore?.(service.id)}
                    >
                        Подробнее
                    </Button>
                </div>
            </div>
        </article>
    );
}

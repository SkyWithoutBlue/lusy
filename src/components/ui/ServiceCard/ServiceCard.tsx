import Button from "../Button";
import { useCart } from "@/contexts/CartContext";

interface Service {
    id: string;
    title: string;
    description: string;
    priceFrom?: string;
    price: number;
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
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: service.id,
            title: service.title,
            description: service.description,
            price: service.price,
            priceFrom: service.priceFrom,
        });
    };
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

                <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={handleAddToCart}
                            className="group relative flex-1"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_2_179)">
                                    <path
                                        d="M4 40C4 42.2 5.8 44 8 44H40C42.2 44 44 42.2 44 40V14H34.809C33.865 8.888 29.382 5 24 5C18.618 5 14.135 8.888 13.191 14H4V40ZM24 7C28.275 7 31.855 9.998 32.768 14H15.232C16.145 9.998 19.725 7 24 7ZM13 16V22H15V16H33V22H35V16H42V40C42 41.103 41.103 42 40 42H8C6.897 42 6 41.103 6 40V16H13Z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_179">
                                        <rect
                                            width="48"
                                            height="48"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            В корзину
                            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </Button>
                    </div>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onLearnMore?.(service.id)}
                        className="w-full"
                    >
                        Подробнее
                    </Button>
                </div>
            </div>
        </article>
    );
}

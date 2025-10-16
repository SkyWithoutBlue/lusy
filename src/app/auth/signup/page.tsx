import { RegisterForm } from "@/components/forms";
import DecorativeElements from "@/components/ui/DecorativeElements";

const signUpDecorativeElements = [
    {
        type: "square" as const,
        position: "top-left" as const,
        size: "5rem",
        animation: "spin" as const,
        animationDuration: "30s",
        className: "top-24 left-24 rotate-12",
    },
    {
        type: "square" as const,
        position: "top-right" as const,
        size: "7rem",
        animation: "pulse" as const,
        className: "top-32 right-24 -rotate-12",
    },
    {
        type: "square" as const,
        position: "bottom-left" as const,
        size: "4rem",
        animation: "bounce" as const,
        className: "bottom-28 left-1/3 rotate-12",
    },
    {
        type: "square" as const,
        position: "bottom-right" as const,
        size: "6rem",
        animation: "pulse" as const,
        animationDelay: "1.5s",
        className: "bottom-24 right-28 -rotate-12",
    },
];

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            <DecorativeElements elements={signUpDecorativeElements} />

            {/* Декоративные рамки */}
            <div className="hidden sm:block absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gray-300"></div>
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-gray-300"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-gray-300"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gray-300"></div>

            <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <RegisterForm />
            </div>
        </div>
    );
}

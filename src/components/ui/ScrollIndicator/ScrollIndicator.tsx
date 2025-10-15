interface ScrollIndicatorProps {
    text?: string;
    subtext?: string;
    className?: string;
}

export default function ScrollIndicator({
    text = "Начни свой путь к лучшей версии себя",
    subtext = "Прокрути вниз",
    className = "",
}: ScrollIndicatorProps) {
    return (
        <div
            className={`hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 ${className}`}
        >
            <div className="flex flex-col items-center text-gray-600">
                <span className="text-sm mb-3 font-medium">{text}</span>
                <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center relative">
                    <div className="w-1 h-4 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
                </div>
                <div className="mt-2 text-xs">{subtext}</div>
            </div>
        </div>
    );
}

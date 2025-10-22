interface DecorativeElement {
    type: "border" | "circle" | "square";
    position:
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right"
        | "center";
    size: string;
    animation?: "spin" | "pulse" | "bounce";
    animationDuration?: string;
    animationDelay?: string;
    animationDirection?: "normal" | "reverse";
    className?: string;
}

interface DecorativeElementsProps {
    elements: DecorativeElement[];
    className?: string;
}

export default function DecorativeElements({
    elements,
    className = "",
}: DecorativeElementsProps) {
    const getPositionClasses = (position: string) => {
        switch (position) {
            case "top-left":
                return "top-0 left-0";
            case "top-right":
                return "top-0 right-0";
            case "bottom-left":
                return "bottom-0 left-0";
            case "bottom-right":
                return "bottom-0 right-0";
            case "center":
                return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
            default:
                return "";
        }
    };

    const getAnimationClasses = (animation?: string) => {
        if (!animation) return "";
        return `animate-${animation}`;
    };

    return (
        <div
            className={`absolute inset-0 pointer-events-none opacity-5 ${className}`}
        >
            {elements.map((element, index) => {
                const positionClasses = getPositionClasses(element.position);
                const animationClasses = getAnimationClasses(element.animation);

                const style: React.CSSProperties = {
                    width: element.size,
                    height: element.size,
                };

                if (element.animationDuration) {
                    style.animationDuration = element.animationDuration;
                }
                if (element.animationDelay) {
                    style.animationDelay = element.animationDelay;
                }
                if (element.animationDirection) {
                    style.animationDirection = element.animationDirection;
                }

                return (
                    <div
                        key={index}
                        className={`absolute ${positionClasses} ${animationClasses} ${
                            element.className || ""
                        }`}
                        style={style}
                    >
                        {element.type === "border" && (
                            <div className="w-full h-full border-2 border-[#2C2C2C]"></div>
                        )}
                        {element.type === "circle" && (
                            <div className="w-full h-full border-2 border-gray-300 rounded-full"></div>
                        )}
                        {element.type === "square" && (
                            <div className="w-full h-full border-2 border-[#2C2C2C] rotate-45"></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

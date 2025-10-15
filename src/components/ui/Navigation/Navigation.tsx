interface NavigationItem {
    href: string;
    label: string;
}

interface NavigationProps {
    items: NavigationItem[];
    isMobile?: boolean;
    onItemClick?: () => void;
}

export default function Navigation({
    items,
    isMobile = false,
    onItemClick,
}: NavigationProps) {
    const baseClasses = isMobile
        ? "block px-4 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300"
        : "relative px-6! py-3! text-gray-700 hover:text-black font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group";

    return (
        <nav
            className={
                isMobile
                    ? "space-y-3 flex flex-col gap-3 justify-center items-center"
                    : "hidden lg:block"
            }
        >
            <div
                className={isMobile ? "" : "flex items-center space-x-1 gap-10"}
            >
                {items.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={baseClasses}
                        onClick={onItemClick}
                    >
                        {item.label}
                        {!isMobile && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4"></span>
                        )}
                    </a>
                ))}
            </div>
        </nav>
    );
}

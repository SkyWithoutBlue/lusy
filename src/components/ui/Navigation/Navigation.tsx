import Link from "next/link";

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
        ? "block px-4 py-3 text-lg font-medium text-[#6B6B6B] hover:text-[#2C2C2C] hover:bg-gray-50 rounded-xl transition-all duration-300"
        : "relative px-6! py-3! text-[#6B6B6B] hover:text-[#2C2C2C] font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group";

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
                    <Link
                        key={item.href}
                        href={item.href}
                        className={baseClasses}
                        onClick={onItemClick}
                    >
                        {item.label}
                        {!isMobile && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#2C2C2C] transition-all duration-300 group-hover:w-4"></span>
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string;
}

export default function Button({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseClasses =
        "font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-0 active:ring-0 focus-visible:outline-none cursor-pointer flex flex-row-reverse  gap-4 rounded-full items-center justify-center";

    const variantClasses = {
        primary: "bg-[#2C2C2C] text-white hover:bg-[#404040] hover:scale-105 hover:shadow-2xl",
        secondary:
            "bg-transparent border-2 border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white hover:scale-105",
        outline:
            "bg-transparent border-2 border-gray-300 text-[#6B6B6B] hover:border-[#2C2C2C] hover:text-[#2C2C2C] hover:scale-105",
    };

    const sizeClasses = {
        sm: "px-4! py-2! text-sm",
        md: "px-6! py-3! text-base",
        lg: "px-8! py-2! text-lg",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button
            className={classes}
            style={{ WebkitTapHighlightColor: "transparent" }}
            {...props}
        >
            {children}
        </button>
    );
}

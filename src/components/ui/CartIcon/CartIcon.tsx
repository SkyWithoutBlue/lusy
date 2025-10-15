"use client";

import { useCart } from "@/contexts/CartContext";

interface CartIconProps {
    className?: string;
}

export default function CartIcon({ className = "" }: CartIconProps) {
    const { getTotalItems, toggleCart } = useCart();
    const itemCount = getTotalItems();

    return (
        <button
            onClick={toggleCart}
            className={`relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer ${className}`}
            aria-label="Открыть корзину"
        >
            <svg
                className="w-8 h-8 text-gray-700"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_2_179)">
                    <path d="M4 40C4 42.2 5.8 44 8 44H40C42.2 44 44 42.2 44 40V14H34.809C33.865 8.888 29.382 5 24 5C18.618 5 14.135 8.888 13.191 14H4V40ZM24 7C28.275 7 31.855 9.998 32.768 14H15.232C16.145 9.998 19.725 7 24 7ZM13 16V22H15V16H33V22H35V16H42V40C42 41.103 41.103 42 40 42H8C6.897 42 6 41.103 6 40V16H13Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
                </g>
                <defs>
                    <clipPath id="clip0_2_179">
                        <rect width="48" height="48" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

            {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold animate-pulse">
                    {itemCount > 99 ? '99+' : itemCount}
                </span>
            )}
        </button>
    );
}

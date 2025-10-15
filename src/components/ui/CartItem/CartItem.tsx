"use client";

import { CartItem as CartItemType } from "@/contexts/CartContext";
import Button from "../Button";

interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity <= 0) {
            onRemove(item.id);
        } else {
            onUpdateQuantity(item.id, newQuantity);
        }
    };

    return (
        <div className="flex items-center space-x-4 p-4! border-b border-gray-100 last:border-b-0">
            <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                <p className="text-gray-600 text-xs mt-1! line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between mt-2!">
                    <span className="text-lg font-bold text-gray-900">
                        {item.price.toLocaleString('ru-RU')}₽
                    </span>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => handleQuantityChange(item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                            aria-label="Уменьшить количество"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                            aria-label="Увеличить количество"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <button
                onClick={() => onRemove(item.id)}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                aria-label="Удалить из корзины"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import CartItem from "../CartItem";
import Button from "../Button";
import Checkout from "@/components/Checkout";
import CartIcon from "../CartIcon";

export default function Cart() {
    const {
        state,
        removeFromCart,
        updateQuantity,
        clearCart,
        closeCart,
        getTotalPrice,
    } = useCart();
    const [showCheckout, setShowCheckout] = useState(false);

    if (!state.isOpen) return null;

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    const handleCloseCheckout = () => {
        setShowCheckout(false);
    };

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={closeCart}
            />

            {/* Cart Panel */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-6 p-6! border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900">
                            Корзина
                        </h2>
                        <button
                            onClick={closeCart}
                            className="p-2! bg-gray-900 hover:opacity-50 rounded-full transition-colors cursor-pointer"
                            aria-label="Закрыть корзину"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="white"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {state.items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center p-6!">
                                <CartIcon className="w-16 h-16 text-gray-300 flex items-center justify-center" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2!">
                                    Корзина пуста
                                </h3>
                                <p className="text-gray-600">
                                    Добавьте товар из раздела "Услуги"
                                </p>
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-100">
                                {state.items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onUpdateQuantity={updateQuantity}
                                        onRemove={removeFromCart}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {state.items.length > 0 && (
                        <div className="border-t border-gray-200 p-6! space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold text-gray-900">
                                    Итого:
                                </span>
                                <span className="text-xl font-bold text-gray-900">
                                    {getTotalPrice().toLocaleString("ru-RU")}₽
                                </span>
                            </div>

                            <div className="space-y-2!">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    onClick={handleCheckout}
                                >
                                    Оформить заказ
                                </Button>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                    onClick={clearCart}
                                >
                                    Очистить корзину
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {showCheckout && <Checkout onClose={handleCloseCheckout} />}
        </>
    );
}

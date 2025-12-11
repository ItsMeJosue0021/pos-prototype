"use client";

import { createContext, useState, ReactNode, useMemo } from "react";
import { CartItem } from "@/types/cartItem";

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (menuId: string) => void;
    clearCart: () => void;
    updatePieces: (menuId: string, pieces: number) => void;
    updateQuantity: (menuId: string, quantity: number) => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existingItem = prev.find(i => i.menu.id === item.menu.id);
            if (existingItem) {
                return prev.map(i =>
                    i.menu.id === item.menu.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { ...item }];
        });
    };


    const removeFromCart = (menuId: string) => {
        setCart((prev) => prev.filter((i) => i.menu.id !== menuId));
    };

    const updatePieces = (menuId: string, pieces: number) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.menu.id !== menuId) return item;
                const priceOptions = (item.menu as any).priceOptions;
                const newPrice =
                    (priceOptions && priceOptions[pieces]) ?? item.menu.price;
                return {
                    ...item,
                    pieces,
                    menu: { ...item.menu, price: newPrice },
                };
            })
        );
    };

    const updateQuantity = (menuId: string, quantity: number) => {
        setCart((prev) => {
            if (quantity <= 0) {
                return prev.filter((item) => item.menu.id !== menuId);
            }

            return prev.map((item) =>
                item.menu.id === menuId ? { ...item, quantity } : item
            );
        });
    };

    const clearCart = () => setCart([]);

    const getTotalPrice = () => {
        return cart.reduce(
            (total, item) => total + item.menu.price * item.quantity,
            0
        );
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const value = useMemo(
        () => ({
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            updatePieces,
            updateQuantity,
            getTotalPrice,
            getTotalItems,
            }),
        [cart]
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;


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

    // const addToCart = (item: CartItem) => {
    //     setCart((prev) => {
    //         const existingItemIndex = prev.findIndex(
    //             (i) => i.menu.id === item.menu.id
    //         );

    //         if (existingItemIndex !== -1) {
    //             const updated = [...prev];
    //             updated[existingItemIndex].quantity += item.quantity;
    //             return updated;
    //         }

    //         return [...prev, item];
    //     });
    // };

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existingItemIndex = prev.findIndex(
            (i) => i.menu.id === item.menu.id
            );

            if (existingItemIndex !== -1) {
            const updated = [...prev];
            updated[existingItemIndex].quantity += 1; // Always increment by one
            return updated;
            }

            return [...prev, { ...item, quantity: 1 }]; // Default quantity = 1
        });
    };

    const removeFromCart = (menuId: string) => {
        setCart((prev) => prev.filter((i) => i.menu.id !== menuId));
    };

    const updatePieces = (menuId: string, pieces: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.menu.id === menuId ? { ...item, pieces } : item
            )
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


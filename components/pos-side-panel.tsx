"use client"

import { CiCircleInfo } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import PosCart from "./pos-cart";
import PosCheckout from "./pos-checkout";
import PosReceipt from "./pos-receipt";
import { useCart } from "@/hooks/useCart";

type Props = {
    backToMenu?: () => void;
};

const PosSidePanel = ({ backToMenu }: Props) => {

    const [tab, setTab] = useState<'cart' | 'checkout' | 'receipt'>('cart');

    const { cart, getTotalItems, getTotalPrice } = useCart();
    const total: number = getTotalPrice();
    const tax: number = getTotalPrice() * 0.03;

    return (
        <div className="fixed top-0 right-0 h-full w-full md:w-[380px] flex flex-col p-4 md:pt-20 bg-white border-l border-gray-200">
            <div className="w-full h-full flex flex-col">

                <div className="h-full overflow-y-auto hide-scrollbar">
                    {tab === 'cart' ? (
                        <PosCart 
                            backToMenu={backToMenu}
                            setTab={setTab}
                        />
                    ) : tab === 'checkout' ? (
                        <PosCheckout 
                            setTab={setTab}
                        />
                    ) : tab === 'receipt' ? (
                        <PosReceipt 
                            backToMenu={backToMenu} 
                            setTab={setTab}
                        />
                    ) : <PosCart 
                            backToMenu={backToMenu}
                            setTab={setTab}
                        />
                    }
                </div>
                
                {tab !== 'receipt' && (
                    <div className="fixed md:absolute bottom-0 left-0 right-0 bg-white p-4">
                        {tab === 'cart' ? (
                            <div className="flex flex-col gap-4">
                                {cart.length > 0 && (
                                    <div className="h-32 w-full p-2 border-2 border-dashed border-gray-200 rounded-xl flex flex-col gap-1">
                                        <h2 className="font-semibold text pb-1 border-b-2 border-dashed">Summary</h2>
                                        <div className="w-full flex items-center justify-between mt-1">
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Subtotal:</p>
                                            <p className="text-sm font-medium text-gray-500">₱{total.toFixed(2)}</p>
                                        </div>
                                        <div className="w-full flex items-center justify-between">
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tax:</p>
                                            <p className="text-sm font-medium text-gray-500">₱{tax.toFixed(2)}</p>
                                        </div>
                                        <div className="w-full flex items-center justify-between">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-400">Total:</p>
                                            <p className="text-sm font-semibold text-blue-600">₱{(total + tax).toFixed(2)}</p>
                                        </div>
                                    </div>
                                )}
                                <button
                                    disabled={cart.length === 0}
                                    onClick={() => setTab && setTab('checkout')} 
                                    className={`w-full text-sm font-semibold py-3 rounded-3xl transition-all duration-300 flex items-center justify-center gap-2   ${cart.length === 0 ? 'cursor-not-allowed bg-gray-200 hover:bg-gray-300 text-gray-500' : 'text-white cursor-pointer bg-blue-600 hover:bg-blue-700'}`}>
                                    Checkout
                                </button>
                            </div>
                        ) : tab === 'checkout' ? (
                            <button
                                onClick={() => setTab && setTab('receipt')} 
                                className="w-full text-sm bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-3xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                                Confirm Order
                            </button>
                        ) : tab === 'receipt' && null}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PosSidePanel;


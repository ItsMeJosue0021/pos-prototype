"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

type Props = {
    backToMenu?: () => void;
    setTab?: (tab: 'cart' | 'checkout' | 'receipt') => void;
};

const PosReceipt = ({ backToMenu, setTab }: Props) => {

    const isDesktop = useMediaQuery("(min-width: 768px)");

    const handleDownload = () => {
        alert("Downloading receipt...");
    };

    return (
        <div className="bg-white w-full h-full flex flex-col items-center justify-center py-8">
            <div className="bg-white w-full max-w-sm rounded-2xl p-4 flex flex-col items-center">
                <CheckCircle className="text-green-500 w-16 h-16 mb-3" />
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    Order Successful!
                </h2>
                <p className="text-gray-500 text-sm text-center mb-6">
                    Thank you for your purchase. Here’s your receipt.
                </p>

                {/* Receipt Details */}
                <div className="w-full border-t border-b border-gray-200 py-4 mb-6">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700">Order No.</span>
                        <span className="font-medium text-gray-900">#TXN-001245</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700">Date</span>
                        <span className="font-medium text-gray-900">Oct 27, 2025</span>
                    </div>

                    <div className="mt-4 border-t border-gray-100 pt-3">
                        <div className="flex justify-between text-sm mb-1">
                            <span>Takoyaki (Octopus)</span>
                            <span>₱150</span>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                            <span>Kaniyaki (Crab Stick)</span>
                            <span>₱160</span>
                        </div>
                        <div className="flex justify-between text-sm font-semibold border-t border-gray-200 mt-2 pt-2">
                            <span>Total</span>
                            <span className="text-red-500">₱310</span>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 w-full">
                    <button
                        onClick={handleDownload}
                        className="w-full py-2 bg-gray-100 text-gray-700 font-medium rounded-3xl hover:bg-gray-200 transition cursor-pointer"
                    >
                        Download Receipt
                    </button>

                    {isDesktop ? (
                        <div 
                            onClick={() => setTab && setTab('cart')} 
                            className="w-full text-center py-2 bg-red-600 text-white font-medium rounded-3xl hover:bg-red-700 transition cursor-pointer">
                            Done
                        </div>
                    ) : (
                        <div
                            onClick={backToMenu}
                            className="w-full text-center py-2 bg-red-600 text-white font-medium rounded-3xl hover:bg-red-700 transition cursor-pointer"
                        >
                            Start New Order
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default PosReceipt;
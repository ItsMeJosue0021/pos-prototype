"use client";

import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { FaCreditCard, FaMoneyBillWave, FaQrcode } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";

type Props = {
    setTab?: (tab: 'cart' | 'checkout' | 'receipt') => void;
};

const PosCheckout = ({ setTab }: Props) => {

    const [paymentMethod, setPaymentMethod] = useState("cash");
    const [amountReceived, setAmountReceived] = useState("");
    const total = 380; // Example total
    const change = amountReceived ? Number(amountReceived) - total : 0;

    const { cart, getTotalPrice } = useCart();
    const totalPrice: number = getTotalPrice();

    const cartItems = [
      { name: "Takoyaki (Octopus)", qty: 2, price: 150 },
      { name: "Ham and Cheese", qty: 1, price: 170 },
    ];

  return (
    <div className="flex flex-col min-h-screen bg-white pt-12 md:pt-0">
      {/* HEADER */}
        <div 
            onClick={() => setTab && setTab('cart')} 
            className="flex items-center justify-start gap-2 mt-4 px-3 pr-4 p-1 rounded-3xl bg-white border border-gray-400 w-fit cursor-pointer">
            <GoArrowLeft   
                size={22} 
                className="text-gray-400 hover:text-gray-600" 
            />
            <p className="text-sm text-gray-400 hover:text-gray-600">Back to Cart</p>
        </div>
      <div className="py-4 border-gray-200 bg-white sticky top-0 z-10">
        <h1 className="text-lg font-semibold text-gray-800">Checkout</h1>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto">
        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-4">
          <h2 className="font-semibold text-gray-800 mb-3">Order Summary</h2>
          <div className="divide-y divide-gray-100">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2">
                <div>
                  <p className="font-medium text-gray-700">{item.menu.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × ₱{item.menu.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  ₱{(item.quantity * item.menu.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
            <p className="font-semibold text-gray-700">Total</p>
            <p className="text-sm font-bold text-red-500">₱{totalPrice.toFixed(2)}</p>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="bg-white rounded-lg  border-gray-200 py-4 px-1">
          <h2 className="font-semibold text-gray-800 mb-3">Payment Method</h2>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setPaymentMethod("cash")}
              className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer ${
                paymentMethod === "cash"
                  ? "border-red-500 bg-red-50 text-red-600"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              <FaMoneyBillWave size={20} />
              <span className="text-xs mt-1">Cash</span>
            </button>

            <button
              onClick={() => setPaymentMethod("gcash")}
              className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer ${
                paymentMethod === "gcash"
                  ? "border-red-500 bg-red-50 text-red-600"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              <FaQrcode size={20} />
              <span className="text-xs mt-1">GCash</span>
            </button>
          </div>
        </div>

        {/* PAYMENT DETAILS */}
        {paymentMethod === "cash" && (
          <div className="bg-white rounded-lg  border-gray-200 px-1">
            <h2 className="font-semibold text-gray-800 mb-3">Cash Payment</h2>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="amount"
                  className="text-sm text-gray-600 block mb-1"
                >
                  Amount Received
                </label>
                <input
                  id="amount"
                  type="number"
                  value={amountReceived}
                  onChange={(e) => setAmountReceived(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-500 outline-none text-sm"
                />
              </div>

              {amountReceived && (
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm font-medium text-gray-600">Change:</p>
                  <p
                    className={`text-lg font-bold ${
                      change < 0 ? "text-gray-400" : "text-green-600"
                    }`}
                  >
                    ₱{change < 0 ? "0.00" : change.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default PosCheckout;
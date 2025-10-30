"use client"

import { CiCircleInfo } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import PosCart from "./pos-cart";
import PosCheckout from "./pos-checkout";
import PosReceipt from "./pos-receipt";

type Props = {
    backToMenu?: () => void;
};

const PosSidePanel = ({ backToMenu }: Props) => {

    const [tab, setTab] = useState<'cart' | 'checkout' | 'receipt'>('cart');

    return (
        <div className="px-4 bg-white">
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
                <PosReceipt backToMenu={backToMenu}/>
            ) : <PosCart 
                    backToMenu={backToMenu}
                    setTab={setTab}
                />}
        </div>
    )
}

export default PosSidePanel;
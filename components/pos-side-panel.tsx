"use client"

import { CiCircleInfo } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import PosCart from "./pos-cart";

type Props = {
    backToMenu?: () => void;
};

const PosSidePanel = ({ backToMenu }: Props) => {

    const [tab, setTab] = useState<'cart' | 'checkout' | 'receipt'>('cart');

    return (
        <div className="px-4 bg-white">
            <PosCart backToMenu={backToMenu}/>
        </div>
    )
}

export default PosSidePanel;
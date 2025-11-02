"use client"

import { useState } from "react";
import PointOfSaleHome from "@/components/pos-home";
import PosSidePanel from "@/components/pos-side-panel";
import useMediaQuery from "@/hooks/useMediaQuery";

const PointOfSale = () => {

    const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full h-full flex items-start gap-4 ">
                {!isDesktop && (
                    <>
                        {!isSidePanelOpen ? (
                        <div className="w-full gap-6">
                            <PointOfSaleHome openCart={() => setIsSidePanelOpen(true)} />
                        </div>
                        ) : (
                        <div className="w-full">
                            <PosSidePanel backToMenu={() => setIsSidePanelOpen(false)} />
                        </div>
                        )}
                    </>
                )}

                {isDesktop && (
                    <>
                        <div className="flex-1">
                            <PointOfSaleHome />
                        </div>
                        <div className="w-[380px]">
                            <PosSidePanel />
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}

export default PointOfSale;
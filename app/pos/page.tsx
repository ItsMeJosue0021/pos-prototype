"use client"

import { useState } from "react";
import PointOfSaleHome from "@/components/pos-home";
import PosSidePanel from "@/components/pos-side-panel";

const PointOfSale = () => {

    const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);

    return (
        <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full flex items-start gap-4 ">
                
                {!isSidePanelOpen ? (
                    
                    <div className="w-full gap-6">
                        <PointOfSaleHome 
                            openCart={() => setIsSidePanelOpen(true)}
                        />
                    </div>
                ) : (
                    <div className="w-full">
                        <PosSidePanel 
                            backToMenu={() => setIsSidePanelOpen(false)}
                        />
                    </div>
                )}

                <div className="hidden md:block">
                    <PosSidePanel/>
                </div>
                
            </main>
        </div>
    )
}

export default PointOfSale;
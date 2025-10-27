import SidePanel from "@/components/side-panel";
import SidePanelContent from "@/components/side-panel-content";
import PointOfSaleHome from "@/components/pos-home";

const PointOfSale = () => {
    return (
        <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full flex items-start gap-4 ">
                <div className="w-full gap-6 px-4">
                    <PointOfSaleHome/>
                </div>
                {/* <div className="w-full md:w-80">
                    <SidePanel>
                        <SidePanelContent/>
                    </SidePanel>
                </div> */}
            </main>
        </div>
    )
}

export default PointOfSale;
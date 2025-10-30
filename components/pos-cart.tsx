import { menuItems } from "@/data/menu";
import MenuItemCard from "./menu-item-card";
import { GoArrowLeft } from "react-icons/go";

type Props = {
    backToMenu?: () => void;
    setTab?: (tab: 'cart' | 'checkout' | 'receipt') => void;
};

const PosCart = ({ backToMenu, setTab }: Props) => {
    return (
        <div className="h-screen flex flex-col pt-4">
            <div 
                onClick={backToMenu} 
                className="flex items-center justify-start gap-2 mb-4 px-3 pr-4 p-1 rounded-3xl bg-red-600 w-fit">
                <GoArrowLeft   
                    size={22} 
                    className="text-white" 
                />
                <p className="text-sm text-white">Add More</p>
            </div>
            
            <div>
                <h1 className="font-semibold mb-2">Items</h1>
                <div className="flex flex-col gap-2 pb-56 divide-y">
                    {menuItems.slice(0, 4).map((item, index) => (
                        <MenuItemCard key={index} item={item} index={index} isUsedInSidePanel={true} />
                    ))}
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-zinc-50 p-4 flex flex-col gap-4 shadow-md ">
                <div className="h-32 w-full p-2 border-2 border-dashed border-gray-200 rounded-xl flex flex-col gap-1">
                    <h2 className="font-semibold text pb-1 border-b-2 border-dashed">Summary</h2>
                    <div className="w-full flex items-center justify-between mt-1">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Subtotal:</p>
                        <p className="text-sm font-medium text-gray-500">₱1,230</p>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tax:</p>
                        <p className="text-sm font-medium text-gray-500">₱4</p>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-400">Total:</p>
                        <p className="text-sm font-semibold text-red-600">₱1,234</p>
                    </div>
                </div>
                <button
                    onClick={() => setTab && setTab('checkout')} 
                    className="w-full text-sm bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-3xl transition-all duration-300 flex items-center justify-center gap-2">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default PosCart;
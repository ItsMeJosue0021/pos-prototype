import { menuItems } from "@/data/menu";
import MenuItemCard from "./menu-item-card";
import { GoArrowLeft } from "react-icons/go";
import { useCart } from "@/hooks/useCart";

type Props = {
    backToMenu?: () => void;
    setTab?: (tab: 'cart' | 'checkout' | 'receipt') => void;
};

const PosCart = ({ backToMenu, setTab }: Props) => {

    const { cart, clearCart } = useCart();
    
    return (
        <div className="h-full flex flex-col pt-16 md:pt-0">
            <div 
                onClick={backToMenu} 
                className="md:hidden flex items-center justify-start gap-2 mb-4 px-3 pr-4 p-1 rounded-3xl bg-red-600 w-fit">
                <GoArrowLeft   
                    size={22} 
                    className="text-white" 
                />
                <p className="text-sm text-white">Add More</p>
            </div>
            
            <div>
                <h1 className="font-semibold mb-2">Items</h1>
                <div className="flex flex-col gap-2 pb-56 divide-y bg-green-40">
                    {cart.map((item, index) => (
                        <MenuItemCard 
                            key={index} 
                            item={item} 
                            index={index} 
                            isUsedInSidePanel={true} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PosCart;
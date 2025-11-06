import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/types/cartItem";
import { MenuItem } from "@/types/menuItem";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

type Props = {
    item: any;
    index: number;
    isUsedInSidePanel?: boolean;
}

const MenuItemCard = ({item, index, isUsedInSidePanel}: Props) => {
    
    const { cart, removeFromCart, updateQuantity } = useCart()

    // const itemExists = cart.some((cartItem) => cartItem.menu.id == item.id);

    const itemExists = cart.find((cartItem) => cartItem.menu.id == item.id);

    const cardStyle = isUsedInSidePanel ? 
    "min-h-24 h-auto w-full p-2 pb-4 flex flex-col items-center bg-white dark:bg-gray-800 shadow-muted" 
    : `relative min-h-24 h-auto w-full md:w-72 rounded-xl p-2 flex flex-col items-center ${itemExists ? 'bg-red-50 border border-red-300' : 'bg-white'} dark:bg-gray-800 shadow-muted cursor-pointer hover:bg-red-50 hover:shadow-lg border border-gray-200 hover:border-red-500 ring-2 ring-transparent hover:ring-red-200 transform transition-all duration-500`;

    return (
        <div key={index} className={cardStyle}>
            <div className="relative h-full w-full flex items-center gap-4">
                <img src={isUsedInSidePanel ? item.menu.image : item.image} alt="image" className="h-20 w-24 rounded-lg object-cover object-center" />
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text- font-semibold text-gray-800 dark:text-gray-200">{isUsedInSidePanel ? item.menu.name : item.name}</h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{isUsedInSidePanel ? item.menu.description : item.description}</p>
                    <p className="text-sm font-semibold text-red-500 mt-1">₱{isUsedInSidePanel ? item.menu.price : item.price}</p>
                </div>
                {isUsedInSidePanel && (
                    <div onClick={() => removeFromCart(item.menu.id)} className="absolute top-0 right-0 cursor-pointer">
                        <IoMdClose size={20} className="text-gray-300 hover:text-red-500" />
                    </div>
                )}
            </div>

            {isUsedInSidePanel && (
                <div className="w-full flex items-center justify-between mt-2">
                    <div className="w-full">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pieces:</p>
                        <div className="flex items-center justify-start gap-2">
                            <button className="text-xs px-3 py-1.5 border border-red-500 text-red-500 rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer transform transition-all duration-500">4</button>
                            <button className="text-xs px-3 py-1.5 border border-gray-300 text-gray-500 rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer transform transition-all duration-500">8</button>
                            <button className="text-xs px-3 py-1.5 border border-gray-300 text-gray-500 rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer transform transition-all duration-500">12</button>
                        </div>
                    </div>
                    
                    <div className="w-full">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Quantity:</p>
                        <div className="flex items-center justify-start gap-4">
                            <CiCircleMinus onClick={() => updateQuantity(item.menu.id, item.quantity-1)} size={30} className="text-gray-400 hover:text-red-500 transform transition-all duration-500 cursor-pointer"/>
                            <p className="text-lg">{item.quantity}</p>
                            <CiCirclePlus onClick={() => updateQuantity(item.menu.id, item.quantity+1)} size={30} className="text-gray-400 hover:text-red-500 transform transition-all duration-500 cursor-pointer"/>
                        </div>
                    </div>
                </div>
            )}

            {itemExists && !isUsedInSidePanel && (
                <div className="absolute top-0 right-4 h-full flex flex-col justify-center items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                        <p className="text-xs text-white">{itemExists.quantity}</p>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default MenuItemCard;
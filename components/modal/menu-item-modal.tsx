import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/types/cartItem";
import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

type Props = {
    item: any;
    onClose: () => void;
    onAddToCart: () => void;
};

const ItemModal = ({ item, onClose, onAddToCart }: Props) => {

    const {addToCart} = useCart();

    const [cartItem, setCartItem] = useState({
        menu: item,
        pieces: 4,
        quantity: 1,
    });


    const handleAddToCart = () => {
        addToCart(cartItem);
        onAddToCart();
    }


    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full relative">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="font-bold">Item Details</h1>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-600 cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-lg mb-4 w-full h-40 object-cover"
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-lg font-bold mb-4">₱{item.price}</p>
                

                <div className="w-full flex items-center justify-between mt-2 mb-4">
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
                            <CiCircleMinus onClick={() => setCartItem(prev => ({...prev, quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,}))} size={30} className="text-gray-400 hover:text-red-500 transform transition-all duration-500 cursor-pointer"/>
                            <p className="text-lg">{cartItem.quantity}</p>
                            <CiCirclePlus onClick={() => setCartItem(prev => ({...prev, quantity: prev.quantity+1}))} size={30} className="text-gray-400 hover:text-red-500 transform transition-all duration-500 cursor-pointer"/>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => handleAddToCart()}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-3xl font-semibold transition-all duration-300"
                >
                Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ItemModal;

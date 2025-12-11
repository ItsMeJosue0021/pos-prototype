import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

type PieceOption = 4 | 8 | 12;

type Props = {
    item: any;
    onClose: () => void;
    onAddToCart: () => void;
};

const ItemModal = ({ item, onClose, onAddToCart }: Props) => {

    const { addToCart } = useCart();
    const pieceOptions: PieceOption[] = [4, 8, 12];

    const [cartItem, setCartItem] = useState({
        menu: item,
        pieces: 4 as PieceOption,
        quantity: 1,
    });

    const selectedPrice = item?.priceOptions?.[cartItem.pieces] ?? item.price;

    const handleAddToCart = () => {
        const itemWithPrice = {
            ...cartItem,
            menu: { ...cartItem.menu, price: selectedPrice }
        };
        addToCart(itemWithPrice);
        onAddToCart();
    };

    // Lock body scroll while modal is open
    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto max-h-screen">
            <div className="bg-white rounded-md md:rounded-2xl p-6 max-w-sm w-full relative">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="font-bold">Item Details</h1>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                        X
                    </button>
                </div>

                <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-lg mb-2 w-full h-40 object-cover"
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-lg font-bold mb-4 text-blue-600">₱{selectedPrice.toFixed(2)}</p>

                <div className="w-full flex items-center justify-between mt-2 mb-4">
                    <div className="w-full">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pieces:</p>
                        <div className="flex items-center justify-start gap-2">
                            {pieceOptions.map((option) => {
                                const isActive = cartItem.pieces === option;
                                return (
                                    <button
                                        key={option}
                                        onClick={() => setCartItem((prev) => ({ ...prev, pieces: option }))}
                                        className={`text-xs px-3 py-1.5 rounded-md border transition-all duration-300 cursor-pointer ${
                                            isActive
                                                ? "border-blue-500 text-blue-600 bg-blue-50"
                                                : "border-gray-300 text-gray-600 hover:text-blue-500 hover:border-blue-500"
                                        }`}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="w-full">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Quantity:</p>
                        <div className="flex items-center justify-start gap-4">
                            <CiCircleMinus
                                onClick={() => setCartItem(prev => ({ ...prev, quantity: prev.quantity > 1 ? prev.quantity - 1 : 1 }))}
                                size={30}
                                className="text-gray-400 hover:text-blue-500 transform transition-all duration-500 cursor-pointer"
                            />
                            <p className="text-lg">{cartItem.quantity}</p>
                            <CiCirclePlus
                                onClick={() => setCartItem(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                                size={30}
                                className="text-gray-400 hover:text-blue-500 transform transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-sm text-white py-3 rounded-3xl font-semibold transition-all duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ItemModal;

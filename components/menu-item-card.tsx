import { useCart } from "@/hooks/useCart";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

type Props = {
    item: any;
    index: number;
    isUsedInSidePanel?: boolean;
};

const MenuItemCard = ({ item, index, isUsedInSidePanel }: Props) => {
    const { cart, removeFromCart, updateQuantity, updatePieces } = useCart();

    const itemExists = cart.find((cartItem) => cartItem.menu.id === item.id);

    const cardStyle = isUsedInSidePanel
        ? "min-h-24 h-auto w-full p-2 pb-4 flex flex-col items-center bg-white dark:bg-gray-800 shadow-muted"
        : `relative min-h-24 h-auto w-full md:w-72 rounded-xl p-2 flex flex-col items-center ${itemExists ? "bg-blue-50 border border-blue-300" : "bg-white"} dark:bg-gray-800 shadow-muted cursor-pointer hover:bg-gray-50 hover:shadow-lg border border-gray-200 hover:border-gray-300 ring-2 ring-transparent hover:ring-gray-200 transform transition-all duration-500`;

    const displayPrice = isUsedInSidePanel ? item.menu.price : item.price;

    return (
        <div key={index} className={cardStyle}>
            <div className="relative h-full w-full flex items-center gap-4">
                <img
                    src={isUsedInSidePanel ? item.menu.image : item.image}
                    alt="image"
                    className="h-20 w-24 rounded-lg object-cover object-center"
                />
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text- font-semibold text-gray-800 dark:text-gray-200">
                        {isUsedInSidePanel ? item.menu.name : item.name}
                    </h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                        {isUsedInSidePanel ? item.menu.description : item.description}
                    </p>
                    <p className="text-sm font-medium text-gray-800 mt-1">
                        ₱{Number(displayPrice).toFixed(2)}
                    </p>
                </div>
                {isUsedInSidePanel && (
                    <div
                        onClick={() => removeFromCart(item.menu.id)}
                        className="absolute top-0 right-0 cursor-pointer"
                    >
                        <IoMdClose size={20} className="text-gray-300 hover:text-blue-500" />
                    </div>
                )}
            </div>

            {isUsedInSidePanel && (
                <div className="w-full flex items-center justify-between mt-2">
                    <div className="w-full">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pieces:</p>
                        <div className="flex items-center justify-start gap-2">
                            {[4, 8, 12].map((option) => {
                                const isActive = item.pieces === option;
                                return (
                                    <button
                                        key={option}
                                        onClick={() => updatePieces(item.menu.id, option)}
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
                                onClick={() => updateQuantity(item.menu.id, item.quantity - 1)}
                                size={30}
                                className="text-gray-400 hover:text-blue-500 transform transition-all duration-500 cursor-pointer"
                            />
                            <p className="text-lg">{item.quantity}</p>
                            <CiCirclePlus
                                onClick={() => updateQuantity(item.menu.id, item.quantity + 1)}
                                size={30}
                                className="text-gray-400 hover:text-blue-500 transform transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            )}

            {itemExists && !isUsedInSidePanel && (
                <div className="absolute top-0 right-4 h-full flex flex-col justify-center items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <p className="text-xs text-white">{itemExists.quantity}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuItemCard;

import { CartItem } from "@/types/cartItem";

type Props = {
    item: any;
    onClose: () => void;
    onAddToCart: (item: CartItem) => void;
};

const ItemModal = ({ item, onClose, onAddToCart }: Props) => {

    const cartItem: CartItem = {
        menu: item,
        pieces: 4,
        quantity: 1,
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
                >
                ✕
                </button>
                <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-xl mb-4 w-full h-40 object-cover"
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-lg font-bold mb-4">₱{item.price}</p>
                <button
                    onClick={() => onAddToCart(cartItem)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-3xl font-semibold transition-all duration-300"
                >
                Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ItemModal;

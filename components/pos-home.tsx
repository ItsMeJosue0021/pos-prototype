"use client"

import MenuItemCard from "./menu-item-card";
import CategoryCard from "./category-card";
import { GiShrimp, GiThreeLeaves } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { MdOutlineFavorite, } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { menuItems } from "../data/menu";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { CartItem } from "@/types/cartItem";
import ItemModal from "./modal/menu-item-modal";
import { useCart } from "@/hooks/useCart";
import { MenuItem } from "@/types/menuItem";

type Props = {
    openCart?: () => void;
};

const PointOfSaleHome = ({ openCart }: Props) => {

    const [selectedCategory, setSelectedCategory] = useState<string>("Favorites");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const { cart, addToCart, getTotalItems, getTotalPrice} = useCart();
    const [selectedItem, setSelectedItem] = useState<any | null>(null);

    const totalPrice: number = getTotalPrice();
    const totalItems: number = getTotalItems();

    const filteredItems = menuItems.filter((item) => {
        const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

        if (selectedCategory === "Favorites") {
            return item.isFavorite && matchesSearch;
        }

        if (selectedCategory === "Seafood") {
            return item.category === "seafood" && matchesSearch;
        }

        if (selectedCategory === "Meaty") {
            return item.category === "meaty" && matchesSearch;
        }

        if (selectedCategory === "Veggie") {
            return item.category === "veggie" && matchesSearch;
        }

        if (selectedCategory === "Others") {
            return item.category === "others" && matchesSearch;
        }

        return matchesSearch;
    });

    const handleAddToCart = () => {
        // addToCart(item);
        setSelectedItem(null); 
    };

    const categories = [
        { icon: <MdOutlineFavorite />, label: "Favorites" },
        { icon: <GiShrimp />, label: "Seafood" },
        { icon: <TbMeat />, label: "Meaty" },
        { icon: <GiThreeLeaves />, label: "Veggie" },
        { icon: <HiOutlineDotsVertical />, label: "Others" },
    ];


    return (
        <div className="h-full min-h-screen flex flex-col bg-white">
            <div className="shrink-0 space-y-2 p-4 ">

                <div className="px-3 py-3 rounded-3xl bg-white flex items-center gap-2 border border-gray-300 shadow-muted 
                                focus-within:border-red-500 focus-within:ring-red-200
                                transform transition-colors duration-500 ring-2 ring-transparent group">
                <CiSearch
                    size={20}
                    className="group-focus-within:text-red-600 transform transition-all duration-500 font-bold group-focus-within:stroke-1"
                />
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-full w-full text-sm border-0 outline-0 placeholder:text-base"
                    placeholder="Search menu.."
                />
                </div>
            </div>

            <div className="py-2">
                <h1 className="mb-2 px-4">Categories</h1>
                <div className="flex items-start gap-2 overflow-x-auto p-1 px-4 hide-scrollbar">
                    {categories.map((cat) => (
                    <div
                        key={cat.label}
                        onClick={() => setSelectedCategory(cat.label)}
                    >
                        <CategoryCard
                            icon={cat.icon}
                            label={cat.label}
                            isActive={selectedCategory === cat.label}
                        />
                    </div>
                ))}
                </div>
            </div>

            <h1 className="mb-2 px-4">Items</h1>
            <div className="flex-1 overflow-y-auto px-4 ide-scrollbar">

                <div className="flex-1 overflow-y-auto pb-28 md:pb-0 hide-scrollbar">
                    {filteredItems.length > 0 ? (
                        <div className="flex flex-col md:flex-row flex-wrap space-y-2 md:space-0 md:gap-3 md:p-2">
                            {filteredItems.map((item, index) => (
                                <div key={index} onClick={() => setSelectedItem(item)}>
                                    <MenuItemCard item={item} index={index} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 mt-10">
                            No items found, try another menu.
                        </p>
                    )}
                </div>
            </div>

            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-transparent p-4  shadow-md">
                <button 
                    onClick={openCart}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-3xl transition-all duration-300 flex items-center justify-between">
                    <span className="text-sm">Proceed to Cart</span>
                    <div className="flex items-center gap-2">
                        {totalItems > 0 && (
                            <>
                                <p className="text-sm font-light">{totalItems} Items</p>
                                <p className="text-sm">₱{totalPrice.toFixed(2)}</p>
                            </>
                        )}
                        
                        <GoArrowRight size={18}className="text-white" />
                    </div>
                    
                </button>
            </div>

            {selectedItem && (
                <ItemModal
                    item={selectedItem}
                    onClose={() => setSelectedItem(null)}
                    onAddToCart={handleAddToCart}
                />
            )}
        </div>
    );
};


export default PointOfSaleHome;
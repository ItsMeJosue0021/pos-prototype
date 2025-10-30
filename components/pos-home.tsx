import { GiShrimp, GiThreeLeaves } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { MdOutlineFavorite, } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { menuItems } from "../data/menu";
import { RiShoppingCartLine } from "react-icons/ri";
import MenuItemCard from "./menu-item-card";
import CategoryCard from "./category-card";
import { GoArrowRight } from "react-icons/go";

type Props = {
    openCart: () => void;
};

const PointOfSaleHome = ({ openCart }: Props) => {
    return (
        <div className="h-screen flex flex-col">
            <div className="shrink-0 space-y-2 px-4 py-2">

                <div className="px-3 py-3 rounded-3xl bg-white flex items-center gap-2 border border-gray-200 shadow-muted 
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
                    className="h-full w-full text-sm border-0 outline-0 placeholder:text-base"
                    placeholder="Search menu.."
                />
                </div>
            </div>

            <div className="py-2">
                <h1 className="mb-2 px-4">Categories</h1>
                <div className="flex items-start gap-2 overflow-x-auto p-1 px-4">
                    <CategoryCard icon={<MdOutlineFavorite />} label="Favorites" />
                    <CategoryCard icon={<GiShrimp />} label="Seafood" />
                    <CategoryCard icon={<TbMeat />} label="Meaty" />
                    <CategoryCard icon={<GiThreeLeaves />} label="Veggie" />
                    <CategoryCard icon={<HiOutlineDotsVertical />} label="Others" />
                </div>
            </div>

            <h1 className="mb-2 px-4">Items</h1>
            <div className="flex-1 overflow-y-auto px-4 pb-28">
                    <div className="flex flex-col space-y-2">
                    {menuItems.map((item, index) => (
                        <MenuItemCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-transparent p-4  shadow-md">
                <button 
                    onClick={openCart}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-3xl transition-all duration-300 flex items-center justify-between">
                    <span className="text-sm">Proceed to Cart</span>
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-light">4 Items</p>
                        <p className="text-sm">₱1,300</p>
                        <GoArrowRight size={18}className="text-white" />
                    </div>
                    
                </button>
            </div>
        </div>
    );
};


export default PointOfSaleHome;
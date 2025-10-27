import { GiShrimp, GiThreeLeaves } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import CategoryCard from "./category-card";
import { 
    MdOutlineFavorite, 
     
} from "react-icons/md";
import { CiCircleMinus, CiCirclePlus, CiSearch } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";

const menuItems = [
    {
        name: "Takoyaki (Octopus)",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 150,
        image: "/images/takoyaki1.jpg",
    },
    {
        name: "Kaniyaki (Crab stick)",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 160,
        image: "/images/takoyaki2.jpg",
    },
    {
        name: "Dried Shrimp",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 150,
        image: "/images/takoyaki3.jpg",
    },
    {
        name: "Chizuyaki (Cheese)",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 160,
        image: "/images/takoyaki4.jpg",
    },
    {
        name: "Ham and Cheese",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 170,
        image: "/images/takoyaki1.jpg",
    },
    {
        name: "Takoyaki (Octopus)",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 150,
        image: "/images/takoyaki1.jpg",
    },
    {
        name: "Kaniyaki (Crab stick)",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 160,
        image: "/images/takoyaki2.jpg",
    },
    {
        name: "Dried Shrimp",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 150,
        image: "/images/takoyaki3.jpg",
    },
    {
        name: "Chizuyaki (Cheese)",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 160,
        image: "/images/takoyaki4.jpg",
    },
    {
        name: "Ham and Cheese",
        description: "4 pcs, 8 pcs or 12 pcs",
        price: 170,
        image: "/images/takoyaki1.jpg",
    },
];

const PointOfSaleHome = () => {
  return (
    <div className="h-screen flex flex-col">
        <div className="flex-shrink-0 space-y-2 px-4 py-2">

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


            <div className="py-2">
                <h1 className="mb-2 px-1">Categories</h1>
                <div className="flex items-start gap-2 overflow-x-auto p-1">
                    <CategoryCard icon={<MdOutlineFavorite />} label="Favorites" />
                    <CategoryCard icon={<GiShrimp />} label="Seafood" />
                    <CategoryCard icon={<TbMeat />} label="Meaty" />
                    <CategoryCard icon={<GiThreeLeaves />} label="Veggie" />
                    <CategoryCard icon={<HiOutlineDotsVertical />} label="Others" />
                </div>
            </div>
        </div>


        <h1 className="mb-2 px-4">Items</h1>
        <div className="flex-1 overflow-y-auto px-4 pb-28">
                <div className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                        <div key={index} className="min-h-24 h-auto w-full rounded-xl p-2 flex flex-col items-center bg-white dark:bg-gray-800 shadow-muted cursor-pointer hover:shadow-lg border border-gray-200 hover:border-red-500 ring-2 ring-transparent hover:ring-red-200 transform transition-all duration-500">
                            <div className="h-full w-full flex items-center gap-4">
                                <img src={item.image} alt="image" className="h-20 w-24 rounded-md object-cover object-center" />
                                <div className="flex flex-col justify-start items-start">
                                    <h2 className="text- font-semibold text-gray-800 dark:text-gray-200">{item.name}</h2>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                                    <p className="text-sm font-semibold text-red-500 mt-1">{item.price}</p>
                                </div>
                            </div>
                            
                            {/* <div className="w-full flex items-center justify-between mt-2">
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
                                        <CiCircleMinus size={30} className="text-gray-400 hover:text-red-500 transform transition-all duration-500"/>
                                        <p className="text-lg">1</p>
                                        <CiCirclePlus size={30} className="text-gray-400 hover:text-red-500 transform transition-all duration-500"/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    ))}
            </div>
        </div>

            <div className="fixed bottom-0 left-0 right-0 bg-transparent p-4 pb-8 shadow-md">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    Process Order
                    <FaArrowRightLong size={18} className="text-white" />
                </button>
            </div>
        </div>
    );
};


export default PointOfSaleHome;
import { MenuItem } from "@/types/menu";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

type Props = {
    item: MenuItem;
    index: number;
    isUsedInSidePanel?: boolean;
}

const MenuItemCard = ({item, index, isUsedInSidePanel}: Props) => {

    const cardStyle = isUsedInSidePanel ? 
    "min-h-24 h-auto w-full p-2 pb-4 flex flex-col items-center bg-white dark:bg-gray-800 shadow-muted " 
    : "min-h-24 h-auto w-full rounded-xl p-2 flex flex-col items-center bg-white dark:bg-gray-800 shadow-muted cursor-pointer hover:bg-red-50 hover:shadow-lg border border-gray-200 hover:border-red-500 ring-2 ring-transparent hover:ring-red-200 transform transition-all duration-500";

    return (
        <div key={index} className={cardStyle}>
            <div className="relative h-full w-full flex items-center gap-4">
                <img src={item.image} alt="image" className="h-20 w-24 rounded-md object-cover object-center" />
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text- font-semibold text-gray-800 dark:text-gray-200">{item.name}</h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                    <p className="text-sm font-semibold text-red-500 mt-1">₱{item.price}</p>
                </div>
                {isUsedInSidePanel && (
                    <div className="absolute top-0 right-0">
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
                            <CiCircleMinus size={30} className="text-gray-400 hover:text-red-500 transform transition-all duration-500"/>
                            <p className="text-lg">1</p>
                            <CiCirclePlus size={30} className="text-gray-400 hover:text-red-500 transform transition-all duration-500"/>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default MenuItemCard;
import { SearchIcon } from "lucide-react";
import { 
    InputGroup, 
    InputGroupAddon, 
    InputGroupInput 
} from "./ui/input-group";
import { GiShrimp } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { HiOutlineDotsVertical } from "react-icons/hi";
import CategoryCard from "./category-card";

const PointOfSaleHome = () => {
    return (
        <div className="flex flex-col space-y-2">
            <InputGroup className="rounded-3xl bg-white dark:bg-gray-800 text-lg shadow-muted">
                <InputGroupInput placeholder="Search menu..." />
                <InputGroupAddon>
                    <SearchIcon className="" />
                </InputGroupAddon>
            </InputGroup>
            
            <div className="py-2">
                <h1 className="mb-2">Categories</h1>
                <div className="flex items-start gap-2 overflow-x-auto p-1">
                    <CategoryCard icon={<GiShrimp/>} label="Seafood"/>
                    <CategoryCard icon={<TbMeat/>} label="Meaty"/>
                    <CategoryCard icon={<HiOutlineDotsVertical/>} label="Others"/>
                </div>
            </div>

            <div className="py-2">
                <h1 className="mb-2">Items</h1>
                <div className="flex flex-col space-y-2">
                    <div className="h-24 w-full rounded-2xl p-2 flex items-center gap-4 bg-white dark:bg-gray-800 shadow-muted cursor-pointer hover:shadow-lg transition-shadow">
                        <img src="/images/takoyaki1.jpg" alt="image" className="h-full w-24 rounded-lg object-cover object-center" />
                        <div className="flex flex-col justify-start items-start">
                            <h2>Item Name</h2>
                            <p>₱100.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PointOfSaleHome;
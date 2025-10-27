import { Label } from "@radix-ui/react-label";
import { 
    IoMenuOutline, 
    IoSettingsOutline 
} from "react-icons/io5";

const PointOfSaleHeader = () => {
    return (
        <div className="p-4 pt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <IoMenuOutline size={32} className="text-gray-600"/>
                <p className="font-semibold text-gray-800">Joshua Salceda</p>
            </div>
            <IoSettingsOutline size={25} className="text-gray-600"/>
        </div>
    )
}

export default PointOfSaleHeader;
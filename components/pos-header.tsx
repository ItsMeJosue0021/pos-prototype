import { Label } from "@radix-ui/react-label";
import { 
    IoMenuOutline, 
    IoSettingsOutline 
} from "react-icons/io5";

const PointOfSaleHeader = () => {
    return (
        <div className="p-4 pt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <IoMenuOutline size={32} className=""/>
                <Label htmlFor="name" className="text-sm font-semibold">Joshua Salceda</Label>
            </div>
            <IoSettingsOutline size={25}/>
        </div>
    )
}

export default PointOfSaleHeader;
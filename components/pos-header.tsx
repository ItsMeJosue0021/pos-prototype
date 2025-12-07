"use client"

import { IoMdNotificationsOutline } from "react-icons/io";
import { 
    IoMenuOutline, 
    IoSettingsOutline 
} from "react-icons/io5";
import IconButton from "@mui/material/IconButton";

const PointOfSaleHeader = () => {
    return (
        <div className="fixed top-0 left-0 w-full p-4 flex items-center justify-between bg-white border-b border-gray-200 z-40">
            <div className="flex items-center bg-blue-700 rounded-tl-md rounded-br-md">
                <div className="scale-75 flex items-center gap-2 ">
                    <p className=" font-bold text-white text-xl py-1 px-2  border-blue-600">SOXIO</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <IconButton className="w-9 h-9 rounded hover:bg-blue-50 flex items-center justify-center group cursor-pointer">
                    <IoMdNotificationsOutline 
                        size={32} 
                        className="text-gray-600 group-hover:text-blue-700" />
                </IconButton>
                <IconButton className="w-9 h-9 rounded hover:bg-blue-50 flex items-center justify-center group cursor-pointer">
                    <IoMenuOutline 
                        size={32} 
                        className="text-gray-600 group-hover:text-blue-700" />
                </IconButton>
            </div>
        </div>
    )
}

export default PointOfSaleHeader;

 {/* <IoMenuOutline size={32} className="text-gray-600"/> */}
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
    return (
        <div className="relative flex flex-col md:flex-row min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
            <div className="hidden md:block w-full min-w-1/2 h-1/2 md:h-screen bg-[url('/images/background1.jpg')] bg-cover bg-left">
                <div className="w-full h-full flex items-center justify-center bg-blue-700/90 ">
                    <div className="flex items-center gap-5 ">
                        <p className=" font-bold text-white text-6xl py-1 px-5 border-r-8 border-white">SOXIO</p>
                        <p className="text-gray-100 text-xl tracking-wide">The partner you <br /> can count on</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-screen min-w-1/2 flex items-center justify-center md:p-20 bg-[url('/images/background1.jpg')] bg-left bg-cover md:bg-none bg-white ">
                <div className="relative w-full h-full flex flex-col items-center justify-center md:items-start gap-4 p-6 bg-blue-700/90 md:bg-white">
                    <div className="md:hidden absolute top-4 -left-2 scale-75 flex items-center gap-2 ">
                        <p className=" font-bold text-white text-xl py-1 px-2 border-r-5 border-white">SOXIO</p>
                        <p className="text-gray-100 text-[10px] tracking-wide">The partner you <br /> can count on</p>
                    </div>
                    <p className="border-l-6 border-white md:border-blue-600 py-2 px-2 bg-white/5 md:bg-gray-100 text-xl text-white md:text-blue-600 font-bold">Point of Sale</p>
                    <p className="text-center md:text-left font-semibold text-3xl text-white md:text-gray-900 ">Maximize Efficiency and Drive Business Growth</p>
                    <p className="text-center md:text-left font-medium text-blue-300 md:text-gray-500">Our POS app offers a comprehensive suite of features that streamline your operations and empower you to take control.</p>
                    <Link 
                        href="/pos" 
                        className="md:w-fit px-8 md:px-6 bg-white md:bg-blue-700 text-blue-700 md:text-white font-semibold py-3 rounded-3xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Live Demo 
                        <GoArrowRight 
                            size={18} 
                            strokeWidth={1} 
                            className="text-blue-700 md:text-white" 
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

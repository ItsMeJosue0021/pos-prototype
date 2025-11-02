import Link from "next/link";

export default function Home() {
    return (
      <div className="relative flex flex-col md:flex-row min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <div className="w-full min-w-1/2 h-1/2 md:h-screen bg-red-700">
              {/* <div className="w-80 h-80 mb-16 bg-red-700 rounded-full flex items-center justify-center">
                  <img src="/images/yummyyes.png" alt="image" className="w-72 "/>
              </div> */}
          </div>

          <div className="w-full min-w-1/2 flex flex-col items-center md:items-start p-6 md:p-20 gap-4">
            <p className="text-center md:text-left font-semibold text-3xl ">Maximize Efficiency and Drive Business Growth</p>
            <p className="text-center md:text-left font-medium text-gray-500">Our POS app offers a comprehensive suite of features that streamline your operations and empower you to take control.</p>
            <Link href="/pos" className="md:w-fit px-8 md:px-6 bg-red-700 text-white font-semibold py-3 rounded-3xl transition-all duration-300 flex items-center justify-center gap-2">
                Get Started
            </Link>
          </div>
      </div>
    );
}

import Link from "next/link";

export default function Home() {
    return (

      <div className="relative flex flex-col min-h-screen items-center justify-center bg-zinc-50 p-5 font-sans dark:bg-black">
        {/* bg-zinc-50 */}

        {/* <div className="absolute top-8 left-0 right-0 flex justify-center">
              <div className="p-1 bg-red-700">
                <img src="/images/yummyyes.png" alt="image" className="w-24" />
              </div>
          </div> */}

          <div className="w-80 h-80 mb-16 bg-red-700 rounded-full flex items-center justify-center">
              <img src="/images/yummyyes.png" alt="image" className="w-72 "/>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
             <h1 className="text-center font-semibold text-3xl ">Maximize Efficiency and Drive Business Growth</h1>
             <p className="text-center font-medium text-gray-500">Our POS app offers a comprehensive suite of features that streamline your operations and empower you to take control.</p>
          </div>

          <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 shadow-md">
              <Link href="/pos" className="w-full bg-red-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started
              </Link>
          </div>
      </div>
    );
}

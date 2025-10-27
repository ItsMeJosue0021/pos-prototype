import { Button } from "./ui/button";

const SidePanel = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <div className="relative w-full md:w-80 h-full max-h-screen flex flex-col p-1 border-l border-gray-200">
            <div className="h-screen max-h-screen overflow-y-auto">
                {children}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full py-3 px-5 bg-white">
                <Button 
                    variant="secondary" 
                    className="w-full bg-green-500 hover:bg-green-600 rounded-3xl text-white">
                    Process Payment
                </Button>
            </div>
        </div>
    )
}

export default SidePanel;
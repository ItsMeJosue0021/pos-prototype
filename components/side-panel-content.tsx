import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SidePanelContent = () => {
    return (
        <div className="h-[95%] max-h-[95%] overflow-y-auto hide-scrollbar p-4">
            <div className="flex items-center justify-between mb-4">
                <label className="font-semibold text-sm">Bill Detail</label>
                <span className="text-sm text-gray-600">#087898</span>
            </div>
            <div className="grid w-full max-w-sm items-center gap-2 mb-5">
                <Label 
                    htmlFor="name" 
                    className=""
                >
                    Customer Name
                </Label>
                <Input 
                    id="name" 
                    type="text" 
                    placeholder="Customer Name"
                />
            </div>

            <div className="h-[90%] max-h-[90%] overflow-y-auto">
                <div className="w-full border-t border-gray-200 py-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="name" className="text-sm font-semibold">Caramel Java Capuccino</Label>
                        <span className="font-semibold text-xs text-green-500">$4.99</span>
                    </div>
                    <div className="flex flex-col space-y-1 py-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Cup Size</span>
                            <span className="text-xs text-gray-500">L</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Ice Level</span>
                            <span className="text-xs text-gray-500">100%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Sugar Level</span>
                            <span className="text-xs text-gray-500">60%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Topping</span>
                            <span className="text-xs text-gray-500">Chocolate, Foam</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Amount</span>
                            <span className="text-xs text-gray-500">2</span>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t border-gray-200 py-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="name" className="text-sm font-semibold">Caramel Java Capuccino</Label>
                        <span className="font-semibold text-xs text-green-500">$4.99</span>
                    </div>
                    <div className="flex flex-col space-y-1 py-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Cup Size</span>
                            <span className="text-xs text-gray-500">L</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Ice Level</span>
                            <span className="text-xs text-gray-500">100%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Sugar Level</span>
                            <span className="text-xs text-gray-500">60%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Topping</span>
                            <span className="text-xs text-gray-500">Chocolate, Foam</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Amount</span>
                            <span className="text-xs text-gray-500">2</span>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t border-gray-200 py-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="name" className="text-sm font-semibold">Caramel Java Capuccino</Label>
                        <span className="font-semibold text-xs text-green-500">$4.99</span>
                    </div>
                    <div className="flex flex-col space-y-1 py-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Cup Size</span>
                            <span className="text-xs text-gray-500">L</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Ice Level</span>
                            <span className="text-xs text-gray-500">100%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Sugar Level</span>
                            <span className="text-xs text-gray-500">60%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Topping</span>
                            <span className="text-xs text-gray-500">Chocolate, Foam</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Amount</span>
                            <span className="text-xs text-gray-500">2</span>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t border-gray-200 py-3">
                    <div className="flex flex-col space-y-1 py-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Item</span>
                            <span className="text-xs text-gray-600 font-semibold"> 1 (items)</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Subtotal</span>
                            <span className="text-xs text-gray-600 font-semibold">$34.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Discount</span>
                            <span className="text-xs text-green-500 font-semibold">-$20.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Tax (10%)</span>
                            <span className="text-xs text-gray-600 font-semibold">$3.50</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full border-t-2 border-dashed border-gray-200 py-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">Total</span>
                    <span className="text-sm text-green-500 font-semibold">$37</span>
                </div>
            </div>
        </div>
    )
}

export default SidePanelContent;
import PointOfSaleHeader from "@/components/pos-header";

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen font-sans bg-zinc-50 dark:bg-black">
        <PointOfSaleHeader />
        {children}
    </div>
  );
}

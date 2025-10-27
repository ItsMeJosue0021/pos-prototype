import PointOfSaleHeader from "@/components/pos-header";

export default function PointOfSaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col max-h-screen font-sans bg-zinc-50 dark:bg-black">
        <PointOfSaleHeader />
        {children}
    </div>
  );
}

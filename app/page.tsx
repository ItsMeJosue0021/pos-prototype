import SidePanel from "@/components/side-panel"
import SidePanelContent from "@/components/side-panel-content"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full flex items-start gap-4 ">
        <div className="hidden md:block w-full gap-6 p-5">
        </div>
        <div className="w-full md:w-80">
          <SidePanel>
            <SidePanelContent/>
          </SidePanel>
        </div>
      </main>
    </div>
  );
}

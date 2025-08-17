import { SidebarSection } from "@/app/components/Sidebar"

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-slate-900">
      <SidebarSection />
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
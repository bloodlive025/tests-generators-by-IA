"use client"
import { Button } from "@/app/components/ui/Button"
import { GraduationCap} from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="font-heading font-bold text-xl text-slate-900">ExamGen</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#inicio" className="text-slate-600 hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <Link href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
            Características
          </Link>
          <Link href="#precios" className="text-slate-600 hover:text-blue-600 transition-colors">
            Precios
          </Link>
        </nav>


        <div className="flex items-center gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Iniciar Sesión</Button>
        </div>
      </div>
    </header>
  )
}
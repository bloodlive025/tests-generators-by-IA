import { GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl">ExamGen</span>
          </div>

          <div className="flex gap-8 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>

          <p className="text-slate-400 text-sm">© 2025 ExamGen. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

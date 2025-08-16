import { Button } from "@/app/components/ui/Button"
import { Check, X } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="precios" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white">Planes Simples y Transparentes</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Comienza gratis y escala según tus necesidades</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Gratuito */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">Gratuito</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">S/0</span>
                    <span className="text-slate-400">/mes</span>
                  </div>
                  <p className="text-slate-400 mt-2">Perfecto para empezar</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">10 exámenes por mes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">Plantillas básicas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">Exportar PDF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="h-5 w-5 text-slate-500" />
                    <span className="text-slate-500">IA avanzada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="h-5 w-5 text-slate-500" />
                    <span className="text-slate-500">Soporte prioritario</span>
                  </li>
                </ul>

                <Link href="/login">
                  <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white border border-slate-600">
                    Comenzar Gratis
                  </Button>
                </Link>
              </div>
            </div>

            {/* Plan Pro */}
            <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur border border-blue-500/50 rounded-2xl p-8 relative hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Recomendado
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">Pro</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">S/5</span>
                    <span className="text-slate-400">/mes</span>
                  </div>
                  <p className="text-slate-400 mt-2">Para educadores profesionales</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">Exámenes ilimitados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">IA avanzada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">Todas las plantillas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">Exportar múltiples formatos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-300">Soporte prioritario</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white">
                  Comenzar Prueba Pro
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

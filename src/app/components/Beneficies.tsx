import { BENEFICIES } from "../consts";
import { Card } from "./ui/Card";

export function BeneficiesSection() {
    return (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-slate-900">
                Beneficios para Toda la Comunidad Educativa
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Una solución integral que mejora la experiencia educativa para profesores, estudiantes e instituciones por
                igual.
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {BENEFICIES.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <section className="p-0">
                    <div className={`bg-gradient-to-r ${benefit.color} p-8 text-white`}>
                      <benefit.icon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-heading font-bold text-2xl mb-2">{benefit.title}</h3>
                      <p className="text-white/90 font-medium">{benefit.subtitle}</p>
                    </div>
                    <div className="p-8 space-y-4">
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="text-sm text-slate-500">Mejora promedio</span>
                        <span className="font-heading font-bold text-lg text-slate-900">{benefit.stats}</span>
                      </div>
                    </div>
                  </section>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )
}
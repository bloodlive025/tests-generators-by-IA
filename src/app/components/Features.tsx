import { FEATURES, GRID_CLASS } from "../consts";
import { Card } from "./ui/Card";

export function FeaturesSection() {

  return (
    <section id="features" className="py-20 bg-slate-900">
       <div className="container mx-auto px-4">
         <div className="text-center space-y-4 mb-16">
           <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white">
             Características que Transforman tu Enseñanza
           </h2>
           <p className="text-lg text-slate-300 max-w-3xl mx-auto">
             Herramientas poderosas diseñadas específicamente para educadores modernos que buscan eficiencia sin
             comprometer la calidad.
           </p>
         </div>
         <div className="grid grid-cols-3 grid-rows-3 gap-4">
             {
                 FEATURES.map((feature, index) =>(
                     <Card key={index} size={feature.size} className={` bg-slate-800/50 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group cursor-pointer overflow-hidden relative ${GRID_CLASS[index]}`}>
                       <div
                         className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl ${feature.color} border flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                       >
                         <feature.icon className="h-6 w-6 lg:h-8 lg:w-8 group-hover:animate-pulse" />
                       </div>
                       <h3 className="font-heading font-semibold text-lg lg:text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                         {feature.title}
                       </h3>
                       <p className="text-slate-300 leading-relaxed text-sm lg:text-base group-hover:text-slate-200 transition-colors duration-300">
                         {feature.description}
                       </p>
                     </Card>
                 ))
             }
         </div>
       </div>
     </section>
   );
}
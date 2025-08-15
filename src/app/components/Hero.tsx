"use client"
import { Sparkles, Zap, Users } from "lucide-react"
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [text, setText] = useState('Minutos');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = ['En Minutos', 'No en Horas'];

  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const pauseTime = 2000;

    const type = () => {
      const currentWord = words[currentIndex];
      
      if (isDeleting) {
        // Borrando
        setText(prev => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Escribiendo
        if (text === currentWord) {
          // Pausa antes de borrar
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
        setText(currentWord.slice(0, text.length + 1));
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, words]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-white leading-tight">
                Crea Exámenes Profesionales {' '}
                <span className="text-blue-400">
                  {text}
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Genera automáticamente exámenes personalizados con IA. Ahorra tiempo, mejora la calidad educativa y
                enfócate en lo que realmente importa: enseñar.
              </p>
            </div>
          </div>           

          <div className="relative">
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-80">
              {/* Main feature card */}
              <div className="col-span-2 row-span-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Sparkles className="h-8 w-8 text-blue-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="font-semibold text-lg text-white mb-2">IA Avanzada</h3>
                  <p className="text-slate-300 text-sm">Genera exámenes inteligentes basados en tu contenido</p>
                </div>
              </div>

              {/* Speed indicator */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 hover:scale-110 transition-all duration-300 group cursor-pointer">
                <Zap className="h-6 w-6 text-white mb-2 group-hover:animate-bounce" />
                <p className="text-white text-xs font-medium">Generación en segundos</p>
              </div>

              {/* Stats card */}
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-lg p-4 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform">
                    10K+
                  </div>
                  <p className="text-xs text-slate-300">Exámenes creados</p>
                </div>
              </div>

              {/* Users indicator */}
              <div className="col-span-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-4 hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-white/10  group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <Users className="h-6 w-6 text-white group-hover:rotate-6 transition-transform" />
                  <div>
                    <p className="text-white font-medium text-sm">5,000+ Educadores</p>
                    <p className="text-white/80 text-xs">Confían en nosotros</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              IA Integrada
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-110 transition-transform cursor-pointer">
              ⚡ Generación Instantánea
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

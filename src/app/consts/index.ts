import {Brain , Clock, FileText, Database, Palette, BarChart3, Users, Building , Plus , Search , BookOpen , Menu } from "lucide-react"
import { Feature } from "@/app/types/types";

export const FEATURES: Feature[] = [
    {
        icon: Brain,
        title: "Generación Automática con IA",
        description: "Crea exámenes basados en tus materiales de curso utilizando inteligencia artificial avanzada.",
        color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      },
      {
        icon: Clock,
        title: "Ahorro de Tiempo",
        description: "Reduce el tiempo de creación de exámenes en un 90%.",
        color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      },
      {
        icon: FileText,
        title: "Múltiples Formatos",
        description: "Opción múltiple, verdadero/falso, preguntas abiertas, ensayos y más.",
        color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      },
      {
        icon: Database,
        title: "Banco de Preguntas Inteligente",
        description: "Reutiliza y organiza automáticamente tu contenido. Construye una biblioteca que mejora con cada uso.",
        color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      },
      {
        icon: Palette,
        title: "Personalización",
        description: "Adapta el diseño y formato a tu institución.",
        color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      },
      {
        icon: BarChart3,
        title: "Análisis y Estadísticas",
        description: "Reportes detallados del rendimiento estudiantil con insights accionables.",
        color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      }
]

export const BENEFICIES = [
  {
    icon: Clock,
    title: "Para Profesores",
    subtitle: "Reduce el tiempo de creación de exámenes",
    description:
      "Dedica más tiempo a enseñar y menos a crear evaluaciones. Nuestro sistema genera exámenes de calidad en minutos.",
    stats: "75% menos tiempo",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Para Estudiantes",
    subtitle: "Exámenes más justos y balanceados",
    description:
      "Evaluaciones consistentes que reflejan verdaderamente el conocimiento adquirido, sin sesgos ni preguntas repetitivas.",
    stats: "90% satisfacción",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Building,
    title: "Para Instituciones",
    subtitle: "Estandarización y consistencia en evaluaciones",
    description:
      "Mantén la calidad educativa en todos los departamentos con herramientas que aseguran estándares uniformes.",
    stats: "100% cumplimiento",
    color: "from-amber-500 to-amber-600",
  }
]

export const SIDEBAR_OPTIONS = [
  { icon: Plus, label: "Nuevo Examen", primary: true },
  { icon: Search, label: "Buscar Exámenes", primary: true },
  { icon: BookOpen, label: "Biblioteca PDF", primary: true },
]

export const RECENTS_EXAMENS = [ //sIMULACION DE LOS EXAMENES - LUEGO ELIMINAR
  { id: "1", title: "Examen de Matemáticas - Álgebra", date: "2 horas", type: "Matemáticas" },
    { id: "2", title: "Evaluación Historia Universal", date: "1 día", type: "Historia" },
    { id: "3", title: "Quiz Biología Celular", date: "3 días", type: "Ciencias" },
    { id: "4", title: "Examen Programación Python", date: "1 semana", type: "Tecnología" },
    { id: "5", title: "Evaluación Literatura Española", date: "1 semana", type: "Literatura" },
    { id: "6", title: "Quiz Química Orgánica", date: "2 semanas", type: "Ciencias" },
    { id: "7", title: "Examen Inglés Intermedio", date: "2 semanas", type: "Idiomas" },
    { id: "8", title: "Evaluación Física Mecánica", date: "3 semanas", type: "Ciencias" },
]

export const GRID_CLASS = [
  "col-span-2",
  "col-start-3",
  "row-start-2",
  "row-start-2",
  "row-span-2 row-start-2",
  "col-span-2 row-start-3"
]
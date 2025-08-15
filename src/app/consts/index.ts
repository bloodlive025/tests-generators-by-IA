import {Brain , Clock, FileText, Database, Palette, BarChart3, Users, Building} from "lucide-react"
import { Feature } from "@/app/types/types";

export const FEATURES: Feature[] = [
    {
        icon: Brain,
        title: "Generación Automática con IA",
        description: "Crea exámenes basados en tus materiales de curso utilizando inteligencia artificial avanzada.",
        color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        size: "large" as const,
      },
      {
        icon: Clock,
        title: "Ahorro de Tiempo",
        description: "Reduce el tiempo de creación de exámenes en un 90%.",
        color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        size: "small" as const,
      },
      {
        icon: FileText,
        title: "Múltiples Formatos",
        description: "Opción múltiple, verdadero/falso, preguntas abiertas, ensayos y más.",
        color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        size: "small" as const,
      },
      {
        icon: Database,
        title: "Banco de Preguntas Inteligente",
        description: "Reutiliza y organiza automáticamente tu contenido. Construye una biblioteca que mejora con cada uso.",
        color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
        size: "small" as const,
      },
      {
        icon: Palette,
        title: "Personalización",
        description: "Adapta el diseño y formato a tu institución.",
        color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
        size: "small" as const,
      },
      {
        icon: BarChart3,
        title: "Análisis y Estadísticas",
        description: "Reportes detallados del rendimiento estudiantil con insights accionables.",
        color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
        size: "large" as const,
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


export const GRID_CLASS = [
  "col-span-2",
  "col-start-3",
  "row-start-2",
  "row-start-2",
  "row-span-2 row-start-2",
  "col-span-2 row-start-3"
]
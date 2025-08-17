"use client"

import { ConfigurationFormProps } from "@/app/types/types"
import { Button } from "@/app/components/ui/Button"
import { SPECIFIC_GRADES  , GRADES ,  QUESTION_TYPES} from "@/app/consts"
export function ConfigurationForm({ config, onConfigChange }: ConfigurationFormProps) {
 
  const handleGradeChange = (grade: string) => {
    const firstSpecificGrade = SPECIFIC_GRADES[grade as keyof typeof SPECIFIC_GRADES]?.[0]?.value || ""
    onConfigChange({ 
      ...config, 
      grade, 
      specificGrade: firstSpecificGrade 
    })
  }

  // Maneja el cambio de grado específico
  const handleSpecificGradeChange = (specificGrade: string) => {
    onConfigChange({ ...config, specificGrade })
  }

  return (
    <div className="space-y-6">
      {/* Selección de Nivel Educativo Principal */}
      <div>
        <label className="block text-white font-medium mb-3">Nivel Educativo</label>
        <div className="grid grid-cols-2 gap-2">
          {GRADES.map((grade) => (
            <button
              key={grade.value}
              onClick={() => handleGradeChange(grade.value)}
              className={`p-3 rounded-lg border transition-all duration-300 text-sm font-medium ${
                config.grade === grade.value
                  ? "bg-blue-500/20 border-blue-400 text-blue-300"
                  : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500"
              }`}
            >
              {grade.label}
            </button>
          ))}
        </div>
      </div>

      {/* Selección de Grado Específico - Solo se muestra cuando hay un nivel seleccionado */}
      {config.grade && (
        <div>
          <label className="block text-white font-medium mb-3">
            {config.grade === "primaria" && "Grado"}
            {config.grade === "secundaria" && "Año"}
            {config.grade === "universidad" && "Ciclo"}
            {config.grade === "posgrado" && "Tipo de Programa"}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {SPECIFIC_GRADES[config.grade as keyof typeof SPECIFIC_GRADES]?.map((specificGrade) => (
              <button
                key={specificGrade.value}
                onClick={() => handleSpecificGradeChange(specificGrade.value)}
                className={`p-3 rounded-lg border transition-all duration-300 text-sm font-medium ${
                  config.specificGrade === specificGrade.value
                    ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500"
                }`}
              >
                {specificGrade.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selección de Tipo de Preguntas */}
      <div>
        <label className="block text-white font-medium mb-3">Tipo de Preguntas</label>
        <div className="space-y-2">
          { QUESTION_TYPES.map((type) => (
            <Button
              key={type.value}
              onClick={() => onConfigChange({ ...config, questionType: type.value })}
              className={`w-full p-3 rounded-lg border transition-all duration-300 text-sm font-medium text-left ${
                config.questionType === type.value
                  ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                  : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500"
              }`}
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

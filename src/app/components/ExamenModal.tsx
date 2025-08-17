"use client"

import { useState, useEffect } from "react"
import { QuestionCard } from "@/app/components/ui/QuestionCard"
import { ExamModalProps , Question } from "../types/types"
import { Button } from "./ui/Button"

export function ExamModal({ isOpen, onClose, config, files, inline = false }: ExamModalProps & { inline?: boolean }) {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])
  const [optionalQuestions, setOptionalQuestions] = useState<Question[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [draggedQuestion, setDraggedQuestion] = useState<string | null>(null)

  // Generate mock questions based on config
  useEffect(() => {
    if (isOpen) {
      const mockSelected: Question[] = [
        {
          id: "1",
          text: "¿Cuál es la capital de Francia?",
          type: "resolver",
          answer: "París",
        },
        {
          id: "2",
          text: "La fotosíntesis es el proceso por el cual las plantas producen oxígeno.",
          type: "verdadero-falso",
          answer: "Verdadero",
        },
        {
          id: "3",
          text: "Explica el teorema de Pitágoras y proporciona un ejemplo.",
          type: "resolver",
        },
      ]

      const mockOptional: Question[] = Array.from({ length: 10 }, (_, i) => ({
        id: `opt-${i + 1}`,
        text: `Pregunta opcional ${i + 1}: ¿Cuál es tu opinión sobre el tema ${i + 1}?`,
        type: config.questionType === "verdadero-falso" ? "verdadero-falso" : "resolver",
        answer: config.questionType === "verdadero-falso" ? "Verdadero" : undefined,
      }))

      setSelectedQuestions(mockSelected)
      setOptionalQuestions(mockOptional)
    }
  }, [isOpen, config])

  const handleDragStart = (questionId: string) => {
    setDraggedQuestion(questionId)
  }

  const handleDragEnd = () => {
    setDraggedQuestion(null)
  }

  const moveToSelected = (questionId: string) => {
    const question = optionalQuestions.find((q) => q.id === questionId)
    if (question) {
      setOptionalQuestions((prev) => prev.filter((q) => q.id !== questionId))
      setSelectedQuestions((prev) => [...prev, question])
    }
  }

  const removeFromSelected = (questionId: string) => {
    const question = selectedQuestions.find((q) => q.id === questionId)
    if (question && !question.id.startsWith("opt-")) {
      setSelectedQuestions((prev) => prev.filter((q) => q.id !== questionId))
      setOptionalQuestions((prev) => [...prev, question])
    } else {
      setSelectedQuestions((prev) => prev.filter((q) => q.id !== questionId))
    }
  }

  //Simulacion de la genracion de pdf
  const handleGeneratePDF = async () => {
    setIsGenerating(true)
    // Simulate PDF generation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)

    // Create a mock download
    const element = document.createElement("a")
    element.href = "data:text/plain;charset=utf-8,Examen generado con ExamGen"
    element.download = "examen.pdf"
    element.click()
  }

  // Si no está abierto y no es inline, no renderizar nada
  if (!isOpen && !inline) return null

  // Contenido del modal
  const modalContent = (
    <div className={`${inline ? 'w-full' : 'relative w-full max-w-6xl max-h-[90vh]'} rounded-2xl shadow-2xl  border-slate-700 overflow-hidden ${inline ? '' : 'animate-in slide-in-from-bottom-4 duration-300'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6  border-slate-700">
        <Button
            onClick={handleGeneratePDF}
            disabled={isGenerating || selectedQuestions.length === 0}
            className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 flex items-center gap-2"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Generando PDF...
              </>
            ) : (
              <>📄 Generar PDF del Examen</>
            )}
          </Button>
      </div>

      {/* Content */}
      <div className={`flex ${inline ? 'h-[80vh]' : 'h-[80vh]'}`}>
        {/* Selected Questions */}
        <div className="flex-1 p-6 border-r border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
              {selectedQuestions.length}
            </span>
            Preguntas Seleccionadas
          </h3>
          <div className="space-y-3 overflow-y-auto h-full pb-20">
            {selectedQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onRemove={() => removeFromSelected(question.id)}
                onDragStart={() => handleDragStart(question.id)}
                onDragEnd={handleDragEnd}
                isDragging={draggedQuestion === question.id}
                showRemove
              />
            ))}
          </div>
        </div>

        {/* Optional Questions */}
        <div className="flex-1 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-xs text-white">
              {optionalQuestions.length}
            </span>
            Preguntas Opcionales
          </h3>
          <div className="space-y-3 overflow-y-auto h-full pb-20">
            {optionalQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onAdd={() => moveToSelected(question.id)}
                onDragStart={() => handleDragStart(question.id)}
                onDragEnd={handleDragEnd}
                isDragging={draggedQuestion === question.id}
                showAdd
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  // Si es inline, renderizar directamente el contenido
  if (inline) {
    return modalContent
  }

  // Si no es inline, renderizar como popup
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      {modalContent}
    </div>
  )
}

"use client"

import { QuestionCardProps } from "@/app/types/types"
export function QuestionCard({
  question,
  onAdd,
  onRemove,
  onDragStart,
  onDragEnd,
  isDragging,
  showAdd,
  showRemove,
}: QuestionCardProps) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={`bg-slate-700/50 border border-slate-600 rounded-xl p-4 transition-all duration-300 cursor-move hover:shadow-lg hover:shadow-blue-500/20 ${
        isDragging ? "dragging" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                question.type === "verdadero-falso"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
              }`}
            >
              {question.type === "verdadero-falso" ? "V/F" : "Resolver"}
            </span>
            <span className="text-slate-500 text-xs">#{question.id}</span>
          </div>

          <p className="text-white text-sm leading-relaxed mb-2">{question.text}</p>

          {question.answer && (
            <p className="text-emerald-400 text-xs">
              <strong>Respuesta:</strong> {question.answer}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="text-slate-500 cursor-grab active:cursor-grabbing">⋮⋮</div>

          {showAdd && (
            <button
              onClick={onAdd}
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Agregar a seleccionadas"
            >
              ➕
            </button>
          )}

          {showRemove && (
            <button
              onClick={onRemove}
              className="text-red-400 hover:text-red-300 transition-colors"
              title="Remover de seleccionadas"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

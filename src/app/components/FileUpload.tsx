"use client"

import type React from "react"

import { useCallback } from "react"
import { FileUploadProps } from "../types/types"


export function FileUpload({ files, onFilesChange }: FileUploadProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.currentTarget.classList.remove("drag-over")

      const droppedFiles = Array.from(e.dataTransfer.files).filter(
        (file) =>
          file.type === "application/pdf" ||
          file.type === "application/vnd.ms-excel" ||
          file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      )

      onFilesChange([...files, ...droppedFiles])
    },
    [files, onFilesChange],
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.add("drag-over")
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.remove("drag-over")
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      onFilesChange([...files, ...selectedFiles])
    }
  }

  const removeFile = (index: number) => {
    onFilesChange(files.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/5 cursor-pointer"
      >
        <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">📁</span>
        </div>
        <p className="text-white font-medium mb-2">Arrastra tus archivos aquí</p>
        <p className="text-slate-400 text-sm mb-4">o haz clic para seleccionar</p>
        <input
          type="file"
          multiple
          accept=".pdf,.xls,.xlsx"
          onChange={handleFileInput}
          className="hidden"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer inline-block"
        >
          Seleccionar Archivos
        </label>
        <p className="text-slate-500 text-xs mt-2">PDF, Excel (.xls, .xlsx)</p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-white font-medium">Archivos cargados:</h3>
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <span className="text-lg">{file.type.includes("pdf") ? "📄" : "📊"}</span>
                <div>
                  <p className="text-white text-sm font-medium">{file.name}</p>
                  <p className="text-slate-400 text-xs">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button onClick={() => removeFile(index)} className="text-red-400 hover:text-red-300 transition-colors">
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

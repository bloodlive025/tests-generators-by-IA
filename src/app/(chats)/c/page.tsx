"use client"
import { Button } from "@/app/components/ui/Button"
import { useState} from "react"
import { ConfigurationForm } from "@/app/components/ConfigurationForm"
import { FileUpload } from "@/app/components/FileUpload"
import { ExamModal } from "@/app/components/ExamenModal"

export default function ChatsPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [config, setConfig] = useState({
    grade: "",
    specificGrade: "",
    questionType: "",
  })

  const handleGenerateExam = () => {
    if (files.length > 0 && config.grade && config.specificGrade && config.questionType) {
      setIsGenerating(true)
    }
  }

  const handleBackToForm = () => {
    setIsGenerating(false)
  }

  // Contenido del formulario de configuración
  const renderConfigurationForm = () => (
    <>
      {/* Main Configuration Card */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-8 mb-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* File Upload Section */}
          <div>
            <h2 className="font-semibold text-xl text-white mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg flex items-center justify-center">
                📄
              </div>
              Carga de Archivos
            </h2>
            <FileUpload files={files} onFilesChange={setFiles} />
          </div>

          {/* Configuration Section */}
          <div>
            <h2 className="font-semibold text-xl text-white mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                ⚙️
              </div>
              Configuración
            </h2>
            <ConfigurationForm config={config} onConfigChange={setConfig} />
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={handleGenerateExam}
            disabled={files.length === 0 || !config.grade || !config.specificGrade || !config.questionType}
            className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl hover:shadow-blue-500/30"
          >
            Generar Examen
          </Button>
        </div>
      </div>
    </>
  )

  // Contenido del examen generado usando ExamenModal
  const renderGeneratedExam = () => (
    <div className="w-full">
      {/* Renderizar ExamenModal inline sin popup */}
      <ExamModal 
        isOpen={true} 
        onClose={handleBackToForm} 
        config={config} 
        files={files}
        inline={true}
      />
    </div>
  )

  return (
    <div className="flex flex-col h-full bg-slate-900">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {!isGenerating ? renderConfigurationForm() : renderGeneratedExam()}
        </div>
      </main>
    </div>
  )
}
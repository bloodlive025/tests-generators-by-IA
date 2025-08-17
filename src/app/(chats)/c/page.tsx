"use client"
import { Button } from "@/app/components/ui/Button"
import { Sparkles, Brain, Mic, Send, Plus } from "lucide-react"
import { useState, useRef } from "react"

export default function ChatsPage() {
  const [prompt, setPrompt] = useState("")
  const textareaRef = useRef(null)

  const handleTextareaInput = (e) => {
    const target = e.target
    target.style.height = 'auto'
    const newHeight = Math.min(target.scrollHeight, 300)
    target.style.height = newHeight + 'px'
    
    // Agregar overflow-y-auto si la altura es mayor a 200px
    if (newHeight > 200) {
      target.style.overflowY = 'auto'
    } else {
      target.style.overflowY = 'hidden'
    }
  }

  return (
    <div className="flex flex-col h-full bg-slate-900">
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-2">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Mejorar a Pro
            </Button>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <section className="flex flex-col justify-end">
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="max-w-2xl w-full text-center space-y-8">
            {/* Welcome Message */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">¿Qué examen quieres crear hoy?</h2>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4">
          <form className="max-w-4xl mx-auto">
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe el examen que quieres crear o sube un PDF..."
                rows={1}
                className="w-full pr-32 p-3 text-base bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none overflow-hidden"
                style={{
                  minHeight: '48px',
                  maxHeight: '300px'
                }}
                onInput={handleTextareaInput}
              />
              <div className="flex justify-end mt-3 gap-2">
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  className="h-8 w-8 p-0 text-slate-400 hover:text-blue-400 hover:bg-slate-700/50 rounded-lg"
                >
                  <Plus className="w-4 h-4" />
                </Button>
                <Button 
                  type="button" 
                  size="sm" 
                  variant="ghost" 
                  className="h-8 w-8 p-0 text-slate-400 hover:text-blue-400 hover:bg-slate-700/50 rounded-lg"
                >
                  <Mic className="w-4 h-4" />
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  disabled={!prompt.trim()}
                  className="h-8 w-8 p-0 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
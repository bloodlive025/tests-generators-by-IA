"use client"

import { useState } from "react"
import { SIDEBAR_OPTIONS, RECENTS_EXAMENS } from "../consts"
import { Menu, ChevronLeft, History, Users } from "lucide-react"
import { Button } from "@/app/components/ui/Button"
import { CardExamen } from "./ui/CardExamen"

export function SidebarSection() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedChat, setSelectedChat] = useState<string>("")

  return (
    <section className="flex h-screen text-white">
      <div className={`${isCollapsed ? "w-16" : "w-60"} bg-slate-900/95 backdrop-blur-sm border-r border-slate-700 flex flex-col transition-all duration-300 shadow-2xl shadow-blue-500/10`}>
        
        {/* Header con botón de colapsar */}
        <div className="flex flex-col p-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between mb-4">
            {!isCollapsed && (
              <h2 className="text-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text p-2">
                ExamGen
              </h2>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 hover:bg-slate-800/50 hover:text-blue-400 transition-all duration-300 group rounded-xl"
            >
              {isCollapsed ? (
                <Menu className="w-5 h-5 text-slate-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-slate-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              )}
            </Button>
          </div>

          {/* Navigation Options */}
          <div className="space-y-2">
            {SIDEBAR_OPTIONS.map((option, index) => {
              if (isCollapsed && !option.primary) return null

              return (
                <Button
                  key={index}
                  variant="ghost"
                  className={`w-full ${isCollapsed ? "justify-center px-2" : "justify-start"} text-slate-300 hover:bg-slate-800/50 hover:text-blue-400 transition-all duration-300 rounded-xl group ${
                    option.label === "Nuevo Examen" ? "text-blue-400 hover:text-blue-300 hover:bg-blue-500/20" : ""
                  }`}
                  size="sm"
                  title={isCollapsed ? option.label : undefined}
                >
                  <option.icon
                    className={`w-4 h-4 ${isCollapsed ? "" : "mr-2"} transition-all duration-300 group-hover:scale-110 ${
                      option.label === "Nuevo Examen" ? "text-blue-400" : ""
                    }`}
                  />
                  {!isCollapsed && option.label}
                </Button>
              )
            })}
          </div>
        </div>

        {!isCollapsed && (
          <>
            {/* Recent Exams */}
            <div className="flex-1 overflow-y-auto p-4">
              <h3 className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-2">
                <History className="w-4 h-4 text-blue-400" />
                Exámenes Recientes
              </h3>
              <div className="space-y-2">
                {RECENTS_EXAMENS.map((exam) => (
                  <CardExamen
                    key={exam.id}
                    id={exam.id}
                    title={exam.title}
                    date={exam.date}
                    type={exam.type}
                    isSelected={selectedChat === exam.id}
                    onClick={() => setSelectedChat(exam.id)}
                  />
                ))}
              </div>
            </div>

            {/* User Section */}
            <div className="p-4 border-t border-slate-700/50">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">Usuario Pro</p>
                  <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Plan Premium</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
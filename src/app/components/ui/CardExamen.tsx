import { CardExamenProps } from "@/app/types/types";
import { FileText } from "lucide-react";

export function CardExamen({ 
  id, 
  title, 
  date, 
  type, 
  isSelected = false, 
  onClick, 
  className = "" 
}: CardExamenProps) {
  return (
    <div
      className={`p-3 cursor-pointer transition-all duration-300 rounded-xl border border-slate-700/50 hover:border-slate-600/50 ${
        isSelected 
          ? "bg-slate-800/50 border-blue-500/50 shadow-lg shadow-blue-500/20" 
          : "bg-slate-800/30 hover:bg-slate-800/50"
      } ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 ${
          isSelected ? "bg-blue-500/30 border-blue-500/50" : ""
        }`}>
          <FileText className="w-4 h-4 text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">{title}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-slate-400">{date}</span>
            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full border border-blue-500/30">
              {type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
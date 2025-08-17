import { LucideIcon } from 'lucide-react';

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardExamenProps {
  id: string;
  title: string;
  date: string;
  type: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface FileUploadProps {
  files: File[]
  onFilesChange: (files: File[]) => void
}

export interface ConfigurationFormProps {
  config: {
    grade: string
    specificGrade: string
    questionType: string
  }
  onConfigChange: (config: { grade: string; specificGrade: string; questionType: string }) => void
}

export interface Question {
  id: string
  text: string
  type: "verdadero-falso" | "resolver"
  options?: string[]
  answer?: string
}

export interface QuestionCardProps {
  question: Question
  onAdd?: () => void
  onRemove?: () => void
  onDragStart?: () => void
  onDragEnd?: () => void
  isDragging?: boolean
  showAdd?: boolean
  showRemove?: boolean
}

export interface ExamModalProps {
  isOpen: boolean
  onClose: () => void
  config: {
    grade: string
    specificGrade: string
    questionType: string
  }
  files: File[]
}
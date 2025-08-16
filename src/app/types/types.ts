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
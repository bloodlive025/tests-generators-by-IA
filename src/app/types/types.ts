import { LucideIcon } from 'lucide-react';

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    size: 'small' | 'medium' | 'large';
}

export interface CardProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}
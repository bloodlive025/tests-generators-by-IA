import { CardProps } from '@/app/types/types';

export function Card({ children, className }: CardProps) {
      return (
        <section
                className={`${className || ''}`}
              >
                <div className="p-6 lg:p-8 text-center space-y-4 relative z-10 h-full flex flex-col justify-center">
                  {children}
                </div>
              </section>
    )

}

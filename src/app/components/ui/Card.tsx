import { CardProps } from '@/app/types/types';


export function Card({ children, size = 'medium', className }: CardProps) {

    const sizeClasses = {
        small: "md:col-span-1 lg:col-span-1",
        medium: "md:col-span-2 lg:col-span-2",
        large: "md:col-span-2 lg:col-span-2",
      }
    
      return (
        <section
                className={` ${sizeClasses[size]} ${className || ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>

                <div className="p-6 lg:p-8 text-center space-y-4 relative z-10 h-full flex flex-col justify-center">
                  {children}
                </div>
              </section>
    )

}

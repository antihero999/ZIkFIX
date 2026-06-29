import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  image?: string;
  title: string;
  description: React.ReactNode;
  className?: string;
}

export const FeatureCard = ({ icon, image, title, description, className }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl border flex flex-col overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-lg hover:-translate-y-2",
        className
      )}
    >
      {/* Image area */}
      {image && (
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-8 flex flex-col items-center text-center flex-1">
        {/* Icon container */}
        <div className="mb-6 bg-secondary p-4 rounded-full overflow-hidden flex items-center justify-center w-20 h-20">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

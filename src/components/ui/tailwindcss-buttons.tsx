"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonsCardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ButtonsCard = React.forwardRef<HTMLDivElement, ButtonsCardProps>(
  ({ children, onClick, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md cursor-pointer",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <div className="flex items-center justify-center p-6 min-h-[120px]">
          {children}
        </div>
      </div>
    );
  }
);

ButtonsCard.displayName = "ButtonsCard";
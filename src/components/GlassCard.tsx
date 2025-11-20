
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard = ({ children, className, hoverEffect = true, ...props }: GlassCardProps) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300",
                hoverEffect && "hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10",
                className
            )}
            {...props}
        >
            <div className="relative z-10">{children}</div>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/5 via-transparent to-green-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
    );
};

export default GlassCard;


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
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500",
                hoverEffect && "hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {/* Shine effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">{children}</div>

            {/* Border Gradient */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>
    );
};

export default GlassCard;

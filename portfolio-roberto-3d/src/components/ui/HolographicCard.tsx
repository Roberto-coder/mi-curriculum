'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface HolographicCardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function HolographicCard({ children, className, onClick }: HolographicCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group relative p-8 rounded-xl overflow-hidden cursor-pointer selection:bg-none",
                "bg-white/5 backdrop-blur-md border border-white/10",
                "hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
                "transition-all duration-300",
                className
            )}
            onClick={onClick}
        >
            {/* Holographic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Scanline Effect (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />

            {/* Glowing Corner */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/20 blur-2xl group-hover:bg-purple-500/30 transition-colors duration-500" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

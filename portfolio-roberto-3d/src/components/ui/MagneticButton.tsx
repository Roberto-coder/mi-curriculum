'use client';

import { useRef, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

export const MagneticButton = ({ children, onClick, className = "" }: { children: React.ReactNode, onClick?: () => void, className?: string }) => {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove({ clientX, clientY }: MouseEvent) {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const center = { x: left + width / 2, y: top + height / 2 };

        const distance = { x: clientX - center.x, y: clientY - center.y };

        // Rotate based on mouse position relative to center
        x.set(distance.x * 0.1);
        y.set(distance.y * 0.1);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const transform = useMotionTemplate`perspective(1000px) rotateX(${mouseY}deg) rotateY(${mouseX}deg)`;

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ transform }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`relative rounded-xl border border-white/20 bg-black/50 px-6 py-3 font-semibold text-white backdrop-blur-md transition-shadow hover:shadow-lg hover:shadow-indigo-500/20 ${className}`}
        >
            {children}
        </motion.button>
    );
};

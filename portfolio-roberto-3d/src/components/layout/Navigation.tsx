'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Proyectos', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
];

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <div className="backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-full px-8 py-4 border border-white/10">
                <ul className="flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="relative group">
                                <span className="text-sm font-medium tracking-wider text-gray-200 hover:text-white transition-colors duration-300">
                                    {item.name}
                                </span>
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/utils/constants';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full p-6 z-40 pointer-events-none">
            <div className="flex justify-between items-end max-w-7xl mx-auto pointer-events-auto">
                <div className="text-xs text-gray-500 font-mono">
                    © 2026 Antigravity Design system
                    <br />
                    Roberto Quintana
                </div>

                <div className="flex space-x-4">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-white/10 transition-colors text-white border border-white/5">
                        <Github size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-white/10 transition-colors text-white border border-white/5">
                        <Linkedin size={20} />
                    </a>
                    <a href={SOCIAL_LINKS.email}
                        className="p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-white/10 transition-colors text-white border border-white/5">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

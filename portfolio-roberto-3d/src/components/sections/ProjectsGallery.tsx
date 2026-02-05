'use client';

import { useState } from 'react';
import { PROJECTS } from '@/lib/utils/constants';
import InteractiveProjectCard from '@/components/3d/InteractiveProjectCard';
import { useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function ProjectsGallery() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <group position={[0, -2, 0]}>
            {/* Central Star / Hub */}
            <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={2} />
            </mesh>
            <pointLight color="#fbbf24" intensity={2} distance={20} />

            {PROJECTS.map((project, index) => (
                <InteractiveProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    total={PROJECTS.length}
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                />
            ))}

            {/* Detail View Overlay (Project Info) */}
            {activeIndex !== null && (
                <Html position={[0, -2, 0]} center zIndexRange={[100, 0]}>
                    <div className="w-80 bg-black/90 p-6 rounded-xl border border-white/10 text-white backdrop-blur-xl">
                        <h3 className="text-xl font-bold mb-2">{PROJECTS[activeIndex].title}</h3>
                        <p className="text-sm text-gray-300 mb-4">{PROJECTS[activeIndex].description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {PROJECTS[activeIndex].technologies.map(tech => (
                                <span key={tech} className="text-xs bg-white/10 px-2 py-1 rounded">{tech}</span>
                            ))}
                        </div>
                        <button
                            onClick={() => setActiveIndex(null)}
                            className="w-full bg-white text-black py-2 rounded font-bold hover:bg-gray-200"
                        >
                            Close
                        </button>
                    </div>
                </Html>
            )}
        </group>
    );
}

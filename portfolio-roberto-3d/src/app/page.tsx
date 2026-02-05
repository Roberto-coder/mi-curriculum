'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/sections/ContactSection';
import HolographicCard from '@/components/ui/HolographicCard';

export default function Home() {
    return (
        <main className="min-h-screen bg-black overflow-y-auto relative text-white selection:bg-purple-500/30">
            <Navigation />

            {/* 2D Fallback Content */}
            <div className="flex flex-col items-center w-full relative z-10">

                {/* Hero Section */}
                <section id="hero" className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

                    <div className="z-10 text-center px-4 relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse" />
                        <h1 className="relative text-6xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-gray-500 mb-6 tracking-tight">
                            Roberto Quintana
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-200/80 font-light tracking-[0.5em] uppercase animate-pulse">
                            Full Stack Engineer
                        </p>
                    </div>
                </section>

                {/* Projects Section - Placeholder */}
                <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-start pt-32 px-4 relative">
                    <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
                    <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 relative z-10">Proyectos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full relative z-10">
                        <HolographicCard>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Ecommerce Platform</h3>
                            <p className="text-gray-400 mb-4">A high-performance online store built with Next.js and Stripe.</p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Next.js</span>
                                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Stripe</span>
                            </div>
                        </HolographicCard>

                        <HolographicCard>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">AI Dashboard</h3>
                            <p className="text-gray-400 mb-4">Data visualization dashboard powered by Python and OpenAI.</p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Python</span>
                                <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">OpenAI</span>
                            </div>
                        </HolographicCard>

                        <HolographicCard>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">SaaS Starter</h3>
                            <p className="text-gray-400 mb-4">Complete boilerplate for shipping SaaS products faster.</p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">Prisma</span>
                                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">PostgreSQL</span>
                            </div>
                        </HolographicCard>
                    </div>
                </section>

                {/* Skills Section - Placeholder */}
                <section id="skills" className="w-full min-h-screen flex flex-col items-center justify-start pt-32 px-4">
                    <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Tecnologías</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
                        {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL', 'Tailwind', 'Framer Motion', 'Git'].map(skill => (
                            <div key={skill} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all cursor-default backdrop-blur-sm">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Section - Placeholder */}
                <section id="experience" className="w-full min-h-screen flex flex-col items-center justify-start pt-32 px-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent pointer-events-none" />
                    <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400">Trayectoria</h2>
                    <div className="space-y-12 max-w-4xl w-full relative border-l-2 border-white/10 ml-4 md:ml-0 pl-8 md:pl-12">
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-black shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                            <h3 className="text-3xl font-bold text-white mb-2">Senior Frontend Engineer</h3>
                            <p className="text-lg text-blue-400 mb-4">Tech Corp Inc. • 2023 - Present</p>
                            <p className="text-gray-300 leading-relaxed">Leading the frontend architecture migration to Next.js 14. Implemented a comprehensive design system affecting 50+ applications.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-black shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                            <h3 className="text-3xl font-bold text-white mb-2">Full Stack Developer</h3>
                            <p className="text-lg text-purple-400 mb-4">StartupStudio • 2021 - 2023</p>
                            <p className="text-gray-300 leading-relaxed">Developed scalable web applications using the MERN stack. Managed cloud infrastructure on AWS and optimized CI/CD pipelines.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center relative pb-20">
                    <ContactSection />
                </section>

            </div>

            <Footer />
        </main>
    )
}

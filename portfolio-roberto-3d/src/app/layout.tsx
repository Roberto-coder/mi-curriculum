import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { clsx } from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Roberto Quintana | Engineer & 3D Portfolio',
    description: 'Portafolio web inmersivo 3D de Roberto Quintana Romero - Ingeniero en Sistemas Computacionales',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="dark">
            <body className={clsx(inter.className, 'bg-black min-h-screen antialiased selection:bg-purple-500 selection:text-white')}>
                <main className="relative w-full h-full">
                    {children}
                </main>
            </body>
        </html>
    )
}

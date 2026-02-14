'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const works: { src: string; title: string; category: string }[] = [
    {
        src: "/images/galery/WhatsApp Image 2026-02-13 at 13.53.03.jpeg",
        title: "Abertura Técnica",
        category: "Emergência"
    },
    {
        src: "/images/galery/WhatsApp Image 2026-02-13 at 13.53.03 (1).jpeg",
        title: "Cópia de Chaves",
        category: "Residencial"
    },
    {
        src: "/images/galery/WhatsApp Image 2026-02-13 at 13.53.04.jpeg",
        title: "Chave Codificada",
        category: "Automotivo"
    },
    {
        src: "/images/galery/WhatsApp Image 2026-02-13 at 13.53.04 (1).jpeg",
        title: "Instalação de Fechaduras",
        category: "Segurança"
    },
    {
        src: "/images/galery/WhatsApp Image 2026-02-13 at 13.53.04 (2).jpeg",
        title: "Manutenção de Miolo",
        category: "Técnico"
    },
    {
        src: "/images/galery/WhatsApp Image 2026-02-13 at 13.53.04 (3).jpeg",
        title: "Unificação de Segredos",
        category: "Residencial"
    },
    {
        src: "/images/galery/WhatsApp Image 2026-02-13 at 13.53.05.jpeg",
        title: "Acesso Rápido",
        category: "24 Horas"
    }
]

export function WorkShowcase() {
    const [isExpanded, setIsExpanded] = useState(false)
    const visibleWorks = isExpanded ? works : works.slice(0, 4)

    return (
        <section className="py-24 bg-red-800 relative overflow-hidden border-t-4 border-yellow-400" id="trabalhos">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-700 via-red-800 to-red-900 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block"
                        >
                            <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-2 block font-extrabold">
                                PORTFÓLIO
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md"
                        >
                            Serviços Realizados <span className="text-yellow-400">.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-md"
                    >
                        <p className="text-yellow-50 text-sm md:text-base border-l-4 border-yellow-400 pl-4 font-medium italic">
                            Excelência técnica e precisão em cada atendimento. Confira alguns registros das nossas operações recentes em Ribeirão Preto.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
                    {visibleWorks.length > 0 ? (
                        <AnimatePresence mode='popLayout'>
                            {visibleWorks.map((work, index) => (
                                <motion.div
                                    key={work.src}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className={`group relative overflow-hidden rounded-xl border-2 border-red-500 bg-red-900 
                                        ${index === 0 ? 'md:col-span-2 md:row-span-1' : ''}
                                    `}
                                >
                                    <Image
                                        src={work.src}
                                        alt={work.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />

                                    {/* Red/Yellow Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/20 to-transparent opacity-80" />
                                    <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />

                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <span className="w-8 h-[2px] bg-yellow-400" />
                                            <span className="text-yellow-400 text-xs font-mono uppercase tracking-wider font-extrabold">
                                                {work.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-black text-white group-hover:text-yellow-200 transition-colors drop-shadow-md">
                                            {work.title}
                                        </h3>
                                    </div>

                                    {/* Corner Accents - Yellow */}
                                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors" />
                                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    ) : (
                        <div className="col-span-full text-center py-20 border-4 border-dashed border-red-500 rounded-2xl bg-red-900/50">
                            <p className="text-yellow-200 text-xl font-bold uppercase tracking-widest animate-pulse">Carregando Galeria...</p>
                        </div>
                    )}
                </div>

                {/* Toggle Button - Yellow Primary */}
                <div className="mt-16 flex justify-center">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group relative inline-flex items-center gap-3 px-10 py-4 bg-yellow-400 border-b-4 border-yellow-600 hover:bg-yellow-300 text-red-900 font-black rounded-lg transition-all duration-300 overflow-hidden shadow-xl"
                    >
                        <span className="relative z-10 uppercase tracking-tighter text-lg">
                            {isExpanded ? 'Mostrar Menos Atendimentos' : 'Explorar Todos Atendimentos'}
                        </span>

                        <svg
                            className={`w-6 h-6 transition-transform duration-500 relative z-10 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>

                        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>

            </div>
        </section>
    )
}

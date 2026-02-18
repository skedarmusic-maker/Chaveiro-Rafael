'use client'

import { motion } from 'framer-motion'
import { businessInfo } from '@/data/businessInfo'

export function Testimonials() {
    return (
        <section className="py-24 bg-neutral-900 overflow-hidden relative" id="avaliacoes">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-red-900/20 blur-3xl rounded-l-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-yellow-500/10 blur-3xl rounded-r-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Texto & Badges */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block py-1 px-3 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-sm uppercase tracking-widest mb-6 backdrop-blur-sm">
                                ★★★★★ Confiança Comprovada
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                                O que dizem nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">clientes reais</span>
                            </h2>

                            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Transparência total. Veja as avaliações diretamente do Google e entenda por que somos a escolha número 1 em Ribeirão Preto.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                                {/* Google Rating Box */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                                        <span className="text-4xl font-black text-white">{businessInfo.rating.value.toFixed(1)}</span>
                                        <div className="flex text-yellow-400 text-2xl" aria-label={`Avaliação de ${businessInfo.rating.value} estrelas`}>
                                            {'★★★★★'}
                                        </div>
                                    </div>
                                    <div className="text-neutral-400 text-sm font-medium uppercase tracking-wide flex flex-col">
                                        <span>Excelente no Google</span>
                                        <span className="text-xs text-neutral-500 normal-case mt-1">
                                            Baseado em {businessInfo.rating.count} avaliações
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href="https://g.page/r/CbHdzf_yqfyHEBE/review"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 text-white font-bold hover:text-yellow-400 transition-colors"
                                >
                                    <span className="border-b-2 border-white/30 group-hover:border-yellow-400 pb-1">
                                        Ver todas as avaliações
                                    </span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Video Container (Smartphone Mockup Style) */}
                    <motion.div
                        className="flex-1 w-full max-w-md lg:max-w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[620px] w-[350px] shadow-2xl flex flex-col justify-center overflow-hidden ring-1 ring-white/20">
                            {/* Screen Content */}
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black relative">
                                <video
                                    className="absolute inset-0 w-full h-full object-contain"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="/images/video-poster.jpg" // Fallback image just in case
                                >
                                    <source src="/images/videos/google-reviews.webm" type="video/webm" />
                                    Seu navegador não suporta vídeos.
                                </video>

                                {/* Overlay Gradient for readability if needed at bottom */}
                                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Background Blob for the phone */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-500 to-red-600 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

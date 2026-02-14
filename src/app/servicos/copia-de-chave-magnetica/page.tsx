import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chave Magnética em Ribeirão Preto | Chaveiro Urgente',
    description: 'Duplicação de tags e cartões de acesso magnéticos (RFID) em Ribeirão Preto. Agilidade e compatibilidade para condomínios e empresas.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-magnetica/',
    },
}

export default function CopiaChaveMagneticaPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20de%20cópia%20de%20chave%20magnética"

    const faqData = [
        {
            question: "Toda chave magnética pode ser copiada?",
            answer: "Depende do tipo de sistema (RFID, NFC, Contato) e das características de criptografia do dispositivo. A grande maioria das tags residenciais é copiável."
        },
        {
            question: "A cópia funciona igual à original?",
            answer: "Sim, quando feita corretamente, a cópia clone possui os mesmos códigos da original e funciona exatamente da mesma maneira."
        },
        {
            question: "Preciso levar a chave original?",
            answer: "Sim, é indispensável ter a tag ou cartão original em mãos para realizar a leitura e clonagem dos dados para a nova chave."
        },
        {
            question: "É seguro duplicar chave magnética?",
            answer: "O processo é seguro e apenas cria um backup do seu acesso existente. Não alteramos o sistema do condomínio, apenas copiamos o seu dispositivo."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    }

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-700 font-sans">
            <ServiceJsonLd
                name="Cópia de Chave Magnética"
                description="Serviço de clonagem de tags e dispositivos de acesso RFID em Ribeirão Preto."
                url="https://chaveirourgenterp.com.br/servicos/copia-de-chave-magnetica/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-magnetica/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: RFID WAVE - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Digital Waves */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(16,185,129,0.02)_20px,rgba(16,185,129,0.02)_40px)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                Acesso RFID
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                    MAGNÉTICA
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>
                            <h2 className="text-lg text-emerald-700 font-mono mb-8 uppercase tracking-widest">
                                Tags e Cartões de Acesso
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                Tags e cartões magnéticos são essenciais para o acesso rápido em condomínios e empresas. Realizamos a clonagem de dispositivos RFID em segundos, garantindo um backup funcional para o seu dia a dia.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-emerald-500/20 rounded-lg hover:-translate-y-1"
                                >
                                    <span className="mr-2">Duplicar Agora</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: TAG VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center bg-slate-900 rounded-full border-8 border-slate-100 shadow-2xl overflow-hidden group">
                            {/* Ripple Effect */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,0.2),transparent_70%)] animate-pulse"></div>

                            {/* Scan Waves */}
                            <div className="absolute w-full h-full border border-emerald-500/30 rounded-full animate-ping"></div>
                            <div className="absolute w-3/4 h-3/4 border border-emerald-500/40 rounded-full animate-ping delay-150"></div>
                            <div className="absolute w-1/2 h-1/2 border border-emerald-500/50 rounded-full animate-ping delay-300"></div>

                            {/* Tag Body */}
                            <div className="relative z-10 w-32 h-48 bg-blue-600 rounded-2xl shadow-lg border border-blue-400 flex flex-col items-center justify-center transform rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110">
                                <div className="w-4 h-4 bg-slate-900 rounded-full mb-8 border border-slate-700"></div>
                                <div className="text-white font-bold text-2xl tracking-widest opacity-80">TAG</div>
                                <div className="text-[10px] text-blue-200 mt-2 font-mono">13.56 MHz</div>

                                {/* Wireless Icon */}
                                <div className="mt-4">
                                    <svg className="w-8 h-8 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating Particles */}
                            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-ping delay-500"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. COMPATIBILITY GRID */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Tecnologias <span className="text-emerald-600">Compatíveis</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "125 kHz (RFID)",
                                desc: "Padrão mais comum em condomínios antigos. Tags pretas ou azuis simples.",
                                icon: "🏷"
                            },
                            {
                                title: "13.56 MHz (Mifare)",
                                desc: "Tecnologia mais segura usada em cartões de bilhete único e crachás.",
                                icon: "💳"
                            },
                            {
                                title: "Controles 433 MHz",
                                desc: "Controles de portão eletrônico (PPA, Rossi, Peccinin).",
                                icon: "🎮"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border-b-4 border-emerald-500 p-8 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
                                <div className="text-4xl mb-4 grayscale hover:grayscale-0 transition-grayscale">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL PROCESS */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900 rounded-2xl p-12 relative overflow-hidden text-white">

                        {/* Binary Background */}
                        <div className="absolute inset-0 opacity-10 font-mono text-xs overflow-hidden leading-3 pointer-events-none">
                            {Array(4000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')}
                        </div>

                        <div className="flex-1 relative z-10">
                            <h3 className="text-3xl font-bold uppercase tracking-tight mb-4 text-emerald-400">Clonagem Rápida</h3>
                            <p className="text-slate-300 text-lg mb-6">
                                O processo de cópia é puramente eletrônico. Lemos o código ID da sua tag original e gravamos em uma tag virgem reprogramável.
                            </p>
                            <ul className="space-y-2 text-emerald-200 font-mono text-sm">
                                <li>✓ Sem necessidade de cadastro na portaria</li>
                                <li>✓ Funciona imediatamente</li>
                                <li>✓ Não desconfigura a original</li>
                            </ul>
                        </div>

                        <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-emerald-500/30 text-center min-w-[200px]">
                            <div className="text-5xl font-bold text-white mb-2">30s</div>
                            <div className="text-xs text-emerald-400 uppercase tracking-widest">Tempo Médio</div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 uppercase">Dúvidas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors rounded-sm shadow-sm">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-emerald-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-emerald-400 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-emerald-200 pl-4">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-slate-900 relative overflow-hidden text-center border-t border-slate-200">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">ACESSO <span className="text-emerald-500">LIBERADO</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Garanta acesso fácil para toda a família (ou empresa).</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-emerald-900/40 rounded-lg hover:scale-105"
                    >
                        Solicitar Tags
                    </a>
                </div>
            </section>
        </main>
    )
}

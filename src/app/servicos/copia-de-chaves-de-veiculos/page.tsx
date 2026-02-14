import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chaves de Veículos em Ribeirão Preto | Chaveiro Urgente',
    description: 'Cópia de chaves automotivas em Ribeirão Preto. Chaves canivete, presenciais e simples. Atendimento para todas as montadoras.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chaves-de-veiculos/',
    },
}

export default function CopiaChavesVeiculosPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20de%20uma%20cópia%20da%20chave%20do%20meu%20carro"

    const faqData = [
        {
            question: "COMPATIBILIDADE: Fazem cópia de chaves presenciais?",
            answer: "AFIRMATIVO. Atendemos 95% da frota nacional e importada, incluindo sistemas Keyless (Start/Stop) e chaves Canivete codificadas."
        },
        {
            question: "PROTOCOLO: Preciso levar o carro até a loja?",
            answer: "RECOMENDADO. A codificação exige conexão via porta OBD2 del veículo para pareamento do chip transponder com a central eletrônica."
        },
        {
            question: "TEMPO: Quanto tempo demora a codificação?",
            answer: "IMEDIATO. O processo de corte e programação leva entre 30 a 60 minutos na maioria dos modelos, realizado enquanto você aguarda."
        },
        {
            question: "SEGURANÇA: A chave nova funciona igual a original?",
            answer: "TOTAL. Utilizamos chips originais ou OEM de alta fidelidade. Todas as funções (trava, destrava, mala, alarme) são preservadas."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-800 font-sans">
            <ServiceJsonLd
                name="Cópia de Chaves de Veículos"
                description="Serviço especializado em chaves automotivas: codificadas, presenciais e canivete em Ribeirão Preto."
                url="https://chaveirourgenterp.com.br/servicos/copia-de-chaves-de-veiculos/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chaves-de-veiculos/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: AUTOMOTIVE TECH - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Sistema OBD-II Ativo
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CÓPIA DE CHAVES <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                    DE VEÍCULOS
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>
                            <h2 className="text-lg text-emerald-700 font-mono mb-8 uppercase tracking-widest">
                                Canivete • Presencial • Codificada
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                Tecnologia de ponta para duplicação de chaves automotivas. Atendemos veículos nacionais e importados com equipamentos de codificação avançada, garantindo funcionamento idêntico ao original.
                            </p>

                            <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 my-4">
                                <span className="px-3 py-1 bg-white border border-slate-200 rounded shadow-sm">Chip Transponder</span>
                                <span className="px-3 py-1 bg-white border border-slate-200 rounded shadow-sm">Start/Stop</span>
                                <span className="px-3 py-1 bg-white border border-slate-200 rounded shadow-sm">Lâmina Laser</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-emerald-500/20 rounded-lg translate-y-0 hover:-translate-y-1"
                                >
                                    <span className="mr-2">Cotar Chave</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: FOB VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center bg-slate-900 rounded-3xl border-4 border-slate-800 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                            {/* Glossy Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-black z-0"></div>

                            {/* Key Fob Shape */}
                            <div className="relative z-10 w-48 h-80 bg-slate-800 rounded-[3rem] border border-slate-700 shadow-2xl flex flex-col items-center pt-8 overflow-hidden">
                                {/* Buttons */}
                                <div className="w-24 h-24 rounded-full border border-slate-600 flex items-center justify-center mb-4 bg-gradient-to-b from-slate-700 to-slate-800 shadow-inner group-hover:border-emerald-500/50 transition-colors">
                                    <svg className="w-10 h-10 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17a2 2 0 100-4 2 2 0 000 4zm0-10a2 2 0 100-4 2 2 0 000 4zm5 3a2 2 0 104 0 2 2 0 00-4 0zM7 10a2 2 0 10-4 0 2 2 0 004 0z" /></svg>
                                </div>
                                <div className="space-y-3 w-full px-8">
                                    <div className="h-10 w-full bg-slate-700 rounded-lg shadow-inner flex items-center justify-center border border-slate-600">
                                        <span className="text-xs font-bold text-slate-400">UNLOCK</span>
                                    </div>
                                    <div className="h-10 w-full bg-slate-700 rounded-lg shadow-inner flex items-center justify-center border border-slate-600">
                                        <span className="text-xs font-bold text-slate-400">LOCK</span>
                                    </div>
                                </div>

                                {/* LED */}
                                <div className="absolute top-6 right-6 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                            </div>

                            {/* Signal Waves */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] border border-emerald-500/20 rounded-[4rem] animate-ping delay-75 pointer-events-none"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] border border-emerald-500/10 rounded-[5rem] animate-ping delay-150 pointer-events-none"></div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 2. BRANDS & SYSTEMS */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Tecnologia <span className="text-emerald-600">Compatível</span></h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Chave Canivete",
                                desc: "Upgrade de chaves comuns para modelos canivete com controle integrado.",
                                icon: "🗡️"
                            },
                            {
                                title: "Start / Stop",
                                desc: "Chaves de presença (Smart Key) para veículos com partida por botão.",
                                icon: "📡"
                            },
                            {
                                title: "Codificada",
                                desc: "Transponders ID46, ID48 e rolling codes para todas as montadoras.",
                                icon: "💾"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 border-b-4 border-emerald-500 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Brands Grid */}
                    <div className="mt-16 pt-16 border-t border-slate-200">
                        <p className="text-center text-slate-500 mb-8 font-mono text-sm">MONTADORAS SUPORTADAS</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {["VW", "GM", "FIAT", "FORD", "HONDA", "TOYOTA", "HYUNDAI", "JEEP", "NISSAN", "RENAULT", "BMW", "MERCEDES"].map((brand, i) => (
                                <div key={i} className="h-12 bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-800 rounded shadow-sm hover:border-emerald-400 cursor-default">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL PROCESS */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        <div className="p-12 md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-white mb-6 uppercase">
                                Processo de <span className="text-emerald-500">Codificação</span>
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-900 font-bold flex items-center justify-center text-xs mt-1">1</span>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase">Leitura da Senha</h4>
                                        <p className="text-slate-400 text-sm">Extração do PIN code via scanner OBD.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-900 font-bold flex items-center justify-center text-xs mt-1">2</span>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase">Corte da Lâmina</h4>
                                        <p className="text-slate-400 text-sm">Usinagem CNC de alta precisão.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-slate-900 font-bold flex items-center justify-center text-xs mt-1">3</span>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase">Pareamento</h4>
                                        <p className="text-slate-400 text-sm">Sincronização do chip com a central do carro.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-emerald-900/20 relative min-h-[300px]">
                            {/* Abstract OBD connector visual */}
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(16,185,129,0.05)_10px,rgba(16,185,129,0.05)_20px)]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="text-6xl mb-2">🔌</div>
                                <div className="text-emerald-500 font-mono text-sm tracking-widest animate-pulse">CONNECTING...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 uppercase">Dúvidas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors rounded-sm">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">SUA CHAVE NOVA EM <span className="text-emerald-500">MINUTOS</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Não espere a única chave quebrar. Garanta sua cópia de segurança hoje.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-emerald-900/40 rounded-lg hover:scale-105"
                    >
                        Agendar Cópia
                    </a>
                </div>
            </section>
        </main>
    )
}

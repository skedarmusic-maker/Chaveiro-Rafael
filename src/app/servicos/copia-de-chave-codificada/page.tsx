import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chave Codificada em Ribeirão Preto | Chaveiro Urgente',
    description: 'Especialista em cópia e programação de chaves codificadas para veículos nacionais e importados em Ribeirão Preto. Scanner OBD2 e chips de alta qualidade.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-codificada/',
    },
}

export default function CopiaChaveCodificadaPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20de%20cópia%20de%20chave%20codificada"

    const faqData = [
        {
            question: "Toda chave codificada pode ser copiada?",
            answer: "Depende do modelo do veículo, do ano e do tipo de transponder (chip). A grande maioria dos carros nacionais e importados permite cópia, mas alguns exigem equipamentos específicos de diagnóstico."
        },
        {
            question: "A nova chave funciona igual à original?",
            answer: "Sim. A cópia codificada cria um 'clone' eletrônico ou uma nova identidade autorizada no módulo do veículo, funcionando exatamente como a original para abrir e ligar o carro."
        },
        {
            question: "Preciso levar o veículo?",
            answer: "Sim. Para chaves codificadas, é necessário conectar o equipamento de programação (scanner) na porta OBD do veículo para sincronizar o novo chip com a central eletrônica."
        },
        {
            question: "Fazer chave reserva é importante?",
            answer: "Vital. Perder todas as chaves de um carro codificado exige um processo chamado 'leitura de senha' ou reset da central, que é muito mais complexo e caro que uma cópia simples."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-100 selection:text-purple-800 font-sans">
            <ServiceJsonLd
                name="Cópia de Chave Codificada em Ribeirão Preto"
                description="Especialista em cópia e programação de chaves codificadas para veículos nacionais e importados em Ribeirão Preto. Scanner OBD2 e chips de alta qualidade."
                url="https://chaveirourgenterp.com.br/servicos/copia-de-chave-codificada/"
                title='Cópia de Chave Codificada em Ribeirão Preto | Chaveiro Urgente'
                alternates={{
                    canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-codificada/',
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: DIGITAL SECURITY - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Board Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-100 rounded-full text-purple-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                                Tecnologia Transponder
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                                    CODIFICADA
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>
                            <h2 className="text-lg text-purple-700 font-mono mb-8 uppercase tracking-widest">
                                Duplicação de Chaves Automotivas
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                A chave codificada possui um chip eletrônico interno que se comunica com o sistema do veículo. Utilizamos equipamentos de última geração para clonagem e programação de transponders para nacionais e importados.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-purple-500/20 rounded-lg hover:-translate-y-1"
                                >
                                    <span className="mr-2">Orçamento Digital</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: CHIP VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                            {/* Circuit Lines */}
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,rgba(147,51,234,0.1)_20px),repeating-linear-gradient(90deg,transparent,transparent_19px,rgba(147,51,234,0.1)_20px)] pointer-events-none"></div>

                            {/* Chip */}
                            <div className="relative z-10 w-48 h-48 bg-slate-800 rounded border-2 border-purple-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                                <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                <div className="text-6xl text-purple-400 font-mono">ID48</div>

                                {/* Legs */}
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="absolute -left-4 h-2 w-4 bg-slate-400 border border-slate-600" style={{ top: `${15 + i * 10}%` }}></div>
                                ))}
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="absolute -right-4 h-2 w-4 bg-slate-400 border border-slate-600" style={{ top: `${15 + i * 10}%` }}></div>
                                ))}
                            </div>

                            {/* Binary Stream */}
                            <div className="absolute bottom-4 left-0 w-full text-center font-mono text-purple-500/50 text-xs overflow-hidden whitespace-nowrap">
                                0101010111001010100101010101110010101001
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SERVICES GRID */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Tecnologia em <span className="text-purple-600">Chips</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Clonagem",
                                desc: "Cópia exata do chip existente para uma nova chave. Mais rápido e econômico.",
                                icon: "📑"
                            },
                            {
                                title: "Programação OBD",
                                desc: "Cadastro de nova chave diretamente na central do veículo via scanner.",
                                icon: "🔌"
                            },
                            {
                                title: "Dedicação",
                                desc: "Preparação de chips virgens para aceitarem a programação específica da montadora.",
                                icon: "💾"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border-b-4 border-purple-500 p-8 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">{card.icon}</div>
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
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-slate-900 rounded-2xl p-12 relative overflow-hidden">

                        {/* Matrix Effect */}
                        <div className="absolute inset-0 font-mono text-green-500/10 text-[10px] leading-3 whitespace-pre-wrap select-none pointer-events-none opacity-20">
                            {Array(2000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0')}
                        </div>

                        <div className="relative z-10 max-w-xl">
                            <h3 className="text-3xl font-bold uppercase tracking-tight mb-4 text-purple-400">Segurança Eletrônica</h3>
                            <p className="text-slate-300 text-lg mb-6">
                                Nossas máquinas de clonagem leem o código criptografado da sua chave atual e o transferem para um super chip de alta durabilidade.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-purple-200 uppercase">
                                <div>✓ Chip Cerâmico</div>
                                <div>✓ Chip Carbono</div>
                                <div>✓ Chip Vidro</div>
                                <div>✓ Super Chip XT27</div>
                            </div>
                        </div>

                        <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-purple-500/30 text-center min-w-[200px]">
                            <div className="text-4xl font-bold text-white mb-1">100%</div>
                            <div className="text-xs text-purple-300 uppercase tracking-widest">Compatibilidade Garantida</div>
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
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-purple-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-purple-400 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-purple-200 pl-4">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">NÃO FIQUE SEM <span className="text-purple-500">RESERVA</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Perder a única chave codificada pode custar até 5x mais. Previna-se.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-purple-900/40 rounded-lg hover:scale-105"
                    >
                        Fazer Cópia Agora
                    </a>
                </div>
            </section>
        </main>
    )
}

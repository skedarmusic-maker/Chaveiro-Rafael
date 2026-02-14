import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chave Multipontos em Ribeirão Preto | Chaveiro Urgente',
    description: 'Duplicação de chaves de alta segurança multiponto em Ribeirão Preto. Precisão máxima para fechaduras residenciais e comerciais reforçadas.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-multipontos/',
    },
}

export default function CopiaChaveMultipontosPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20de%20cópia%20de%20chave%20multipontos"

    const faqData = [
        {
            question: "Qual a diferença da chave multipontos para chave comum?",
            answer: "A chave multipontos possui orifícios calibrados na superfície em vez de dentes na borda. Ela aciona múltiplos pinos de travamento simultaneamente, oferecendo muito mais segurança contra micha e violação."
        },
        {
            question: "Toda chave multipontos pode ser copiada?",
            answer: "Depende do modelo, marca e se possui cartão de segurança. A maioria das residenciais (Keso, Mul-T-Lock, etc.) pode ser copiada, mas exige equipamento específico."
        },
        {
            question: "Preciso levar a chave original?",
            answer: "Sim, para garantir uma cópia de precisão é necessário ter a chave original ou o cartão de código (se houver) em mãos para a leitura das medidas."
        },
        {
            question: "Fazer chave reserva é recomendado?",
            answer: "Sim. Como são chaves de alta segurança, perder a única via pode exigir a troca de todo o cilindro, o que tem um custo muito mais elevado."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-700 font-sans">
            <ServiceJsonLd
                name="Cópia de Chave Multipontos"
                description="Serviço técnico de duplicação de chaves multiponto de alta segurança em Ribeirão Preto."
                url="https://chaveirourgenterp.com.br/servicos/copia-de-chave-multipontos/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-multipontos/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: HIGH SECURITY - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Micro-dot Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-sm text-slate-600 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                                Alta Segurança
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-800">
                                    MULTIPONTOS
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>
                            <h2 className="text-lg text-slate-600 font-mono mb-8 uppercase tracking-widest">
                                Tecnologia de Pinos de Precisão
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                Chaves multiponto oferecem um nível superior de segurança através de combinações complexas de orifícios calibrados. Realizamos cópias com máxima fidelidade para garantir o funcionamento suave em fechaduras de alto padrão.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-slate-500/20"
                                >
                                    <span className="mr-2">Solicitar Orçamento</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: MULTIPOINT VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center bg-white border border-slate-200 rounded-lg shadow-2xl overflow-hidden group">
                            {/* Metal Texture */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')] opacity-10"></div>

                            {/* Key Body */}
                            <div className="relative w-28 h-72 bg-gradient-to-b from-slate-200 to-slate-300 rounded-full border-x-4 border-slate-400 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-6 overflow-hidden">
                                {/* Dimples */}
                                <div className="absolute w-full h-full">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="absolute w-4 h-4 bg-slate-400 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),1px_1px_0px_rgba(255,255,255,0.8)]"
                                            style={{
                                                top: `${15 + Math.random() * 70}%`,
                                                left: `${20 + Math.random() * 60}%`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Magnifying Glass Effect */}
                            <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full border-4 border-slate-800 bg-white/30 backdrop-blur-[2px] shadow-2xl flex items-center justify-center overflow-hidden animate-pulse-slow">
                                <div className="w-full h-full bg-slate-200/50 flex items-center justify-center relative">
                                    <div className="w-8 h-8 bg-slate-400 rounded-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5)] transform scale-[2]"></div>
                                    <div className="absolute text-[10px] font-mono text-slate-800 bottom-2 bg-white/80 px-2 rounded">DEPTH: 2.4mm</div>
                                </div>
                            </div>

                            {/* Security Badge */}
                            <div className="absolute bottom-6 right-6 flex flex-col items-center">
                                <div className="w-12 h-12 bg-blue-600 rounded text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. BRANDS & TYPES */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Segurança <span className="text-blue-600">Reforçada</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Pinos Simples",
                                desc: "Chaves com furos apenas na superfície plana.",
                                icon: "•"
                            },
                            {
                                title: "Pinos Laterais",
                                desc: "Segurança extra com furos nas laterais da chave.",
                                icon: "⋮"
                            },
                            {
                                title: "Telescópico",
                                desc: "Pino dentro de pino (Sistema Mul-T-Lock clássico).",
                                icon: "◎"
                            },
                            {
                                title: "Interativa",
                                desc: "Elemento móvel na chave para validação mecânica.",
                                icon: "⚙️"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border text-center p-8 hover:border-blue-500 transition-all duration-300 group rounded-sm shadow-sm hover:shadow-md">
                                <div className="text-6xl mb-4 text-slate-300 group-hover:text-blue-600 transition-colors font-mono leading-none">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase group-hover:text-blue-800 transition-colors">{card.title}</h3>
                                <p className="text-slate-600 text-sm">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Security Brands */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 font-bold text-2xl text-slate-400 select-none">
                        <span>MUL-T-LOCK</span>
                        <span>KESO</span>
                        <span>PADO</span>
                        <span>GOLD</span>
                        <span>ALIANÇA</span>
                        <span>STAM</span>
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL PROCESS */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-900 text-white rounded-2xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                        {/* Grip Texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20 pointer-events-none"></div>

                        <div className="flex-1 relative z-10">
                            <h3 className="text-3xl font-bold uppercase mb-4 text-blue-400">Cartão de Segurança</h3>
                            <p className="text-slate-300 text-lg mb-6 max-w-xl">
                                Alguns cilindros de alta segurança acompanham um cartão codificado (Code Card). Se você possui esse cartão, traga-o junto com a chave. Ele contém as medidas originais de fábrica, permitindo uma cópia perfeita sem desgaste.
                            </p>
                            <div className="inline-block bg-blue-900/50 border border-blue-500/50 px-4 py-2 rounded text-blue-200 text-sm font-mono">
                                CODE: A12-B34-C56 (Exemplo)
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="w-64 h-40 bg-gradient-to-br from-slate-200 to-slate-400 rounded-xl shadow-2xl transform rotate-3 flex flex-col justify-between p-6 text-slate-800">
                                <div className="flex justify-between items-start">
                                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                                    <div className="font-bold tracking-widest text-xs">SECURITY CARD</div>
                                </div>
                                <div className="font-mono text-xl tracking-widest text-center">•••• •••• ••••</div>
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
                        <div key={index} className="group border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors rounded-sm shadow-sm">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-blue-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-blue-500 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-blue-200 pl-4">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">MAXIMIZE SUA <span className="text-blue-500">SEGURANÇA</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Chaves de alta precisão exigem profissionais qualificados.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-blue-900/40 rounded-lg hover:scale-105"
                    >
                        Solicitar Cópia
                    </a>
                </div>
            </section>
        </main>
    )
}

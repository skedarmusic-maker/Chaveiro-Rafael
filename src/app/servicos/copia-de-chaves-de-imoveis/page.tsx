import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chaves de Imóveis em Ribeirão Preto | Chaveiro Urgente',
    description: 'Duplicação precisa de chaves residenciais e comerciais em Ribeirão Preto. Cópias Yale, Tetra, Multiponto e mais com calibração micrométrica.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chaves-de-imoveis/',
    },
}

export default function CopiaChavesImoveisPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20gostaria%20de%20fazer%20uma%20cópia%20de%20chave"

    const faqData = [
        {
            question: "COMPATIBILIDADE: Quais chaves podem ser copiadas?",
            answer: "98% dos modelos residenciais, incluindo chaves Yale, Tetra, Multiponto e Pantográficas. Avaliação técnica prévia recomendada para modelos de alta segurança."
        },
        {
            question: "PRECISÃO: A cópia funciona perfeitamente?",
            answer: "AFIRMATIVO. Utilizamos máquinas calibradas micrometricamente. A chave é testada para garantir giro suave e sem travamentos no cilindro."
        },
        {
            question: "REQUISITOS: Preciso da chave original?",
            answer: "SIM. A original serve como matriz base. Cópias de cópias podem apresentar desvios de 0.05mm, reduzindo a eficácia. Traga sempre a melhor chave disponível."
        },
        {
            question: "PREVENÇÃO: Fazer cópia ajuda na segurança?",
            answer: "POSITIVO. Ter uma chave reserva acessível evita acionamentos emergenciais de arrombamento, preservando a integridade da fechadura."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-100 selection:text-cyan-800 font-sans">
            <ServiceJsonLd
                name="Cópia de Chaves de Imóveis"
                description="Serviço de duplicação de chaves imobiliárias com alta precisão em Ribeirão Preto."
                url="https://chaveirourgenterp.com.br/servicos/copia-de-chaves-de-imoveis/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chaves-de-imoveis/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: TECHNICAL BLUEPRINT - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Blueprint Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: TECHNICAL SPECS */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-100 rounded-sm text-cyan-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                                Calibração de Precisão Ativa
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CÓPIA DE CHAVES <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                                    DE IMÓVEIS
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>
                            <h2 className="text-lg text-cyan-700 font-mono mb-8 uppercase tracking-widest">
                                Duplicação Residencial de Alta Precisão
                            </h2>

                            <div className="flex gap-8 text-sm font-mono text-slate-500 border-l-2 border-cyan-200 pl-4 my-6 bg-cyan-50/30 p-4 rounded-r-lg">
                                <div>
                                    <span className="block text-slate-900 font-bold mb-1">TOLERÂNCIA</span>
                                    0.01mm
                                </div>
                                <div>
                                    <span className="block text-slate-900 font-bold mb-1">MATRIZ</span>
                                    ORIGINAL
                                </div>
                                <div>
                                    <span className="block text-slate-900 font-bold mb-1">TEMPO</span>
                                    IMEDIATO
                                </div>
                            </div>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                A precisão na cópia de chaves é fundamental para garantir o funcionamento suave da fechadura e evitar desgastes prematuros. Utilizamos equipamentos calibrados para duplicar chaves residenciais com fidelidade micrométrica.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-cyan-500/20 rounded-lg translate-y-0 hover:-translate-y-1"
                                >
                                    <span className="mr-2">Solicitar Orçamento</span>
                                    <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: KEY BLUEPRINT VISUAL */}
                        <div className="w-full lg:w-[500px] h-[500px] bg-slate-50 border border-slate-200 relative overflow-hidden rounded-lg shadow-2xl group">
                            {/* Paper Texture Effect */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>

                            {/* Key Outline - SVG */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 text-slate-300">
                                <svg viewBox="0 0 100 200" fill="currentColor" className="drop-shadow-sm">
                                    <path d="M40,10 H60 V60 H80 V80 H60 V90 H75 V100 H60 V110 H80 V120 H60 V130 H70 V140 H60 V180 A20,20 0 1,1 40,180 V10 Z" />
                                </svg>
                            </div>

                            {/* Scanning Laser */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-scanline opacity-80"></div>

                            {/* Data Points */}
                            <div className="absolute top-1/4 left-1/3 bg-white border border-cyan-200 px-2 py-1 text-[10px] text-cyan-700 font-mono shadow-sm">
                                P1: 12.4mm
                            </div>
                            <div className="absolute bottom-1/3 right-1/4 bg-white border border-cyan-200 px-2 py-1 text-[10px] text-cyan-700 font-mono shadow-sm">
                                P2: 4.8mm
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. KEY MODELS */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-cyan-600 font-bold text-xs uppercase tracking-widest mb-2 block">Catálogo</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Modelos <span className="text-cyan-600">Suportados</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Yale (Simples)",
                                code: "MOD-Y01",
                                desc: "Padrão mais comum em residências. Cópia em 1 minuto.",
                                icon: "🔑"
                            },
                            {
                                title: "Tetra Chave",
                                code: "MOD-T04",
                                desc: "Quatro lados de segredo. Alta precisão necessária.",
                                icon: "💠"
                            },
                            {
                                title: "Multiponto",
                                code: "MOD-M12",
                                desc: "Segurança avançada com pontos perfurados na lâmina.",
                                icon: "::::"
                            },
                            {
                                title: "Pantográfica",
                                code: "MOD-P08",
                                desc: "Cortes superficiais. Comum em veículos e portas de luxo.",
                                icon: "〰️"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border border-slate-200 p-8 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group rounded-sm text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 text-[10px] px-2 py-1 font-mono">{card.code}</div>
                                <div className="text-4xl mb-4 text-slate-700 group-hover:text-cyan-600 transition-colors font-mono">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors uppercase">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL PROCESS */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: TEXT */}
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Processo de <span className="text-cyan-600">Duplicação</span></h3>
                            <p className="text-slate-600 text-lg">Entenda como garantimos que sua cópia funcione tão bem quanto a original.</p>

                            <div className="space-y-6">
                                {[
                                    { title: "1. Análise da Matriz", desc: "Verificamos o desgaste da chave original para compensar falhas." },
                                    { title: "2. Seleção do Blank", desc: "Escolha da base metálica de liga correta (latão ou aço)." },
                                    { title: "3. Corte Calibrado", desc: "Usinagem dos dentes ou pontos com fresas de diamante." },
                                    { title: "4. Acabamento", desc: "Remoção de rebarbas e polimento para inserção suave." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-1 h-full bg-cyan-200 rounded-full"></div>
                                        <div>
                                            <h4 className="text-slate-900 font-bold uppercase text-sm mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: INFO BOX */}
                        <div className="bg-cyan-900 text-white p-10 rounded-xl shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="text-cyan-400">⚠</span>
                                Importante
                            </h3>
                            <p className="text-cyan-100 mb-6 leading-relaxed">
                                Evite fazer &quot;cópia da cópia&quot;. Sempre que possível, utilize a chave original de fábrica como matriz. Isso evita o efeito telefone sem fio, onde pequenas imperfeições se somam até a chave parar de funcionar.
                            </p>
                            <div className="border border-cyan-700 p-4 rounded bg-cyan-800/50 text-center">
                                <span className="block text-xs uppercase tracking-widest text-cyan-300 mb-1">Dica do Especialista</span>
                                <span className="font-bold">Teste a chave com a porta aberta antes de sair.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-24 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 uppercase">Perguntas Técnicas</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors rounded-sm">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-cyan-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-cyan-400 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-cyan-200 pl-4">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE UMA <span className="text-cyan-500">CÓPIA PERFEITA?</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Não arrisque ficar trancado. Faça sua cópia de segurança hoje mesmo.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-cyan-900/40 rounded-lg hover:scale-105"
                    >
                        Falar com Técnico
                    </a>
                </div>
            </section>
        </main>
    )
}

import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chave de Fechadura de Tambor em Ribeirão Preto | Chaveiro Urgente',
    description: 'Realizamos cópias de chaves para fechaduras de tambor (Yale) em Ribeirão Preto. Atendimento rápido e precisão para garantir o giro suave.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-fechadura-de-tambor/',
    },
}

export default function CopiaChaveTamborPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20de%20cópia%20de%20chave%20de%20tambor"

    const faqData = [
        {
            question: "Qual a diferença da fechadura de tambor para outros modelos?",
            answer: "A fechadura de tambor (ou cilindro) utiliza um mecanismo interno com pinos alinhados por molas. A chave correta levanta esses pinos até a altura do 'corte' (linha de giro), liberando o rotor para rodar."
        },
        {
            question: "Toda chave de tambor pode ser copiada?",
            answer: "Sim, a grande maioria (Yale comum) pode ser copiada rapidamente. Alguns modelos de cilindro europeu ou de alta segurança podem exigir cartões de código."
        },
        {
            question: "Preciso levar a chave original?",
            answer: "Sim. A melhor cópia é feita a partir da chave original. Cópias de chaves que já são 'cópias da cópia' podem acumular erros de usinagem e não funcionar suavemente."
        },
        {
            question: "Fazer chave reserva é recomendado?",
            answer: "Sempre. Se você perder a única chave de uma fechadura de tambor trancada, o chaveiro precisará usar técnicas de micha ou perfuração, o que sai mais caro que uma cópia simples."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-700 font-sans">
            <ServiceJsonLd
                name="Cópia de Chave de Fechadura de Tambor"
                description="Serviço de duplicação de chaves Yale comuns para fechaduras de cilindro em Ribeirão Preto."
                url="https://chaveirourgenterp.com.br/servicos/copia-de-chave-fechadura-de-tambor/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-fechadura-de-tambor/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: CLASSIC BRASS - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Brass Dust Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,0.05)_25%,rgba(245,158,11,0.05)_50%,transparent_50%,transparent_75%,rgba(245,158,11,0.05)_75%)] bg-[size:16px_16px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-sm text-amber-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="text-lg">🗝</span>
                                Padrão Yale
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                                    DE TAMBOR
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>
                            <h2 className="text-lg text-amber-700 font-mono mb-8 uppercase tracking-widest">
                                Duplicação Tradicional (Yale)
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                A chave de tambor (Yale) é o modelo mais comum em residências. Realizamos a cópia precisa para garantir que ela gire suavemente no cilindro, sem enroscar ou danificar a fechadura.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-amber-500/20 rounded-lg hover:-translate-y-1"
                                >
                                    <span className="mr-2">Cópia Rápida</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: BRASS KEY VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center bg-white border border-amber-200/50 rounded-lg shadow-2xl overflow-hidden group">
                            {/* Metal Texture */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20"></div>

                            {/* Key Visualization */}
                            <div className="relative z-10 w-64 h-32 bg-gradient-to-b from-yellow-300 to-amber-500 rounded-r-full shadow-lg flex items-center border border-amber-600 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 origin-left">
                                {/* Head */}
                                <div className="absolute -left-12 w-24 h-24 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full border-4 border-amber-600 shadow-inner flex items-center justify-center">
                                    <div className="w-8 h-8 bg-slate-900/20 rounded-full"></div>
                                </div>
                                {/* Teeth */}
                                <div className="absolute top-0 right-8 w-32 h-8 bg-white/0 flex items-end justify-end space-x-1">
                                    <div className="w-4 h-4 bg-white/0 border-b-8 border-l-8 border-transparent border-b-slate-50/30"></div>
                                    {/* Abstract Teeth Patterns */}
                                    <div className="w-4 h-6 bg-slate-50/0 clip-path-polygon"></div>
                                </div>
                                {/* Grooves */}
                                <div className="w-full h-2 bg-amber-600/30 rounded-full my-1"></div>
                            </div>

                            {/* Pins Mechanism Visualization */}
                            <div className="absolute bottom-8 right-8 flex gap-1 bg-slate-100 p-2 rounded shadow-sm opacity-80">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-2 h-6 bg-slate-300 rounded-full relative overflow-hidden">
                                        <div className="absolute bottom-0 w-full bg-amber-500 transition-all duration-300" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. TYPES */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Tipos <span className="text-amber-600">Comuns</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Yale (Dente)",
                                desc: "O modelo mais tradicional, com serrilhado em um dos lados.",
                                icon: "🦷"
                            },
                            {
                                title: "Tetra",
                                desc: "Quatro lados de segredo, oferecendo 4x mais combinações.",
                                icon: "✥"
                            },
                            {
                                title: "Cofre",
                                desc: "Chaves longas ou de duplo palhetão para fechaduras antigas.",
                                icon: "🗝"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border-b-4 border-amber-500 p-8 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
                                <div className="text-4xl mb-4 grayscale hover:grayscale-0 transition-grayscale">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase">{card.title}</h3>
                                <p className="text-slate-600 text-sm">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL PROCESS */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-900 text-white rounded-xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(245,158,11,0.2)_0,transparent_50%)] pointer-events-none"></div>

                        <div className="flex-1 relative z-10">
                            <h3 className="text-3xl font-bold uppercase mb-4 text-amber-500">Precisão no Corte</h3>
                            <p className="text-slate-300 text-lg mb-6">
                                Uma diferença minúscula na altura de um dente pode fazer a chave travar. Utilizamos máquinas calibradas e limas de acabamento para garantir que sua cópia funcione tão bem quanto a original.
                            </p>
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <span className="block text-2xl font-bold text-amber-400">99%</span>
                                    <span className="text-xs text-slate-400 uppercase">Precisão</span>
                                </div>
                                <div className="text-center border-l border-slate-700 pl-4">
                                    <span className="block text-2xl font-bold text-amber-400">5min</span>
                                    <span className="text-xs text-slate-400 uppercase">Tempo Médio</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            {/* Graphic of Key Profile */}
                            <div className="w-full max-w-xs bg-slate-800 p-6 rounded border border-slate-700">
                                <div className="h-20 w-full bg-slate-700 rounded mb-2 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 h-full w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(0,0,0,0.2)_11px)]"></div>
                                    <div className="absolute bottom-0 left-0 h-1/2 w-full bg-amber-500/20 skew-x-12"></div>
                                </div>
                                <p className="text-center text-xs font-mono text-slate-400">Perfil de Corte: Standard</p>
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
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-amber-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-amber-500 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-amber-200 pl-4">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">CÓPIA <span className="text-amber-500">EXPRESSA</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Copiamos sua chave Yale em poucos minutos.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-amber-500/20 rounded-lg hover:-translate-y-1"
                    >
                        Chamar Chaveiro
                    </a>
                </div>
            </section>
        </main>
    )
}

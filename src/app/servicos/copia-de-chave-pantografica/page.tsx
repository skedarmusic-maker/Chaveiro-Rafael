import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cópia de Chave Pantográfica em Ribeirão Preto | Chaveiro Urgente',
    description: 'Especialista em cópia de chaves pantográficas para veículos e residências em Ribeirão Preto. Duplicação de alta precisão com máquinas CNC.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-pantografica/',
    },
}

export default function CopiaChavePantograficaPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20de%20cópia%20de%20chave%20pantográfica"

    const faqData = [
        {
            question: "Qual a diferença da chave pantográfica para chave comum?",
            answer: "A chave pantográfica possui canais e depressões usinados nas laterais da lâmina em vez de dentes serrilhados. Isso oferece maior dificuldade para cópia não autorizada e funcionamento mais suave."
        },
        {
            question: "Toda chave pantográfica pode ser copiada?",
            answer: "A grande maioria sim, mas exige máquinas duplicadoras específicas chamadas pantógrafos, que rastreiam o desenho original e o replicam com precisão milimétrica."
        },
        {
            question: "Preciso levar a chave original?",
            answer: "Sim. A cópia é feita por rastreamento físico da chave original. Em caso de perda total, é necessário desmontar o cilindro para decodificar o segredo."
        },
        {
            question: "Fazer chave reserva é importante?",
            answer: "Fundamental. Perder uma chave pantográfica sem ter reserva pode exigir a troca do kit de ignição e portas, o que é muito mais caro que uma cópia preventiva."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-100 selection:text-red-800 font-sans">
            <ServiceJsonLd
                name="Cópia de Chave Pantográfica"
                description="Serviço técnico de duplicação de chaves pantográficas em Ribeirão Preto com precisão milimétrica."
                url="https://chaveirourgenterp.com.br/servicos/copia-de-chave-pantografica/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chave-pantografica/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: LASER CUT - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Horizontal Scan Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.05),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-sm text-red-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></span>
                                Precisão CNC
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CÓPIA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                                    PANTOGRÁFICA
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>
                            <h2 className="text-lg text-red-700 font-mono mb-8 uppercase tracking-widest">
                                Alta Segurança Automotiva
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                A chave pantográfica possui canais usinados na superfície da lâmina, dificultando cópias não autorizadas. Utilizamos fresadoras de alta precisão para garantir um corte perfeito e sem rebarbas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-red-500/20 rounded-lg hover:-translate-y-1"
                                >
                                    <span className="mr-2">Solicitar Corte</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: LASER VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center bg-slate-900 rounded-lg border-2 border-red-500/30 shadow-2xl overflow-hidden group">
                            {/* Metal Texture */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20"></div>

                            {/* Laser Beam */}
                            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)] z-20 animate-scanline"></div>

                            {/* Sparks */}
                            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-200 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] z-30 animate-ping"></div>

                            {/* Key Silhouette */}
                            <div className="relative z-10 w-24 h-64 bg-slate-800 border border-slate-600 rounded-b-lg flex flex-col items-center overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-b from-slate-700 to-slate-800"></div>
                                {/* Pantographic Groove */}
                                <div className="absolute top-4 w-2 h-48 bg-slate-900 rounded-full opacity-50 blur-[1px]"></div>
                                <div className="absolute top-4 w-2 h-48 bg-slate-900 rounded-full translate-x-3 opacity-50 blur-[1px]"></div>
                                <div className="absolute top-4 w-2 h-48 bg-slate-900 rounded-full -translate-x-3 opacity-50 blur-[1px]"></div>
                            </div>

                            {/* Target HUD */}
                            <div className="absolute top-4 left-4 text-red-500 font-mono text-xs">
                                <div>X: 124.55</div>
                                <div>Y: 004.22</div>
                                <div>Z: 000.05</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SERVICES GRID */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Tipos de <span className="text-red-600">Corte</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Pista Externa",
                                desc: "Corte realizado nas laterais da lâmina da chave.",
                                icon: "⏸"
                            },
                            {
                                title: "Pista Interna",
                                desc: "Canal usinado no centro da lâmina (comum em VW/Audi).",
                                icon: "🕳"
                            },
                            {
                                title: "Pista Dupla",
                                desc: "Cortes superior e inferior independentes.",
                                icon: "📶"
                            },
                            {
                                title: "Tibbe",
                                desc: "Chave cilíndrica com cortes em ângulos (Ford antigos).",
                                icon: "⚪"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border text-center p-8 hover:border-red-500 transition-all duration-300 group rounded-sm shadow-sm hover:shadow-md">
                                <div className="text-4xl mb-4 text-slate-300 group-hover:text-red-500 transition-colors font-mono">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase group-hover:text-red-700 transition-colors">{card.title}</h3>
                                <p className="text-slate-600 text-sm">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL PROCESS */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">

                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-slate-900 w-full mb-6 uppercase border-l-4 border-red-500 pl-6">
                                Por que exige <span className="text-red-600">equipamento especial?</span>
                            </h3>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Diferente das chaves serrilhadas que são cortadas por disco, as chaves pantográficas são <strong>usinadas</strong>. O equipamento necessário funciona como um torno CNC miniatura, que desgasta o metal seguindo coordenadas precisas (X, Y, Z).
                            </p>
                            <p className="text-slate-600 text-lg mb-6">
                                Tentar copiar uma chave pantográfica em máquinas comuns resulta em uma chave que <strong>não entra</strong> ou <strong>trava</strong> no cilindro, podendo danificar a ignição permanentemente.
                            </p>
                        </div>

                        <div className="flex-1 bg-slate-900 p-8 rounded-lg relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(220,38,38,0.1)_25%,transparent_25%,transparent_50%,rgba(220,38,38,0.1)_50%,rgba(220,38,38,0.1)_75%,transparent_75%,transparent)] bg-[size:20px_20px]"></div>
                            <h4 className="text-white font-bold uppercase mb-4 relative z-10">Precisão Garantida</h4>
                            <div className="flex items-center justify-between text-red-500 font-mono text-sm border-t border-slate-700 pt-4 relative z-10">
                                <span>VW</span>
                                <span>FIAT</span>
                                <span>FORD</span>
                                <span>GM</span>
                                <span>HONDA</span>
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
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-red-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-red-400 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-red-200 pl-4">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">CORTE DE <span className="text-red-500">PRECISÃO</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Não aceite cópias feitas &quot;no olho&quot;. Exija qualidade técnica.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-red-600 hover:bg-red-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-red-900/40 rounded-lg hover:-translate-y-1"
                    >
                        Solicitar Orçamento
                    </a>
                </div>
            </section>
        </main>
    )
}

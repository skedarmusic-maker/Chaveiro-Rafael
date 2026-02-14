import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chave de Motocicleta em Ribeirão Preto | Chaveiro Urgente',
    description: 'Cópia e confecção de chaves para motos em Ribeirão Preto. Atendimento especializado para todas as marcas: Honda, Yamaha, BMW, Kawasaki e mais.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/chave-de-motocicleta/',
    },
}

export default function ChaveMotocicletaPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20de%20ajuda%20com%20chave%20de%20moto"

    const faqData = [
        {
            question: "É possível fazer cópia de chave de motocicleta?",
            answer: "Depende do modelo e tipo de chave (comum, magnética ou codificada), mas a grande maioria pode ser avaliada para duplicação técnica especializada."
        },
        {
            question: "A chave pode parar de funcionar com o tempo?",
            answer: "Sim, desgaste natural do metal, oxidação ou falhas mecânicas no segredo podem afetar o funcionamento e dificultar o giro na ignição."
        },
        {
            question: "Preciso levar a motocicleta?",
            answer: "Em alguns casos, especialmente para confecção de chave perdida ou codificação, pode ser necessário avaliar diretamente o veículo."
        },
        {
            question: "Fazer chave reserva é recomendado?",
            answer: "Sim, absolutamente. Ter uma segunda chave ajuda a evitar imprevistos e custos elevados com atendimentos emergenciais em caso de perda da única via."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-yellow-100 selection:text-yellow-800 font-sans">
            <ServiceJsonLd
                name="Chave de Motocicleta em Ribeirão Preto"
                description="Cópia e confecção de chaves para motos em Ribeirão Preto. Atendimento especializado para todas as marcas e modelos. Chaves codificadas e comuns."
                url="https://chaveirourgenterp.com.br/servicos/chave-de-motocicleta/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/chave-de-motocicleta/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: MOTO PERFORMANCE - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Checkered Flag Pattern */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.02)_0,rgba(0,0,0,0.02)_10px,transparent_10px,transparent_20px)] pointer-events-none" />
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-100 rounded-full text-yellow-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                                Especialidade Moto
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CHAVE DE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
                                    MOTOCICLETA
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>
                            <h2 className="text-lg text-yellow-700 font-mono mb-8 uppercase tracking-widest">
                                Alta e Baixa Cilindrada
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                Motocicletas exigem chaves resistentes e precisas. Atendemos proprietários de Honda, Yamaha, BMW, Kawasaki e outras marcas, oferecendo cópias simples, magnéticas e codificadas.
                            </p>

                            <div className="flex flex-wrap gap-2 uppercase text-xs font-bold text-slate-500 my-4">
                                <span className="bg-slate-100 border border-slate-200 px-2 py-1 rounded">Magnética (Magnetron)</span>
                                <span className="bg-slate-100 border border-slate-200 px-2 py-1 rounded">Codificada (HISS/YISS)</span>
                                <span className="bg-slate-100 border border-slate-200 px-2 py-1 rounded">Simples</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-yellow-500/20 rounded-lg translate-y-0 hover:-translate-y-1"
                                >
                                    <span className="mr-2">Cotar Serviço</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: MOTO KEY VISUAL */}
                        <div className="w-full lg:w-[450px] bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-2xl relative overflow-hidden group transform rotate-1 hover:rotate-0 transition-all duration-500">
                            {/* Speed Lines */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_49%,rgba(234,179,8,0.1)_50%,transparent_51%)] bg-[size:100%_20px] animate-pan-y pointer-events-none"></div>

                            {/* Key Shape */}
                            <div className="relative z-10 bg-white p-6 rounded shadow-lg border-l-8 border-yellow-500">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-4xl grayscale opacity-50">🏍️</div>
                                    <div className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded">MOTO</div>
                                </div>
                                <h3 className="font-bold text-slate-900 text-xl mb-2">Chave de Ignição</h3>
                                <div className="h-2 bg-slate-100 w-full rounded-full overflow-hidden mb-4">
                                    <div className="h-full bg-yellow-500 w-3/4"></div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500 font-mono">
                                    <span>RESISTÊNCIA</span>
                                    <span>ALTA</span>
                                </div>
                            </div>

                            {/* Magnetic Key Detail */}
                            <div className="relative z-10 bg-white p-4 rounded shadow-lg border-l-8 border-slate-700 mt-4 translate-x-4 group-hover:translate-x-0 transition-transform">
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Trava Magnética</h4>
                                <p className="text-xs text-slate-500">Duplicação de ímãs para abertura do miolo (Shutter Key).</p>
                            </div>

                            {/* Sticker */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400 rotate-45 transform translate-y-10 translate-x-10"></div>
                            <div className="absolute bottom-4 right-4 font-black text-2xl text-slate-900 z-10 rotate-[-5deg]">24h</div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SERVICES GRID */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Tipos de <span className="text-yellow-600">Serviço</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Cópia Simples",
                                desc: "Para modelos mais antigos sem sistema de segurança eletrônico ou magnético.",
                                icon: "🔑"
                            },
                            {
                                title: "Chave Magnética",
                                desc: "Presente em scooters (Honda PCX, Elite, Biz) e motos menores para destravar a ignição.",
                                icon: "🧲"
                            },
                            {
                                title: "Chave Codificada",
                                desc: "Sistemas HISS (Honda), YISS (Yamaha) e imobilizadores de alta cilindrada.",
                                icon: "💻"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border-b-4 border-yellow-500 p-8 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
                                <div className="text-4xl mb-4 grayscale hover:grayscale-0 transition-opacity">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase">{card.title}</h3>
                                <p className="text-slate-600 text-sm">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Brands Scrolling */}
                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <p className="text-center text-slate-400 text-xs font-bold tracking-widest uppercase mb-6">Principais Marcas</p>
                        <div className="flex justify-center gap-8 md:gap-16 opacity-50 font-bold text-3xl text-slate-300 select-none">
                            <span>HONDA</span>
                            <span>YAMAHA</span>
                            <span>BMW</span>
                            <span>KAWASAKI</span>
                            <span>SUZUKI</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL INFO */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 bg-slate-900 p-12 rounded-xl text-white relative overflow-hidden">
                        {/* Background Effect */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_2px,transparent_2px,transparent_10px)] pointer-events-none"></div>

                        <div className="flex-1 relative z-10">
                            <h3 className="text-2xl font-bold uppercase mb-4 text-yellow-500">Atenção ao Código</h3>
                            <p className="text-slate-300 mb-6">
                                Muitas motos modernas possuem um chip dentro da chave, assim como os carros. Se você tentar ligar a moto com uma cópia simples &quot;de ferragem&quot;, ela pode girar mas não dará a partida.
                            </p>
                            <div className="bg-white/10 p-4 rounded border border-white/20">
                                <span className="font-bold text-yellow-400 block mb-1">DICA:</span>
                                <span className="text-sm">Sempre informe o modelo e ano da moto ao solicitar o orçamento para sabermos se é necessário codificação.</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 flex justify-center relative z-10">
                            <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center text-4xl font-black text-slate-900 shadow-[0_0_30px_rgba(234,179,8,0.5)] animate-pulse">
                                CODE
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
                                    <span className="text-yellow-500 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-yellow-200 pl-4">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">VOLTE A <span className="text-yellow-500">PILOTAR</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Soluções rápidas para você não ficar a pé. Chame no WhatsApp.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-yellow-500/20 rounded-lg hover:-translate-y-1"
                    >
                        Chamar Chaveiro Moto
                    </a>
                </div>
            </section>
        </main>
    )
}

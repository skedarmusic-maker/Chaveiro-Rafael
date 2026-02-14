import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chaveiro 24 Horas em Ribeirão Preto | Chaveiro Urgente',
    description: 'Serviço de chaveiro emergencial disponível 24 horas por dia em Ribeirão Preto e região metropolitana. Atendimento rápido para aberturas, cópias e trocas.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/chaveiro-24-horas/',
    },
}

export default function Chaveiro24HorasPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20de%20chaveiro%2024%20horas"

    const faqData = [
        {
            question: "O que significa chaveiro 24 horas?",
            answer: "É um serviço disponível para atendimento em diferentes horários, inclusive durante a noite, finais de semana e feriados, focado em situações que não podem esperar."
        },
        {
            question: "O atendimento é apenas residencial?",
            answer: "Não, nosso atendimento 24h abrange situações residenciais (casas, apartamentos), comerciais e também automotivas (abertura de carros, perda de chaves)."
        },
        {
            question: "O chaveiro vai até o local?",
            answer: "Sim, somos uma unidade móvel. O atendimento é realizado diretamente onde ocorreu o problema para sua maior comodidade e segurança."
        },
        {
            question: "Posso solicitar atendimento durante a madrugada?",
            answer: "Sim, serviços 24h são estruturados justamente para atender horários alternativos. Entre em contato para verificar a disponibilidade imediata da equipe."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-800 font-sans">
            <ServiceJsonLd
                name="Chaveiro 24 Horas em Ribeirão Preto"
                description="Serviço de chaveiro emergencial disponível 24 horas por dia em Ribeirão Preto e região metropolitana. Atendimento rápido para aberturas, cópias e trocas."
                url="https://chaveirourgenterp.com.br/servicos/chaveiro-24-horas/"
                title='Chaveiro 24 Horas em Ribeirão Preto | Chaveiro Urgente'
                alternates={{
                    canonical: 'https://chaveirourgenterp.com.br/servicos/chaveiro-24-horas/',
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: NIGHT MODE - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                Plantão Ativo
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CHAVEIRO 24 HORAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                    EM RIBEIRÃO PRETO
                                </span>
                            </h1>
                            <h2 className="text-lg text-indigo-700 font-mono mb-8 uppercase tracking-widest">
                                Atendimento para Situações Urgentes
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                Imprevistos com chaves e fechaduras podem acontecer em qualquer momento do dia ou da noite. Oferecemos suporte para situações urgentes, ajudando a recuperar acesso a residências, veículos ou estabelecimentos quando não é possível esperar.
                            </p>

                            <p className="text-slate-500 max-w-xl text-sm border-l-4 border-indigo-400 pl-4 py-2 bg-indigo-50/50 font-medium">
                                Muitas pessoas procuram um chaveiro próximo fora do horário comercial após esquecer as chaves, enfrentar travamento de fechadura ou perder acesso ao carro.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-indigo-500/30 rounded-lg animate-pulse hover:animate-none"
                                >
                                    <span className="mr-2">Chamar Plantão</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: CLOCK / 24H VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center bg-slate-900 rounded-full border-8 border-slate-100 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
                            {/* Clock Face */}
                            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,theme(colors.slate.900),theme(colors.indigo.900),theme(colors.slate.900))] opacity-50"></div>

                            {/* Ticks */}
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="absolute w-1 h-3 bg-slate-500" style={{ transform: `rotate(${i * 30}deg) translateY(-140px)` }}></div>
                            ))}

                            {/* Hands */}
                            <div className="absolute w-1 h-24 bg-indigo-500 origin-bottom rounded-t opacity-80" style={{ transform: 'rotate(0deg) translateY(-50%)' }}></div>
                            <div className="absolute w-1 h-16 bg-white origin-bottom rounded-t" style={{ transform: 'rotate(90deg) translateY(-50%)' }}></div>
                            <div className="absolute w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900 z-10"></div>

                            {/* Neon Text */}
                            <div className="absolute bottom-16 text-center">
                                <span className="block text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">24h</span>
                                <span className="block text-xs text-indigo-400 font-mono tracking-widest uppercase mt-1">Sempre Aberto</span>
                            </div>

                            {/* Rotating Ring */}
                            <div className="absolute inset-4 border border-indigo-500/30 rounded-full animate-spin-slow-reverse border-dashed"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SERVICES GRID */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-2 block">Cobertura Total</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Serviços de <span className="text-indigo-600">Plantão</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Abertura de Casas",
                                desc: "Portas trancadas, chaves perdidas ou fechaduras quebradas.",
                                icon: "🏠"
                            },
                            {
                                title: "Abertura de Carros",
                                desc: "Chaves esquecidas dentro do veículo ou no porta-malas.",
                                icon: "🚗"
                            },
                            {
                                title: "Troca de Segredo",
                                desc: "Mudança emergencial de segredo após roubo ou perda.",
                                icon: "🔑"
                            },
                            {
                                title: "Cópias Simples",
                                desc: "Confecção rápida de chaves para acesso imediato.",
                                icon: "⚙️"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border border-slate-200 p-8 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 group rounded-sm text-center">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors uppercase">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. AREAS SERVED */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-indigo-900 rounded-2xl p-12 relative overflow-hidden text-white">

                        {/* Background Map Effect */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center pointer-events-none mix-blend-overlay"></div>

                        <div className="relative z-10 max-w-xl">
                            <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Área de Cobertura</h3>
                            <p className="text-indigo-200 text-lg mb-6">Atendemos toda Ribeirão Preto e região metropolitana com equipes posicionadas estrategicamente para chegada rápida.</p>
                            <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-indigo-100">
                                <li>✓ Zona Sul</li>
                                <li>✓ Zona Norte</li>
                                <li>✓ Zona Leste</li>
                                <li>✓ Zona Oeste</li>
                                <li>✓ Centro</li>
                                <li>✓ Bonfim Paulista</li>
                            </ul>
                        </div>

                        <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center min-w-[200px]">
                            <div className="text-4xl font-bold text-white mb-1">~30min</div>
                            <div className="text-xs text-indigo-200 uppercase tracking-widest">Tempo Médio</div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 uppercase">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors rounded-sm shadow-sm">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-indigo-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-indigo-400 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-indigo-200 pl-4">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PLANTONISTA <span className="text-indigo-500">DISPONÍVEL</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Não importa a hora, estamos prontos para atender você.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-indigo-900/40 rounded-lg hover:-translate-y-1"
                    >
                        Solicitar Atendimento
                    </a>
                </div>
            </section>
        </main>
    )
}

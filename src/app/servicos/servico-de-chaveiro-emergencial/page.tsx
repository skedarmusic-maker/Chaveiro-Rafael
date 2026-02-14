import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Serviço de Chaveiro Emergencial em Ribeirão Preto | Chaveiro Urgente',
    description: 'Atendimento de chaveiro emergencial rápido em Ribeirão Preto. Socorro imediato para portas trancadas, chaves perdidas ou quebradas.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/servico-de-chaveiro-emergencial/',
    },
}

export default function ChaveiroEmergencialPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Emergência:%20Preciso%20de%20chaveiro%20agora"

    const faqData = [
        {
            question: "O que caracteriza um chaveiro emergencial?",
            answer: "É um serviço voltado para situações urgentes onde o acesso precisa ser restaurado rapidamente."
        },
        {
            question: "O atendimento funciona durante a madrugada?",
            answer: "Serviços emergenciais costumam atender horários alternativos, conforme disponibilidade."
        },
        {
            question: "O chaveiro atende no local?",
            answer: "Sim, o atendimento geralmente ocorre diretamente onde está o problema."
        },
        {
            question: "O serviço atende diferentes tipos de fechadura?",
            answer: "Sim, o atendimento pode envolver portas residenciais, comerciais ou automotivas."
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
                name="Serviço de Chaveiro Emergencial em Ribeirão Preto"
                description="Atendimento de chaveiro emergencial rápido em Ribeirão Preto. Socorro imediato para portas trancadas, chaves perdidas ou quebradas."
                url="https://chaveirourgenterp.com.br/servicos/servico-de-chaveiro-emergencial/"
                alternates={{
                    canonical: 'https://chaveirourgenterp.com.br/servicos/servico-de-chaveiro-emergencial/',
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: URGENT RED - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(239,68,68,0.03)_0,rgba(239,68,68,0.03)_10px,transparent_10px,transparent_20px)] pointer-events-none" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: COMMAND TEXT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-sm text-red-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                Plantão Ativo • Ribeirão Preto
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CHAVEIRO EMERGENCIAL <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                                    EM RIBEIRÃO PRETO
                                </span>
                            </h1>
                            <h2 className="text-lg text-red-700 font-mono mb-8 uppercase tracking-widest">
                                Atendimento para Situações Urgentes
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed border-l-4 border-red-500 pl-6 bg-red-50/20 py-2">
                                Imprevistos com chaves e fechaduras podem acontecer a qualquer momento. Seja uma porta trancada, chave perdida ou fechadura travada, o serviço de chaveiro emergencial existe para oferecer suporte rápido.
                            </p>

                            <p className="text-slate-500 text-sm italic">
                                * Se você está procurando um chaveiro 24 horas próximo ou atendimento urgente, clique abaixo.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-red-500/30 rounded-lg animate-pulse hover:animate-none"
                                >
                                    <span className="mr-2">Solicitar Agora</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: MAP / RADAR VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center bg-white border border-slate-200 rounded-full shadow-2xl overflow-hidden">
                            {/* Radar sweeps */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(239,68,68,0.05),transparent_70%)]"></div>
                            <div className="absolute w-full h-full border border-red-100 rounded-full opacity-50 scale-50"></div>
                            <div className="absolute w-full h-full border border-red-100 rounded-full opacity-30 scale-75"></div>

                            {/* Scanning line */}
                            <div className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gradient-to-l from-red-500 to-transparent origin-left animate-spin-slow-reverse opacity-50"></div>

                            {/* Ping Points */}
                            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping delay-300"></div>

                            <div className="relative z-10 text-center bg-white/90 p-6 rounded-lg backdrop-blur-sm border border-slate-100 shadow-lg">
                                <div className="text-4xl mb-2 text-red-600">📍</div>
                                <div className="font-bold text-slate-900 text-sm tracking-widest uppercase">Unidades Móveis</div>
                                <div className="text-xs text-slate-500 mt-1">EM ROTA</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. URGENCY LEVELS */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Níveis de <span className="text-red-600">Urgência</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* High Priority */}
                        <div className="bg-white border-t-4 border-red-600 p-8 shadow-sm hover:shadow-lg transition-shadow rounded-b-lg">
                            <div className="text-red-600 font-black text-6xl mb-4 opacity-20">01</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Alta Prioridade</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex items-center gap-2"><span className="text-red-500">⚠</span> Criança/Pet trancado</li>
                                <li className="flex items-center gap-2"><span className="text-red-500">⚠</span> Carro ligado trancado</li>
                                <li className="flex items-center gap-2"><span className="text-red-500">⚠</span> Risco de incêndio/gás</li>
                            </ul>
                            <div className="mt-6">
                                <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">ATENDIMENTO IMEDIATO</span>
                            </div>
                        </div>

                        {/* Medium Priority */}
                        <div className="bg-white border-t-4 border-orange-500 p-8 shadow-sm hover:shadow-lg transition-shadow rounded-b-lg">
                            <div className="text-orange-500 font-black text-6xl mb-4 opacity-20">02</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Acesso Bloqueado</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex items-center gap-2"><span className="text-orange-500">●</span> Trancado fora de casa</li>
                                <li className="flex items-center gap-2"><span className="text-orange-500">●</span> Chave quebrada na porta</li>
                                <li className="flex items-center gap-2"><span className="text-orange-500">●</span> Perda de chaves do carro</li>
                            </ul>
                            <div className="mt-6">
                                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">PRIORIDADE ALTA</span>
                            </div>
                        </div>

                        {/* Standard Priority */}
                        <div className="bg-white border-t-4 border-blue-500 p-8 shadow-sm hover:shadow-lg transition-shadow rounded-b-lg">
                            <div className="text-blue-500 font-black text-6xl mb-4 opacity-20">03</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Manutenção</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                <li className="flex items-center gap-2"><span className="text-blue-500">●</span> Troca de fechadura preventiva</li>
                                <li className="flex items-center gap-2"><span className="text-blue-500">●</span> Cópias adicionais</li>
                                <li className="flex items-center gap-2"><span className="text-blue-500">●</span> Ajustes e lubrificação</li>
                            </ul>
                            <div className="mt-6">
                                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">AGENDAMENTO RÁPIDO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FAQ */}
            <section className="py-24 max-w-4xl mx-auto px-4 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 uppercase">Dúvidas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-slate-200 hover:border-red-300 transition-colors rounded-lg bg-slate-50">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-red-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-red-400 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-32 bg-slate-900 relative overflow-hidden text-center border-t border-slate-200">
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA DE AJUDA <span className="text-red-500">AGORA?</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Não perca mais tempo. Nossa equipe está pronta para atender sua emergência.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-red-600 hover:bg-red-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-red-900/40 rounded-lg hover:-translate-y-1"
                    >
                        Chamar Emergência
                    </a>
                </div>
            </section>
        </main>
    )
}

import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Assistência para Perda de Chaves em Ribeirão Preto | Chaveiro Urgente',
    description: 'Perdeu suas chaves? Oferecemos assistência rápida para abertura de portas e confecção de novas chaves em Ribeirão Preto. Atendimento emergencial.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/assistencia-para-perda-de-chaves/',
    },
}

export default function PerdaDeChavesPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Emergência:%20Perdi%20minhas%20chaves%20e%20preciso%20de%20acesso"

    const faqData = [
        {
            question: "PROTOCOLO: Perdi minhas chaves, o que fazer?",
            answer: "Mantenha a calma. Verifique chaves reserva. Se não houver, não force a fechadura para evitar danos estruturais. Acione o suporte técnico."
        },
        {
            question: "TÉCNICA: Abrir a porta danifica a fechadura?",
            answer: "NEGATIVO. Nossos métodos de abertura técnica buscam preservar a integridade do cilindro e da porta em 95% dos casos."
        },
        {
            question: "LOCAL: O atendimento é in loco?",
            answer: "AFIRMATIVO. Deslocamento imediato até o local da ocorrência (residência, via pública ou comércio)."
        },
        {
            question: "SEGURANÇA: É necessário trocar o segredo?",
            answer: "AVALIAÇÃO NECESSÁRIA. Dependendo das circunstâncias da perda (furto/roubo), a troca do segredo é mandatória para garantir a segurança."
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
                name="Assistência para Perda de Chaves"
                description="Soluções rápidas para quem perdeu as chaves. Abertura técnica e suporte especializado em Ribeirão Preto."
                url="https://chaveirourgenterp.com.br/servicos/assistencia-para-perda-de-chaves/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/assistencia-para-perda-de-chaves/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: URGENCY - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(252,211,77,0.05)_0,rgba(252,211,77,0.05)_10px,transparent_10px,transparent_20px)] pointer-events-none" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-800 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                                Protocolo de Emergência
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                ASSISTÊNCIA PARA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">
                                    PERDA DE CHAVES
                                </span>
                            </h1>
                            <h2 className="text-lg text-yellow-700 font-mono mb-8 uppercase tracking-widest">
                                Suporte Imediato 24h
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                Perder as chaves de casa ou do carro gera um transtorno imediato. A assistência para perda de chaves em Ribeirão Preto oferece solução rápida e especializada para quem ficou trancado do lado de fora ou não encontra sua única cópia.
                            </p>

                            <p className="text-slate-500 max-w-xl text-sm border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50/30 font-medium">
                                Atendemos residências, comércios e veículos com técnicas de abertura que preservam a integridade das fechaduras.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-lg shadow-yellow-500/30 rounded-lg"
                                >
                                    <span className="mr-2">Solicitar Socorro</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: EMERGENCY VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center bg-slate-50 border border-slate-200 rounded-full shadow-2xl">
                            <div className="absolute inset-0 rounded-full border border-yellow-200 animate-ping opacity-20"></div>
                            <div className="absolute inset-4 rounded-full border border-yellow-100 animate-pulse opacity-40"></div>

                            <div className="relative text-center z-10 p-8">
                                <div className="text-7xl mb-4 text-yellow-500 drop-shadow-sm">🚨</div>
                                <h3 className="text-3xl font-black text-slate-900 uppercase leading-none mb-2">
                                    SOS <br /> ACESSO
                                </h3>
                                <p className="text-slate-500 font-mono text-sm tracking-widest mt-4 bg-white px-2 py-1 rounded inline-block shadow-sm">
                                    TEMPO MÉDIO: 30 MIN
                                </p>
                            </div>

                            {/* Floating Keywords */}
                            <div className="absolute top-10 left-10 bg-white px-3 py-1 rounded shadow text-xs font-bold text-slate-700 animate-bounce delay-100 border border-slate-100">
                                Residencial
                            </div>
                            <div className="absolute bottom-10 right-10 bg-white px-3 py-1 rounded shadow text-xs font-bold text-slate-700 animate-bounce delay-300 border border-slate-100">
                                Automotivo
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. STEPS */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 uppercase">
                            O que fazer <span className="text-yellow-600">Agora?</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {/* Connector Line */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2"></div>

                            {[
                                {
                                    step: "01",
                                    title: "Mantenha a Calma",
                                    desc: "Não tente arrombar. Isso pode custar muito mais caro depois."
                                },
                                {
                                    step: "02",
                                    title: "Envie Localização",
                                    desc: "Mande sua localização pelo WhatsApp para agilizar a chegada."
                                },
                                {
                                    step: "03",
                                    title: "Aguarde Técnico",
                                    desc: "Nossa unidade móvel chegará equipada para resolver."
                                }
                            ].map((card, i) => (
                                <div key={i} className="bg-white p-8 text-center border-b-4 border-yellow-400 shadow-sm hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-yellow-500 text-slate-900 font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-6 shadow-lg shadow-yellow-500/30">
                                        {card.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase">{card.title}</h3>
                                    <p className="text-slate-600 text-sm">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FAQ SECTION */}
            <section className="py-24 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 uppercase">Perguntas Rápidas</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-slate-200 bg-white hover:border-yellow-400 transition-colors rounded-lg overflow-hidden shadow-sm">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-amber-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-yellow-500 text-xl font-black group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                                    <span className="font-bold text-yellow-600 mr-2">RESPOSTA:</span>
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-20 bg-slate-900 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-white mb-8 tracking-tighter">NÃO FIQUE NO <span className="text-yellow-500">PREJUÍZO</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Atendimento rápido, preço justo e sem danos à sua porta.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-xl shadow-yellow-500/20 rounded-lg"
                    >
                        Chamar Agora
                    </a>
                </div>
            </section>
        </main>
    )
}

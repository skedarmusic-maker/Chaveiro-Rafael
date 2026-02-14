import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Serviços para Perda de Chave do Veículo em Ribeirão Preto | Chaveiro Urgente',
    description: 'Perdeu a chave do carro? Oferecemos serviços especializados para recuperar o acesso e confeccionar novas chaves em Ribeirão Preto. Atendimento móvel.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/servicos-para-perda-de-chave-do-veiculo/',
    },
}

export default function PerdaChaveVeiculoPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Emergência:%20Perdi%20a%20chave%20do%20meu%20carro"

    const faqData = [
        {
            question: "Perdi a chave do carro, qual o primeiro passo?",
            answer: "Verifique se existe chave reserva e evite tentar abrir o veículo por conta própria."
        },
        {
            question: "É possível abrir o carro sem danificar?",
            answer: "Cada situação é avaliada individualmente para definir o melhor procedimento, utilizando métodos seguros e ferramentas específicas (Lishi, cunhas de ar)."
        },
        {
            question: "O atendimento é feito no local do veículo?",
            answer: "Sim, nossa unidade móvel vai até onde o carro está estacionado (rua, shopping, garagem) para realizar o serviço."
        },
        {
            question: "Todos os tipos de chave automotiva podem ser avaliados?",
            answer: "Sim, atendemos desde chaves mecânicas simples até sistemas keyless (presença) e codificados de diversas montadoras."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-100 selection:text-orange-800 font-sans">
            <ServiceJsonLd
                name="Serviços para Perda de Chave do Veículo"
                description="Suporte emergencial para quem perdeu as chaves do veículo em Ribeirão Preto. Abertura técnica e confecção de novas chaves."
                url="https://chaveirourgenterp.com.br/servicos/servicos-para-perda-de-chave-do-veiculo/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/servicos-para-perda-de-chave-do-veiculo/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: AUTOMOTIVE URGENCY - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Traffic Pattern Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-orange-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                Assistência Automotiva
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                PERDA DE CHAVE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
                                    DO VEÍCULO
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>
                            <h2 className="text-lg text-orange-700 font-mono mb-8 uppercase tracking-widest">
                                Resgate e Confecção no Local
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                Perder a chave do veículo pode gerar situações inesperadas, principalmente quando não há acesso ao carro ou quando o incidente acontece fora de casa. Oferecemos suporte especializado para restaurar o acesso de forma segura e rápida.
                            </p>

                            <p className="text-slate-500 max-w-xl text-sm border-l-4 border-orange-400 pl-4 py-2 bg-orange-50/50 font-medium">
                                Se você está procurando um chaveiro automotivo próximo ou assistência urgente, contar com atendimento adequado evita danos à lataria e vidros.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-orange-500/20 rounded-lg"
                                >
                                    <span className="mr-2">Verificar Disponibilidade</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: CAR KEY VISUAL */}
                        <div className="w-full lg:w-[450px] bg-slate-900 rounded-3xl border-4 border-slate-800 p-8 shadow-2xl relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 blur-[50px] rounded-full"></div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6">
                                <div className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner border border-slate-700">
                                    <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                </div>

                                <div>
                                    <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Status do Veículo</h3>
                                    <div className="text-orange-500 font-mono text-xl font-bold animate-pulse">
                                        BLOQUEADO
                                    </div>
                                </div>

                                <div className="w-full h-px bg-slate-800"></div>

                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="bg-slate-800/50 p-3 rounded text-xs text-slate-400 border border-slate-700">
                                        <span className="block font-bold text-white mb-1">LOCAL</span>
                                        RASTREANDO...
                                    </div>
                                    <div className="bg-slate-800/50 p-3 rounded text-xs text-slate-400 border border-slate-700">
                                        <span className="block font-bold text-white mb-1">MODELO</span>
                                        IDENTIFICANDO...
                                    </div>
                                </div>
                            </div>

                            {/* Signal Waves */}
                            <div className="absolute top-4 right-4 flex space-x-1">
                                <div className="w-1 h-3 bg-orange-500 animate-pulse"></div>
                                <div className="w-1 h-3 bg-orange-500 animate-pulse delay-75"></div>
                                <div className="w-1 h-3 bg-orange-500 animate-pulse delay-150"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2 block">Soluções</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">O que <span className="text-orange-600">Resolvemos?</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Chaves Esquecidas",
                                desc: "Dentro do porta-malas ou na ignição. Abertura sem danos à pintura ou borrachas.",
                                icon: "🔒"
                            },
                            {
                                title: "Chave Quebrada",
                                desc: "Remoção de fragmentos do miolo e confecção de nova lâmina a partir do segredo.",
                                icon: "🧩"
                            },
                            {
                                title: "Perda Total",
                                desc: "Confecção de chaves do zero, mesmo sem ter o modelo original (via código mecânico).",
                                icon: "🚫"
                            },
                            {
                                title: "Bateria Descarregada",
                                desc: "Abertura para acesso ao capô e recarga (chupeta) ou troca da bateria da chave.",
                                icon: "🔋"
                            },
                            {
                                title: "Chave Descodificada",
                                desc: "Reprogramação do chip transponder quando o carro não reconhece a chave.",
                                icon: "💻"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border border-slate-200 p-8 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group rounded-sm">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-700 transition-colors uppercase">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. STEPS */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: INFO */}
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Como <span className="text-orange-600">Proceder?</span></h3>
                            <p className="text-slate-600 text-lg">Seguir os passos corretos agiliza o atendimento e reduz custos.</p>

                            <ol className="space-y-6">
                                {[
                                    { step: "1", title: "Localização e Modelo", desc: "Informe onde o carro está, marca, modelo e ano." },
                                    { step: "2", title: "Documentação", desc: "Tenha em mãos documento do veículo para comprovar propriedade." },
                                    { step: "3", title: "Aguarde no Local", desc: "Nossa unidade móvel chega em média em 30 minutos." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center shrink-0 border border-orange-200 mt-1">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900 font-bold text-lg">{item.title}</h4>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* RIGHT: BRANDS */}
                        <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase text-center">Montadoras Atendidas</h3>
                            <div className="grid grid-cols-3 gap-4 text-center text-sm font-mono text-slate-500">
                                {[
                                    "VW", "FIAT", "GM",
                                    "FORD", "HONDA", "TOYOTA",
                                    "HYUNDAI", "RENAULT", "NISSAN",
                                    "JEEP", "BMW", "OUTROS"
                                ].map((brand, i) => (
                                    <div key={i} className="p-2 hover:bg-white hover:text-orange-600 hover:shadow-sm rounded transition-all cursor-default border border-transparent hover:border-slate-100">
                                        {brand}
                                    </div>
                                ))}
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
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-orange-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-orange-400 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-orange-200 pl-4">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">RECUPERE O <span className="text-orange-500">CONTROLE</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Não deixe seu carro parado. Atendimento rápido e especializado no local.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-orange-900/20 rounded-lg hover:-translate-y-1"
                    >
                        Chamar Chaveiro Auto
                    </a>
                </div>
            </section>
        </main>
    )
}

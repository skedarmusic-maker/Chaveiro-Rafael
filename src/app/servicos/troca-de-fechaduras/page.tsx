import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Troca de Fechaduras em Ribeirão Preto | Chaveiro Urgente',
    description: 'Substituição e instalação de fechaduras residenciais e comerciais em Ribeirão Preto. Modelos de alta segurança e atendimento especializado.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/troca-de-fechaduras/',
    },
}

export default function TrocaFechadurasPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20trocar%20uma%20fechadura"

    const faqData = [
        {
            question: "Preciso trocar toda a fechadura ou apenas o segredo?",
            answer: "Depende do estado do mecanismo e da necessidade de segurança. Em muitos casos, a troca do cilindro (o miolo) já resolve e é mais econômica."
        },
        {
            question: "Qualquer porta pode receber nova fechadura?",
            answer: "A escolha do modelo depende do tipo de porta (madeira, ferro, vidro) e da estrutura existente. Avaliamos para indicar o modelo compatível."
        },
        {
            question: "Trocar a fechadura melhora a segurança?",
            answer: "Sim. Modelos adequados, de marcas reconhecidas e bem instalados, aumentam significativamente o nível de proteção do imóvel."
        },
        {
            question: "Quando é indicado substituir em vez de consertar?",
            answer: "Quando há desgaste excessivo no mecanismo interno, ferrugem severa ou quando o modelo é obsoleto e não oferece mais segurança."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-800 font-sans">
            <ServiceJsonLd
                name="Troca de Fechaduras em Ribeirão Preto"
                description="Serviço profissional de troca e instalação de fechaduras em Ribeirão Preto. Trabalhamos com as melhores marcas para garantir sua segurança."
                url="https://chaveirourgenterp.com.br/servicos/troca-de-fechaduras/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/troca-de-fechaduras/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: MECHANICAL PRECISION - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Technical Blueprint Background */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-amber-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="w-2 h-2 rounded-sm bg-amber-500 animate-spin-slow"></span>
                                Manutenção e Instalação
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                TROCA DE FECHADURAS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                                    EM RIBEIRÃO PRETO
                                </span>
                            </h1>
                            <h2 className="text-lg text-amber-700 font-mono mb-8 uppercase tracking-widest">
                                Substituição Residencial e Comercial
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                A troca de fechaduras é um serviço importante para manter a segurança e o bom funcionamento das portas. Com o uso constante, as fechaduras podem apresentar desgaste ou deixar de oferecer o nível de proteção desejado.
                            </p>

                            <p className="text-slate-500 max-w-xl text-sm border-l-2 border-amber-200 pl-4 py-2 font-mono">
                                Muitas pessoas procuram troca de fechadura em Ribeirão Preto após mudanças de residência, perda de chaves ou quando desejam atualizar sistemas antigos por modelos mais modernos e seguros.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-amber-500/20 rounded-sm"
                                >
                                    <span className="mr-2">Solicitar Troca</span>
                                    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: SPECIFICATION PANEL */}
                        <div className="w-full lg:w-96 bg-white border border-slate-200 p-8 shadow-2xl rounded-lg relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -mr-4 -mt-4 opacity-50 pointer-events-none"></div>

                            <h3 className="text-slate-900 font-bold uppercase mb-6 flex items-center gap-2 relative z-10">
                                <span className="text-amber-600 bg-amber-100 p-1.5 rounded">⚙️</span>
                                Especificações
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-slate-500 font-mono">
                                        <span>INSTALAÇÃO TÉCNICA</span>
                                        <span className="text-slate-900 font-bold">PRECISÃO</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-500 w-[98%] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-slate-500 font-mono">
                                        <span>COMPATIBILIDADE</span>
                                        <span className="text-slate-900 font-bold">UNIVERSAL</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-500 w-[100%] rounded-full"></div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-100 mt-6">
                                    <p className="text-sm text-slate-600 leading-relaxed italic">
                                        &quot;Realizar a substituição no momento certo ajuda a evitar problemas futuros e melhora a proteção do imóvel.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SCENARIOS */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-16 max-w-3xl mx-auto">
                        <div className="h-px bg-slate-200 flex-1"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-wider">
                            Situações <span className="text-amber-600">Comuns</span>
                        </h2>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Novo Imóvel",
                                desc: "Ao mudar-se, trocar as fechaduras é a única garantia de que antigos moradores não tenham acesso.",
                                icon: "🏠"
                            },
                            {
                                title: "Dificuldade ao Girar",
                                desc: "Fechadura travando ou exigindo força para girar a chave é sinal claro de desgaste mecânico.",
                                icon: "🔧"
                            },
                            {
                                title: "Perda de Chaves",
                                desc: "O extravio de chaves compromete a segurança, sendo recomendada a troca imediata do segredo.",
                                icon: "🔑"
                            },
                            {
                                title: "Reforço de Segurança",
                                desc: "Atualização de modelos simples para fechaduras com cilindros de segurança ou tetra-chave.",
                                icon: "🛡"
                            },
                            {
                                title: "Atualização Estética",
                                desc: "Troca de modelos antigos oxidados por peças novas com acabamento moderno.",
                                icon: "✨"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border border-slate-200 p-8 hover:border-amber-500 hover:shadow-lg transition-all duration-300 group rounded-sm">
                                <div className="text-4xl mb-4 group-hover:rotate-12 transition-transform duration-300 grayscale group-hover:grayscale-0">{card.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors uppercase">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS & CHECKLIST */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT: BENEFITS */}
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Benefícios da <span className="text-amber-600">Troca Profissional</span></h3>
                            <p className="text-slate-600 text-lg">A substituição realizada por um chaveiro especializado oferece vantagens importantes.</p>

                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { title: "Escolha do Modelo", desc: "Indicação da fechadura correta para o tipo de porta." },
                                    { title: "Instalação Correta", desc: "Ajuste preciso para evitar emperramentos futuros." },
                                    { title: "Maior Durabilidade", desc: "Fixação adequada garantindo longa vida útil." },
                                    { title: "Ajuste do Mecanismo", desc: "Fechamento suave e seguro sem esforço." }
                                ].map((item, i) => (
                                    <li key={i} className="bg-amber-50/50 p-4 border-l-4 border-amber-500 rounded-r-lg">
                                        <h4 className="text-slate-900 font-bold mb-1">{item.title}</h4>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: CHECKLIST */}
                        <div className="bg-slate-50 border border-slate-200 p-8 relative overflow-hidden rounded-lg">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-amber-500 pointer-events-none -mr-2 -mt-2">?</div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase relative z-10 flex items-center gap-2">
                                <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                                Quando Trocar?
                            </h3>

                            <ul className="space-y-4 relative z-10">
                                {[
                                    "A fechadura apresenta desgaste ou travamentos",
                                    "Mudou recentemente de residência",
                                    "Há preocupação com segurança pós-perda de chave",
                                    "Deseja reforçar o sistema de acesso",
                                    "A chave está difícil de girar ou prender"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center group bg-white p-3 rounded shadow-sm border border-slate-100 hover:border-amber-300 transition-colors">
                                        <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center bg-slate-50 group-hover:border-amber-500 transition-colors">
                                            <div className="w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                        <span className="text-slate-600 font-mono text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 uppercase">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors rounded-sm">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-amber-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-amber-500 opacity-50 group-hover:opacity-100 transition-transform group-open:rotate-45 text-2xl">+</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed pl-4 border-l-2 border-amber-200">
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-slate-900 relative overflow-hidden text-center border-t border-slate-200">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">PRECISA TROCAR A <span className="text-amber-500">FECHADURA?</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Entre em contato pelo WhatsApp para verificar disponibilidade e solicitar atendimento profissional.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-xl shadow-amber-600/30 rounded-lg"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}

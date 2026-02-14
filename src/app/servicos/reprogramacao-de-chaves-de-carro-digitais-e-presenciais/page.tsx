import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Reprogramação de Chaves em Ribeirão Preto | Chaveiro Urgente',
    description: 'Especialista em reprogramação de chaves presenciais e digitais em Ribeirão Preto. Sincronização avançada entre chave e veículo para restaurar o acesso e funcionamento.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/reprogramacao-de-chaves-de-carro-digitais-e-presenciais/',
    },
}

export default function ReprogramacaoChavesPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20reprogramar%20minha%20chave%20automotiva"

    const faqData = [
        {
            question: "O que é uma chave presencial (keyless)?",
            answer: "É um sistema onde o veículo reconhece automaticamente a chave próxima, permitindo acesso sem inserção física."
        },
        {
            question: "Toda chave digital pode ser reprogramada?",
            answer: "Depende do modelo do veículo e do sistema eletrônico utilizado. Na maioria dos casos, sim."
        },
        {
            question: "A reprogramação resolve falhas eletrônicas?",
            answer: "Pode resolver problemas relacionados à sincronização entre chave e veículo, como falhas no travamento."
        },
        {
            question: "Precisa levar o carro até o atendimento?",
            answer: "Algumas situações podem exigir avaliação direta do veículo, mas nossa unidade móvel vai até você."
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
                name="Reprogramação de Chaves Digitais e Presenciais"
                description="Sincronização técnica de chaves automotivas em Ribeirão Preto. Atendimento para chaves digitais e presenciais keyless."
                url="https://chaveirourgenterp.com.br/servicos/reprogramacao-de-chaves-de-carro-digitais-e-presenciais/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/reprogramacao-de-chaves-de-carro-digitais-e-presenciais/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: DIGITAL SYNC LAB - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Digital Noise Background */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#e2e8f0_1px,#e2e8f0_2px)] opacity-30 pointer-events-none" />
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-none text-blue-700 text-xs font-mono tracking-widest uppercase shadow-sm">
                                <span className="animate-pulse text-blue-500">●</span>
                                Sincronização Digital
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                REPROGRAMAÇÃO DE CHAVES <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    DIGITAIS E PRESENCIAIS
                                </span> <br />
                                EM RIBEIRÃO PRETO
                            </h1>

                            <h2 className="text-lg text-blue-700 font-mono mb-8 uppercase tracking-widest">
                                Diagnóstico e Sincronização Automotiva
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                Veículos modernos utilizam sistemas eletrônicos avançados que exigem sincronização entre a chave e o sistema do carro. Quando ocorre falha na comunicação, pode ser necessário realizar a reprogramação da chave automotiva para restaurar o funcionamento correto.
                            </p>

                            <p className="text-slate-500 max-w-xl text-sm font-mono border-l-2 border-blue-200 pl-4 py-2">
                                Situações como troca de bateria, falhas eletrônicas ou substituição da chave podem exigir ajustes técnicos para que o veículo reconheça novamente o dispositivo.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-blue-500/20"
                                >
                                    <span className="mr-2">Agendar Reprogramação</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: DIAGNOSTIC TABLET VISUALIZATION */}
                        <div className="w-full lg:w-[450px] aspect-[4/3] bg-slate-800 rounded-xl border-4 border-slate-300 shadow-2xl relative overflow-hidden flex flex-col transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Screen Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>

                            {/* Top Bar */}
                            <div className="bg-slate-900 px-4 py-2 flex justify-between items-center border-b border-slate-700">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono">OBD-II DIAGNOSTIC TOOL</div>
                            </div>

                            {/* Main Screen Area */}
                            <div className="flex-1 bg-slate-900 p-6 relative font-mono text-xs">
                                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>

                                {/* Code Stream */}
                                <div className="space-y-2 text-green-400 opacity-80 mb-6">
                                    <div className="flex justify-between">
                                        <span>&gt; CONNECTING TO ECU...</span>
                                        <span>[OK]</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>&gt; READING TRANSPONDER...</span>
                                        <span>[OK]</span>
                                    </div>
                                    <div className="flex justify-between text-yellow-400">
                                        <span>&gt; SYNC STATUS:</span>
                                        <span className="animate-pulse">PENDING</span>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-2 text-blue-300">PROGRAMMING SEQUENCE:</div>
                                <div className="w-full h-4 bg-slate-800 border border-slate-700 rounded overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-blue-600 w-2/3 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[size:10px_10px] animate-[pulse_2s_infinite]"></div>
                                </div>
                                <div className="text-right text-blue-400 mt-1">67% COMPLETE</div>

                                {/* Key Visual */}
                                <div className="absolute bottom-6 right-6 opacity-20">
                                    <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12.7-9.7l-1-1c-.2-.2-.5-.2-.7 0l-3.3 3.3c-1.1-.8-2.5-1.3-4-1.3-3.9 0-7 3.1-7 7 0 .5.1.9.2 1.3-.8.2-1.5.7-1.9 1.4L1.3 16c-.2.2-.2.5 0 .7l2.2 2.2c.2.2.5.2.7 0l.7-.7c.2.5.7 1 .7 1a4 4 0 0 0 .5-1.1L8 16c.4-.1.8-.2 1.3-.2-.4-1.5-.7-2.9-.7-4 0-1.8.8-3.4 2-4.6l3.3-3.3c.2-.2.5-.2.7 0l1 1c.2.2.5.2.7 0 .2-.2.2-.5 0-.7zM16 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /></svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. STEPS / PROCESS */}
            <section className="py-24 bg-surface-50 relative">
                <div className="container mx-auto px-4">
                    <div className="flex items-center mb-16 gap-4 justify-center md:justify-start">
                        <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-700 font-mono text-xs border border-blue-200">01</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-tight">
                            Processo de <span className="text-blue-600">Sincronização</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                step: "01",
                                title: "Diagnóstico",
                                desc: "Conexão via scanner OBD para identificar falhas de comunicação."
                            },
                            {
                                step: "02",
                                title: "Reset",
                                desc: "Limpeza de códigos de erro antigos e preparação da ECU."
                            },
                            {
                                step: "03",
                                title: "Codificação",
                                desc: "Gravação do novo transponder ou re-pareamento da chave original."
                            },
                            {
                                step: "04",
                                title: "Teste",
                                desc: "Verificação de partida, travamento e funções de conforto."
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border border-slate-200 p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group rounded-sm relative overflow-hidden">
                                <span className="absolute top-0 right-0 p-4 text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none -mr-4 -mt-4 font-mono">{card.step}</span>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors uppercase relative z-10">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TYPES OF KEYS */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-50 border border-slate-200 p-10 rounded-lg relative overflow-hidden">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase">Tipos Suportados</h3>
                                <div className="space-y-4">
                                    {[
                                        { title: "Smart Key (Presencial)", desc: "Botão Start/Stop, abertura por aproximação." },
                                        { title: "Chave Canivete", desc: "Com telecomando integrado para alarme e travas." },
                                        { title: "Chave Codificada Comum", desc: "Chip transponder interno (Head azul/preto)." },
                                        { title: "Cartão (Renault/Outros)", desc: "Slot de inserção ou presença." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 text-sm uppercase">{item.title}</h4>
                                                <p className="text-slate-500 text-xs">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative h-64 bg-white border border-slate-200 rounded flex items-center justify-center">
                                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.05),transparent_70%)]"></div>
                                <div className="text-center">
                                    <div className="text-4xl mb-2">🚗 📡 🔑</div>
                                    <p className="font-mono text-xs text-slate-400 mt-2">COMPATÍVEL COM NACIONAIS E IMPORTADOS</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h3 className="font-mono text-blue-600 text-center mb-4">FAQ.SYSTEM</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 uppercase">Perguntas Frequentes</h2>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border border-slate-200 bg-white hover:border-blue-400 transition-colors rounded-sm shadow-sm">
                            <details className="p-6 cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-blue-800 uppercase tracking-wide list-none">
                                    {item.question}
                                    <span className="text-blue-500 opacity-50 group-hover:opacity-100">+</span>
                                </summary>
                                <div className="mt-4 pt-4 border-t border-slate-100 text-slate-600 font-mono text-sm leading-relaxed">
                                    <span className="text-blue-500 mr-2">{'>'}</span>
                                    {item.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-32 bg-slate-900 relative overflow-hidden text-center border-t border-slate-200">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">RECUPERE O <span className="text-blue-500">CONTROLE</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Não fique a pé. Nossa equipe especializada resolve problemas de programação na hora.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-xl shadow-blue-500/30 rounded-lg"
                    >
                        Chamar Técnico Agora
                    </a>
                </div>
            </section>

        </main>
    )
}

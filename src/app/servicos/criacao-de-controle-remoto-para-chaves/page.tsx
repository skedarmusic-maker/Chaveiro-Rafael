import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Criação de Controle Remoto para Chaves em Ribeirão Preto | Chaveiro Urgente',
    description: 'Precisa de um novo controle para seu veículo? Realizamos a criação e codificação de controles remotos automotivos em Ribeirão Preto. Atendimento especializado.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/criacao-de-controle-remoto-para-chaves/',
    },
}

export default function CriacaoControleRemotoPage() {
    const whatsappLink = "https://wa.me/5516993499652?text=Olá,%20preciso%20de%20criação%20de%20controle%20remoto"

    const faqData = [
        {
            question: "É possível criar novo controle para qualquer carro?",
            answer: "Depende do sistema eletrônico e modelo do veículo. A maioria dos carros nacionais e importados aceita a gravação de novos controles, desde que o chaveiro possua o equipamento compatível."
        },
        {
            question: "O controle novo funciona igual ao original?",
            answer: "Sim. Quando compatível e configurado corretamente, ele executa todas as funções originais como travar, destravar, abrir porta-malas e ativar o alarme."
        },
        {
            question: "Preciso levar o veículo?",
            answer: "Sim. Para adicionar um novo controle ao sistema imobilizador ou de conforto, é necessário conectar o scanner na porta OBD do carro para o procedimento de 'apresentação'."
        },
        {
            question: "Criar controle reserva é recomendado?",
            answer: "Sim, ajuda a evitar imprevistos. Se você perder o único controle que tem, pode ficar sem acesso ao veículo ou ter que usar a chave mecânica, disparando o alarme."
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
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-100 selection:text-purple-700 font-sans">
            <ServiceJsonLd
                name="Criação de Controle Remoto para Chaves"
                description="Serviço de cópia e programação de controles automotivos e portões em Ribeirão Preto."
                url="https://chaveirourgenterp.com.br/servicos/criacao-de-controle-remoto-para-chaves/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/criacao-de-controle-remoto-para-chaves/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. HERO SECTION: WIRELESS SIGNAL - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Radio Waves Background */}
                <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_top_right,transparent_0,transparent_20px,rgba(168,85,247,0.05)_21px,transparent_22px)] pointer-events-none" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                                Frequência 433MHz / Clonagem
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                                CRIAÇÃO DE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                                    CONTROLE REMOTO
                                </span> <br />
                                PARA MOTO E CARRO
                            </h1>
                            <h2 className="text-lg text-purple-700 font-mono mb-8 uppercase tracking-widest">
                                Automação e Segurança
                            </h2>

                            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Controles de portão, alarmes automotivos e chaves com telecomando. Tecnologia de ponta para garantir o acesso rápido e seguro ao seu patrimônio.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg tracking-wide uppercase transition-all duration-200 clip-path-button shadow-xl shadow-purple-500/20 rounded-lg hover:-translate-y-1"
                                >
                                    <span className="mr-2">Configurar Controle</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: REMOTE VISUAL */}
                        <div className="w-full lg:w-[450px] aspect-square relative flex items-center justify-center">
                            {/* Signal Waves */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[100%] h-[100%] rounded-full border border-purple-200 animate-[ping_3s_linear_infinite] opacity-50"></div>
                                <div className="w-[80%] h-[80%] rounded-full border border-purple-300 animate-[ping_3s_linear_infinite_1s] opacity-50"></div>
                            </div>

                            {/* Remote Device */}
                            <div className="relative z-10 w-40 h-64 bg-slate-900 rounded-3xl border-4 border-slate-700 shadow-2xl flex flex-col items-center justify-between p-6 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                                {/* LED */}
                                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_red] animate-pulse mb-8"></div>

                                {/* Buttons */}
                                <div className="space-y-4 w-full px-4">
                                    <div className="h-12 w-full bg-slate-800 rounded-lg border border-slate-600 shadow-inner flex items-center justify-center group-hover:bg-slate-700 transition-colors cursor-pointer active:scale-95">
                                        <div className="w-3 h-3 border-2 border-slate-400 rounded-full"></div>
                                    </div>
                                    <div className="h-12 w-full bg-slate-800 rounded-lg border border-slate-600 shadow-inner flex items-center justify-center group-hover:bg-slate-700 transition-colors cursor-pointer active:scale-95">
                                        <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Brand Area */}
                                <div className="mt-8 text-xs font-bold text-slate-600 uppercase tracking-widest">Remote</div>
                            </div>

                            {/* Signal Icons */}
                            <div className="absolute top-10 right-10 text-purple-500 animate-bounce delay-75">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SERVICES GRID */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Soluções em <span className="text-purple-600">Controles</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Cópia Simples",
                                desc: "Duplicação de controles de portão de frequência fixa.",
                                icon: "💾"
                            },
                            {
                                title: "Chave Canivete",
                                desc: "Transformação da sua chave comum e controle em uma única peça moderna.",
                                icon: "🗡️"
                            },
                            {
                                title: "Presença",
                                desc: "Controles Smart Key que permitem a partida do veículo por aproximação.",
                                icon: "📡"
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border-b-4 border-purple-500 p-8 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
                                <div className="text-4xl mb-4 grayscale hover:grayscale-0 transition-opacity">{card.icon}</div>
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
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900 rounded-2xl p-12 relative overflow-hidden text-white">
                        {/* Signal Graph */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sine_wave_amplitude.svg/2560px-Sine_wave_amplitude.svg.png')] bg-repeat-x opacity-5 bg-contain pointer-events-none"></div>

                        <div className="flex-1 relative z-10">
                            <h3 className="text-3xl font-bold uppercase tracking-tight mb-4 text-purple-400">Teste de Frequência</h3>
                            <p className="text-slate-300 text-lg mb-6">
                                Antes de qualquer cópia, utilizamos um frequencímetro digital para identificar exatamente a frequência de operação (433MHz, 315MHz, etc.) e o tipo de código (Rolling Code ou Código Fixo) do seu controle atual.
                            </p>
                            <div className="flex items-center gap-4 text-purple-300 font-mono text-sm">
                                <span className="px-3 py-1 bg-purple-900/50 rounded border border-purple-500/30">433.92 MHz</span>
                                <span className="px-3 py-1 bg-purple-900/50 rounded border border-purple-500/30">Rolling Code</span>
                            </div>
                        </div>

                        <div className="relative z-10 bg-slate-800 p-6 rounded-xl border border-purple-500/30 min-w-[250px] text-center">
                            <div className="text-4xl font-mono text-green-400 mb-2 font-bold animate-pulse">Running...</div>
                            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-2/3 animate-progress-indeterminate"></div>
                            </div>
                            <div className="text-xs text-slate-400 mt-2 uppercase tracking-widest">Diagnosticando Sinal</div>
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
                                <summary className="flex items-center justify-between font-bold text-slate-700 group-hover:text-purple-700 uppercase tracking-wide list-none transition-colors">
                                    {item.question}
                                    <span className="text-purple-500 text-xl group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-4 text-slate-600 text-sm leading-relaxed border-l-2 border-purple-200 pl-4">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">CONTROLE NA <span className="text-purple-500">MÃO</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Substitua controles quebrados ou faça uma reserva agora mesmo.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-xl shadow-purple-900/40 rounded-lg hover:scale-105"
                    >
                        Solicitar Novo Controle
                    </a>
                </div>
            </section>
        </main>
    )
}

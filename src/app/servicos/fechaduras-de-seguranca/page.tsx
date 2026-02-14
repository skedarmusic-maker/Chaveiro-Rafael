import { businessInfo } from '@/data/businessInfo'
import { ServiceJsonLd } from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fechaduras de Segurança em Ribeirão Preto | Chaveiro Urgente',
    description: 'Instalação de fechaduras de alta segurança em Ribeirão Preto. Modelos anti-arrombamento, multiponto e blindados para sua proteção.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/fechaduras-de-seguranca/',
    },
}

export default function SecurityLocksPage() {
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20tenho%20interesse%20em%20Fechaduras%20de%20Segurança`

    const securityLevels = [
        {
            level: "Nível 1",
            name: "Standard Guard",
            features: ["Cilindro reforçado", "Chave multiponto", "Proteção básica contra micha"],
            ideal: "Apartamentos com portaria",
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100"
        },
        {
            level: "Nível 2",
            name: "High Security",
            features: ["Pinos de aço temperado", "Anti-furadeira (Drill)", "Cartão de codificação exclusivo"],
            ideal: "Casas de rua e comércios",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            border: "border-indigo-100"
        },
        {
            level: "Nível 3",
            name: "Maximum Defense",
            features: ["Travamento quádruplo", "Chave incopiável sem cartão", "Blindagem contra quebra"],
            ideal: "Bens de alto valor e blindados",
            color: "text-slate-700",
            bg: "bg-slate-100",
            border: "border-slate-200"
        }
    ]

    const faqData = [
        {
            question: "O que é uma fechadura anti-arrombamento?",
            answer: "São fechaduras construídas com materiais endurecidos (aço temperado) e mecanismos complexos que resistem a ataques violentos (furadeira, pé de cabra) e técnicos (gazua/micha)."
        },
        {
            question: "É possível instalar em qualquer porta?",
            answer: "Na maioria das portas de madeira ou metal maciço, sim. Portas ocas ou muito finas podem precisar de reforço estrutural antes da instalação."
        },
        {
            question: "O que é uma chave incopiável?",
            answer: "São chaves patenteadas que só podem ser copiadas na fábrica ou em centros autorizados, mediante apresentação de um cartão de segurança exclusivo do proprietário."
        },
        {
            question: "Qual a garantia dessas fechaduras?",
            answer: "Trabalhamos com marcas líderes que oferecem de 1 a 5 anos de garantia contra defeitos de fabricação, além da nossa garantia de instalação."
        }
    ]

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Instalação de Fechaduras de Segurança",
        "provider": {
            "@type": "LocalBusiness",
            "name": businessInfo.name,
            "telephone": businessInfo.phone,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ribeirão Preto",
                "addressRegion": "SP"
            }
        },
        "areaServed": "Ribeirão Preto",
        "description": "Instalação especializada de fechaduras de alta segurança, multiponto e blindadas contra arrombamento."
    }

    const faqSchema = {
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
                name="Fechaduras de Segurança em Ribeirão Preto"
                description="Instalação especializada de fechaduras de alta segurança, multiponto e blindadas contra arrombamento."
                url="https://chaveirourgenterp.com.br/servicos/fechaduras-de-seguranca/"
                alternates={{ canonical: 'https://chaveirourgenterp.com.br/servicos/fechaduras-de-seguranca/' }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* 1. HERO SECTION: FORTRESS THEME - LIGHT */}
            <section className="relative pt-32 pb-20 border-b border-slate-200 overflow-hidden bg-white">
                {/* Hexagon Mesh Background */}
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='1' fill='%23475569' stroke='%23475569' stroke-width='1'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* LEFT: CONTENT */}
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Certificação de Blindagem
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
                                FECHADURAS DE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                                    SEGURANÇA
                                </span> <br />
                                <span className="text-2xl md:text-3xl font-light text-slate-500">EM RIBEIRÃO PRETO</span>
                            </h1>

                            <p className="text-lg text-slate-600 max-w-xl border-l-4 border-indigo-500 pl-6 py-2">
                                Transforme sua porta em uma barreira impenetrável. Tecnologia anti-arrombamento, pinos de aço e chaves codificadas para proteção máxima da sua família.
                            </p>

                            <div className="pt-6">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg rounded shadow-xl shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Blindar Minha Casa
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: SHIELD VISUAL */}
                        <div className="w-full lg:w-[500px] h-[400px] relative flex items-center justify-center">
                            {/* Animated Shield Layers */}
                            <div className="absolute inset-0 border-4 border-indigo-100 rounded-[3rem] animate-pulse"></div>
                            <div className="absolute inset-4 border-2 border-indigo-50 rounded-[2.5rem] rotate-3"></div>
                            <div className="absolute inset-8 border border-slate-100 rounded-[2rem] -rotate-3"></div>

                            <div className="bg-white p-8 rounded-[1.5rem] border border-slate-200 shadow-2xl relative z-10 w-64 md:w-80 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6 border border-indigo-100">
                                    <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-slate-900 font-bold text-xl mb-2">PROTEÇÃO TOTAL</h3>
                                <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
                                    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full w-[98%]"></div>
                                </div>
                                <ul className="text-xs text-slate-500 space-y-2 text-left w-full pl-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span> Anti-Micha
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span> Anti-Furadeira
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">✓</span> Pinos de Aço
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. SECURITY LEVELS GRID */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">NÍVEIS DE <span className="text-indigo-600">DEFESA</span></h2>
                        <p className="text-slate-600">Escolha o grau de proteção adequado para sua necessidade.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {securityLevels.map((tier, index) => (
                            <div key={index} className={`bg-white border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group ${tier.border}`}>
                                <div className={`text-sm font-bold uppercase tracking-widest mb-4 ${tier.color} px-3 py-1 rounded-full ${tier.bg} w-max`}>
                                    {tier.level}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-indigo-700 transition-colors">
                                    {tier.name}
                                </h3>
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <span className="mt-1 text-indigo-500">▹</span>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6 border-t border-slate-100">
                                    <span className="text-xs text-slate-400 uppercase block mb-1">Recomendado para:</span>
                                    <p className="text-slate-800 font-medium">{tier.ideal}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TECHNOLOGY FEATURES */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Tecnologia <br /><span className="text-indigo-600">Anti-Invasão</span></h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Nossas fechaduras não são apenas trancas; são sistemas de engenharia projetados para frustrar as técnicas mais comuns de arrombamento utilizadas por criminosos.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Defesa Anti-Drill", desc: "Pinos de aço endurecido que quebram brocas de furadeira." },
                                    { title: "Sistema Anti-Bump", desc: "Mecanismo que impede a abertura por impacto (técnica bumping)." },
                                    { title: "Escudo Protetor", desc: "Rosetas de aço que protegem o cilindro contra alicates de pressão." },
                                    { title: "Cartão de Código", desc: "Cópias só autorizadas com cartão de propriedade física." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-50 p-6 rounded border-l-4 border-indigo-500 shadow-sm">
                                        <h4 className="text-slate-900 font-bold mb-2">{item.title}</h4>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive/Visual Element Placeholders using CSS */}
                        <div className="relative h-full min-h-[400px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(99,102,241,0.05),transparent_70%)]"></div>

                            {/* Abstract Mechanism Visual */}
                            <div className="relative z-10 grid grid-cols-2 gap-4 opacity-80">
                                <div className="w-24 h-48 bg-white rounded border border-slate-300 relative overflow-hidden shadow-inner">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_45%,rgba(99,102,241,0.2)_50%,transparent_55%)] animate-pulse"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-24 h-12 bg-white rounded border border-slate-300 shadow-sm"></div>
                                    <div className="w-24 h-12 bg-white rounded border border-slate-300 shadow-sm"></div>
                                    <div className="w-24 h-12 bg-indigo-50 rounded border border-indigo-200 flex items-center justify-center shadow-sm">
                                        <span className="text-indigo-600 text-xs font-mono font-bold">LOCKED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 uppercase">Dúvidas Técnicas</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="group border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors">
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">SUA SEGURANÇA <span className="text-indigo-500">NÃO TEM PREÇO</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Invista na tranquilidade da sua família. Fechaduras de alta segurança instaladas por profissionais qualificados.</p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="inline-flex items-center justify-center px-12 py-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xl uppercase tracking-widest transition-all duration-300 shadow-lg shadow-indigo-600/30 rounded-lg hover:-translate-y-1"
                    >
                        Solicitar Orçamento
                    </a>
                </div>
            </section>
        </main>
    )
}

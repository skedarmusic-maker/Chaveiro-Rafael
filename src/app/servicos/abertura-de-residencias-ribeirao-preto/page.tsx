import type { Metadata } from 'next'
import { businessInfo } from '@/data/businessInfo'
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Abertura de Residências em Ribeirão Preto | Chaveiro 24h',
    description: 'Ficou trancado para fora de casa? Chaveiro especialista em abertura de portas residenciais, portões e trocas de segredos em Ribeirão Preto. Chegamos rápido! 24 horas.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/abertura-de-residencias-ribeirao-preto/',
    },
}

export default function AberturaResidenciasPage() {
    const url = 'https://chaveirourgenterp.com.br/servicos/abertura-de-residencias-ribeirao-preto/'
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20fiquei%20trancado%20para%20fora%20de%20casa%20e%20preciso%20de%20ajuda%20urgente.`
    const cleanPhone = businessInfo.phone.replace(/[^0-9]/g, '')

    return (
        <main className="min-h-screen bg-neutral-900 text-white pb-20">
            <ServiceJsonLd
                title="Abertura de Residências em Ribeirão Preto"
                description="Serviço de abertura de portas e residências 24 horas. Atendimento rápido e profissionais qualificados."
                url={url}
            />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Serviços', item: '/servicos' },
                    { name: 'Abertura de Residências', item: '/servicos/abertura-de-residencias-ribeirao-preto' },
                ]}
            />
            {/* HER0 SECTION */}
            <section className="relative py-20 px-4 pt-32 lg:pt-40 border-b-4 border-yellow-400 bg-red-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800 to-red-950 opacity-80 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10 z-0 mix-blend-overlay"></div>

                <div className="container mx-auto relative z-10 text-center">
                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <span className="inline-block py-1 px-3 rounded bg-yellow-400 text-red-900 font-black text-sm uppercase tracking-widest animate-pulse">
                            Chegada em 20 min
                        </span>
                        <span className="inline-block py-1 px-3 rounded bg-neutral-800 text-yellow-400 border border-yellow-400/30 font-bold text-sm uppercase tracking-widest">
                            Aceitamos Cartão e Pix
                        </span>
                        <span className="inline-block py-1 px-3 rounded bg-neutral-800 text-yellow-400 border border-yellow-400/30 font-bold text-sm uppercase tracking-widest">
                            Plantão 24h
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white drop-shadow-lg uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Chaveiro 24 Horas em <span className="text-yellow-400">Ribeirão Preto</span><br />
                        <span className="text-3xl md:text-5xl block mt-2">Abertura de Residências</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
                        Ficou trancado para fora? Chegamos rápido até você. Somos o chaveiro mais próximo para abertura de portas residenciais, portões e trocas de segredos. Atendimento urgente no Subsetor Norte e toda região.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black py-5 px-8 rounded-xl transition-all shadow-[0_6px_0_rgb(161,98,7)] hover:shadow-[0_8px_0_rgb(161,98,7)] active:translate-y-1 active:shadow-none text-lg uppercase tracking-wide"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Chamar no WhatsApp
                        </a>
                        <a
                            href={`tel:${cleanPhone}`}
                            className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-red-800 hover:bg-red-700 text-white font-black py-5 px-8 rounded-xl transition-all border-2 border-red-500 hover:border-white text-lg uppercase tracking-wide shadow-lg"
                        >
                            <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Ligar Agora
                        </a>
                    </div>
                </div>
            </section>

            {/* DESCRIPTION & SEO CONTENT */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase leading-tight">
                            Precisa de um Chaveiro Urgente? <br />
                            <span className="text-yellow-400">Resolvemos seu problema sem danificar sua porta.</span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            Seja porque perdeu a chave, a fechadura emperrou ou a chave quebrou dentro do miolo, nós temos a solução. Nossa equipe de <strong className="text-white">chaveiros em Ribeirão Preto</strong> utiliza técnicas especializadas para abrir sua casa ou apartamento rapidamente.
                        </p>
                    </div>

                    <div className="bg-red-900/30 border border-red-900 rounded-2xl p-8 md:p-10">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {[
                                "Abertura de portas trancadas (madeira, vidro ou metal)",
                                "Abertura de portões eletrônicos e manuais",
                                "Troca de fechaduras e miolos (cilindros)",
                                "Remoção de chaves quebradas",
                                "Instalação de travas de segurança"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-200 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* REGIONAL SEO BLOCK */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase">
                            Chaveiro 24h em todas as regiões de <span className="text-yellow-400">Ribeirão Preto</span>
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                            Localizados na Avenida Recife, atendemos com agilidade o <strong className="text-white">Subsetor Norte</strong> e nos deslocamos rapidamente para todas as zonas da cidade. Se você está em um dos bairros abaixo e precisa de um chaveiro perto de você, ligue agora.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { zone: "Zona Norte", areas: "Ipiranga, Campos Elíseos, Vila Elisa e Adelino Simioni." },
                            { zone: "Zona Sul", areas: "Santa Cruz, Irajá, Jardim Botânico e Alto da Boa Vista." },
                            { zone: "Zona Leste", areas: "Jardim Paulista, Castelo Branco e Lagoinha." },
                            { zone: "Zona Oeste", areas: "Vila Tibério, Sumarezinho e arredores da USP." },
                            { zone: "Centro", areas: "Atendimento rápido em todo o quadrilátero central e proximidades da Rodoviária." }
                        ].map((item, i) => (
                            <div key={i} className="bg-neutral-800/50 border-l-4 border-yellow-400 p-6 rounded-r-xl hover:bg-neutral-800 transition-colors">
                                <h3 className="font-bold text-xl text-white mb-2 uppercase tracking-wide">{item.zone}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.areas}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COMMON SITUATIONS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        { title: "Trancado p/ Fora", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", desc: "A porta bateu ou você esqueceu a chave lá dentro." },
                        { title: "Chave Perdida", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", desc: "Perdeu o molho de chaves e não tem cópia." },
                        { title: "Chave Quebrada", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", desc: "A chave quebrou girando no miolo da fechadura." },
                        { title: "Fechadura Travada", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", desc: "A fechadura emperrou e a chave não gira mais." }
                    ].map((item, i) => (
                        <div key={i} className="bg-red-900 border-2 border-red-700 p-8 rounded-2xl hover:border-yellow-400 transition-colors shadow-lg group">
                            <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                                <svg className="w-6 h-6 text-yellow-400 group-hover:text-red-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-black text-white mb-2 uppercase">{item.title}</h3>
                            <p className="text-red-100/70 text-sm font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* HOW IT WORKS */}
                <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 border border-neutral-700 relative overflow-hidden mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase">
                            Por que escolher nosso serviço de <span className="text-yellow-400">Chaveiro em Ribeirão Preto?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                            <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">Disponibilidade Total</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Somos verdadeiramente um chaveiro 24 horas. Madrugada, feriados e finais de semana.</p>
                        </div>

                        <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                            <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">Preço Justo</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Orçamento transparente antes de iniciar o serviço. Sem surpresas na hora de pagar.</p>
                        </div>

                        <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                            <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">Profissionalismo</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Técnicos identificados e ferramentas modernas para não riscar sua porta.</p>
                        </div>
                    </div>
                </div>

                {/* HOW IT WORKS (TITLE UPDATE ONLY) */}
                <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 border border-neutral-700 relative overflow-hidden">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase">Como Funciona o <span className="text-yellow-400">Atendimento</span></h2>
                        <p className="text-gray-400">Processo simples e rápido.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-3xl font-black text-red-900 mx-auto mb-6 shadow-[0_6px_0_rgb(153,27,27)]">1</div>
                            <h3 className="text-xl font-bold text-white mb-2">Contato Urgente</h3>
                            <p className="text-gray-400 text-sm">Entre em contato e informe seu endereço e o tipo de fechadura.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-3xl font-black text-red-900 mx-auto mb-6 shadow-[0_6px_0_rgb(153,27,27)]">2</div>
                            <h3 className="text-xl font-bold text-white mb-2">Motoqueiro a Caminho</h3>
                            <p className="text-gray-400 text-sm">Um técnico motorizado chega em até 20 minutos (média).</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-3xl font-black text-red-900 mx-auto mb-6 shadow-[0_6px_0_rgb(153,27,27)]">3</div>
                            <h3 className="text-xl font-bold text-white mb-2">Acesso Liberado</h3>
                            <p className="text-gray-400 text-sm">Abrimos sua porta com técnicas profissionais e segurança.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container mx-auto px-4 py-16 border-t border-neutral-800">
                <h2 className="text-3xl font-black text-center text-white mb-10 uppercase">Perguntas Frequentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Quanto custa para abrir uma porta em Ribeirão Preto?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">O valor pode variar dependendo do tipo de fechadura e horário (plantão 24h). Entre em contato pelo WhatsApp <strong className="text-white">(16) 99349-9652</strong> para um orçamento imediato e sem compromisso.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Vocês atendem emergência de madrugada?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Sim! Somos especialistas em atendimento emergencial. Se você precisa de um <strong className="text-white">chaveiro 24h em Ribeirão Preto</strong>, estamos prontos para atender a qualquer hora.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">O serviço danifica a fechadura?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Na maioria dos casos de abertura simples, utilizamos técnicas de &quot;gazua&quot; que preservam sua fechadura. Caso seja necessário arrombar ou trocar o miolo, avisamos antecipadamente.</p>
                    </div>
                </div>
            </section>

            {/* BLOCK 6: FOOTER & NAP */}
            <section className="bg-yellow-400 pt-16 pb-20">
                <div className="container mx-auto px-4">
                    {/* CTA */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-red-900 mb-8 uppercase tracking-tighter">
                            Não fique esperando do lado de fora
                        </h2>

                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-2xl mx-auto">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-red-900 hover:bg-red-800 text-white font-black py-5 px-8 rounded-2xl transition-all shadow-[0_8px_0_rgb(80,0,0)] hover:shadow-[0_10px_0_rgb(80,0,0)] active:translate-y-1 active:shadow-none text-xl uppercase tracking-wide"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 flex-shrink-0">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href={`tel:${cleanPhone}`}
                                className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-red-800 hover:bg-red-700 text-white font-black py-5 px-8 rounded-2xl transition-all border-2 border-red-500 hover:border-white text-xl uppercase tracking-wide shadow-lg"
                            >
                                <svg className="w-8 h-8 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Ligar Agora</span>
                            </a>
                        </div>
                        <p className="text-red-900 font-bold text-lg mt-6">Atendimento 24h • Chegada em até 20 min</p>
                    </div>

                    {/* NAP & MAP */}
                    <div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-red-900 grid grid-cols-1 lg:grid-cols-2">
                        {/* Address Info */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-3">
                                <span className="bg-yellow-400 text-red-900 p-2 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                Localização Base
                            </h3>

                            <address className="not-italic text-lg text-gray-300 space-y-2 leading-relaxed font-medium">
                                <strong className="text-white block text-xl mb-2">Chaveiro 24 Horas Ribeirão Preto</strong>
                                <span className="block">Av. Recife, 768</span>
                                <span className="block">Subsetor Norte - 13 (N-13)</span>
                                <span className="block">Ribeirão Preto - SP, 14078-390</span>
                            </address>

                            <div className="mt-8 pt-8 border-t border-neutral-800">
                                <p className="text-yellow-400 font-bold mb-2 uppercase text-sm tracking-wider">Área de Cobertura</p>
                                <p className="text-gray-400 text-sm">
                                    Atendemos toda Ribeirão Preto com foco na Zona Norte e Região Central. Deslocamento rápido via moto.
                                </p>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="h-[400px] w-full bg-neutral-800 relative">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Av.%20Recife,%20768%20-%20Subsetor%20Norte%20-%2013%20(N-13),%20Ribeir%C3%A3o%20Preto%20-%20SP,%2014078-390&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

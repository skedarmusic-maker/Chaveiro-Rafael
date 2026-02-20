import type { Metadata } from 'next'
import { businessInfo } from '@/data/businessInfo'
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Instalação de Fechaduras em Ribeirão Preto | Segurança Residencial',
    description: 'Especialistas em instalação e troca de fechaduras residenciais e comerciais em Ribeirão Preto. Fechaduras eletrônicas, tetra e de alta segurança. Atendimento rápido na Av. Recife.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/instalacao-de-fechaduras-ribeirao-preto/',
    },
}

export default function InstalacaoFechadurasPage() {
    const url = 'https://chaveirourgenterp.com.br/servicos/instalacao-de-fechaduras-ribeirao-preto/'
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20instalação%20de%20fechadura.`
    const cleanPhone = businessInfo.phone.replace(/[^0-9]/g, '')

    return (
        <main className="min-h-screen bg-neutral-900 text-white pb-20">
            <ServiceJsonLd
                title="Instalação de Fechaduras em Ribeirão Preto"
                description="Serviço especializado de instalação e substituição de fechaduras residenciais, comerciais e digitais."
                url={url}
            />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Serviços', item: '/servicos' },
                    { name: 'Instalação de Fechaduras', item: '/servicos/instalacao-de-fechaduras-ribeirao-preto' },
                ]}
            />
            {/* Bloco 1: Hero Section (Segurança e Confiança) */}
            <section className="relative py-20 px-4 pt-32 lg:pt-40 border-b-4 border-yellow-400 bg-red-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800 to-red-950 opacity-80 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10 z-0 mix-blend-overlay"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <span className="inline-block py-1 px-3 rounded bg-yellow-400 text-red-900 font-black text-sm uppercase tracking-widest animate-pulse">
                            Proteção Total
                        </span>
                        <span className="inline-block py-1 px-3 rounded bg-neutral-800 text-yellow-400 border border-yellow-400/30 font-bold text-sm uppercase tracking-widest">
                            Instalação Profissional
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white drop-shadow-lg uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Instalação de Fechaduras em <span className="text-yellow-400">Ribeirão Preto</span><br />
                        <span className="text-2xl md:text-4xl block mt-2 text-red-100">Segurança para sua Família</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
                        Especialistas em instalação e troca de fechaduras residenciais e comerciais. Trabalhamos com as melhores marcas do mercado para garantir a proteção do seu patrimônio. Atendimento rápido na Av. Recife e em toda Ribeirão.
                    </p>

                    <div className="inline-block bg-neutral-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-6 py-3 mb-10">
                        <p className="text-yellow-400 font-bold uppercase tracking-wider text-sm md:text-base">
                            Instalação profissional sem danificar sua porta.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black py-4 px-6 rounded-xl transition-all shadow-[0_6px_0_rgb(161,98,7)] hover:shadow-[0_8px_0_rgb(161,98,7)] active:translate-y-1 active:shadow-none text-lg uppercase tracking-wide whitespace-nowrap h-16"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Solicitar Orçamento
                        </a>
                        <a
                            href={`tel:${cleanPhone}`}
                            className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-red-800 hover:bg-red-700 text-white font-black py-4 px-6 rounded-xl transition-all border-2 border-red-500 hover:border-white text-lg uppercase tracking-wide shadow-lg whitespace-nowrap h-16"
                        >
                            <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Chamar no WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Bloco 2: Tipos de Fechaduras (Autoridade Técnica) */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase">
                        Soluções em Fechaduras para <span className="text-yellow-400">Todos os Tipos de Portas</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Seja para uma porta nova ou para aumentar a segurança da atual, oferecemos o modelo ideal para sua necessidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {[
                        { title: "Digitais e Eletrônicas", icon: "M12 4v1m6 11h2m-6 0h-2v4h8v-4m-6-6v3a1 1 0 001 1h4a1 1 0 001-1v-3a1 1 0 00-1-1h-4a1 1 0 00-1 1zM5.05 6.49a2 2 0 012.83 0L10 8.59l2.12-2.12a2 2 0 012.83 2.83l-2.12 2.12 2.12 2.12a2 2 0 01-2.83 2.83L10 11.41l-2.12 2.12a2 2 0 01-2.83-2.83l2.12-2.12-2.12-2.12a2 2 0 010-2.83z", desc: "Instalação de fechaduras com senha, biometria ou tag (Intelbras, Yale, Papaiz)." },
                        { title: "Alta Segurança", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", desc: "Modelos com chaves multiponto e travas auxiliares reforçadas." },
                        { title: "Fechaduras de Rolete", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", desc: "Ideais para portas pivotantes com puxadores." },
                        { title: "Travas Tetra", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", desc: "Instalação de travas adicionais para reforçar a entrada principal." },
                        { title: "Portas de Vidro", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", desc: "Modelos específicos para Blindex e áreas comerciais." }
                    ].map((item, i) => (
                        <div key={i} className="bg-neutral-800 border-2 border-neutral-700 p-8 rounded-2xl hover:border-yellow-400 transition-colors shadow-lg group text-center">
                            <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-400 transition-colors duration-300">
                                <svg className="w-8 h-8 text-yellow-400 group-hover:text-red-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                </svg>
                            </div>
                            <h3 className="text-lg font-black text-white mb-4 uppercase">{item.title}</h3>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bloco 3: Troca de Segredo (Conveniência) */}
            <section className="bg-neutral-800 rounded-3xl p-8 md:p-12 border-y border-neutral-700 relative overflow-hidden mb-20 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase leading-tight">
                            Mudou-se agora? <br />
                            <span className="text-yellow-400">Troque o segredo!</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Não corra riscos com chaves antigas nas mãos de terceiros. Realizamos a troca do cilindro (miolo) ou a substituição completa da fechadura de forma rápida e limpa. Como seu chaveiro 24h em Ribeirão Preto, garantimos que só você tenha acesso à sua nova residência.
                        </p>
                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-yellow-400/30">
                            <p className="text-yellow-400 font-bold mb-2 uppercase text-sm tracking-widest flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                Condomínios e Empresas
                            </p>
                            <p className="text-gray-400 text-sm">
                                Pacotes especiais para manutenção preventiva de portas e fechaduras.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[300px] md:h-full bg-neutral-900 rounded-2xl border-2 border-dashed border-neutral-700 flex items-center justify-center overflow-hidden">
                        <div className="text-center p-8">
                            <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 text-white shadow-lg">
                                🔑
                            </div>
                            <h3 className="text-2xl font-black text-white uppercase mb-2">Troca Limpa</h3>
                            <p className="text-gray-400 max-w-xs mx-auto">Sem poeira e sem danificar a pintura da sua porta.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bloco 4: Diferenciais */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-white mb-4 uppercase">
                        Por que contratar nossa <span className="text-yellow-400">instalação?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                        <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Ferramentas de Precisão</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Utilizamos gabaritos e ferramentas profissionais para furos e encaixes perfeitos, mantendo a estética da sua porta.</p>
                    </div>

                    <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                        <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Consultoria de Segurança</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Avaliamos os pontos vulneráveis da sua porta e sugerimos a melhor fechadura para o seu perfil.</p>
                    </div>

                    <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                        <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Garantia de Serviço</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Todos os nossos serviços de instalação possuem garantia total contra defeitos de montagem.</p>
                    </div>
                </div>
            </section>

            {/* Bloco 5: FAQ - Instalação */}
            <section className="container mx-auto px-4 py-16 border-t border-neutral-800">
                <h2 className="text-3xl font-black text-center text-white mb-10 uppercase">Perguntas Frequentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Vocês instalam fechadura eletrônica comprada na internet?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Sim! Se você já comprou sua fechadura digital (Samsung, Intelbras, etc.), nossos técnicos realizam a instalação e configuração completa para você.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Quanto tempo leva a instalação de uma trava tetra?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Em média, o serviço leva de 40 a 60 minutos, dependendo do material da porta (madeira ou metal).</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Vocês atendem em bairros mais afastados?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Atendemos toda Ribeirão Preto, incluindo bairros como Bonfim Paulista, Recreio das Acácias e toda a Zona Sul e Norte.</p>
                    </div>
                </div>
            </section>

            {/* Bloco 6: Rodapé e NAP Local */}
            <section className="bg-neutral-800 border-t-4 border-yellow-400 py-16 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4 uppercase">
                        Chaveiro e Instalador de Fechaduras em Ribeirão Preto
                    </h2>

                    <address className="not-italic text-lg text-gray-400 space-y-2 mb-10 font-medium">
                        <span className="block">Av. Recife, 768 - Subsetor Norte</span>
                        <span className="block">Ribeirão Preto - SP</span>
                        <strong className="block text-white text-xl mt-4">{businessInfo.phone}</strong>
                    </address>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-red-900 hover:bg-red-800 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-[0_8px_0_rgb(80,0,0)] hover:shadow-[0_10px_0_rgb(80,0,0)] active:translate-y-1 active:shadow-none text-lg uppercase whitespace-nowrap"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                            <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4 4 4-4V5.586l-4-4zM10 7.414l2-2 2 2v9.172l-2 2-2-2V7.414z" clipRule="evenodd" />
                        </svg>
                        Proteja Sua Casa Agora
                    </a>
                </div>
            </section>
        </main>
    )
}

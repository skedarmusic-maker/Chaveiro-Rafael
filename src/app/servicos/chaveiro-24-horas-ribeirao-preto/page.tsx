import type { Metadata } from 'next'
import { businessInfo } from '@/data/businessInfo'
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Chaveiro 24 Horas em Ribeirão Preto | Atendimento Imediato',
    description: 'Emergência com chaves? Chaveiro 24 horas em Ribeirão Preto. Atendimento em até 20 minutos para abertura de portas e veículos. Plantão de madrugada e feriados.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/chaveiro-24-horas-ribeirao-preto/',
    },
}

export default function Chaveiro24HorasPage() {
    const url = 'https://chaveirourgenterp.com.br/servicos/chaveiro-24-horas-ribeirao-preto/'
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20preciso%20de%20um%20chaveiro%20AGORA!`
    const cleanPhone = businessInfo.phone.replace(/[^0-9]/g, '')

    return (
        <main className="min-h-screen bg-neutral-900 text-white pb-20">
            <ServiceJsonLd
                title="Chaveiro 24 Horas em Ribeirão Preto"
                description="Serviço de chaveiro emergencial 24 horas para aberturas residenciais e automotivas. Chegada em 20 minutos."
                url={url}
            />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Serviços', item: '/servicos' },
                    { name: 'Chaveiro 24 Horas', item: '/servicos/chaveiro-24-horas-ribeirao-preto' },
                ]}
            />
            {/* Bloco 1: Hero Section (Urgência Máxima) */}
            <section className="relative py-20 px-4 pt-32 lg:pt-40 border-b-4 border-yellow-400 bg-red-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800 to-red-950 opacity-80 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10 z-0 mix-blend-overlay"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <span className="inline-block py-1 px-3 rounded bg-yellow-400 text-red-900 font-black text-sm uppercase tracking-widest animate-pulse">
                            Chegada em 20 Minutos
                        </span>
                        <span className="inline-block py-1 px-3 rounded bg-neutral-800 text-yellow-400 border border-yellow-400/30 font-bold text-sm uppercase tracking-widest">
                            Domingo a Domingo
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white drop-shadow-lg uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Chaveiro 24 Horas em <span className="text-yellow-400">Ribeirão Preto</span><br />
                        <span className="text-2xl md:text-4xl block mt-2 text-red-100">Atendimento Imediato</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
                        Emergência? Não importa a hora, nós atendemos. Chegada rápida em até 20 minutos para aberturas residenciais e automotivas em qualquer bairro de Ribeirão.
                    </p>

                    <div className="inline-block bg-neutral-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-6 py-3 mb-10">
                        <p className="text-white font-bold uppercase tracking-wider text-sm md:text-base">
                            Plantão de Domingo a Domingo, incluindo Feriados e Madrugadas.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black py-4 px-6 rounded-xl transition-all shadow-[0_6px_0_rgb(161,98,7)] hover:shadow-[0_8px_0_rgb(161,98,7)] active:translate-y-1 active:shadow-none text-lg uppercase tracking-wide whitespace-nowrap h-16 animate-pulse hover:animate-none"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4 4 4-4V5.586l-4-4zM10 7.414l2-2 2 2v9.172l-2 2-2-2V7.414z" clipRule="evenodd" />
                            </svg>
                            CHAMAR CHAVEIRO AGORA
                        </a>
                        <a
                            href={`tel:${cleanPhone}`}
                            className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-red-800 hover:bg-red-700 text-white font-black py-4 px-6 rounded-xl transition-all border-2 border-red-500 hover:border-white text-lg uppercase tracking-wide shadow-lg whitespace-nowrap h-16"
                        >
                            <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Ligar Agora
                        </a>
                    </div>
                </div>
            </section>

            {/* Bloco 2: Especialidades do Plantão (Promessa de Valor) */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase">
                        Por que somos o Chaveiro 24h <span className="text-yellow-400">mais confiável?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        { title: "Atendimento Móvel", icon: "M13 10V3L4 14h7v7l9-11h-7z", desc: "Nossa unidade móvel está sempre pronta para ir até você." },
                        { title: "Sem Danos", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", desc: "Técnicas de abertura limpa que preservam sua porta e fechadura." },
                        { title: "Preço Transparente", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", desc: "Informamos o valor do plantão antes de sair para o atendimento." },
                        { title: "Segurança Total", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", desc: "Profissionais identificados para sua total tranquilidade durante a madrugada." }
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

            {/* Bloco 3: Áreas de Cobertura (SEO Local de Urgência) */}
            <section className="bg-neutral-800 rounded-3xl p-8 md:p-12 border-y border-neutral-700 relative overflow-hidden mb-20 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase leading-tight">
                            Chaveiro 24h Perto de Você <br />
                            <span className="text-yellow-400">em Ribeirão Preto</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Baseados na Av. Recife, 768, temos acesso fácil às principais vias, garantindo o socorro mais rápido da região.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-neutral-900/50 p-4 rounded-lg border-l-4 border-yellow-400">
                                <strong className="text-white block uppercase text-sm mb-1">Subsetor Norte</strong>
                                <span className="text-gray-400 text-xs">Ipiranga, Campos Elíseos, Adelino Simioni.</span>
                            </div>
                            <div className="bg-neutral-900/50 p-4 rounded-lg border-l-4 border-yellow-400">
                                <strong className="text-white block uppercase text-sm mb-1">Zona Sul</strong>
                                <span className="text-gray-400 text-xs">Santa Cruz, Irajá, Jardim Botânico.</span>
                            </div>
                            <div className="bg-neutral-900/50 p-4 rounded-lg border-l-4 border-yellow-400">
                                <strong className="text-white block uppercase text-sm mb-1">Zona Leste</strong>
                                <span className="text-gray-400 text-xs">Jardim Paulista, Lagoinha, Castelo Branco.</span>
                            </div>
                            <div className="bg-neutral-900/50 p-4 rounded-lg border-l-4 border-yellow-400">
                                <strong className="text-white block uppercase text-sm mb-1">Oeste e Centro</strong>
                                <span className="text-gray-400 text-xs">Vila Tibério, Sumarezinho, Centro.</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-[300px] md:h-full bg-neutral-900 rounded-2xl border-4 border-red-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Av.%20Recife,%20768%20-%20Subsetor%20Norte%20-%2013%20(N-13),%20Ribeir%C3%A3o%20Preto%20-%20SP,%2014078-390&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Bloco 4: Situações de Emergência (Empatia) */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-white mb-4 uppercase">
                        Resolvemos Qualquer <span className="text-yellow-400">Emergência</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {[
                        "Perda ou roubo de chaves no meio da noite.",
                        "Chave quebrada dentro da fechadura ou ignição.",
                        "Porta batida com a chave do lado de dentro.",
                        "Criança ou animal de estimação trancado.",
                        "Fechadura emperrada impedindo entrada/saída."
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 hover:border-red-500 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <span className="text-white font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bloco 5: FAQ - Plantão 24h */}
            <section className="container mx-auto px-4 py-16 border-t border-neutral-800">
                <h2 className="text-3xl font-black text-center text-white mb-10 uppercase">Perguntas Frequentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Vocês aceitam cartão de madrugada?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Sim! Levamos a maquininha até você. Aceitamos Crédito, Débito e Pix.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Qual o tempo médio de espera?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Em média, de 15 a 30 minutos dentro do perímetro urbano de Ribeirão Preto.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">O valor é diferente no plantão?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Sim, atendimentos de plantão (noite, madrugadas e feriados) possuem uma taxa diferenciada. Consulte o valor exato no WhatsApp.</p>
                    </div>
                </div>
            </section>

            {/* Bloco 6: Rodapé de Autoridade (NAP) */}
            <section className="bg-neutral-800 border-t-4 border-yellow-400 py-16 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4 uppercase">
                        Chaveiro 24 Horas Ribeirão Preto – Av. Recife
                    </h2>

                    <address className="not-italic text-lg text-gray-400 space-y-2 mb-10 font-medium">
                        <span className="block">Av. Recife, 768 - Subsetor Norte</span>
                        <span className="block">Ribeirão Preto - SP, 14078-390</span>
                        <strong className="block text-white text-xl mt-4">{businessInfo.phone}</strong>
                    </address>

                    <a
                        href={`tel:${cleanPhone}`}
                        className="inline-flex items-center justify-center gap-3 bg-red-900 hover:bg-red-800 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-[0_8px_0_rgb(80,0,0)] hover:shadow-[0_10px_0_rgb(80,0,0)] active:translate-y-1 active:shadow-none text-lg uppercase whitespace-nowrap"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        LIGAR PARA O CHAVEIRO AGORA
                    </a>
                </div>
            </section>
        </main>
    )
}

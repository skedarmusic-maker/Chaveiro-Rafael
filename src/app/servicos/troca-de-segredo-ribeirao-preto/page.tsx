import type { Metadata } from 'next'
import { businessInfo } from '@/data/businessInfo'
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Troca de Segredo em Ribeirão Preto | Segurança Imediata',
    description: 'Mudou de casa ou perdeu as chaves? Troque o segredo da sua fechadura agora. Serviço rápido, econômico e seguro em Ribeirão Preto. Atendimento 24h na Av. Recife.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/troca-de-segredo-ribeirao-preto/',
    },
}

export default function TrocaSegredoPage() {
    const url = 'https://chaveirourgenterp.com.br/servicos/troca-de-segredo-ribeirao-preto/'
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20preciso%20trocar%20o%20segredo%20da%20minha%20fechadura.`
    const cleanPhone = businessInfo.phone.replace(/[^0-9]/g, '')

    return (
        <main className="min-h-screen bg-neutral-900 text-white pb-20">
            <ServiceJsonLd
                title="Troca de Segredo de Fechaduras em Ribeirão Preto"
                description="Serviço profissional de troca de segredo e cilindro para residências e empresas. Segurança garantida 24h."
                url={url}
            />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Serviços', item: '/servicos' },
                    { name: 'Troca de Segredo', item: '/servicos/troca-de-segredo-ribeirao-preto' },
                ]}
            />
            {/* Bloco 1: Hero Section (Segurança Imediata) */}
            <section className="relative py-20 px-4 pt-32 lg:pt-40 border-b-4 border-yellow-400 bg-red-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800 to-red-950 opacity-80 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10 z-0 mix-blend-overlay"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <span className="inline-block py-1 px-3 rounded bg-yellow-400 text-red-900 font-black text-sm uppercase tracking-widest animate-pulse">
                            Atendimento Imediato
                        </span>
                        <span className="inline-block py-1 px-3 rounded bg-neutral-800 text-yellow-400 border border-yellow-400/30 font-bold text-sm uppercase tracking-widest">
                            Economia Real
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white drop-shadow-lg uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Troca de Segredo em <span className="text-yellow-400">Ribeirão Preto</span><br />
                        <span className="text-2xl md:text-4xl block mt-2 text-red-100">Segurança para sua Nova Casa</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
                        Mudou de casa ou perdeu as chaves? Garanta que ninguém mais tenha acesso ao seu imóvel. Realizamos a troca do segredo (miolo) de forma rápida, segura e econômica, sem precisar trocar a fechadura inteira.
                    </p>

                    <div className="inline-block bg-neutral-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-6 py-3 mb-10">
                        <p className="text-yellow-400 font-bold uppercase tracking-wider text-sm md:text-base">
                            Atendimento 24h na Av. Recife e em toda Ribeirão Preto.
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
                                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4 4 4-4V5.586l-4-4zM10 7.414l2-2 2 2v9.172l-2 2-2-2V7.414z" clipRule="evenodd" />
                            </svg>
                            Solicitar Troca Agora
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

            {/* Bloco 2: Quando trocar o segredo? (Necessidade) */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase">
                        Por que e quando trocar <span className="text-yellow-400">o segredo?</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Muitas vezes não é necessário gastar com uma fechadura nova. A troca do cilindro (miolo) resolve sua segurança nos seguintes casos:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        { title: "Imóvel Novo", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", desc: "Você nunca sabe quem ficou com uma cópia da chave (ex-inquilinos, corretores)." },
                        { title: "Perda ou Furto", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", desc: "Evite que quem encontrar sua chave tenha acesso livre à sua residência." },
                        { title: "Funcionários", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", desc: "Segurança corporativa garantida com a troca imediata do acesso." },
                        { title: "Prevenção", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", desc: "Se você sente que a chave está 'folgada' ou o segredo está gasto." }
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

            {/* Bloco 3: Atendimento em Ribeirão Preto (SEO Local) */}
            <section className="bg-neutral-800 rounded-3xl p-8 md:p-12 border-y border-neutral-700 relative overflow-hidden mb-20 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase leading-tight">
                            Chaveiro para Troca de Segredo <br />
                            <span className="text-yellow-400">Perto de Você</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Localizados na Avenida Recife, 768, somos o chaveiro mais próximo para quem busca agilidade no Subsetor Norte. Atendemos com prontidão nos principais pontos de Ribeirão Preto.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-neutral-900/50 p-4 rounded-lg border-l-4 border-yellow-400">
                                <strong className="text-white block uppercase text-sm mb-1">Zona Norte</strong>
                                <span className="text-gray-400 text-xs">Campos Elíseos, Ipiranga, Vila Elisa.</span>
                            </div>
                            <div className="bg-neutral-900/50 p-4 rounded-lg border-l-4 border-yellow-400">
                                <strong className="text-white block uppercase text-sm mb-1">Zona Sul</strong>
                                <span className="text-gray-400 text-xs">Santa Cruz, Irajá, Jd. Botânico.</span>
                            </div>
                            <div className="bg-neutral-900/50 p-4 rounded-lg border-l-4 border-yellow-400">
                                <strong className="text-white block uppercase text-sm mb-1">Leste/Oeste</strong>
                                <span className="text-gray-400 text-xs">Jd. Paulista, Vila Tibério, USP.</span>
                            </div>
                            <div className="bg-neutral-900/50 p-4 rounded-lg border-l-4 border-yellow-400">
                                <strong className="text-white block uppercase text-sm mb-1">Centro</strong>
                                <span className="text-gray-400 text-xs">Atendimento rápido no coração de Ribeirão.</span>
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

            {/* Bloco 4: Diferenciais Técnicos */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-white mb-4 uppercase">
                        Serviço Profissional e <span className="text-yellow-400">Garantido</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                        <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Cilindros de Qualidade</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Trabalhamos com as melhores marcas (Pado, Papaiz, Yale, Stam) para garantir durabilidade.</p>
                    </div>

                    <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                        <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Economia Real</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Trocar apenas o segredo é muito mais barato do que substituir o conjunto completo da fechadura.</p>
                    </div>

                    <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                        <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Mestragem</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Se desejar, podemos configurar várias portas para abrirem com a mesma chave (conveniência total).</p>
                    </div>
                </div>
            </section>

            {/* Bloco 5: FAQ - Troca de Segredo */}
            <section className="container mx-auto px-4 py-16 border-t border-neutral-800">
                <h2 className="text-3xl font-black text-center text-white mb-10 uppercase">Perguntas Frequentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Preciso levar a fechadura até a loja na Av. Recife?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Não é necessário! Nosso chaveiro 24h vai até o seu endereço em Ribeirão Preto com todas as ferramentas.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Quanto tempo demora o serviço?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">A troca de segredo de uma fechadura comum leva, em média, de 20 a 30 minutos.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Quantas chaves novas eu recebo?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Geralmente o novo cilindro acompanha de 2 a 5 chaves originais, mas podemos fazer cópias extras na hora, se precisar.</p>
                    </div>
                </div>
            </section>

            {/* Bloco 6: Rodapé e NAP Local */}
            <section className="bg-neutral-800 border-t-4 border-yellow-400 py-16 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4 uppercase">
                        Especialista em Segredos e Fechaduras em Ribeirão Preto
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
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Chamar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    )
}

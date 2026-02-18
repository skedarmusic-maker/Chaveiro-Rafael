import type { Metadata } from 'next'
import { businessInfo } from '@/data/businessInfo'

export const metadata: Metadata = {
    title: 'Cópia de Chaves em Ribeirão Preto | Precisão e Rapidez',
    description: 'Cópias de chaves residenciais, comerciais e automotivas feitas na hora em Ribeirão Preto. Equipamentos de última geração e precisão garantida. Visite-nos na Av. Recife.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/copia-de-chaves-ribeirao-preto/',
    },
}

export default function CopiaChavesPage() {
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20preciso%20de%20um%20orçamento%20para%20cópia%20de%20chaves.`
    const cleanPhone = businessInfo.phone.replace(/[^0-9]/g, '')

    return (
        <main className="min-h-screen bg-neutral-900 text-white pb-20">
            {/* Bloco 1: Hero Section (Autoridade e Variedade) */}
            <section className="relative py-20 px-4 pt-32 lg:pt-40 border-b-4 border-yellow-400 bg-red-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800 to-red-950 opacity-80 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10 z-0 mix-blend-overlay"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <span className="inline-block py-1 px-3 rounded bg-yellow-400 text-red-900 font-black text-sm uppercase tracking-widest animate-pulse">
                            Copiamos na Hora
                        </span>
                        <span className="inline-block py-1 px-3 rounded bg-neutral-800 text-yellow-400 border border-yellow-400/30 font-bold text-sm uppercase tracking-widest">
                            Precisão Digital
                        </span>
                        <span className="inline-block py-1 px-3 rounded bg-neutral-800 text-yellow-400 border border-yellow-400/30 font-bold text-sm uppercase tracking-widest">
                            Garantia Total
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white drop-shadow-lg uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Cópia de Chaves em <span className="text-yellow-400">Ribeirão Preto</span><br />
                        <span className="text-3xl md:text-5xl block mt-2 text-red-100">Precisão e Rapidez</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
                        Cópias de chaves residenciais, comerciais e automotivas feitas na hora. Equipamentos de última geração para garantir que sua cópia funcione perfeitamente. Visite-nos na Av. Recife.
                    </p>

                    <div className="inline-block bg-neutral-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-6 py-3 mb-10">
                        <p className="text-yellow-400 font-bold uppercase tracking-wider text-sm md:text-base">
                            Copiamos chaves simples, tetra, multiponto e pantográficas.
                        </p>
                    </div>

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
                            Solicitar Orçamento
                        </a>
                        <a
                            href="#mapa"
                            className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-red-800 hover:bg-red-700 text-white font-black py-5 px-8 rounded-xl transition-all border-2 border-red-500 hover:border-white text-lg uppercase tracking-wide shadow-lg"
                        >
                            <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Ver Localização
                        </a>
                    </div>
                </div>
            </section>

            {/* Bloco 2: Tipos de Chaves (Palavras-chave de Cauda Longa) */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase">
                        Especialista em <span className="text-yellow-400">todos os modelos de chaves</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Não importa o modelo, nós temos a tecnologia para duplicar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        { title: "Chaves Residenciais", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", desc: "Cópias de chaves comuns (Yale), Tetra e chaves de segurança Multiponto." },
                        { title: "Chaves p/ Cadeados", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", desc: "Diversos modelos e marcas para garantir sua segurança." },
                        { title: "Chaves Comerciais", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", desc: "Sistemas de mestragem e chaves para portas de aço ou blindex." },
                        { title: "Chaves de Móveis", icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4", desc: "Cópias para gavetas, armários de aço e arquivos de escritório." }
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

            {/* Bloco 3: Diferenciais Técnicos (Confiança) */}
            <section className="bg-neutral-800 rounded-3xl p-8 md:p-12 border-y border-neutral-700 relative overflow-hidden mb-20 container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-white mb-4 uppercase">
                        Por que fazer sua cópia <span className="text-yellow-400">conosco?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                        <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Máquinas Eletrônicas</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Utilizamos máquinas de alta precisão que reduzem a zero o erro no corte da chave.</p>
                    </div>

                    <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                        <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Garantia de Funcionamento</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Se a chave não funcionar, fazemos o ajuste ou a nova cópia sem custo adicional.</p>
                    </div>

                    <div className="text-center bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-colors group">
                        <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-3xl text-yellow-400 mx-auto mb-6 group-hover:bg-yellow-400 group-hover:text-red-900 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">Rapidez</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Cópias simples prontas em poucos minutos enquanto você aguarda.</p>
                    </div>
                </div>
            </section>

            {/* Bloco 4: Localização Estratégica (SEO Local) */}
            <section id="mapa" className="bg-yellow-400 py-16 mb-20">
                <div className="container mx-auto px-4">
                    <div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-red-900 grid grid-cols-1 lg:grid-cols-2">
                        {/* Address Info */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-2xl lg:text-3xl font-black text-white mb-6 uppercase leading-tight">
                                Onde fazer cópia de chave no <span className="text-yellow-400">Subsetor Norte</span> de Ribeirão Preto?
                            </h2>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Se você está no Ipiranga, Campos Elíseos ou arredores da Zona Norte, estamos localizados na Avenida Recife, 768. Fácil acesso e estacionamento para você resolver suas pendências rapidamente.
                            </p>

                            <div className="bg-red-900/30 border border-red-800 p-6 rounded-xl">
                                <p className="text-yellow-400 font-bold mb-2 uppercase text-sm tracking-widest animate-pulse">
                                    Condomínios e Empresas
                                </p>
                                <p className="text-white text-base font-bold">
                                    Precisa de cópias em grande quantidade? Consulte nossos preços especiais.
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

            {/* Bloco 5: FAQ - Dúvidas Comuns */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-black text-center text-white mb-10 uppercase">Perguntas Frequentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Vocês fazem cópia de chave tetra na hora?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Sim, possuímos maquinário específico para chaves tetra de diversas marcas, entregando o serviço em poucos minutos.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">É possível fazer cópia de uma chave quebrada?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Na maioria dos casos, sim. Nossos técnicos conseguem ler o segredo das partes da chave quebrada e reconstruir uma nova.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2 text-lg">Qual o horário para fazer cópias?</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">Atendemos em horário comercial para balcão, mas como somos chaveiro 24h, você pode nos consultar para emergências.</p>
                    </div>
                </div>
            </section>

            {/* Bloco 6: Rodapé Informativo (NAP) */}
            <section className="bg-neutral-800 border-t-4 border-yellow-400 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-black text-white mb-4 uppercase">
                        Chaveiro 24 Horas em Ribeirão Preto
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
                        className="inline-flex items-center justify-center gap-3 bg-red-900 hover:bg-red-800 text-white font-black py-5 px-8 rounded-2xl transition-all shadow-[0_8px_0_rgb(80,0,0)] hover:shadow-[0_10px_0_rgb(80,0,0)] active:translate-y-1 active:shadow-none text-lg uppercase"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Enviar foto da chave para orçamento
                    </a>
                </div>
            </section>
        </main>
    )
}

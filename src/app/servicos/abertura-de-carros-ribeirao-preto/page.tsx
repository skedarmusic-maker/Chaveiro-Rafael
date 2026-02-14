import type { Metadata } from 'next'
import { businessInfo } from '@/data/businessInfo'

export const metadata: Metadata = {
    title: 'Abertura de Carros em Ribeirão Preto | Chaveiro Automotivo 24h',
    description: 'Chaveiro automotivo em Ribeirão Preto especializado em abertura de carros trancados sem danos. Atendimento emergencial 24h. Perdeu a chave ou trancou dentro? Ligue agora!',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/abertura-de-carros-ribeirao-preto/',
    },
}

export default function AberturaCarrosPage() {
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20tranquei%20a%20chave%20no%20carro%20e%20preciso%20de%20ajuda%20urgente.`
    const cleanPhone = businessInfo.phone.replace(/[^0-9]/g, '')

    return (
        <main className="min-h-screen bg-neutral-900 text-white pb-20">
            {/* HER0 SECTION */}
            <section className="relative py-20 px-4 pt-32 lg:pt-40 border-b-4 border-yellow-400 bg-red-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800 to-red-950 opacity-80 z-0"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10 z-0 mix-blend-overlay"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded bg-yellow-400 text-red-900 font-black text-sm uppercase tracking-widest mb-6 animate-pulse">
                        Plantão Automotivo 24h
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-lg uppercase tracking-tight leading-tight max-w-5xl mx-auto">
                        Abertura de Carros em <span className="text-yellow-400">Ribeirão Preto</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto font-medium mb-10 leading-relaxed">
                        Perdeu a chave? Trancou dentro do veículo? Chegamos rápido para resolver seu problema sem danificar seu carro.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black py-5 px-8 rounded-xl transition-all shadow-[0_6px_0_rgb(161,98,7)] hover:shadow-[0_8px_0_rgb(161,98,7)] active:translate-y-1 active:shadow-none text-lg uppercase tracking-wide"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Chamar no WhatsApp
                        </a>
                        <a
                            href={`tel:${cleanPhone}`}
                            className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-red-800 hover:bg-red-700 text-white font-black py-5 px-8 rounded-xl transition-all border-2 border-red-500 hover:border-white text-lg uppercase tracking-wide shadow-lg"
                        >
                            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Ligar Agora
                        </a>
                    </div>
                </div>
            </section>

            {/* DESCRIPTION & SEO CONTENT */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase">
                        Especialista em <span className="text-yellow-400">Abertura de Veículos</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Sabemos que imprevistos acontecem. Se você acidentalmente trancou a chave dentro do carro ou perdeu a única cópia, não se desespere. Como <strong className="text-yellow-400">chaveiro automotivo em Ribeirão Preto</strong>, utilizamos ferramentas de precisão para realizar a abertura do seu veículo sem causar arranhões, danos à lataria ou ao sistema de travas.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mt-4">
                        Atendemos emergências 24 horas por dia em todos os bairros de Ribeirão Preto. Carros nacionais e importados, com rapidez e preço justo.
                    </p>
                </div>

                {/* COMMON SITUATIONS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        { title: "Chave Presa no Carro", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z", desc: "Esqueceu a chave no contato ou no banco?" },
                        { title: "Perda da Chave", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", desc: "Perdeu a única cópia? Abrimos e confeccionamos uma nova." },
                        { title: "Chave Quebrada", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", desc: "A lâmina quebrou na fechadura ou na ignição." },
                        { title: "Trava Automática", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", desc: "O carro travou sozinho com a chave dentro." }
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
                <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 border border-neutral-700 relative overflow-hidden">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase">Como Funciona o <span className="text-yellow-400">Atendimento</span></h2>
                        <p className="text-gray-400">Processo simples e rápido para resolver seu problema agora.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-3xl font-black text-red-900 mx-auto mb-6 shadow-[0_6px_0_rgb(153,27,27)]">1</div>
                            <h3 className="text-xl font-bold text-white mb-2">Contato Imediato</h3>
                            <p className="text-gray-400 text-sm">Ligue ou mande WhatsApp informando sua localização em Ribeirão Preto e o modelo do carro.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-3xl font-black text-red-900 mx-auto mb-6 shadow-[0_6px_0_rgb(153,27,27)]">2</div>
                            <h3 className="text-xl font-bold text-white mb-2">Deslocamento Rápido</h3>
                            <p className="text-gray-400 text-sm">Nosso técnico mais próximo vai até você com a unidade móvel equipada.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-3xl font-black text-red-900 mx-auto mb-6 shadow-[0_6px_0_rgb(153,27,27)]">3</div>
                            <h3 className="text-xl font-bold text-white mb-2">Abertura Segura</h3>
                            <p className="text-gray-400 text-sm">Realizamos a abertura do veículo na hora, sem danos e com total segurança.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container mx-auto px-4 py-16 border-t border-neutral-800">
                <h2 className="text-3xl font-black text-center text-white mb-10 uppercase">Perguntas Frequentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2">É possível abrir sem danificar o carro?</h3>
                        <p className="text-gray-300 text-sm">Sim! Utilizamos técnicas de &quot;Lock Picking&quot; e bolsas de ar profissionais que não arranham nem danificam portas ou vidros.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2">O atendimento é 24 horas?</h3>
                        <p className="text-gray-300 text-sm">Sim, temos plantão 24h para emergências em toda Ribeirão Preto, inclusive fins de semana e feriados.</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2">Atendem quais tipos de veículos?</h3>
                        <p className="text-gray-300 text-sm">Carros nacionais e importados de todas as marcas, caminhonetes, caminhões e também motocicletas (baú/banco).</p>
                    </div>
                    <div className="bg-red-900/50 p-6 rounded-xl border border-red-800">
                        <h3 className="font-bold text-yellow-400 mb-2">Quais documentos preciso apresentar?</h3>
                        <p className="text-gray-300 text-sm">Por segurança, é necessário comprovar a propriedade ou posse do veículo antes da realização do serviço.</p>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-yellow-400 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-red-900 mb-6 uppercase tracking-tight">
                        Seu carro está trancado? Não force a porta!
                    </h2>
                    <p className="text-red-900/80 text-xl font-bold mb-8 max-w-2xl mx-auto">
                        Chame quem entende e resolva agora mesmo com segurança e preço justo.
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-red-900 hover:bg-red-800 text-white font-black py-5 px-12 rounded-2xl transition-all shadow-[0_8px_0_rgb(80,0,0)] hover:shadow-[0_10px_0_rgb(80,0,0)] active:translate-y-1 active:shadow-none text-xl uppercase"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Solicitar Abertura
                    </a>
                </div>
            </section>
        </main>
    )
}

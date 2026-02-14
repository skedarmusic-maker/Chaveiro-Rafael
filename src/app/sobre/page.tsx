import { businessInfo } from '@/data/businessInfo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sobre Chaveiro Urgente | Chaveiro 24 Horas em Ribeirão Preto',
    description: 'Conheça o Chaveiro Urgente 24h, especialista em chaves automotivas, residenciais e atendimento emergencial em Ribeirão Preto e região. Qualidade e rapidez.',
    alternates: {
        canonical: 'https://chrischaves.com.br/sobre/',
    },
}

export default function AboutPage() {
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.`

    return (
        <main className="min-h-screen bg-red-700 text-white pb-20">

            {/* Header */}
            <section className="relative py-20 border-b-4 border-yellow-400 bg-red-600">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-black mb-6 text-white drop-shadow-md uppercase tracking-tight">
                        Sobre o Chaveiro Urgente | Chaveiro 24h
                    </h1>
                    <p className="text-yellow-50 text-xl max-w-2xl mx-auto font-medium">
                        Sua segurança e tranquilidade são nossa prioridade. Atendimento especializado em toda Ribeirão Preto.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* About Text */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-black text-yellow-400 mb-6 uppercase tracking-tighter">Nossa História e Compromisso</h2>
                        <div className="prose prose-lg text-red-50 prose-strong:text-yellow-300">
                            <p className="text-lg leading-relaxed mb-6">
                                O <strong>Chaveiro Urgente 24h</strong> é uma empresa consolidada, com anos de experiência e qualificação técnica no mercado. Nosso foco principal é o atendimento emergencial qualificado, garantindo que você nunca fique sem assistência quando mais precisa.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Especializados no segmento de chaveiro, oferecemos soluções completas para residências e veículos. Seja para uma cópia simples, uma abertura emergencial ou a confecção de uma chave automotiva importada complexa, nossa equipe está pronta para agir.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Nossa atuação cobre <strong>toda a região de Ribeirão Preto</strong>, com disponibilidade 24 horas por dia, todos os dias da semana.
                            </p>
                        </div>
                    </div>

                    <div className="bg-red-800 border-2 border-red-500 rounded-xl p-8 shadow-2xl">
                        <h3 className="text-xl font-black text-yellow-400 mb-6 uppercase">O que nos diferencia?</h3>
                        <ul className="space-y-4">
                            {[
                                "Atendimento Móvel em toda Ribeirão Preto",
                                "Equipamentos de última geração para chaves codificadas",
                                "Plantão Real 24 Horas",
                                "Técnicos altamente qualificados e identificados",
                                "Preço justo e transparência absoluta"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium text-red-50">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stats/Badge Area */}
                <div className="space-y-8">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-red-900 border-2 border-red-500 p-10 rounded-2xl text-center shadow-2xl">
                            <div className="text-6xl font-black text-yellow-400 mb-2">24h</div>
                            <div className="text-xl text-white font-bold uppercase tracking-widest mb-6 border-b border-red-500 pb-4">Plantão Emergencial</div>
                            <p className="text-red-100 font-medium">Não importa o horário, estamos a caminho para te ajudar.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-red-800 border-2 border-red-500 p-6 rounded-xl text-center shadow-lg">
                            <div className="text-3xl font-black text-yellow-400">+1000</div>
                            <div className="text-xs text-red-100 uppercase font-bold tracking-tighter">Atendimentos</div>
                        </div>
                        <div className="bg-red-800 border-2 border-red-500 p-6 rounded-xl text-center shadow-lg">
                            <div className="text-3xl font-black text-yellow-400">100%</div>
                            <div className="text-xs text-red-100 uppercase font-bold tracking-tighter">Satisfação</div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="pt-8">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-4 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black py-6 px-8 rounded-2xl text-xl transition-all shadow-[0_8px_0_rgb(161,98,7)] hover:shadow-[0_10px_0_rgb(161,98,7)] active:translate-y-2 active:shadow-none uppercase tracking-tighter"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            CHAMAR NO WHATSAPP AGORA
                        </a>
                    </div>
                </div>

            </section>
        </main>
    )
}

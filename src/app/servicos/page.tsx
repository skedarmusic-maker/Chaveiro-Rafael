import { businessInfo } from '@/data/businessInfo'
import type { Metadata } from 'next'
import Link from 'next/link'
import { LocalBusinessJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
    title: 'Serviços de Chaveiro 24h em Ribeirão Preto | Chaveiro Urgente',
    description: 'Confira nossos serviços de chaveiro 24 horas: cópia de chaves, abertura de portas, chaves codificadas e mais. Atendimento emergencial em Ribeirão Preto e região.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/servicos/',
    },
}

import { ServiceListJsonLd } from '@/components/JsonLd'

function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
}

export default function ServicesPage() {
    const whatsappLink = `https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}?text=Olá,%20vi%20o%20site%20e%20preciso%20de%20atendimento.`

    return (
        <main className="min-h-screen bg-red-700 text-white pb-20">
            <LocalBusinessJsonLd />
            <ServiceListJsonLd />
            {/* Header Section */}
            <section className="relative py-20 border-b-4 border-yellow-400 bg-red-600">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-black mb-6 text-white drop-shadow-md uppercase tracking-tight">
                        Serviços de Chaveiro 24h em Ribeirão Preto
                    </h1>

                    <p className="text-yellow-50 text-xl max-w-2xl mx-auto mb-8 font-medium">
                        Atuamos em Ribeirão Preto e região com atendimento emergencial 24 horas.
                        Equipe qualificada para resolver seu problema com rapidez e segurança.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black py-4 px-10 rounded-xl transition-all shadow-[0_6px_0_rgb(161,98,7)] hover:shadow-[0_8px_0_rgb(161,98,7)] active:translate-y-1 active:shadow-none text-lg uppercase tracking-wider"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            FALAR COM TÉCNICO AGORA
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {businessInfo.services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col justify-between p-8 rounded-2xl border-2 border-red-500 bg-red-800 hover:border-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            <div>
                                <div className="w-14 h-14 bg-red-900 border border-red-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:border-yellow-600 transition-colors duration-300">
                                    <svg className="w-7 h-7 text-yellow-400 group-hover:text-red-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors uppercase tracking-tight">
                                    {service.label}
                                </h3>

                                <p className="text-red-100/80 text-base mb-8 font-medium">
                                    Solução profissional e rápida para {service.label.toLowerCase()}. Conte com nossa equipe especializada.
                                </p>
                            </div>

                            <Link
                                href={`/servicos/${service.slug}`}
                                className="inline-flex items-center text-md font-black text-yellow-400 hover:text-yellow-300 transition-colors uppercase tracking-widest"
                            >
                                SAIBA MAIS
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container mx-auto px-4 py-8">
                <div className="bg-red-800 rounded-3xl p-8 md:p-12 text-center border-4 border-yellow-400 shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                            Precisa de um chaveiro agora?
                        </h2>
                        <p className="text-yellow-50 text-xl mb-10 max-w-xl mx-auto font-bold italic">
                            Não perca tempo. Atendimento rápido e seguro em Ribeirão Preto e região.
                            Plantão 24 horas.
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black py-5 px-12 rounded-2xl transition-all shadow-[0_8px_0_rgb(161,98,7)] hover:shadow-[0_10px_0_rgb(161,98,7)] active:translate-y-1 active:shadow-none text-xl uppercase"
                        >
                            Falar com Técnico AGORA
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}


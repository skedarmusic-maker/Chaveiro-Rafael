import { businessInfo } from '@/data/businessInfo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Entre em Contato | Chaveiro Urgente 24h',
    description: 'Fale com Chaveiro Urgente agora. Atendimento 24 horas via WhatsApp ou telefone. Chaveiro emergencial em Ribeirão Preto e região.',
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/contato/',
    },
}

export default function ContactPage() {
    const cleanPhone = businessInfo.phone.replace(/\D/g, '')
    const whatsappUrl = `https://wa.me/55${cleanPhone}?text=Olá,%20preciso%20de%20atendimento.`



    return (
        <main className="min-h-screen bg-red-700 text-white pb-20">

            {/* Header */}
            <section className="relative py-20 border-b-4 border-yellow-400 bg-red-600">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-black mb-6 text-white drop-shadow-md uppercase tracking-tight">
                        Fale Conosco
                    </h1>
                    <p className="text-yellow-50 text-xl max-w-2xl mx-auto font-medium">
                        Estamos prontos para atender sua emergência ou agendar um serviço em Ribeirão Preto.
                        Disponibilidade total 24 horas por dia.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Contact Info Column */}
                    <div className="space-y-8">

                        <div className="bg-red-800 border-2 border-red-500 rounded-2xl p-8 shadow-2xl">
                            <h2 className="text-2xl font-black text-yellow-400 mb-8 uppercase tracking-tighter">Canais de Atendimento</h2>

                            <div className="space-y-6">
                                {/* Phone Actions */}
                                <div className="flex flex-col gap-4">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black py-5 px-6 rounded-xl transition-all shadow-[0_6px_0_rgb(161,98,7)] hover:shadow-[0_8px_0_rgb(161,98,7)] active:translate-y-1 active:shadow-none text-xl"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        CHAMAR NO WHATSAPP
                                    </a>

                                    <a
                                        href={`tel:${cleanPhone}`}
                                        className="flex items-center justify-center gap-3 bg-red-900 hover:bg-red-950 text-white font-black py-5 px-6 rounded-xl transition-all border-2 border-red-500 hover:border-yellow-400 text-lg"
                                    >
                                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        LIGAR AGORA: {businessInfo.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-800 border-2 border-red-500 rounded-2xl p-8 shadow-2xl">
                            <h2 className="text-xl font-black text-yellow-400 mb-6 uppercase tracking-tight">Informações Locais</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xs font-black text-red-300 uppercase tracking-widest mb-2 px-2 border-l-2 border-yellow-400">Endereço</h3>
                                    <p className="text-white text-lg font-medium">{businessInfo.address}</p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-black text-red-300 uppercase tracking-widest mb-2 px-2 border-l-2 border-yellow-400">Horário</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
                                        </span>
                                        <span className="text-yellow-400 font-black text-lg">{businessInfo.hours}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Map Column */}
                    <div className="bg-red-900 border-4 border-yellow-400 rounded-2xl overflow-hidden min-h-[500px] relative shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-47.7646!3d-21.1393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bfbbeb7f9f41%3A0x3dea83116d67f18c!2sChaveiro%20Urgente%2024%20horas%2C%20Ribeir%C3%A3o%20preto!5e0!3m2!1spt-BR!2sbr!4v1771037664800!5m2!1spt-BR!2sbr"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </section>
        </main>
    )
}

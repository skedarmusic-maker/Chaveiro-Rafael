import { businessInfo } from '@/data/businessInfo'
import Link from 'next/link'

export function Services() {
    return (
        <section className="py-20 bg-red-700 border-t border-red-800" id="servicos">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
                        NOSSOS SERVIÇOS
                    </h2>
                    <p className="text-red-100 max-w-2xl mx-auto text-lg font-medium">
                        Soluções completas para sua residência e veículo. Atendimento qualificado 24 horas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {businessInfo.services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-xl border-2 border-red-500 bg-red-800 hover:border-yellow-400 hover:bg-red-900 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:-translate-y-1 transition-all duration-200"
                        >
                            <Link href={`/servicos/${service.slug}`} className="flex items-start gap-4 h-full">
                                <div className="mt-1 min-w-[24px] text-yellow-400 group-hover:text-yellow-300 transition-colors">
                                    {/* Key Icon */}
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-lg group-hover:text-yellow-200 transition-colors">
                                    {service.label}
                                </h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

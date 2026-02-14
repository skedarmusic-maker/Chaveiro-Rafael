import { businessInfo } from '@/data/businessInfo'

export function Location() {
    return (
        <section className="py-20 bg-surface-50 border-t border-slate-200">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary-50 rounded-full mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>

                Atendemos Ribeirão Preto e Região

                <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-8">
                    Nossa unidade móvel está preparada para chegar até você com rapidez e segurança em qualquer bairro da capital e região metropolitana.
                </p>

                <div className="inline-block px-6 py-3 border border-slate-200 rounded-lg bg-white text-slate-700 shadow-sm">
                    <span className="text-primary-600 font-bold mr-2">📍</span>
                    Base: {businessInfo.address}
                </div>
            </div>
        </section>
    )
}

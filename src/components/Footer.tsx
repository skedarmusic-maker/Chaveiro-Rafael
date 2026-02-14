import { businessInfo } from '@/data/businessInfo'

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">{businessInfo.shortName} 24h</h3>
                        <p className="text-slate-400 mb-6 font-light">
                            Sua segurança e tranquilidade em primeiro lugar. Atendimento qualificado dia e noite.
                        </p>

                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 border-b-2 border-primary w-min whitespace-nowrap pb-1">Contato</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li>
                                <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-primary text-lg transition-colors font-bold text-slate-200">
                                    {businessInfo.phone}
                                </a>
                            </li>
                            <li className="text-sm">
                                {businessInfo.hours}
                            </li>
                            <li className="text-sm">
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.plusCode)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    {businessInfo.plusCode}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 border-b-2 border-primary w-min whitespace-nowrap pb-1">Endereço</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {businessInfo.address}
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} {businessInfo.shortName} 24h. Todos os direitos reservados.</p>
                    <p className="mt-2 md:mt-0">Desenvolvido com tecnologia IA</p>
                </div>
            </div>
        </footer>
    )
}

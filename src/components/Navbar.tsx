'use client'

import { useState } from 'react'
import Link from 'next/link'
import { businessInfo } from '@/data/businessInfo'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: '/', label: 'Início' },
        { href: '/servicos/', label: 'Serviços' },
        { href: '/sobre/', label: 'Sobre' },
        { href: '/contato/', label: 'Contato' },
    ]

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">


                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-slate-900 leading-none group-hover:text-primary transition-colors">{businessInfo.shortName}</span>
                            <span className="text-xs text-primary font-bold tracking-widest uppercase">24 Horas</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-wide"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <a
                            id="btn-whatsapp-nav-desktop"
                            href={`https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}`}
                            className="bg-secondary hover:bg-secondary-600 text-slate-900 text-sm font-bold py-2 px-6 rounded-full transition-transform hover:scale-105 shadow-lg shadow-yellow-500/20"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Emergência
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-900 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible h-auto py-6' : 'opacity-0 invisible h-0 py-0 overflow-hidden'}`}>
                <div className="flex flex-col items-center gap-6 px-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-bold text-slate-800 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        id="btn-whatsapp-nav-mobile"
                        href={`https://wa.me/55${businessInfo.phone.replace(/\D/g, '')}`}
                        className="w-full text-center bg-secondary active:bg-secondary-700 text-slate-900 font-bold py-4 rounded-lg shadow-md"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chamar Agora
                    </a>
                </div>
            </div>
        </nav >
    )
}

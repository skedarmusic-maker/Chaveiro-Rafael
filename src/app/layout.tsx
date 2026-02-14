import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { businessInfo } from '@/data/businessInfo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://chaveirourgenterp.com.br'),
    title: {
        default: "Chaveiro 24 Horas em Ribeirão Preto | Chaveiro Urgente",
        template: '%s | Chaveiro Urgente'
    },
    description: businessInfo.description,
    alternates: {
        canonical: 'https://chaveirourgenterp.com.br/',
    },
    // icons: {
    //     icon: '/favicon.ico',
    // },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://chaveirourgenterp.com.br',
        siteName: 'Chaveiro Urgente | Chaveiro 24h',
        title: 'Chaveiro 24 Horas em Ribeirão Preto | Chaveiro Urgente',
        description: businessInfo.description,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Chaveiro 24 Horas em Ribeirão Preto | Chaveiro Urgente',
        description: businessInfo.description,
    },
    verification: {
        google: '9L8FQl83SDpT8Cn3MxWAvHYn9hnRZPLwGjahjI8_Es0',
    },
}

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className={`${inter.className} bg-black text-white antialiased selection:bg-primary-500 selection:text-white`}>
                <Navbar />
                <div className="pt-20">
                    {children}
                </div>
                <Footer />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-ME8S68TVBG"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-ME8S68TVBG');
                    `}
                </Script>
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "vfhvpz0p5h");
                    `}
                </Script>
            </body>
        </html >
    )
}

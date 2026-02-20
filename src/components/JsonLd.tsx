import { businessInfo } from '@/data/businessInfo'

export function LocalBusinessJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Locksmith",
        "@id": `${businessInfo.siteUrl}/#organization`,
        "name": businessInfo.name,
        "url": businessInfo.siteUrl,
        "logo": `${businessInfo.siteUrl}/logo.png`,
        "image": `${businessInfo.siteUrl}/images/hero-bg.jpg`,
        "description": businessInfo.description,
        "telephone": businessInfo.phone,
        "priceRange": businessInfo.priceRange,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": businessInfo.address.split(' - ')[0],
            "addressLocality": "Ribeirão Preto",
            "addressRegion": "SP",
            "postalCode": "14078-390",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": businessInfo.geo.latitude,
            "longitude": businessInfo.geo.longitude
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": businessInfo.socials,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": businessInfo.rating.value,
            "reviewCount": businessInfo.rating.count
        },
        "areaServed": businessInfo.areaServed.map(city => ({
            "@type": "City",
            "name": city
        })),
        "hasOfferCatalog": {
            "@id": `${businessInfo.siteUrl}/#catalog`,
            "@type": "OfferCatalog",
            "name": "Serviços de Chaveiro",
            "itemListElement": businessInfo.services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.label
                }
            }))
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string, item: string }[] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item.startsWith('http') ? item.item : `${businessInfo.siteUrl}${item.item}`
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

export function ServiceListJsonLd() {
    const services = businessInfo.services.map((service) => {
        return {
            "@type": "Service",
            "name": service.label,
            "provider": {
                "@id": `${businessInfo.siteUrl}/#organization`
            },
            "areaServed": businessInfo.areaServed.map(city => ({
                "@type": "City",
                "name": city
            })),
            "url": `${businessInfo.siteUrl}/servicos/${service.slug}`
        }
    })

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": service
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

interface ServiceJsonLdProps {
    name?: string
    title?: string
    description: string
    urlBase?: string
    url?: string
}

export function ServiceJsonLd({ name, title, description, url }: ServiceJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name || title,
        "description": description,
        "provider": {
            "@id": `${businessInfo.siteUrl}/#organization`
        },
        "areaServed": businessInfo.areaServed.map(city => ({
            "@type": "City",
            "name": city
        })),
        "hasOfferCatalog": {
            "@id": `${businessInfo.siteUrl}/#catalog`
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

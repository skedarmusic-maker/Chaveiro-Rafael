'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const galleryImages = [
    '/images/galery/WhatsApp Image 2026-02-13 at 13.53.03.jpeg',
    '/images/galery/WhatsApp Image 2026-02-13 at 13.53.03 (1).jpeg',
    '/images/galery/WhatsApp Image 2026-02-13 at 13.53.04.jpeg',
    '/images/galery/WhatsApp Image 2026-02-13 at 13.53.04 (1).jpeg',
    '/images/galery/WhatsApp Image 2026-02-13 at 13.53.04 (2).jpeg',
    '/images/galery/WhatsApp Image 2026-02-13 at 13.53.04 (3).jpeg',
    '/images/galery/WhatsApp Image 2026-02-13 at 13.53.05.jpeg',
]

export function HeroImageMosaic() {
    // Shuffle images on mount to keep it fresh
    const [shuffledImages, setShuffledImages] = useState<string[]>([])

    useEffect(() => {
        setShuffledImages([...galleryImages].sort(() => Math.random() - 0.5))
    }, [])

    if (shuffledImages.length === 0) return null

    // Split images into two groups for left and right columns
    const leftImages = shuffledImages.slice(0, Math.ceil(shuffledImages.length / 2))
    const rightImages = shuffledImages.slice(Math.ceil(shuffledImages.length / 2))

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-between">
            {/* Very subtle side vignetting to help text but keep photos clear */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20 pointer-events-none" />

            {/* Left Column */}
            <div className="flex flex-col gap-4 w-1/4 md:w-1/5 lg:w-1/6 -ml-4 md:ml-0 opacity-100 animate-marquee-vertical">
                {[...leftImages, ...leftImages].map((src, index) => (
                    <motion.div
                        key={`left-${index}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="relative aspect-[3/4] rounded-r-xl overflow-hidden shadow-2xl border-r-2 border-yellow-400/50"
                    >
                        <Image
                            src={src}
                            alt="Serviço Chaveiro"
                            fill
                            className="object-cover brightness-125 contrast-125"
                            sizes="20vw"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 w-1/4 md:w-1/5 lg:w-1/6 -mr-4 md:mr-0 opacity-100 animate-marquee-vertical-reverse">
                {[...rightImages, ...rightImages].map((src, index) => (
                    <motion.div
                        key={`right-${index}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="relative aspect-[3/4] rounded-l-xl overflow-hidden shadow-2xl border-l-2 border-yellow-400/50"
                    >
                        <Image
                            src={src}
                            alt="Serviço Chaveiro"
                            fill
                            className="object-cover brightness-125 contrast-125"
                            sizes="20vw"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

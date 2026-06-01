"use client"

import React from 'react'
import Image from 'next/image'

interface HorizontalMarqueeProps {
  images: string[]
  className?: string
}

export default function HorizontalMarquee({ images, className = "" }: HorizontalMarqueeProps) {
  const duplicatedImages = [...images, ...images]

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex gap-4 animate-scroll-horizontal">
        {duplicatedImages.map((src, index) => (
          <div 
            key={`marquee-${index}`}
            className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100"
          >
            <div className="relative w-32 h-24">
              <Image src={src} alt={`Alumni ${index + 1}`} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

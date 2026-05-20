"use client"

import React from 'react'

interface HorizontalMarqueeProps {
  images: string[]
  className?: string
}

export default function HorizontalMarquee({ images, className = "" }: HorizontalMarqueeProps) {
  // Duplicate images for seamless scrolling
  const duplicatedImages = [...images, ...images]

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex gap-4 animate-scroll-horizontal">
        {duplicatedImages.map((src, index) => (
          <div 
            key={`marquee-${index}`}
            className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Alumni ${index + 1}`}
              className="w-32 h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

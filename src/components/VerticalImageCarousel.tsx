"use client"

import React from 'react'
import Image from 'next/image'

interface VerticalImageCarouselProps {
  images: string[]
  className?: string
}

export default function VerticalImageCarousel({ images, className = "" }: VerticalImageCarouselProps) {
  const column1Images = images.filter((_, index) => index % 2 === 0)
  const column2Images = images.filter((_, index) => index % 2 === 1)

  const duplicatedColumn1 = [...column1Images, ...column1Images]
  const duplicatedColumn2 = [...column2Images, ...column2Images]

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20 z-10" />
      
      <div className="flex h-full gap-8">
        <div className="flex-1 relative overflow-hidden">
          <div className="animate-scroll-vertical">
            <div className="flex flex-col gap-4">
              {duplicatedColumn1.map((src, index) => (
                <div 
                  key={`col1-${index}`}
                  className="carousel-image rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100"
                >
                  <div className="relative w-full h-48">
                    <Image src={src} alt={`Alumni ${index + 1}`} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden">
          <div className="animate-scroll-vertical-reverse">
            <div className="flex flex-col gap-4">
              {duplicatedColumn2.map((src, index) => (
                <div 
                  key={`col2-${index}`}
                  className="carousel-image rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100"
                >
                  <div className="relative w-full h-48">
                    <Image src={src} alt={`Alumni ${index + 1}`} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

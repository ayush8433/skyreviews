"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface AlumniCardProps {
  id: string
  name: string
  title: string
  company: string
  companyLogo: string
  image: string
  testimonial: string
  slug: string
}

export default function AlumniCard({
  id,
  name,
  title,
  company,
  companyLogo,
  image,
  testimonial,
  slug
}: AlumniCardProps) {
  return (
    <div className="group relative">
      <Link 
        href={`/stories/${slug}`}
        className="block"
      >
        <div className="relative bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          {/* Gradient border effect on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          <div className="relative z-10">
            {/* Alumni Image */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              {/* Company Logo */}
              <div className="flex items-center">
                <Image
                  src={companyLogo}
                  alt={company}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Name and Title */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {title}
                </p>
              </div>

              {/* Testimonial */}
              <div>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  "{testimonial}"
                </p>
              </div>

              {/* Read More Link */}
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                <span>Read more</span>
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

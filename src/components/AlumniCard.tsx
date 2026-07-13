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
  projectTitle?: string | null
  projectUrl?: string | null
  linkedinUrl?: string | null
  trustschoolUrl?: string | null
}

export default function AlumniCard({
  id,
  name,
  title,
  company,
  companyLogo,
  image,
  testimonial,
  slug,
  projectTitle,
  projectUrl,
  linkedinUrl,
  trustschoolUrl,
}: AlumniCardProps) {
  return (
    <div className="group relative">
      <Link 
        href={`/stories/${slug}`}
        className="block"
      >
        <div className="relative bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1.5 shadow-lg">
          {/* Gradient border effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          <div className="relative z-10">
            {/* Alumni Image */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10">
                <div className="relative w-full h-48">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              {/* Company Logo */}
              {companyLogo ? (
                <div className="flex items-center">
                  <Image
                    src={companyLogo}
                    alt={company}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain filter invert opacity-80 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ) : company ? (
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded inline-block w-max">
                  {company}
                </div>
              ) : null}

              {/* Name and Title */}
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors flex items-center gap-1.5 flex-wrap">
                  {name}
                  {linkedinUrl && (
                    <span
                      className="inline-flex items-center bg-blue-500/10 text-blue-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-blue-500/20 gap-0.5 select-none"
                      title="LinkedIn Verified Profile"
                    >
                      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Verified
                    </span>
                  )}
                </h3>
                <p className="text-slate-300 font-medium">
                  {title}
                </p>
              </div>

              {/* Testimonial */}
              <div>
                <p className="text-slate-200 text-sm leading-relaxed line-clamp-3">
                  "{testimonial}"
                </p>
              </div>

              {/* Capstone Project */}
              {projectUrl && (
                <div className="pt-3 border-t border-white/5 mt-2">
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(projectUrl, "_blank", "noopener,noreferrer");
                    }}
                    className="inline-flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    🚀 Project: {projectTitle || "View Capstone"}
                  </span>
                </div>
              )}

              {/* TrustSchool Verification Link */}
              {trustschoolUrl && (
                <div className="pt-3 border-t border-white/5 mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider select-none">
                    Verified review
                  </span>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(trustschoolUrl, "_blank", "noopener,noreferrer");
                    }}
                    className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-blue-300 border border-white/10 px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm transition-all cursor-pointer"
                  >
                    Verify on TrustSchool
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </span>
                </div>
              )}

              {/* Read More Link */}
              <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
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

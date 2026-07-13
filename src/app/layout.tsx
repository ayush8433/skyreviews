import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkyReviews — Independent Editorial Reviews of Sky States | Verified Student Outcomes",
  description:
    "SkyReviews.us is an independent editorial platform publishing verified student career outcomes, program analysis, and first-person success stories from Sky States tech training graduates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="3geyZ91dLgGj-mR6A8wpgbt87U35q0e5EBFRIUppJc4"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org/",
                "@type": "WebSite",
                "name": "SkyReviews",
                "url": "https://skyreviews.us/"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "SkyReviews",
                "url": "https://skyreviews.us",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://skyreviews.us/logo.png"
                },
                "description": "SkyReviews is an independent editorial platform publishing verified student outcomes and career analysis of tech training programs.",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "editorial@skyreviews.us",
                  "contactType": "Editorial"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/skyreviews"
                ]
              }
            ])
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased relative">
        <div 
          className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950"
          style={{
            background:
              "radial-gradient(900px 600px at 10% 20%, rgba(59, 130, 246, 0.18), transparent), radial-gradient(800px 600px at 90% 80%, rgba(139, 92, 246, 0.18), transparent)",
          }}
        />
        <div className="bg-amber-500/10 border-b border-amber-500/20 py-2.5 px-4 text-center text-xs md:text-sm text-amber-200/90 font-medium min-h-[40px] md:min-h-[38px] flex items-center justify-center flex-wrap gap-x-1 backdrop-blur-sm z-50">
          <span>⚠️ <strong>Editorial Disclosure:</strong> SkyReviews.us is an independent digital publication. All reviews and editorial content are produced under our independent editorial policy. See our</span>
          <Link href="/transparency/conflict-of-interest" className="underline hover:text-amber-100 font-bold transition-colors">Conflict of Interest Policy</Link>
          <span>for details.</span>
        </div>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

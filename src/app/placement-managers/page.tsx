import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const VerifiedIcon = () => (
  <svg className="h-4 w-4 text-[#B38B4D]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

export default async function PublicPlacementManagersPage() {
  const managers = await prisma.placementManager.findMany({
    include: {
      reviews: true,
      videos: true,
    },
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="min-h-screen bg-transparent text-slate-200 selection:bg-[#B38B4D] selection:text-white pb-32">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Geist:wght@300;400;600&display=swap');
        .architectural-grid {
            background-image: 
                linear-gradient(to right, rgba(179, 139, 77, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(179, 139, 77, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .font-display {
            font-family: 'Playfair Display', serif;
        }
        .font-geist {
            font-family: 'Geist', sans-serif;
        }
        .concierge-cta {
            position: relative;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .concierge-cta::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0%;
            background-color: #B38B4D;
            z-index: -1;
            transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .concierge-cta:hover::after {
            height: 100%;
        }
        .concierge-cta:hover {
            color: white;
            border-color: #B38B4D;
        }
        .dossier-card:hover .dossier-image {
            transform: scale(1.05);
        }
      `}} />

      {/* ─── Hero Section ─── */}
      <header className="relative pt-32 pb-24 px-6 md:px-16 flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 architectural-grid pointer-events-none opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-3/4">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.1] font-bold">
                THE ARCHITECTS OF <br/>
                <span className="italic font-normal text-[#B38B4D]">CAREER TRANSFORMATION</span>
              </h1>
              <div className="w-32 h-[1px] bg-[#B38B4D] mb-8"></div>
              <p className="font-geist text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Meet the elite collective of placement managers engineering professional trajectories at the intersection of ambition and opportunity.
              </p>
            </div>

            <div className="hidden md:block w-1/4 pt-12">
              <div className="border-l border-white/10 pl-8 space-y-6">
                <div>
                  <p className="font-geist text-[12px] tracking-widest text-[#B38B4D] mb-1 font-semibold uppercase">ESTABLISHED</p>
                  <p className="font-geist text-base text-slate-200 font-semibold uppercase">MCMXCVIII</p>
                </div>
                <div>
                  <p className="font-geist text-[12px] tracking-widest text-[#B38B4D] mb-1 font-semibold uppercase">NETWORK VALUE</p>
                  <p className="font-geist text-base text-slate-200 font-semibold uppercase">$4.2B ARR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Manager Gallery ─── */}
      <main className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-32">
            {managers.map((manager, index) => {
              const layoutStyles = [
                { container: "col-span-1 md:col-span-7", imgAspect: "aspect-[16/10]", contentPad: "md:pl-12" },
                { container: "col-span-1 md:col-span-5 md:mt-40", imgAspect: "aspect-[4/5]", contentPad: "" },
                { container: "col-span-1 md:col-span-4", imgAspect: "aspect-[4/5]", contentPad: "" },
                { container: "col-span-1 md:col-span-8 md:flex gap-12 items-center", imgAspect: "md:w-1/2 aspect-square", contentPad: "md:w-1/2" },
                { container: "col-span-1 md:col-span-6", imgAspect: "aspect-[16/9]", contentPad: "" },
                { container: "col-span-1 md:col-span-6 md:mt-24", imgAspect: "aspect-[16/9]", contentPad: "" },
                { container: "col-span-1 md:col-span-10 md:col-start-2 bg-slate-900/40 p-8 md:p-16 border border-white/10 backdrop-blur-md rounded-3xl", imgAspect: "aspect-[4/3] md:w-1/2", contentPad: "md:w-1/2", innerFlex: "flex flex-col md:flex-row gap-12 items-center" }
              ];

              const style = layoutStyles[index % 7];

              return (
                <article key={manager.id} className={`${style.container} dossier-card group`}>
                  <div className={style.innerFlex || ""}>
                    {/* Image Box */}
                    <div className={`relative overflow-hidden mb-8 md:mb-0 border border-white/10 ${style.imgAspect} shrink-0`}>
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 dossier-image"
                        src={manager.imageUrl || "https://placehold.co/600x600/3b82f6/ffffff?text=Avatar"}
                        alt={manager.name}
                      />
                      <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-sm px-4 py-2 flex items-center gap-2 border border-white/10 text-white">
                        <VerifiedIcon />
                        <span className="font-geist text-[10px] tracking-widest uppercase font-semibold">Verified Team</span>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className={`${style.contentPad} mt-6 md:mt-0`}>
                      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-2 font-bold group-hover:text-[#B38B4D] transition-colors">
                        <Link href={`/placement-managers/${manager.slug || manager.id}`}>{manager.name}</Link>
                      </h2>
                      <p className="font-geist text-[12px] tracking-widest text-[#B38B4D] mb-4 font-semibold uppercase">{manager.role}</p>
                      <p className="font-geist text-sm md:text-base text-slate-300 leading-relaxed mb-8">
                        {manager.bio || "Connecting graduates with modern enterprise hiring partners and offering dedicated career support."}
                      </p>
                      <div className="flex flex-wrap gap-4 items-center">
                        <Link href={`/placement-managers/${manager.slug || manager.id}`}>
                          <button className="concierge-cta border border-white/25 text-slate-200 px-8 py-4 font-geist text-[12px] tracking-widest uppercase inline-flex items-center gap-3 font-semibold transition-all">
                            View Portfolio & Reviews
                            <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </button>
                        </Link>
                        {manager.linkedinUrl && (
                          <a
                            href={manager.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#B38B4D] hover:bg-[#B38B4D] hover:text-white px-8 py-4 font-geist text-[12px] tracking-widest uppercase inline-flex items-center gap-2 font-semibold transition-all text-[#B38B4D]"
                          >
                            LinkedIn
                            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      {/* ─── Final Section / Stats ─── */}
      <section className="bg-black text-white py-24 px-6 md:px-16 overflow-hidden relative">
        <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
            <div>
              <h2 className="font-display text-4xl md:text-6xl mb-12 font-bold leading-tight">
                READY TO <br/>
                <span className="italic font-normal text-[#B38B4D]">RE-ENGINEER?</span>
              </h2>
              <p className="font-geist text-lg text-slate-305 max-w-md mb-16 leading-relaxed">
                Step into a partnership where your professional trajectory is treated as an architectural masterpiece.
              </p>
              <Link href="/contact">
                <button className="group relative px-12 py-6 border border-white font-geist text-[12px] tracking-widest uppercase hover:bg-[#B38B4D] hover:border-[#B38B4D] transition-all duration-500 overflow-hidden font-semibold">
                  <span className="relative z-10">Schedule a Career Talk</span>
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-y-16 gap-x-12 border-l border-white/10 pl-12">
              <div>
                <p className="font-geist text-[10px] text-[#B38B4D] mb-2 uppercase tracking-widest font-semibold">Efficiency Metric</p>
                <p className="font-mono text-4xl font-light">94.8%</p>
                <p className="font-geist text-sm text-slate-400 mt-1">Placement Retention</p>
              </div>
              <div>
                <p className="font-geist text-[10px] text-[#B38B4D] mb-2 uppercase tracking-widest font-semibold">Time-to-Offer</p>
                <p className="font-mono text-4xl font-light">42<span className="text-xl">D</span></p>
                <p className="font-geist text-sm text-slate-400 mt-1">Median Duration</p>
              </div>
              <div>
                <p className="font-geist text-[10px] text-[#B38B4D] mb-2 uppercase tracking-widest font-semibold">Portfolio ROI</p>
                <p className="font-mono text-4xl font-light">127%</p>
                <p className="font-geist text-sm text-slate-400 mt-1">Salary Delta Avg.</p>
              </div>
              <div>
                <p className="font-geist text-[10px] text-[#B38B4D] mb-2 uppercase tracking-widest font-semibold">Trust Index</p>
                <p className="font-mono text-4xl font-light">4.9/5</p>
                <p className="font-geist text-sm text-slate-400 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

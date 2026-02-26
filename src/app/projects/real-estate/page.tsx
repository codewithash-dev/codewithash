import Link from "next/link";
import Image from "next/image";

const WORK_SAMPLES = [
  { title: "Aerial — property overview", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=80" },
  { title: "Open-plan kitchen with island and outdoor view", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80" },
  { title: "Living room with lake view", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80" },
  { title: "Aerial — waterfront properties", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80" },
  { title: "Modern white exterior with black-framed windows", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80" },
  { title: "Modern walk-in shower — marble-look tile", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=80" },
  { title: "Double vanity bathroom with lake view", image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&auto=format&fit=crop&q=80" },
  { title: "Living room with panoramic lake view", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80" },
  { title: "Aerial — urban property and city skyline", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=80" },
  { title: "Aerial — commercial property", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80" },
  { title: "Open-concept kitchen and living with stone fireplace", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=80" },
  { title: "Entryway and dining room", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=80" },
  { title: "Property detail — listing view", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80" },
];

export default function RealEstateProjectPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] text-[#1a1a1a]">
      {/* Top bar / back */}
      <header className="border-b border-[#e8e6e3] bg-[#fafaf9]/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/projects"
            className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition font-medium"
          >
            ← Back to Projects
          </Link>
          <span className="text-sm font-medium text-[#6b6b6b]">Real Estate Platform</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Portfolio header — Canopy Stone style */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1a1a1a] mb-2">
            Portfolio
          </h1>
          <p className="text-base sm:text-lg text-[#6b6b6b] font-normal">
            Property Listings · Search & Filters · Virtual Tours · Detail Pages · Visual Storyteller
          </p>
        </div>

        {/* Work samples */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#6b6b6b] mb-8">
            Work samples
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {WORK_SAMPLES.map((item) => (
              <article
                key={item.title}
                className="group bg-white rounded-lg overflow-hidden border border-[#e8e6e3] shadow-sm hover:shadow-md hover:border-[#d4d2ce] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-[#f0eeeb]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm sm:text-base text-[#1a1a1a] font-medium leading-snug">
                    {item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="border-t border-[#e8e6e3] pt-12 sm:pt-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#6b6b6b] mb-6">
            About
          </h2>
          <p className="text-base sm:text-lg text-[#3d3d3d] leading-relaxed max-w-3xl">
            Real estate platform with listings, search, and filters. Built for property discovery and detail views—optimized for scheduling viewings, saving favorites, and exploring neighborhoods. Includes responsive listing grids, property detail pages, and a focus on clear, story-driven presentation of each property.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-[#1a1a1a] text-[#1a1a1a] px-5 py-2.5 text-sm font-medium hover:bg-[#1a1a1a] hover:text-white transition"
            >
              View all projects
            </Link>
            <a
              href="https://github.com/codewithash-dev/real-estate-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[#e8e6e3] text-[#3d3d3d] px-5 py-2.5 text-sm font-medium hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition"
            >
              View code
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

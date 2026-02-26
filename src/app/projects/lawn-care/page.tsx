import Link from "next/link";
import Image from "next/image";
import "./lawncare.css";

const ASSETS = {
  images: {
    professionalLandscaper: "/lawn-care/assets/images/professional_landscaper.png",
    isometricMap: "/lawn-care/assets/images/isometric_map_visualization.png",
    satelliteView: "/lawn-care/assets/images/satellite_view.png",
    modernDashboard: "/lawn-care/assets/images/modern_saas_dashboard.png",
  },
  videos: {
    cuttingDemo: "/lawn-care/assets/videos/lawn_care_cutting_demonstration.mp4",
    designTransformation: "/lawn-care/assets/videos/landscape_design_transformation.mp4",
    projectShowcase: "/lawn-care/assets/videos/completed_landscape_project_showcase.mp4",
  },
};

export default function LawnCareProjectPage() {
  return (
    <div className="lawncare-root min-h-screen relative">
      <div className="lawncare-bg" aria-hidden />

      <header className="lawncare-nav-bar fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 sm:px-8 py-4">
        <div className="flex items-center gap-3">
          <Link href="/projects" className="text-sm text-[hsl(var(--muted))] hover:text-[var(--text)] transition">
            ← Projects
          </Link>
          <Link href="#top" className="flex items-center gap-2 font-bold text-[15px] text-[var(--text)] no-underline">
            <span className="w-8 h-8 bg-[var(--green)] rounded-lg flex items-center justify-center text-base">
              🌿
            </span>
            Lawn Care OS
          </Link>
        </div>
        <button
          type="button"
          className="bg-[var(--green)] text-[#0a0f0a] border-0 py-2 px-4 rounded-lg text-sm font-bold cursor-pointer"
        >
          Start Free Trial
        </button>
      </header>

      <main id="top" className="relative z-[1] pt-28 pb-20 px-6 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--green)] mb-4">
          Lawn Care OS
        </h1>
        <p className="text-[hsl(var(--muted))] mb-10">
          Replace the placeholder images and videos in <code className="text-[var(--text)]">public/lawn-care/assets/</code> with your own.
        </p>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0f1419]">
            <Image
              src={ASSETS.images.professionalLandscaper}
              alt="Professional landscaper"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0f1419]">
            <Image
              src={ASSETS.images.modernDashboard}
              alt="Modern SaaS dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text)]">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <video
              src={ASSETS.videos.cuttingDemo}
              className="w-full aspect-video rounded-lg bg-black object-cover"
              controls
              muted
              playsInline
            />
            <video
              src={ASSETS.videos.designTransformation}
              className="w-full aspect-video rounded-lg bg-black object-cover"
              controls
              muted
              playsInline
            />
            <video
              src={ASSETS.videos.projectShowcase}
              className="w-full aspect-video rounded-lg bg-black object-cover"
              controls
              muted
              playsInline
            />
          </div>
        </section>
      </main>
    </div>
  );
}

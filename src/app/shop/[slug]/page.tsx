import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getShopProjects } from "@/data/projects";
import SupportShell from "@/app/components/SupportShell";
import ShopProductActions from "./ShopProductActions";
import ProductDetailHeader from "./ProductDetailHeader";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getShopProjects().map((p) => ({ slug: p.slug }));
}

export default async function ShopProductPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.priceDisplay) notFound();

  return (
    <SupportShell active="shop">
      <ProductDetailHeader />
      {/* Thumbnail full-width, kept compact */}
      <div className="relative aspect-[21/9] max-h-56 w-full overflow-hidden rounded-xl bg-gray-100 mb-8">
        <div className="absolute inset-4 sm:inset-6">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Two-column layout: left = title, descriptions, installation guide; right = price, Add to cart, membership */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr,300px] md:grid-cols-[1fr,320px] gap-8 md:gap-10 items-start">
        {/* Left column: content */}
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {project.title} : Source Code
          </h2>
          <p className="text-gray-600 mb-4">
            Get the Source Code of the {project.title} built with modern tools.
          </p>
          <p className="text-gray-600 mb-6">
            {project.description}
          </p>
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Installation guide
            </h3>
            <p className="text-sm text-gray-600">
              You&apos;ll receive the full source code with an &quot;Installation-guide.txt&quot; file in the root directory, guiding you through the setup process to get your project up and running smoothly.
            </p>
          </div>
        </div>

        {/* Right column: price, Add to cart, membership box */}
        <aside className="sm:sticky sm:top-24 h-fit shrink-0 w-full sm:w-auto">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold text-gray-900 mb-4">
              {project.priceDisplay}
            </p>
            <ShopProductActions projectSlug={project.slug} />
            <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-900">
                {project.memberPriceDisplay ?? "Discounted price for members"}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Become a member to get a discount and other exclusive benefits.
              </p>
              <Link
                href="/membership"
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-black transition"
              >
                Join
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </SupportShell>
  );
}

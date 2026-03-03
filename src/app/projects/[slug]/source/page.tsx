import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import SourcePaywall from "./SourcePaywall";

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectSourcePage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm text-gray-400 mb-1">
          Projects / {project.title} / Source Code
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Get the source code
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          {project.description}
        </p>
        <SourcePaywall project={project} />
      </div>
    </main>
  );
}

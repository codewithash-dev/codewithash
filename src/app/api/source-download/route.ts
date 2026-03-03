import { NextRequest, NextResponse } from "next/server";
import { getProjectBySlug } from "@/data/projects";
import { canUserAccessSource } from "@/lib/source-access";

/**
 * Get download URL for a project from env SOURCE_DOWNLOAD_<SLUG> (e.g. SOURCE_DOWNLOAD_ECOM).
 */
function getDownloadUrlForProject(slug: string): string | undefined {
  const key = `SOURCE_DOWNLOAD_${slug.replace(/-/g, "_").toUpperCase()}`;
  return typeof process !== "undefined" ? (process.env[key] as string | undefined) : undefined;
}

/**
 * GET /api/source-download?slug=...
 * Requires cookie source_access_email (set after successful purchase/access).
 * If the user has access, redirects to the project's download URL (from env) or returns a message.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  const email = request.cookies.get("source_access_email")?.value;
  if (!email) {
    return NextResponse.json(
      { error: "Access required. Please complete purchase or log in." },
      { status: 401 }
    );
  }

  const { hasAccess } = await canUserAccessSource(email, slug);
  if (!hasAccess) {
    return NextResponse.json(
      { error: "You do not have access to this project's source code." },
      { status: 403 }
    );
  }

  const downloadUrl = getDownloadUrlForProject(slug);
  if (downloadUrl) {
    return NextResponse.redirect(downloadUrl);
  }

  return NextResponse.json({
    message:
      "Download not yet configured for this project. You have access; the download link will be sent to your email or added here soon.",
    project: project.title,
  });
}

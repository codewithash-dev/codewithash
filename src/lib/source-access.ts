import { prisma } from "./prisma";

export type SourceAccessResult = {
  hasAccess: boolean;
  isMember?: boolean;
  email?: string;
};

/**
 * Check if a user (by email) has access to a project's source code,
 * either via direct purchase or active membership.
 */
export async function canUserAccessSource(
  email: string,
  projectSlug: string
): Promise<SourceAccessResult> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !projectSlug) {
    return { hasAccess: false };
  }

  const [membership, directAccess] = await Promise.all([
    prisma.membership.findUnique({
      where: { email: normalizedEmail, active: true },
    }),
    prisma.userSourceAccess.findUnique({
      where: {
        email_projectSlug: { email: normalizedEmail, projectSlug },
      },
    }),
  ]);

  if (membership?.active) {
    return { hasAccess: true, isMember: true, email: normalizedEmail };
  }
  if (directAccess) {
    return { hasAccess: true, isMember: false, email: normalizedEmail };
  }
  return { hasAccess: false };
}

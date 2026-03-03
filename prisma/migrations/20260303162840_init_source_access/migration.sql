-- CreateTable
CREATE TABLE "UserSourceAccess" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "projectSlug" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Membership" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "UserSourceAccess_email_idx" ON "UserSourceAccess"("email");

-- CreateIndex
CREATE INDEX "UserSourceAccess_projectSlug_idx" ON "UserSourceAccess"("projectSlug");

-- CreateIndex
CREATE UNIQUE INDEX "UserSourceAccess_email_projectSlug_key" ON "UserSourceAccess"("email", "projectSlug");

-- CreateIndex
CREATE UNIQUE INDEX "Membership_email_key" ON "Membership"("email");

"use client";

import { usePathname } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

/** Routes where the main site header/footer (dark nav) should NOT show — shop area has its own shell. */
function isShopArea(pathname: string | null): boolean {
  if (!pathname) return false;
  return (
    pathname.startsWith("/shop") ||
    pathname === "/membership" ||
    pathname === "/posts" ||
    pathname === "/login"
  );
}

export default function MainSiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showMainNav = !isShopArea(pathname);

  return (
    <>
      {showMainNav && <SiteNav />}
      {children}
      {showMainNav && <SiteFooter />}
    </>
  );
}

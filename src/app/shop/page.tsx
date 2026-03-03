import { getShopProjects } from "@/data/projects";
import SupportShell from "@/app/components/SupportShell";
import ShopView from "./ShopView";

export default function ShopPage() {
  const shopProjects = getShopProjects();

  return (
    <SupportShell active="shop">
      <ShopView projects={shopProjects} />
    </SupportShell>
  );
}

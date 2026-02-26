"use client";

import dynamic from "next/dynamic";
import type { Listing } from "./data";

export type ListingsMapProps = {
  listings: Listing[];
  onListingClick?: (listing: Listing) => void;
};

// react-leaflet uses window; load only on client to avoid SSR issues
const ListingsMapInner = dynamic(() => import("./ListingsMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-xl bg-gray-200 flex items-center justify-center text-gray-500 min-h-[300px]">
      <span>Loading map…</span>
    </div>
  ),
});

export default function ListingsMap(props: ListingsMapProps) {
  return <ListingsMapInner {...props} />;
}

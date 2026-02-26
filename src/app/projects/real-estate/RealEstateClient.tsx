"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { LISTINGS, type Listing } from "./data";
import ListingsMap from "./ListingsMap";

const CODE_URL = "https://github.com/codewithash-dev/real-estate-platform";

const PRICE_MIN = 200000;
const PRICE_MAX = 1000000;
const BED_OPTS = ["Any", "1+", "2+", "3+", "4+"];
const BATH_OPTS = ["Any", "1+", "2+", "3+", "4+"];

function formatPrice(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}m`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}k`;
  return `$${n}`;
}

function ListingCard({
  listing,
  saved,
  onSave,
  onClick,
}: {
  listing: Listing;
  saved: boolean;
  onSave: () => void;
  onClick: () => void;
}) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer text-left"
    >
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={listing.image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSave();
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow hover:bg-white transition"
          aria-label={saved ? "Remove from saved" : "Save listing"}
        >
          <svg
            className={`w-5 h-5 ${saved ? "text-red-500 fill-red-500" : "text-gray-500"}`}
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-900">{formatPrice(listing.price)}</p>
        <p className="text-sm text-gray-600 mt-0.5">
          {listing.beds} bd · {listing.baths} ba · {listing.sqft.toLocaleString()} sqft
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {listing.address}, {listing.city}, {listing.state}
        </p>
      </div>
    </article>
  );
}

function DetailModal({
  listing,
  saved,
  onSave,
  onClose,
}: {
  listing: Listing;
  saved: boolean;
  onSave: () => void;
  onClose: () => void;
}) {
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="listing-detail-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] bg-gray-100">
          <Image
            src={listing.images[photoIndex] ?? listing.image}
            alt=""
            fill
            className="object-cover rounded-t-2xl"
            sizes="800px"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onSave}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white"
            aria-label={saved ? "Remove from saved" : "Save listing"}
          >
            <svg
              className={`w-5 h-5 ${saved ? "text-red-500 fill-red-500" : "text-gray-600"}`}
              fill={saved ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          {listing.images.length > 1 && (
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-1">
              {listing.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPhotoIndex(i)}
                  className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition ${
                    i === photoIndex ? "border-blue-600 ring-2 ring-blue-600/30" : "border-white/80"
                  }`}
                >
                  <Image src={listing.images[i]} alt="" width={56} height={56} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="p-6">
          <h2 id="listing-detail-title" className="text-2xl font-bold text-gray-900">
            {formatPrice(listing.price)}
          </h2>
          <p className="text-gray-600 mt-1">
            {listing.beds} bd · {listing.baths} ba · {listing.sqft.toLocaleString()} sqft
          </p>
          <p className="text-gray-500 mt-1">
            {listing.address}, {listing.city}, {listing.state}
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">{listing.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg bg-[#1e3a5f] text-white font-medium hover:bg-[#152a47] transition"
            >
              View Home
            </button>
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RealEstateClient() {
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState(PRICE_MIN);
  const [priceMax, setPriceMax] = useState(PRICE_MAX);
  const [beds, setBeds] = useState(0); // 0 = Any, 1 = 1+, etc.
  const [baths, setBaths] = useState(0);
  const [view, setView] = useState<"list" | "map">("list");
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<Listing | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return LISTINGS.filter((l) => {
      if (q && !`${l.address} ${l.city} ${l.state}`.toLowerCase().includes(q)) return false;
      if (l.price < priceMin || l.price > priceMax) return false;
      if (beds > 0 && l.beds < beds) return false;
      if (baths > 0 && l.baths < baths) return false;
      return true;
    });
  }, [search, priceMin, priceMax, beds, baths]);

  const toggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-20">
      {/* Top bar: Back, search, filters, view toggle — sticks below site nav (top-14) */}
      <div className="sticky top-14 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4 mb-3">
            <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900 font-medium shrink-0">
              ← Back to Projects
            </Link>
            <a href={CODE_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 font-medium shrink-0 ml-auto">
              Code →
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search city, address, or ZIP"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setFiltersOpen((o) => !o)}
                className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button>
              <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className={`px-4 py-2.5 font-medium transition ${view === "list" ? "bg-[#1e3a5f] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                >
                  List
                </button>
                <button
                  type="button"
                  onClick={() => setView("map")}
                  className={`px-4 py-2.5 font-medium transition ${view === "map" ? "bg-[#1e3a5f] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                >
                  Map
                </button>
              </div>
            </div>
          </div>

          {/* Filters panel */}
          {filtersOpen && (
            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price range</label>
                <div className="flex items-center gap-3 flex-wrap">
                  <input
                    type="number"
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    value={priceMin}
                    onChange={(e) => setPriceMin(Number(e.target.value) || PRICE_MIN)}
                    className="w-28 px-3 py-2 rounded-lg border border-gray-300 text-sm"
                  />
                  <span className="text-gray-500">–</span>
                  <input
                    type="number"
                    min={PRICE_MIN}
                    max={PRICE_MAX}
                    value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value) || PRICE_MAX)}
                    className="w-28 px-3 py-2 rounded-lg border border-gray-300 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Beds</label>
                <div className="flex flex-wrap gap-2">
                  {BED_OPTS.map((opt, i) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setBeds(i)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                        beds === i ? "bg-[#1e3a5f] text-white" : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Baths</label>
                <div className="flex flex-wrap gap-2">
                  {BATH_OPTS.map((opt, i) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setBaths(i)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                        baths === i ? "bg-[#1e3a5f] text-white" : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setPriceMin(PRICE_MIN);
                  setPriceMax(PRICE_MAX);
                  setBeds(0);
                  setBaths(0);
                }}
                className="text-sm font-medium text-[#1e3a5f] hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {view === "list" ? (
          <>
            <p className="text-sm text-gray-500 mb-4">
              {filtered.length} {filtered.length === 1 ? "home" : "homes"} found
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  saved={savedIds.has(listing.id)}
                  onSave={() => toggleSave(listing.id)}
                  onClick={() => setSelected(listing)}
                />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                <p className="text-lg font-medium">No listings match your search.</p>
                <p className="mt-2">Try adjusting filters or search terms.</p>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm h-[500px] sm:h-[600px]">
            <ListingsMap
              listings={filtered}
              onListingClick={(listing) => setSelected(listing)}
            />
          </div>
        )}
      </div>

      {selected && (
        <DetailModal
          listing={selected}
          saved={savedIds.has(selected.id)}
          onSave={() => toggleSave(selected.id)}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaCartPlus,
  FaSearch,
  FaTimes,
  FaYoutube,
  FaInstagram,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa";
import type { Project } from "@/data/projects";

const SHOP_TABS = [
  { id: "all" as const, label: "All" },
  { id: "member" as const, label: "Member discount" },
  { id: "React Native", label: "React Native" },
  { id: "Reanimated", label: "Reanimated" },
];

const SHOP_SOCIALS = [
  { icon: FaYoutube, href: "https://www.youtube.com/@CodeWithAshOfficial", label: "YouTube" },
  { icon: FaInstagram, href: "https://instagram.com/_codewithash", label: "Instagram" },
  { icon: FaTwitch, href: "https://twitch.tv/codewithash", label: "Twitch" },
  { icon: FaDiscord, href: "https://discord.gg/codewithash", label: "Discord" },
];

type ShopViewProps = { projects: Project[] };

export default function ShopView({ projects }: ShopViewProps) {
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "member" | string>("all");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchFilter =
        filter === "all" ||
        (filter === "member" && p.memberPriceDisplay) ||
        (filter !== "member" && p.tags.some((t) => t === filter));
      return matchSearch && matchFilter;
    });
  }, [projects, search, filter]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-1">
          Build Systems.
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-1">
          Think Like A Visionary
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300 rounded-full" aria-hidden />
        </h2>
        <div className="mt-4 flex items-center justify-center gap-6">
          {SHOP_SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-xl text-gray-600 hover:text-gray-900 transition"
            >
              <Icon aria-hidden />
            </a>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 mb-10">
        <div className="relative flex items-center justify-center w-full mb-6">
          <h2 className="text-xl font-bold text-gray-900">Shop</h2>
          {searchOpen ? (
            <div className="absolute right-0 flex items-center">
              <div className="relative flex items-center">
                <FaSearch className="absolute left-3 h-4 w-4 text-gray-400 shrink-0" aria-hidden />
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder={`Search all ${projects.length} items`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onBlur={() => search.trim() === "" && setSearchOpen(false)}
                  className="w-52 sm:w-64 rounded-full border border-gray-300 bg-gray-50 pl-9 pr-9 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSearchOpen(false);
                  }}
                  className="absolute right-2.5 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <FaTimes className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="absolute right-0 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition"
              aria-label="Open search"
            >
              <FaSearch className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SHOP_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter((f) => (f === tab.id ? "all" : tab.id))}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === tab.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
          >
            <Link href={`/shop/${project.slug}`} className="block">
              <div className="relative h-44 w-full overflow-hidden bg-gray-100 flex items-center justify-center p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    router.push(`/shop/${project.slug}`);
                  }}
                  className="absolute top-3 right-3 flex flex-col items-center opacity-0 transition group-hover:opacity-100 hover:opacity-100 group/cart z-10"
                  aria-label="Add to cart"
                >
                  <span className="mb-1.5 rounded px-2.5 py-1 text-xs font-medium text-white bg-gray-900 whitespace-nowrap shadow opacity-0 transition group-hover/cart:opacity-100 pointer-events-none">
                    Add to cart
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white shadow">
                    <FaCartPlus className="h-4 w-4 text-gray-800" aria-hidden />
                  </div>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-900 font-medium">{project.priceDisplay}</span>
                  {project.memberPriceDisplay && (
                    <span className="text-green-700 text-xs font-medium">
                      {project.memberPriceDisplay}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12 text-sm">
          No items match your filters.
        </p>
      )}
    </div>
  );
}

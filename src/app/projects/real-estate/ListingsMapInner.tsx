"use client";

import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { Listing } from "./data";

import "leaflet/dist/leaflet.css";

// Fix default marker icon in Next.js (bundler breaks default paths)
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function formatPrice(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}m`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}k`;
  return `$${n}`;
}

type Props = {
  listings: Listing[];
  onListingClick?: (listing: Listing) => void;
};

export default function ListingsMapInner({ listings, onListingClick }: Props) {
  const center: [number, number] = useMemo(() => {
    if (listings.length === 0) return [39.0, -98.0];
    const lat = listings.reduce((s, l) => s + l.lat, 0) / listings.length;
    const lng = listings.reduce((s, l) => s + l.lng, 0) / listings.length;
    return [lat, lng];
  }, [listings]);

  const bounds = useMemo(() => {
    if (listings.length === 0) return null;
    const lats = listings.map((l) => l.lat);
    const lngs = listings.map((l) => l.lng);
    return [
      [Math.min(...lats), Math.min(...lngs)],
      [Math.max(...lats), Math.max(...lngs)],
    ] as [[number, number], [number, number]];
  }, [listings]);

  return (
    <MapContainer
      center={center}
      zoom={listings.length <= 1 ? 10 : 4}
      bounds={bounds ?? undefined}
      className="h-full w-full rounded-xl z-0"
      style={{ height: "100%" }}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={[listing.lat, listing.lng]}
          eventHandlers={{
            click: () => onListingClick?.(listing),
          }}
        >
          <Popup>
            <div className="min-w-[180px]">
              <p className="font-semibold text-gray-900">{formatPrice(listing.price)}</p>
              <p className="text-sm text-gray-600">
                {listing.beds} bd · {listing.baths} ba · {listing.sqft.toLocaleString()} sqft
              </p>
              <p className="text-sm text-gray-500">
                {listing.address}, {listing.city}, {listing.state}
              </p>
              {onListingClick && (
                <button
                  type="button"
                  onClick={() => onListingClick(listing)}
                  className="mt-2 w-full py-1.5 px-3 rounded bg-[#1e3a5f] text-white text-sm font-medium hover:bg-[#152a47]"
                >
                  View details
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

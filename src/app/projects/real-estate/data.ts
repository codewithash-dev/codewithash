export type Listing = {
  id: string;
  address: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  images: string[];
  description: string;
};

export const LISTINGS: Listing[] = [
  {
    id: "1",
    address: "2847 Oak Ridge Drive",
    city: "Charlotte",
    state: "NC",
    lat: 35.227,
    lng: -80.843,
    price: 450000,
    beds: 3,
    baths: 2,
    sqft: 1850,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Beautiful two-story home with modern finishes. Open floor plan with gourmet kitchen, spacious living room, and primary suite with walk-in closet. Large backyard with patio. Located in a quiet neighborhood with excellent schools.",
  },
  {
    id: "2",
    address: "512 Maple Street",
    city: "Austin",
    state: "TX",
    lat: 30.267,
    lng: -97.743,
    price: 795000,
    beds: 4,
    baths: 3.5,
    sqft: 2750,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Stunning waterfront property with panoramic views. Chef's kitchen, home office, and media room. Private dock and outdoor living space. A must-see for those seeking luxury and location.",
  },
  {
    id: "3",
    address: "901 Riverside Lane",
    city: "Nashville",
    state: "TN",
    lat: 36.163,
    lng: -86.782,
    price: 349000,
    beds: 2,
    baths: 2,
    sqft: 1450,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Charming single-family home with updated kitchen and bathrooms. Cozy living room with fireplace. Fenced yard and two-car garage. Great for first-time buyers or downsizers.",
  },
  {
    id: "4",
    address: "1620 Park Avenue",
    city: "Denver",
    state: "CO",
    lat: 39.739,
    lng: -104.99,
    price: 625000,
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Modern home with open concept living. Gourmet kitchen with island, hardwood floors throughout. Primary suite with spa-like bath. Close to parks and downtown.",
  },
  {
    id: "5",
    address: "4400 Sunset Blvd",
    city: "Orlando",
    state: "FL",
    lat: 28.538,
    lng: -81.379,
    price: 550000,
    beds: 3,
    baths: 2,
    sqft: 1900,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Spacious family home with pool. Updated kitchen, large master bedroom, and bonus room. Screened patio and lush landscaping. Near top-rated schools and shopping.",
  },
  {
    id: "6",
    address: "88 Pine Street",
    city: "Charlotte",
    state: "NC",
    lat: 35.235,
    lng: -80.838,
    price: 295000,
    beds: 4,
    baths: 3,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Value-packed home in sought-after area. Four bedrooms, formal dining, and large lot. Ideal for growing families. Quick move-in ready.",
  },
  {
    id: "7",
    address: "2100 Harbor View",
    city: "Austin",
    state: "TX",
    lat: 30.275,
    lng: -97.735,
    price: 839000,
    beds: 3,
    baths: 2,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Contemporary design with high ceilings and natural light. Chef's kitchen, covered patio, and two-car garage. Walking distance to dining and entertainment.",
  },
  {
    id: "8",
    address: "155 Magnolia Drive",
    city: "Nashville",
    state: "TN",
    lat: 36.17,
    lng: -86.775,
    price: 485000,
    beds: 3,
    baths: 2.5,
    sqft: 1950,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=80",
    ],
    description:
      "Move-in ready with fresh paint and new flooring. Open kitchen and living area, peaceful backyard. Great location with easy highway access.",
  },
];

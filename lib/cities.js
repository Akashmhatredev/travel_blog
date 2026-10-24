/*
 * City content. Every `cover` and photo `src` is optional: when omitted, a
 * seeded placeholder from picsum.photos is used so the layout looks complete.
 * Put your own files in /public/images and reference them from the site root:
 *   cover: "/images/lisbon/cover.jpg"
 *   photos: [{ title: "Tram 28", date: "2025-04-12", src: "/images/lisbon/tram.jpg", width: 1600, height: 1067 }]
 */

/* Placeholder gallery: `count` frames, mixing landscape and portrait prints. */
function placeholderPhotos(slug, firstDate, count) {
  const start = new Date(firstDate + "T00:00:00Z");
  return Array.from({ length: count }, (_, i) => {
    const portrait = i % 3 === 1;
    const day = new Date(start.getTime() + Math.floor(i / 2) * 86400000);
    return {
      title: "Frame " + String(i + 1).padStart(2, "0"),
      date: day.toISOString().slice(0, 10),
      seed: slug + "-" + (i + 1),
      width: portrait ? 1067 : 1600,
      height: portrait ? 1600 : 1067,
    };
  });
}

export const CITIES = [
  {
    slug: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    code: "PT",
    year: 2025,
    description: "Seven hills, rattling yellow trams and tiled façades that glow in the late-afternoon light.",
    photos: placeholderPhotos("lisbon", "2025-04-12", 6),
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    code: "JP",
    year: 2024,
    description: "Lantern-lit lanes, wooden townhouses and temple gardens raked into perfect stillness.",
    photos: placeholderPhotos("kyoto", "2024-11-03", 8),
  },
  {
    slug: "reykjavik",
    name: "Reykjavík",
    country: "Iceland",
    code: "IS",
    year: 2024,
    description: "Corrugated-iron houses in candy colours under a summer sky that never quite goes dark.",
    photos: placeholderPhotos("reykjavik", "2024-06-21", 5),
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    code: "MA",
    year: 2023,
    description: "Spice-scented souks, rose-pink walls and quiet courtyards hidden behind unmarked doors.",
    photos: placeholderPhotos("marrakech", "2023-10-08", 7),
  },
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "Türkiye",
    code: "TR",
    year: 2023,
    description: "Two continents, a skyline of domes and ferries criss-crossing the Bosphorus all day long.",
    photos: placeholderPhotos("istanbul", "2023-05-17", 6),
  },
  {
    slug: "hanoi",
    name: "Hanoi",
    country: "Vietnam",
    code: "VN",
    year: 2025,
    description: "Rivers of motorbikes, pavement noodle stalls and lakes wrapped in early-morning mist.",
    photos: placeholderPhotos("hanoi", "2025-01-26", 6),
  },
  {
    slug: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    code: "MX",
    year: 2022,
    description: "Jacaranda-lined avenues, painted walls and markets that never seem to close.",
    photos: placeholderPhotos("mexico-city", "2022-03-09", 7),
  },
  {
    slug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    code: "ZA",
    year: 2022,
    description: "Table Mountain on one side, the Atlantic on the other, and colour everywhere in between.",
    photos: placeholderPhotos("cape-town", "2022-12-02", 5),
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    country: "India",
    code: "IN",
    year: 2025,
    description: "Art deco seafronts, packed local trains and the slow drama of the monsoon rolling in.",
    photos: placeholderPhotos("mumbai", "2025-07-14", 8),
  },
  {
    slug: "prague",
    name: "Prague",
    country: "Czechia",
    code: "CZ",
    year: 2021,
    description: "Gothic spires, cobbled alleys and a stone bridge lined with weathered saints.",
    photos: placeholderPhotos("prague", "2021-09-18", 6),
  },
];

function placeholder(seed, width, height) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}

export function getCity(slug) {
  return CITIES.find((city) => city.slug === slug);
}

export function coverSrc(city) {
  return city.cover || placeholder(city.slug + "-cover", 1200, 1500);
}

export function photoSrc(photo) {
  return photo.src || placeholder(photo.seed, photo.width, photo.height);
}

export function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

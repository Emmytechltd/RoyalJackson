import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore destinations for study, work, holidays and new experiences with Royal Jackson Travel & Tours.",
};

const destinations = [
  {
    key: "canada",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=85",
    description: "From city life to striking mountain scenery, Canada offers plenty to discover.",
    categories: ["Study", "Visit", "Work"],
    highlights: ["Banff", "Vancouver", "Toronto"],
  },
  {
    key: "united-kingdom",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    description: "A rewarding mix of storied landmarks, cultural life and contemporary cities.",
    categories: ["Study", "Visit", "Work"],
    highlights: ["London", "Edinburgh", "Bath"],
  },
  {
    key: "australia",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=85",
    description: "Wide-open landscapes, a celebrated coastline and welcoming city escapes.",
    categories: ["Study", "Visit", "Work"],
    highlights: ["Sydney", "Melbourne", "Queensland"],
  },
  {
    key: "united-states",
    country: "United States",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=85",
    description: "Big-city energy, legendary road trips and landscapes on a grand scale.",
    categories: ["Study", "Visit", "Business"],
    highlights: ["New York", "San Francisco", "California"],
  },
  {
    key: "france",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    description: "A destination rich in art, architecture, food and memorable scenery.",
    categories: ["Visit", "Study", "Business"],
    highlights: ["Paris", "Provence", "French Riviera"],
  },
  {
    key: "dubai",
    country: "Dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85",
    description: "Contemporary architecture, desert experiences and vibrant city life.",
    categories: ["Visit", "Business", "Stopover"],
    highlights: ["Downtown", "Dubai Marina", "Desert"],
  },
  {
    key: "south-africa",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",
    description: "Wildlife, coastline and culture come together in a remarkable setting.",
    categories: ["Visit", "Adventure", "Culture"],
    highlights: ["Cape Town", "Kruger", "Winelands"],
  },
  {
    key: "singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85",
    description: "An easy-to-explore city of gardens, striking design and diverse food.",
    categories: ["Visit", "Business", "Stopover"],
    highlights: ["Marina Bay", "Sentosa", "Gardens by the Bay"],
  },
];

export default function DestinationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="The world, within reach"
        title="Where will your next story take you?"
        description="Explore a selection of destinations for study, work, holidays and new experiences. Our team can help you plan the details around your goals."
        image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2000&q=85"
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">A few places to begin</p>
            <h2 className="editorial mt-2 text-4xl text-primary sm:text-5xl">Discover your destination.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">Travel requirements vary by destination and purpose. Talk with our team about your individual plans.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <article id={destination.key} key={destination.key} className={`group scroll-mt-28 border border-slate-200 bg-white ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}>
              <div className={`relative overflow-hidden ${index === 0 ? "h-72 sm:h-[calc(100%-0px)] sm:min-h-[470px]" : "h-56"}`}>
                <Image
                  src={destination.image}
                  alt={`${destination.country} travel destination`}
                  fill
                  sizes={index === 0 ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#e2cc9c]">
                    {destination.categories.join(" · ")}
                  </p>
                  <h3 className="editorial text-3xl text-white">{destination.country}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-6 text-slate-600">{destination.description}</p>
                <p className="mt-3 text-[11px] text-slate-500">{destination.highlights.join("  ·  ")}</p>
                <Link
                  href="/contact#enquiry"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-[#8d7448]"
                >
                  Explore {destination.country} <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

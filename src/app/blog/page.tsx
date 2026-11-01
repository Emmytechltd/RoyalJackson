import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, UserRound } from "lucide-react";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Travel Updates & Tips",
  description: "Travel inspiration, practical information and updates from Royal Jackson Travel & Tours.",
};

const posts = [
  {
    id: 0,
    title: "CHINA VISA 2026 — Group Application for April/May 2026 Canton Fair",
    excerpt: "Archived group application information for a 30-day China business visa, with registration and submission details from early 2026.",
    date: "January 11, 2026",
    author: "Visa Team",
    category: "Archived offer",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
    featured: true,
  },
  {
    id: 1,
    title: "How to Apply for a Canadian Student Visa in 2025",
    excerpt: "A step-by-step guide to securing your study permit for Canada, including requirements and application preparation.",
    date: "May 15, 2025",
    author: "Admin",
    category: "Visa Guide",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 2,
    title: "Top 5 Destinations for Summer Vacation",
    excerpt: "Ideas for a summer getaway, from tropical beaches to cultural city breaks.",
    date: "May 10, 2025",
    author: "Travel Expert",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1473&q=80",
  },
  {
    id: 3,
    title: "UK Care Worker Visa: Everything You Need to Know",
    excerpt: "Learn about care worker visa eligibility and the application process.",
    date: "May 05, 2025",
    author: "Admin",
    category: "Work Visa",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Essential Packing Tips for International Students",
    excerpt: "A checklist of what to pack and what to leave behind when moving abroad for studies.",
    date: "April 28, 2025",
    author: "Student Advisor",
    category: "Study Abroad",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Understanding the Schengen Visa Application Process",
    excerpt: "An introduction to preparing for a Schengen visa application and planning a trip to Europe.",
    date: "April 20, 2025",
    author: "Visa Consultant",
    category: "Visa Guide",
    image: "https://images.unsplash.com/photo-1467269204594-9661b133dd2b?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    title: "Why You Should Visit Dubai This Year",
    excerpt: "Discover attractions and experiences that make Dubai a compelling city break.",
    date: "April 15, 2025",
    author: "Travel Expert",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 7,
    title: "New E-Visa Updates for 2026",
    excerpt: "Updates on the e-visa destinations listed by Royal Jackson Travel & Tours.",
    date: "February 25, 2026",
    author: "Visa Team",
    category: "Visa Update",
    image: "/images/new1.jpeg",
  },
  {
    id: 8,
    title: "Special Travel Packages Now Available",
    excerpt: "An introduction to travel packages designed for international trips.",
    date: "February 25, 2026",
    author: "Travel Advisor",
    category: "Special Offer",
    image: "/images/new2.jpeg",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="The Royal Jackson journal"
        title="Travel notes, ideas and updates."
        description="Browse travel inspiration and practical information from our team. Always confirm current requirements and offer details before making plans."
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=85"
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-9 max-w-2xl">
          <p className="section-kicker">From the journal</p>
          <h2 className="editorial mt-3 text-4xl text-primary sm:text-5xl">Stories for the journey.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className={`overflow-hidden border border-slate-200 bg-white ${post.featured ? "sm:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[1.05fr_.95fr]" : ""}`}>
              <div className={`relative overflow-hidden ${post.featured ? "h-64 lg:h-full lg:min-h-[330px]" : "h-52"}`}>
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes={post.featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                  priority={post.id < 3}
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary">{post.category}</span>
              </div>
              <div className="flex flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays size={13} />{post.date}</span>
                  <span className="inline-flex items-center gap-1.5"><UserRound size={13} />{post.author}</span>
                </div>
                <h3 className="editorial mt-4 text-2xl leading-snug text-primary sm:text-3xl">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                {post.featured && (
                  <p className="mt-4 border-l-2 border-[#c6a66b] pl-3 text-xs leading-5 text-slate-500">
                    This archived offer is from 2026 and is no longer current. Contact us for up-to-date information.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Compass,
  FileCheck2,
  Plane,
  UsersRound,
} from "lucide-react";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Travel Services",
  description: "Visa assistance, study abroad guidance, work and relocation, flights, hotels and tour planning.",
};

const services = [
  {
    id: "visa-assistance",
    number: "01",
    title: "Visa Assistance",
    description:
      "Understand the application process with careful support tailored to your destination and travel purpose.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    icon: FileCheck2,
    features: ["Tourist, study, work and business visas", "Documentation support", "Application guidance"],
  },
  {
    id: "study-abroad",
    number: "02",
    title: "Study Abroad",
    description:
      "Explore international education options and get guidance through university selection and application steps.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=85",
    icon: BookOpen,
    features: ["International university selection", "Admission processing", "Scholarship and student visa guidance"],
  },
  {
    id: "work-relocation",
    number: "03",
    title: "Work & Relocation",
    description:
      "Plan an overseas move with support for work permit enquiries, residency guidance and pre-departure preparation.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    icon: BriefcaseBusiness,
    features: ["Overseas employment guidance", "Work permit assistance", "Relocation and pre-departure support"],
  },
  {
    id: "flight-hotel",
    number: "04",
    title: "Flight & Hotel Booking",
    description:
      "Make the travel details easier with support for air travel, accommodation and related trip arrangements.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    icon: Plane,
    features: ["International and domestic flights", "Hotel reservations", "Travel insurance and airport transfers"],
  },
  {
    id: "travel-consultation",
    number: "05",
    title: "Travel Consultation",
    description:
      "Talk through your plans with a travel consultant and get help understanding requirements and options.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85",
    icon: Compass,
    features: ["Personalised travel advice", "Itinerary planning", "Travel requirements and budget planning"],
  },
  {
    id: "tour-packages",
    number: "06",
    title: "Tour Packages",
    description:
      "Plan a shared adventure, a family escape or a special occasion with a holiday experience shaped around you.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",
    icon: UsersRound,
    features: ["Family holidays", "Honeymoon and group tours", "Adventure and cultural experiences"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Travel, made personal"
        title="Travel support for every kind of journey."
        description="Explore considered guidance for your travel plans, from visa and study applications to flights, stays and holidays."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Our services</p>
          <h2 className="editorial mt-3 text-4xl text-primary sm:text-5xl">The details, taken care of.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                id={service.id}
                className="group scroll-mt-28 border border-slate-200 bg-white transition-shadow hover:shadow-[0_16px_40px_rgba(16,28,50,0.10)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-white text-primary">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="absolute right-5 top-5 text-xs font-semibold tracking-[0.15em] text-white">
                    {service.number}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="editorial text-2xl text-primary">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-slate-600">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-[#c6a66b]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact#enquiry"
                    className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-primary hover:text-[#8d7448]"
                  >
                    Discuss your plans <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-[#f0f1f3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="section-kicker">A journey that feels like yours</p>
            <h2 className="editorial mt-2 text-3xl text-primary sm:text-4xl">Not sure what you need yet?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Tell us a little about your plans and we can help you find a starting point.</p>
          </div>
          <Link href="/contact#enquiry" className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-primary px-6 text-sm font-semibold text-white hover:bg-[#253c60]">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

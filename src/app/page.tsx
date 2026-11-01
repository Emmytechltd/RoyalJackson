"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Compass,
  FileCheck2,
  Globe2,
  Headset,
  MapPinned,
  Plane,
  Sparkles,
} from "lucide-react";
import TravelEnquiryForm from "@/components/TravelEnquiryForm";

const services = [
  {
    id: "visa-assistance",
    title: "Visa assistance",
    description: "Clear guidance through tourist, study, work and business visa requirements.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=85",
    icon: FileCheck2,
    detail: "Documentation support · Application guidance",
  },
  {
    id: "study-abroad",
    title: "Study abroad",
    description: "Support with international university selection, admissions and student visas.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1100&q=85",
    icon: BookOpen,
    detail: "University selection · Admission support",
  },
  {
    id: "work-relocation",
    title: "Work & relocation",
    description: "Guidance for overseas work permits, relocation planning and preparation.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85",
    icon: BriefcaseBusiness,
    detail: "Work permits · Relocation support",
  },
  {
    id: "flight-hotel",
    title: "Flights & stays",
    description: "International and domestic flight booking, hotels and onward travel support.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1100&q=85",
    icon: Plane,
    detail: "Flights · Hotels · Airport transfers",
  },
  {
    id: "travel-consultation",
    title: "Travel consultation",
    description: "Personal advice to help shape your itinerary, requirements and travel budget.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1100&q=85",
    icon: Compass,
    detail: "Itinerary planning · Travel requirements",
  },
  {
    id: "tour-packages",
    title: "Tour packages",
    description: "Explore family holidays, honeymoon escapes, group tours and cultural trips.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1100&q=85",
    icon: MapPinned,
    detail: "Family holidays · Group and adventure tours",
  },
];

const destinations = [
  {
    name: "Canada",
    key: "canada",
    description: "Alpine landscapes, vibrant cities and a welcoming mix of cultures.",
    tag: "Study · Visit · Work",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1100&q=85",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "United Kingdom",
    key: "united-kingdom",
    description: "Historic cities and contemporary culture.",
    tag: "Study · Visit",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
  {
    name: "Australia",
    key: "australia",
    description: "Coastal escapes and lively urban destinations.",
    tag: "Study · Visit · Work",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
  {
    name: "United States",
    key: "united-states",
    description: "Iconic city skylines and wide-open landscapes.",
    tag: "Study · Visit",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
  {
    name: "France",
    key: "france",
    description: "Art, architecture and the charm of the French Riviera.",
    tag: "Visit · Study",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
  {
    name: "Dubai",
    key: "dubai",
    description: "Modern design, desert adventures and warm hospitality.",
    tag: "Visit · Business",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
  {
    name: "South Africa",
    key: "south-africa",
    description: "Wild landscapes, rich culture and a dramatic coastline.",
    tag: "Visit · Adventure",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
  {
    name: "Singapore",
    key: "singapore",
    description: "Gardens, architecture and a vibrant culinary scene.",
    tag: "Visit · Business",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
];

const strengths = [
  { title: "Personalised assistance", description: "We begin by understanding your plans, priorities and questions.", icon: Sparkles },
  { title: "Professional guidance", description: "Get clear support as you prepare for the next steps of your journey.", icon: FileCheck2 },
  { title: "A transparent process", description: "Know what to prepare and what to expect throughout your enquiry.", icon: Check },
  { title: "Dedicated support", description: "Speak with our team when you need help planning or preparing.", icon: Headset },
  { title: "Travel in one place", description: "Explore visa, study, flight, hotel and holiday planning together.", icon: Globe2 },
  { title: "International expertise", description: "Plan across a range of destinations and travel purposes.", icon: MapPinned },
];

const steps = [
  { number: "01", title: "Consultation", description: "We learn about your travel needs, timing and objectives." },
  { number: "02", title: "Planning", description: "Together, we consider suitable options and requirements." },
  { number: "03", title: "Preparation", description: "We guide you through relevant documentation and next steps." },
  { number: "04", title: "Your journey", description: "Get the agreed support as you prepare to set off." },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden">
      <section className="relative flex min-h-[620px] items-center bg-primary text-white sm:min-h-[680px]">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=88"
          alt="A passenger aircraft flying above a blanket of clouds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,36,.88)_0%,rgba(10,20,36,.65)_55%,rgba(10,20,36,.22)_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-24 sm:px-6 sm:pb-36 sm:pt-28 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="section-kicker text-[#e2cc9c]">Royal Jackson — The Art of Travel</p>
            <h1 className="editorial mt-6 text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
              The world is yours
              <br className="hidden sm:block" /> to explore.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              From international travel and visa assistance to study abroad opportunities and
              memorable holidays, we help make your journey feel seamless.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 bg-[#c6a66b] px-6 text-sm font-semibold text-primary transition-colors hover:bg-[#d7bd8c]"
              >
                Explore our services <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center border border-white/65 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Plan your journey
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 hidden bg-white/95 text-primary md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.17em]">Thoughtful planning, personal service</span>
            <span className="text-xs text-slate-500">Abuja, Nigeria · Travel with confidence</span>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-5 sm:px-6 lg:px-8">
        <TravelEnquiryForm compact />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-kicker">Travel, thoughtfully arranged</p>
            <h2 className="editorial mt-3 text-4xl leading-tight text-primary sm:text-5xl">A little help goes a long way.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            From your first questions to the details of departure, find the support that fits your plans.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : (index % 3) * 0.06 }}
                className="group border border-slate-200 bg-white transition-shadow hover:shadow-[0_16px_40px_rgba(16,28,50,0.10)]"
              >
                <Link href={`/services#${service.id}`} className="focus-ring block">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-white text-primary">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#92784d]">{service.detail}</p>
                    <h3 className="editorial mt-3 text-2xl text-primary">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary">
                      Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Find your somewhere</p>
              <h2 className="editorial mt-3 text-4xl text-primary sm:text-5xl">A world of possibility.</h2>
            </div>
            <Link href="/destinations" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[#8d7448]">
              Discover all destinations <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid auto-rows-[230px] gap-4 sm:grid-cols-2 md:auto-rows-[250px] lg:grid-cols-4">
            {destinations.map((destination, index) => (
              <Link
                key={destination.name}
                id={destination.key}
                href={`/destinations#${destination.key}`}
                className={`group focus-ring relative isolate overflow-hidden ${destination.className}`}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} destination`}
                  fill
                  sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#e2cc9c]">{destination.tag}</p>
                  <h3 className="editorial text-2xl text-white sm:text-3xl">{destination.name}</h3>
                  <p className="mt-2 max-w-sm text-xs leading-5 text-white/75">{destination.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0f1f3] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative min-h-[390px] overflow-hidden sm:min-h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1300&q=85"
              alt="Travel consultants discussing a plan together"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-white px-5 py-4 sm:bottom-8 sm:left-8">
              <p className="section-kicker">Your plans. Your pace.</p>
              <p className="editorial mt-1 text-xl text-primary">Personal guidance at every step.</p>
            </div>
          </div>
          <div>
            <p className="section-kicker">Why Royal Jackson</p>
            <h2 className="editorial mt-3 max-w-xl text-4xl leading-tight text-primary sm:text-5xl">Travel is personal. Your planning should be, too.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              We bring care and clarity to the details, so you can focus on the reason you want to go.
            </p>
            <div className="mt-9 grid gap-x-7 gap-y-7 sm:grid-cols-2">
              {strengths.map((strength) => {
                const Icon = strength.icon;
                return (
                  <div key={strength.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-[#d7c7a6] text-[#92784d]">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-primary">{strength.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-600">{strength.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">A clear way forward</p>
          <h2 className="editorial mt-3 text-4xl text-primary sm:text-5xl">From first conversation to take-off.</h2>
        </div>
        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[8%] right-[8%] top-5 hidden border-t border-[#d7c7a6] lg:block" />
          <div className="absolute bottom-5 left-5 top-5 border-l border-[#d7c7a6] lg:hidden" />
          {steps.map((step) => (
            <div key={step.number} className="relative flex gap-4 lg:block">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-[#c6a66b] bg-[#f8f6f0] text-xs font-semibold text-primary">
                {step.number}
              </span>
              <div>
                <h3 className="editorial text-2xl text-primary lg:mt-5">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-primary py-20 text-white sm:py-24">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=85"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/45" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#ddc89f]">Your next great journey starts here</p>
            <h2 className="editorial mt-4 text-4xl leading-tight sm:text-6xl">Let the planning be part of the pleasure.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Tell us where you hope to go. Our team is ready to help you take the next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center bg-[#c6a66b] px-6 text-sm font-semibold text-primary transition-colors hover:bg-[#d7bd8c]">
                Speak with our travel team
              </Link>
              <a href="https://wa.me/2347036435989" target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center border border-white/65 px-6 text-sm font-semibold text-white hover:bg-white hover:text-primary">
                Start planning on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

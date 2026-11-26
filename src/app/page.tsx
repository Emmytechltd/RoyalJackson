"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Compass,
  FileCheck2,
  Globe2,
  Headset,
  Heart,
  MapPin,
  MessageCircle,
  Plane,
  Sparkles,
} from "lucide-react";
import TravelEnquiryForm from "@/components/TravelEnquiryForm";

const services = [
  {
    id: "visa-assistance",
    title: "Visa assistance",
    description: "Understand requirements and prepare your application with care.",
    icon: FileCheck2,
  },
  {
    id: "study-abroad",
    title: "Study abroad",
    description: "Explore schools, admissions and the steps to studying overseas.",
    icon: BookOpen,
  },
  {
    id: "work-relocation",
    title: "Work & relocation",
    description: "Get support as you plan the practicalities of a move abroad.",
    icon: BriefcaseBusiness,
  },
  {
    id: "flight-hotel",
    title: "Flights & stays",
    description: "Bring flights, accommodation and travel details together.",
    icon: Plane,
  },
  {
    id: "travel-consultation",
    title: "Travel consultation",
    description: "Talk through your options, questions and travel plans.",
    icon: Compass,
  },
  {
    id: "tour-packages",
    title: "Tour packages",
    description: "Plan a thoughtful getaway, group trip or special occasion.",
    icon: MapPin,
  },
];

const destinations = [
  {
    name: "Canada",
    tag: "Study · Visit · Work",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=900&q=75",
    alt: "Lake and mountain scenery in Canada",
  },
  {
    name: "United Kingdom",
    tag: "Study · Visit",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=75",
    alt: "London skyline beside the River Thames",
  },
  {
    name: "Australia",
    tag: "Study · Visit · Work",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=75",
    alt: "Sydney Harbour and the Opera House",
  },
  {
    name: "United States",
    tag: "Study · Visit",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=75",
    alt: "San Francisco waterfront and city skyline",
  },
  {
    name: "France",
    tag: "Study · Visit",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=75",
    alt: "Eiffel Tower above Paris rooftops",
  },
  {
    name: "Dubai",
    tag: "Visit · Business",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=75",
    alt: "Dubai skyline at sunset",
  },
  {
    name: "South Africa",
    tag: "Visit · Adventure",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=75",
    alt: "Wild landscape in South Africa",
  },
  {
    name: "Singapore",
    tag: "Visit · Business",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=75",
    alt: "Singapore skyline and waterfront at dusk",
  },
];

const reasons = [
  { title: "Personalised assistance", description: "Your plans and priorities come first.", icon: Sparkles },
  { title: "Professional guidance", description: "Clear help with requirements and next steps.", icon: FileCheck2 },
  { title: "A transparent process", description: "Understand the process before you proceed.", icon: Check },
  { title: "Dedicated support", description: "A team to talk to as your plans take shape.", icon: Headset },
  { title: "Everything in one place", description: "Travel, study, flights and stays together.", icon: Globe2 },
  { title: "International travel support", description: "Guidance across a range of destinations.", icon: Compass },
];

const process = [
  { number: "01", title: "Choose your destination", description: "Start with a place or a purpose for your journey." },
  { number: "02", title: "Send an enquiry", description: "Share a few details to help us understand what you have in mind." },
  { number: "03", title: "Get guidance", description: "Discuss relevant options, requirements and next steps with our team." },
  { number: "04", title: "Prepare to travel", description: "Organise your plans and get ready for your journey." },
];

const experiences = [
  {
    title: "Holidays & tour packages",
    description: "Explore family holidays, honeymoons, group tours, adventure and cultural experiences.",
    icon: Heart,
    href: "/services#tour-packages",
  },
  {
    title: "Study abroad",
    description: "Get guidance with international university selection, admissions and student travel.",
    icon: BookOpen,
    href: "/services#study-abroad",
  },
  {
    title: "Flights & stays",
    description: "Discuss flight bookings, hotel reservations and the details around your trip.",
    icon: Plane,
    href: "/services#flight-hotel",
  },
];

const faqs = [
  {
    question: "How long does visa processing take?",
    answer:
      "Processing times vary by destination, visa type, season and the relevant embassy or authority. We can help you understand the published guidance, but timelines and decisions are set by the authorities.",
  },
  {
    question: "What documents will I need?",
    answer:
      "Requirements depend on your destination and purpose of travel. After learning more about your plans, we can help you identify the relevant official checklist and organise your supporting documents.",
  },
  {
    question: "Can I get help choosing a study abroad programme?",
    answer:
      "Yes. We can discuss your study goals and help you explore institutions, admissions steps and student visa requirements. Eligibility and admission decisions are made by the relevant schools and authorities.",
  },
  {
    question: "How much do your services cost, and how can I pay?",
    answer:
      "Fees depend on the service and the scope of support you need. We will explain applicable service fees and any third-party costs before you decide to proceed. Ask our team for current payment options.",
  },
  {
    question: "How do I get started?",
    answer:
      "Complete the short enquiry form on this page to open a WhatsApp message, or call us on +234 703 643 5989. Tell us your destination and travel purpose, and we can take it from there.",
  },
];

const whatsappNumber = "2347036435989";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Royal Jackson Travel & Tours",
    url: "https://royaljacksontravelandtours.com",
    description:
      "Travel agency in Abuja, Nigeria offering visa assistance, study abroad guidance, work and relocation support, flight and hotel booking, travel consultation and tour packages.",
    telephone: "+2347036435989",
    email: "Royaljacksontravelandtours@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    areaServed: "Nigeria",
  };

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="relative isolate flex min-h-[650px] items-center bg-primary text-white sm:min-h-[700px]">
        <Image
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2000&q=80"
          alt="Colorful coastal village on the Italian Riviera"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,31,53,.91)_0%,rgba(16,31,53,.75)_47%,rgba(16,31,53,.28)_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="section-kicker text-[#e9d3a6]">Royal Jackson Travel &amp; Tours · The Art of Travel</p>
            <h1 className="editorial mt-6 max-w-3xl text-[2.9rem] leading-[1.04] sm:text-6xl lg:text-7xl">
              Your Journey Begins With the Right Guidance.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              From visa assistance and study abroad guidance to flights, stays and tour packages,
              we help you plan your next journey with clarity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#enquiry"
                className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 bg-secondary px-7 text-sm font-semibold text-primary transition-colors hover:bg-[#d8bd8b]"
              >
                Plan your journey <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="#destinations"
                className="focus-ring inline-flex min-h-14 items-center justify-center border border-white/70 px-7 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Explore destinations
              </Link>
            </div>
            <a href="#trust" className="mt-10 inline-flex items-center gap-2 text-xs text-white/75 hover:text-white">
              Discover a more considered way to travel <ArrowDown size={14} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 hidden bg-white/95 text-primary md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.17em]">
              Thoughtful planning · Personal service
            </span>
            <span className="text-xs text-slate-600">Based in Abuja, Nigeria</span>
          </div>
        </div>
      </section>

      <section id="trust" aria-label="About Royal Jackson Travel & Tours" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-9 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 sm:gap-8">
            {[
              ["Abuja based", "A local travel team"],
              ["Visa support", "Guidance for your plans"],
              ["Study abroad", "Explore education options"],
              ["Travel planning", "Flights, stays & tours"],
            ].map(([title, detail]) => (
              <div key={title} className="border-l-2 border-secondary pl-3 sm:pl-5">
                <p className="editorial text-xl text-primary sm:text-2xl">{title}</p>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 bg-background px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="section-kicker">A good trip starts here</p>
            <h2 className="editorial mt-3 max-w-lg text-4xl leading-tight text-primary sm:text-5xl">
              Tell us where you have in mind.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-700">
              Tell us a little about your trip. We’ll prepare a WhatsApp message for you to check
              and send when you’re ready.
            </p>
          </div>
          <TravelEnquiryForm />
        </div>
      </section>

      <section id="services" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-kicker">Travel, thoughtfully arranged</p>
            <h2 className="editorial mt-3 text-4xl leading-tight text-primary sm:text-5xl">
              A little help goes a long way.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-700">
            From a first question to the finer details, find support that fits your plans.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : (index % 3) * 0.05 }}
                className="group border border-slate-200 bg-white p-6 transition-shadow hover:shadow-[0_14px_36px_rgba(16,28,50,0.09)] sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-[#d9c9a9] text-[#765b2d]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="editorial mt-5 text-2xl text-primary">{service.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-700">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="focus-ring mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary hover:text-[#765b2d]"
                >
                  Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="destinations" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Find your somewhere</p>
              <h2 className="editorial mt-3 text-4xl text-primary sm:text-5xl">A world of possibility.</h2>
            </div>
            <Link
              href="/destinations"
              className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-[#765b2d]"
            >
              Discover all destinations <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid auto-rows-[230px] gap-3 sm:grid-cols-2 sm:gap-4 md:auto-rows-[250px] lg:grid-cols-4">
            {destinations.map((destination, index) => (
              <Link
                key={destination.name}
                href={`/destinations#${destination.name.toLowerCase().replaceAll(" ", "-")}`}
                className={`group focus-ring relative isolate overflow-hidden ${index === 0 ? "sm:row-span-2" : ""}`}
              >
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f0d9a7]">
                    {destination.tag}
                  </p>
                  <h3 className="editorial text-2xl text-white sm:text-3xl">{destination.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="scroll-mt-24 bg-[#f7f5f0] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="section-kicker">Ways to travel</p>
            <h2 className="editorial mt-3 text-4xl leading-tight text-primary sm:text-5xl">
              Find the kind of journey that feels like yours.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {experiences.map((experience) => {
              const Icon = experience.icon;
              return (
                <article key={experience.title} className="flex flex-col border border-slate-200 bg-white p-6 sm:p-8">
                  <span className="flex h-11 w-11 items-center justify-center border border-[#d4c199] text-[#735a30]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="editorial mt-5 text-2xl text-primary">{experience.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-700">{experience.description}</p>
                  <Link href={experience.href} className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-[#735a30]">
                    Explore this service <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why-us" className="scroll-mt-24 bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=75"
              alt="A team working together around a table"
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
            <h2 className="editorial mt-3 max-w-xl text-4xl leading-tight text-primary sm:text-5xl">
              Travel is personal. Your planning should be, too.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-700">
              We bring care and clarity to the details, so you can focus on the reason you want to go.
            </p>
            <div className="mt-9 grid gap-x-7 gap-y-7 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-[#c9b181] text-[#765b2d]">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-primary">{reason.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-700">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">A clear way forward</p>
          <h2 className="editorial mt-3 text-4xl text-primary sm:text-5xl">
            A clear way from idea to departure.
          </h2>
        </div>
        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[8%] right-[8%] top-5 hidden border-t border-[#c9b181] lg:block" />
          {process.map((step) => (
            <div key={step.number} className="relative flex gap-4 lg:block">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-secondary bg-background text-xs font-semibold text-primary">
                {step.number}
              </span>
              <div>
                <h3 className="editorial text-2xl text-primary lg:mt-5">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="stories" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="section-kicker">Client stories</p>
            <h2 className="editorial mt-3 max-w-md text-4xl leading-tight text-primary sm:text-5xl">
              Every journey is personal.
            </h2>
          </div>
          <div className="border border-slate-200 bg-[#f7f5f0] p-6 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#735a30]">
              Real stories, shared with permission
            </p>
            <p className="editorial mt-4 text-2xl leading-relaxed text-primary sm:text-3xl">
              We don’t publish customer reviews until they’re verified and approved by the people
              who shared them.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              For now, speak with our team about the services and guidance we offer.
            </p>
            <Link href="/contact#enquiry" className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-[#735a30]">
              Talk to our team <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:px-8">
          <div>
            <p className="section-kicker">Good to know</p>
            <h2 className="editorial mt-3 max-w-md text-4xl leading-tight text-primary sm:text-5xl">
              A few things you might be wondering.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-700">
              Need a little more detail?{" "}
              <a className="font-semibold text-primary underline underline-offset-4" href={`https://wa.me/${whatsappNumber}`}>
                Ask us on WhatsApp.
              </a>
            </p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="focus-ring flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pr-8 pt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-primary py-20 text-white sm:py-24">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=75"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/65" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#f0d9a7]">Your next great journey starts here</p>
            <h2 className="editorial mt-4 text-4xl leading-tight sm:text-6xl">
              Let the planning be part of the pleasure.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Tell us where you hope to go. Our Abuja team is ready to help you take the next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Royal Jackson Travel & Tours, I'd like to plan a trip.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 bg-secondary px-6 text-sm font-semibold text-primary transition-colors hover:bg-[#d8bd8b]"
              >
                <MessageCircle size={17} aria-hidden="true" /> Chat on WhatsApp
              </a>
              <a
                href="tel:+2347036435989"
                className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 border border-white/70 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Call +234 703 643 5989 <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

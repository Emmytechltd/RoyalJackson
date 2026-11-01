import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Royal Jackson Travel & Tours, a travel consultancy based in Abuja, Nigeria.",
};

const principles = [
  { title: "Personalised assistance", description: "We listen to your plans and tailor our guidance to your travel goals." },
  { title: "Professional guidance", description: "We help you understand the application and preparation steps relevant to your plans." },
  { title: "Transparent process", description: "We aim to make the next steps and information you need clear from the start." },
  { title: "Dedicated support", description: "Our team is here to help as you plan and prepare for travel." },
  { title: "Comprehensive solutions", description: "Bring travel, visa, study and trip-planning questions to one conversation." },
  { title: "International perspective", description: "Explore a range of destinations and travel purposes with thoughtful support." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="The people behind the planning"
        title="A thoughtful partner for your next chapter."
        description="Royal Jackson Travel & Tours is a travel consultancy based in Abuja, Nigeria, helping people plan international travel, explore study options and prepare for new experiences."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=85"
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-kicker">Who we are</p>
            <h2 className="editorial mt-3 text-4xl leading-tight text-primary sm:text-5xl">
              Making the world feel a little closer.
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
              International travel comes with a lot to consider. From choosing where to go to
              preparing the right documents, every decision can shape the experience.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Royal Jackson Travel &amp; Tours brings together travel planning, visa assistance,
              study abroad guidance and flight support to help you navigate those details with
              care. We work with you to understand your plans and identify practical next steps.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[#8d7448]">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="relative min-h-[350px] overflow-hidden sm:min-h-[470px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1300&q=85"
              alt="A team working together around a table"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-white px-5 py-4">
              <p className="section-kicker">Based in Abuja</p>
              <p className="editorial mt-1 text-xl text-primary">Ready to help you plan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="border border-slate-200 p-7 sm:p-10">
              <p className="section-kicker">Our mission</p>
              <h2 className="editorial mt-3 text-3xl text-primary">Make travel planning feel clear.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                To provide considered, accessible travel guidance that helps individuals move
                toward their global aspirations with confidence.
              </p>
            </article>
            <article className="border border-slate-200 p-7 sm:p-10">
              <p className="section-kicker">Our vision</p>
              <h2 className="editorial mt-3 text-3xl text-primary">Help more journeys begin well.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                To be a trusted travel partner, known for thoughtful support, professional
                guidance and care throughout the planning process.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-9 max-w-2xl">
          <p className="section-kicker">What matters to us</p>
          <h2 className="editorial mt-3 text-4xl text-primary sm:text-5xl">Good guidance. A better journey.</h2>
        </div>
        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="flex items-start gap-4 border-t border-slate-200 pt-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#d7c7a6] text-[#92784d]">
                <Check size={17} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="section-kicker text-[#ddc89f]">Your plans begin with a conversation</p>
            <h2 className="editorial mt-2 text-3xl sm:text-4xl">Where would you like to go?</h2>
          </div>
          <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 bg-[#c6a66b] px-6 text-sm font-semibold text-primary hover:bg-[#d7bd8c]">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

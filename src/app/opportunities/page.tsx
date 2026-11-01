import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Check, MapPin } from "lucide-react";
import EVisaAlert from "@/components/EVisaAlert";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Study & Travel Opportunities",
  description: "Explore study, work and travel pathways and contact Royal Jackson to confirm current details.",
};

const opportunities = [
  {
    country: "Canada",
    title: "Skilled Worker Visa",
    type: "Work & Migration",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=85",
    deadline: "Open all year",
    eligibility: ["Minimum 1 year work experience", "IELTS required", "Degree or Diploma"],
    description: "Canada is looking for skilled workers in various sectors including IT, Healthcare, and Engineering. Apply for the Express Entry program today.",
  },
  {
    country: "United Kingdom",
    title: "Care Worker Visa",
    type: "Work Visa",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    deadline: "Rolling basis",
    eligibility: ["Job offer required", "English proficiency", "Clean criminal record"],
    description: "Opportunities available for care workers in the UK. Get sponsored by approved employers and start your new career in the healthcare sector.",
  },
  {
    country: "Australia",
    title: "Study & Work Program",
    type: "Student Visa",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=85",
    deadline: "July Intake",
    eligibility: ["High School or Bachelor's degree", "Proof of funds", "English test (PTE/IELTS)"],
    description: "Study in top Australian universities with the opportunity to work part-time during studies and full-time during breaks.",
  },
  {
    country: "USA",
    title: "Summer Work & Travel",
    type: "Exchange Program",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=85",
    deadline: "Apply by March",
    eligibility: ["Current university student", "Age 18-28", "Intermediate English"],
    description: "Experience the American culture while working during your summer break. A perfect opportunity for students to travel and earn.",
  },
  {
    country: "Poland",
    title: "Factory Worker Jobs",
    type: "Work Permit",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1200&q=85",
    deadline: "Urgent",
    eligibility: ["No language requirement", "Physically fit", "Valid passport"],
    description: "Immediate employment opportunities in manufacturing and production factories in Poland. Accommodation often provided.",
  },
  {
    country: "Schengen Area",
    title: "Tourist Visa",
    type: "Visit Visa",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    deadline: "Apply 3 months ahead",
    eligibility: ["Valid passport", "Bank statement", "Travel itinerary"],
    description: "Explore the beauty of Europe with a Schengen visa. Visit multiple countries including France, Germany, Italy, and Spain with a single visa.",
  },
];

export default function OpportunitiesPage() {
  return (
    <>
      <EVisaAlert />
      <PageIntro
        eyebrow="Explore what is possible"
        title="Opportunities for the next step."
        description="Browse selected study, work and travel opportunities. Availability and eligibility can change, so contact our team to discuss current details."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85"
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-9 max-w-2xl">
          <p className="section-kicker">Study, work &amp; travel</p>
          <h2 className="editorial mt-3 text-4xl text-primary sm:text-5xl">Explore current pathways.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <article key={opportunity.title} className="border border-slate-200 bg-white">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={opportunity.image}
                  alt={`${opportunity.country} destination`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
                <span className="absolute bottom-4 left-4 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary">{opportunity.type}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1"><MapPin size={13} />{opportunity.country}</span>
                  <span className="inline-flex items-center gap-1"><CalendarDays size={13} />{opportunity.deadline}</span>
                </div>
                <h3 className="editorial mt-3 text-2xl text-primary">{opportunity.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{opportunity.description}</p>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Eligibility overview</h4>
                  <ul className="mt-3 space-y-2">
                    {opportunity.eligibility.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-5 text-slate-600">
                        <Check size={14} className="mt-0.5 shrink-0 text-[#92784d]" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-[11px] leading-5 text-slate-500">Requirements and availability may change. Please confirm current details with our team.</p>
                <Link href="/contact#enquiry" className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-primary hover:text-[#8d7448]">
                  Ask about this opportunity <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

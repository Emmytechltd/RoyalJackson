"use client";

import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const whatsappNumber = "2347036435989";
const destinations = [
  "Canada",
  "United Kingdom",
  "Australia",
  "United States",
  "France",
  "Dubai",
  "South Africa",
  "Singapore",
  "Another destination",
];
const purposes = [
  "Holiday / tourism",
  "Study abroad",
  "Work / relocation",
  "Visit family or friends",
  "Business",
  "Flight or hotel booking",
  "Travel advice",
];

type TravelEnquiryFormProps = {
  compact?: boolean;
};

export default function TravelEnquiryForm({ compact = false }: TravelEnquiryFormProps) {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [
      "Hello Royal Jackson Travel & Tours, I'd like to plan a trip.",
      "",
      `Destination: ${formData.get("destination")}`,
      `Purpose: ${formData.get("purpose")}`,
      `Departure location: ${formData.get("departure")}`,
      `Preferred travel date: ${formData.get("date")}`,
      `Number of travellers: ${formData.get("travellers")}`,
      `Name: ${formData.get("name")}`,
      `Contact: ${formData.get("contact")}`,
    ].join("\n");
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(details)}`;
    setWhatsappUrl(url);
  }

  const controlClass =
    "mt-2 min-h-12 w-full rounded-none border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none transition focus:border-[#9a7e4c] focus:ring-2 focus:ring-[#c6a66b]/25";
  const labelClass = "block text-xs font-semibold tracking-wide text-slate-600";

  return (
    <div className={compact ? "border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(16,28,50,0.10)] sm:p-7" : "border border-slate-200 bg-white p-6 sm:p-8"}>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="section-kicker">A good trip starts here</p>
          <h2 className="editorial mt-2 text-2xl text-primary sm:text-3xl">Tell us what you have in mind.</h2>
        </div>
        <MessageCircle className="mt-1 shrink-0 text-[#4c8664]" aria-hidden="true" size={23} />
      </div>

      <form onSubmit={handleSubmit} onChange={() => setWhatsappUrl("")} className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
        <label className={labelClass}>
          Destination
          <select className={controlClass} name="destination" defaultValue="" required>
            <option value="" disabled>Select a destination</option>
            {destinations.map((destination) => <option key={destination}>{destination}</option>)}
          </select>
        </label>
        <label className={labelClass}>
          Travel purpose
          <select className={controlClass} name="purpose" defaultValue="" required>
            <option value="" disabled>Select a purpose</option>
            {purposes.map((purpose) => <option key={purpose}>{purpose}</option>)}
          </select>
        </label>
        <label className={labelClass}>
          Departure location
          <input className={controlClass} name="departure" placeholder="e.g. Abuja, Nigeria" required />
        </label>
        <label className={labelClass}>
          Preferred travel date
          <input className={controlClass} type="date" name="date" required />
        </label>
        <label className={labelClass}>
          Number of travellers
          <input className={controlClass} type="number" name="travellers" min="1" max="30" defaultValue="1" required />
        </label>
        <label className={labelClass}>
          Your name
          <input className={controlClass} name="name" autoComplete="name" required />
        </label>
        <label className={`${labelClass} sm:col-span-2`}>
          Phone or email for follow-up
          <input className={controlClass} name="contact" autoComplete="email" placeholder="Your preferred contact" required />
        </label>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-[#253c60] sm:w-auto"
          >
            Prepare WhatsApp enquiry <ArrowUpRight size={17} aria-hidden="true" />
          </button>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Your message will open in WhatsApp so you can review it and send it directly to our team.
          </p>
          {whatsappUrl && (
            <p className="mt-3 text-sm text-slate-700" role="status">
              Your enquiry is ready.{" "}
              <a className="font-semibold text-primary underline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Review and send on WhatsApp
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

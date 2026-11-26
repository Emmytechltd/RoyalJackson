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
  "Holiday / tour",
  "Study abroad",
  "Work / relocation",
  "Visit family or friends",
  "Business",
  "Flight or hotel booking",
  "Travel consultation",
];

export default function TravelEnquiryForm() {
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const enquiry = [
      "Hello Royal Jackson Travel & Tours, I'd like to discuss a trip.",
      "",
      `Full name: ${formData.get("fullName")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Destination: ${formData.get("destination")}`,
      `Purpose: ${formData.get("purpose")}`,
      `Departure date: ${formData.get("departureDate")}`,
      `Number of travellers: ${formData.get("travellers")}`,
      `Additional message: ${formData.get("message") || "None"}`,
    ].join("\n");
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`;

    setWhatsappUrl(url);
    const whatsappWindow = window.open(url, "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      setStatus("WhatsApp opened. Review your message there before sending.");
    } else {
      setStatus("Your message is ready. Use the link below to open it in WhatsApp.");
    }
  }

  const controlClass =
    "mt-2 min-h-12 w-full rounded-sm border border-slate-300 bg-white px-3.5 text-sm text-[#243044] outline-none transition focus:border-[#9b7940] focus:ring-2 focus:ring-[#c6a46a]/35";
  const labelClass = "block text-xs font-semibold tracking-wide text-[#334155]";

  return (
    <div className="border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(16,31,53,0.10)] sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="section-kicker">Start a conversation</p>
          <h2 className="editorial mt-2 text-2xl text-primary sm:text-3xl">Tell us about your plans.</h2>
        </div>
        <MessageCircle className="mt-1 shrink-0 text-[#28794b]" aria-hidden="true" size={23} />
      </div>

      <form onSubmit={handleSubmit} onChange={() => { setWhatsappUrl(""); setStatus(""); }}>
        <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
          <label className={labelClass}>
            Full name
            <input
              className={controlClass}
              name="fullName"
              type="text"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              placeholder="Your name"
              required
            />
          </label>
          <label className={labelClass}>
            Email address
            <input
              className={controlClass}
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className={labelClass}>
            Phone number
            <input
              className={controlClass}
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              placeholder="+234 800 000 0000"
              required
            />
          </label>
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
            Departure date
            <input className={controlClass} name="departureDate" type="date" required />
          </label>
          <label className={labelClass}>
            Number of travellers
            <input
              className={controlClass}
              name="travellers"
              type="number"
              min="1"
              max="30"
              defaultValue="1"
              required
            />
          </label>
          <label className={`${labelClass} sm:col-span-2`}>
            Additional message <span className="font-normal text-slate-600">(optional)</span>
            <textarea
              className={`${controlClass} min-h-28 resize-y py-3`}
              name="message"
              maxLength={1200}
              placeholder="Anything else you would like our team to know?"
              rows={4}
            />
          </label>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-secondary px-6 text-sm font-semibold text-primary transition-colors hover:bg-[#d8bd8b] sm:w-auto"
          >
            Prepare WhatsApp enquiry <ArrowUpRight size={17} aria-hidden="true" />
          </button>
          <p className="mt-3 text-xs leading-5 text-slate-600">
            Your details stay in your browser until you choose to open WhatsApp. Review the
            prepared message there before sending it to our team.
          </p>
          {status && (
            <p className="mt-3 text-sm text-slate-700" role="status" aria-live="polite">
              {status}{" "}
              {whatsappUrl && (
                <a
                  className="font-semibold text-primary underline underline-offset-2"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open WhatsApp
                </a>
              )}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

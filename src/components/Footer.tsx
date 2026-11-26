import Link from "next/link";
import { Mail, MapPin, Phone, Plane } from "lucide-react";

const services = [
  { title: "Visa assistance", id: "visa-assistance" },
  { title: "Study abroad", id: "study-abroad" },
  { title: "Work & relocation", id: "work-relocation" },
  { title: "Flight & hotel booking", id: "flight-hotel" },
  { title: "Travel consultation", id: "travel-consultation" },
  { title: "Tour packages", id: "tour-packages" },
];

const destinations = [
  "Canada",
  "United Kingdom",
  "Australia",
  "United States",
  "France",
  "Dubai",
  "South Africa",
  "Singapore",
];

export default function Footer() {
  return (
    <footer className="bg-[#f7f5f0] text-[#243044]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Royal Jackson home">
            <span className="flex h-11 w-11 items-center justify-center border border-[#82632f] text-[#82632f]">
              <Plane size={20} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-[0.12em]">ROYAL JACKSON</span>
              <span className="mt-1 block text-[9px] tracking-[0.15em] text-[#243044]/80">TRAVEL &amp; TOURS</span>
              <span className="mt-0.5 block text-[8px] tracking-[0.15em] text-[#243044]/70">THE ART OF TRAVEL</span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#243044]/85">
            Thoughtful travel planning, visa assistance and study abroad guidance for the journeys
            that matter to you.
          </p>
        </div>

        <div>
          <h2 className="section-kicker mb-5 text-[#243044]">Explore</h2>
          <ul className="space-y-3 text-sm text-[#243044]/90">
            <li><Link className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href="/about">About us</Link></li>
            <li><Link className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href="/services">Our services</Link></li>
            <li><Link className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href="/destinations">Destinations</Link></li>
            <li><Link className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href="/opportunities">Study abroad</Link></li>
            <li><Link className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href="/blog">Travel insights</Link></li>
            <li><Link className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="section-kicker mb-5 text-[#243044]">Services &amp; places</h2>
          <ul className="space-y-3 text-sm text-[#243044]/90">
            {services.map((service) => (
              <li key={service.id}>
                <Link className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href={`/services#${service.id}`}>
                  {service.title}
                </Link>
              </li>
            ))}
            <li><Link className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href="/destinations">View all destinations</Link></li>
            {destinations.slice(0, 2).map((country) => (
              <li key={country}>
                <Link className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href={`/destinations#${country.toLowerCase().replaceAll(" ", "-")}`}>
                  {country}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="section-kicker mb-5 text-[#243044]">Get in touch</h2>
          <ul className="space-y-4 text-sm text-[#243044]/90">
            <li className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-[#775b2d]" />
              <span>Abuja, Nigeria</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={17} className="mt-0.5 shrink-0 text-[#775b2d]" />
              <div className="space-y-2">
                <a className="block transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href="tel:+2347036435989">+234 703 643 5989</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={17} className="mt-0.5 shrink-0 text-[#775b2d]" />
              <a className="break-all transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]" href="mailto:Royaljacksontravelandtours@gmail.com">
                Royaljacksontravelandtours@gmail.com
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center border border-[#243044]/30 px-4 py-2.5 text-xs font-semibold tracking-wide text-[#243044] transition-colors hover:border-[#775b2d] hover:bg-white/70 hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]"
                href="https://wa.me/2347036435989"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp · Chat with us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#243044]/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-[#243044]/80 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Royal Jackson Travel &amp; Tours. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="/privacy" className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]">Privacy notice</Link>
            <Link href="/terms" className="transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]">Website terms</Link>
            <span>Abuja, Nigeria</span>
            <span className="basis-full border-t border-[#243044]/15 pt-3 md:basis-auto md:border-0 md:pt-0">
              Website by{" "}
              <a
                href="https://emmytech.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#243044] underline decoration-[#775b2d] decoration-2 underline-offset-4 transition-colors hover:text-[#775b2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#775b2d]"
              >
                Emmytech
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

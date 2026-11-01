"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services", menu: true },
  { name: "Destinations", href: "/destinations", menu: true },
  { name: "Study Abroad", href: "/opportunities" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Visa assistance", href: "/services#visa-assistance" },
  { name: "Study abroad", href: "/services#study-abroad" },
  { name: "Work & relocation", href: "/services#work-relocation" },
  { name: "Flights & hotels", href: "/services#flight-hotel" },
  { name: "Tours & consultation", href: "/services#tours-consultation" },
];

const destinationLinks = [
  "Canada",
  "United Kingdom",
  "Australia",
  "United States",
  "France",
  "Dubai",
  "South Africa",
  "Singapore",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200/80 bg-white/95 shadow-[0_8px_28px_rgba(16,28,50,0.08)] backdrop-blur-md"
          : "border-white/30 bg-white"
      }`}
    >
      <div className="hidden bg-primary text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide lg:px-8">
          <span>Thoughtful journeys, made personal.</span>
          <div className="flex items-center gap-6 text-white/85">
            <a className="hover:text-secondary" href="tel:+2347036435989">
              +234 703 643 5989
            </a>
            <a
              className="hover:text-secondary"
              href="mailto:Royaljacksontravelandtours@gmail.com"
            >
              Royaljacksontravelandtours@gmail.com
            </a>
            <span>Abuja, Nigeria</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Royal Jackson Travel & Tours home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-secondary text-lg font-semibold text-primary">
            RJ
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold tracking-[0.12em] text-primary">
              ROYAL JACKSON
            </span>
            <span className="mt-1 block text-[9px] font-medium tracking-[0.23em] text-slate-500">
              TRAVEL &amp; TOURS
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <div className="group relative" key={item.name}>
              <Link
                href={item.href}
                aria-current={active(item.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`focus-ring inline-flex items-center gap-1 py-7 text-[13px] font-medium transition-colors hover:text-[#8d7448] ${
                  active(item.href) ? "text-primary" : "text-slate-600"
                }`}
              >
                {item.name}
                {item.menu && <ChevronDown size={14} aria-hidden="true" />}
              </Link>
              {item.name === "Our Services" && (
                <div className="invisible absolute left-0 top-[66px] w-60 translate-y-2 border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-sm text-slate-600 hover:bg-[#f8f6f0] hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
              {item.name === "Destinations" && (
                <div className="invisible absolute left-0 top-[66px] grid w-[340px] translate-y-2 grid-cols-2 border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {destinationLinks.map((country) => (
                    <Link
                      key={country}
                      href={`/destinations#${country.toLowerCase().replaceAll(" ", "-")}`}
                      className="px-4 py-3 text-sm text-slate-600 hover:bg-[#f8f6f0] hover:text-primary"
                    >
                      {country}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="focus-ring bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#253c60]"
          >
            Plan your trip
          </Link>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="focus-ring flex h-11 w-11 items-center justify-center text-primary lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active(item.href) ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-slate-100 py-3.5 text-sm ${
                    active(item.href) ? "font-semibold text-primary" : "text-slate-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-wrap gap-2 py-3">
                {serviceLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="bg-[#f8f6f0] px-3 py-2 text-xs text-slate-700"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-primary px-5 py-3.5 text-center text-sm font-semibold text-white"
              >
                Plan your trip
              </Link>
              <a href="https://wa.me/2347036435989" onClick={() => setIsOpen(false)} className="py-3 text-center text-sm text-[#3d7755]">
                Message us on WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

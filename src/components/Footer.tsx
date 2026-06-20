import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-slate-900 to-slate-950 text-white pt-16 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-3">
                Emmytech <span className="text-secondary">Digital Solutions</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Building standout digital experiences with modern travel, visa, and support services.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors rounded-full p-2 bg-white/5 shadow-sm">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors rounded-full p-2 bg-white/5 shadow-sm">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors rounded-full p-2 bg-white/5 shadow-sm">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors rounded-full p-2 bg-white/5 shadow-sm">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-xl font-semibold mb-4 border-b border-secondary pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/opportunities" className="text-gray-300 hover:text-white transition-colors">Travel Opportunities</Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="text-xl font-semibold mb-4 border-b border-secondary pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Visa Assistance</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Study Abroad Programs</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Work & Relocation</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Flight & Hotel Booking</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Travel Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5 bg-white/5 rounded-3xl p-6 border border-white/10 shadow-xl">
            <h4 className="text-xl font-semibold mb-4 border-b border-secondary pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-200">Abuja, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <div>
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-[0.2em]">Main Line</p>
                  <a href="tel:+2347036435989" className="text-gray-100 hover:text-secondary transition-colors">+234 703 643 5989</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <div>
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-[0.2em]">Call Line</p>
                  <a href="tel:07039357146" className="text-gray-100 hover:text-secondary transition-colors">07039357146</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-secondary flex-shrink-0" size={20} />
                <div>
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-[0.2em]">Email</p>
                  <a href="mailto:Royaljacksontravelandtours@gmail.com" className="text-gray-100 hover:text-secondary transition-colors">Royaljacksontravelandtours@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <div>
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-[0.2em]">WhatsApp</p>
                  <a href="https://wa.me/2347067797360" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-gray-100 hover:bg-secondary hover:text-white transition-colors shadow-sm">
                    +2347067797360
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Emmytech Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Royal Jackson <span className="text-secondary">Travels</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for global travel and visa solutions. We make your journey seamless and memorable.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-secondary pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/opportunities" className="text-gray-300 hover:text-secondary transition-colors">Travel Opportunities</Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-secondary transition-colors">Destinations</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-secondary transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-secondary pb-2 inline-block">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Visa Assistance</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Study Abroad Programs</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Work & Relocation</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Flight & Hotel Booking</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Travel Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-secondary pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Abuja, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-400 mb-1">Main Line</p>
                  <a href="tel:+2347036435989" className="text-gray-300 hover:text-white">+234 703 643 5989</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-400 mb-1">Call Line</p>
                  <a href="tel:07039357146" className="text-gray-300 hover:text-white">07039357146</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <a href="mailto:Royaljacksontravelandtours@gmail.com" className="text-gray-300 hover:text-white">Royaljacksontravelandtours@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Royal Jackson Travel And Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

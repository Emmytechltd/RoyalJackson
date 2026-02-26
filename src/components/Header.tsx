"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "Destinations", href: "/destinations" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-1">
              <Phone size={14} className="text-secondary" />
              <span>+234 703 643 5989</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} className="text-secondary" />
              <span>Royaljacksontravelandtours@gmail.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-3 mr-4 border-r border-white/20 pr-4">
              <Link href="#" className="hover:text-secondary transition-colors"><Facebook size={16} /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Instagram size={16} /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Twitter size={16} /></Link>
            </div>
            <span>Abuja, Nigeria</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Royal Jackson <span className="text-secondary">Travels</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  pathname === item.href ? "text-primary font-bold" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg absolute w-full left-0 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-primary ${
                    pathname === item.href ? "text-primary bg-gray-50" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

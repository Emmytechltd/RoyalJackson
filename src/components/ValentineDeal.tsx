"use client";

import Link from "next/link";
import { Heart, Calendar, MapPin, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ValentineDeal() {
  const dealFeatures = [
    "Economy Flight on Qatar Airways",
    "Qatar Visa",
    "5 Nights Accommodation in Steigenberger Hotel",
    "Daily Buffet Breakfast",
    "Return Airport Transfers",
  ];

  const daysUntilExpiry = () => {
    const today = new Date("2026-01-06");
    const expiry = new Date("2026-02-01");
    const diff = expiry.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-50 py-16 relative overflow-hidden">
      {/* Decorative hearts */}
      <div className="absolute top-0 right-0 text-red-200 opacity-30">
        <Heart size={120} fill="currentColor" className="animate-pulse" />
      </div>
      <div className="absolute bottom-0 left-0 text-pink-200 opacity-30">
        <Heart size={100} fill="currentColor" className="animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm">
            <Heart size={16} fill="white" />
            VALENTINE SPECIAL DEAL
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
              Celebrate Love in Qatar
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Create unforgettable memories with this exclusive Valentine getaway package
            </p>

            {/* Dates and Status */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <Calendar className="text-red-600" size={24} />
                <span>
                  <strong>Travel Dates:</strong> February 12-17, 2026
                </span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <MapPin className="text-red-600" size={24} />
                <span>
                  <strong>Destination:</strong> Doha, Qatar
                </span>
              </div>
              <div className="flex items-center gap-3 text-lg text-red-600 font-bold">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {daysUntilExpiry()} Days Left
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="font-bold text-primary mb-4 text-lg">Package Includes:</h3>
              <ul className="space-y-3">
                {dealFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-full hover:bg-red-700 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Book Your Valentine Escape
            </Link>
          </motion.div>

          {/* Right - Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-red-600">
              <div className="text-center mb-8">
                <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-2">
                  Limited Time Offer
                </p>
                <h3 className="text-3xl font-bold text-primary mb-6">Special Pricing</h3>
              </div>

              {/* Pricing Cards */}
              <div className="space-y-6">
                {/* Sharing Room */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-primary"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={20} className="text-primary" />
                    <h4 className="font-bold text-primary text-lg">Shared Accommodation</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Per Person (2 Sharing)</p>
                  <p className="text-4xl font-bold text-primary">₦2,950,000</p>
                </motion.div>

                {/* Single Room */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-xl border-2 border-red-600 relative"
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Heart size={20} className="text-red-600" />
                    <h4 className="font-bold text-red-600 text-lg">Single Room</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Private Luxury Experience</p>
                  <p className="text-4xl font-bold text-red-600">₦3,650,000</p>
                </motion.div>
              </div>

              {/* Deal Expires */}
              <div className="mt-8 pt-8 border-t-2 border-gray-200 text-center">
                <p className="text-red-600 font-bold text-sm mb-1">⏰ DEAL EXPIRES</p>
                <p className="text-2xl font-bold text-primary">February 1, 2026</p>
              </div>
            </div>

            {/* Floating note */}
            <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-sm text-gray-800">
                <strong>Quick Tip:</strong> Limited slots available! Contact us today to secure your spot for this romantic getaway.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

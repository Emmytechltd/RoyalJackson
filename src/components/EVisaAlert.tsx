"use client";

import { useState, useEffect } from "react";
import { X, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EVisaAlert() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the alert
    const isDismissed = localStorage.getItem("evisa_alert_dismissed");
    if (isDismissed) return;

    // Show alert after a short delay when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("evisa_alert_dismissed", "true");
  };

  const visaList = [
    "Egypt VOA-",
    "Indonesia evisa-",
    "Tanzania visa-",
    "Singapore visa-",
    "with package also available",
    "South africa express evisa-",
    "Kenya eta-",
    "Pakistan-",
    "Seychelles eta-",
    "Madagascar visa-",
    "Uganda visa -",
    "East Africa 3 in 1-",
    "Ethiopian visa-"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border-t-4 border-secondary"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 bg-primary text-white">
              <div className="flex items-center gap-3">
                <AlertCircle className="text-secondary" size={24} />
                <h2 className="text-xl font-bold">Important Visa Updates</h2>
              </div>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-700 font-medium mb-6">
                Kindly find below, our updated E-visa list 
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {visaList.map((visa, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                    <span>{visa}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
                <button
                  onClick={handleClose}
                  className="bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  Got it, Thanks!
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

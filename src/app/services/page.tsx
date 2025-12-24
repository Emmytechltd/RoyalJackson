"use client";

import Link from "next/link";
import { Globe, BookOpen, Briefcase, Plane, FileText, Users } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-secondary" />,
      title: "Visa Assistance",
      description: "We provide comprehensive visa assistance for various countries including USA, Canada, UK, Australia, and Schengen countries. Whether it's for tourism, study, work, or business, we guide you through the documentation and application process.",
      features: ["Document review", "Application form filling", "Interview preparation", "Appointment scheduling"]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-secondary" />,
      title: "Study Abroad Programs",
      description: "Unlock your potential with our study abroad programs. We help students secure admissions into top universities across the globe and assist with student visa applications.",
      features: ["University selection", "Admission processing", "Scholarship guidance", "Student visa support"]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-secondary" />,
      title: "Work & Relocation",
      description: "Looking to work overseas? We connect skilled professionals with job opportunities abroad and assist with work permits and permanent residency applications.",
      features: ["Job search assistance", "Work permit application", "Residency programs", "Pre-departure orientation"]
    },
    {
      icon: <Plane className="w-12 h-12 text-secondary" />,
      title: "Flight & Hotel Booking",
      description: "Get the best deals on flight tickets and hotel accommodations. We ensure you have a comfortable journey and stay, tailored to your budget.",
      features: ["International & domestic flights", "Hotel reservations", "Travel insurance", "Airport transfers"]
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Travel Consultation",
      description: "Not sure where to start? Our expert consultants provide personalized travel advice to help you plan your trip effectively and avoid common pitfalls.",
      features: ["Itinerary planning", "Budget estimation", "Travel requirements check", "Customized travel packages"]
    },
    {
      icon: <Globe className="w-12 h-12 text-secondary" />,
      title: "Tour Packages",
      description: "Explore the world with our curated tour packages. Whether you're looking for a romantic getaway, a family vacation, or an adventure trip, we have something for everyone.",
      features: ["Group tours", "Honeymoon packages", "Adventure travel", "Cultural experiences"]
    }
  ];

  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Comprehensive travel solutions designed to make your journey smooth and hassle-free.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <div className="mt-auto">
                <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We understand that every traveler is unique. Contact us today to discuss your specific requirements and let us tailor a package just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors text-lg"
            >
              Contact Us
            </Link>
            <a 
              href="https://wa.me/2347030266090" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-500 transition-colors text-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

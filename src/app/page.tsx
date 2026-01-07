"use client";

import Link from "next/link";
import { ArrowRight, Globe, BookOpen, Briefcase, Plane } from "lucide-react";
import { motion } from "framer-motion";
import ValentineDeal from "@/components/ValentineDeal";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Your Trusted Partner for <br />
            <span className="text-secondary">Global Travel & Visa Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200"
          >
            We help you navigate the complexities of visa applications, study abroad programs, and international relocation with ease.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              href="/contact" 
              className="bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors text-lg"
            >
              Apply for Visa
            </Link>
            <Link 
              href="/opportunities" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary transition-colors text-lg"
            >
              View Travel Opportunities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Valentine Deal Section */}
      <ValentineDeal />

      {/* Services Overview */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From visa assistance to flight bookings, we provide comprehensive travel solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Globe className="w-10 h-10 text-secondary" />, 
              title: "Visa Assistance", 
              desc: "Expert guidance for tourist, study, work, and business visas." 
            },
            { 
              icon: <BookOpen className="w-10 h-10 text-secondary" />, 
              title: "Study Abroad", 
              desc: "Admission processing and visa support for international universities." 
            },
            { 
              icon: <Briefcase className="w-10 h-10 text-secondary" />, 
              title: "Work & Relocation", 
              desc: "Connect with overseas job opportunities and relocation support." 
            },
            { 
              icon: <Plane className="w-10 h-10 text-secondary" />, 
              title: "Flight & Hotels", 
              desc: "Best deals on flight tickets and hotel accommodations worldwide." 
            },
          ].map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <Link href="/services" className="text-primary font-semibold flex items-center hover:text-secondary">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                alt="Team working" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Royal Jackson?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">High Success Rate</h3>
                    <p className="text-gray-600">Our experienced team ensures your application meets all requirements for the highest chance of approval.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fast & Efficient</h3>
                    <p className="text-gray-600">We value your time and work diligently to process your requests as quickly as possible.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                    <p className="text-gray-600">From consultation to departure, our team is with you every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of the most sought-after destinations for study, work, and tourism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Canada", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1411&q=80", tag: "Work & Study" },
            { name: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", tag: "Study & Visit" },
            { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-01e6f2eb6056?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80", tag: "Work & Migration" },
          ].map((dest, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl shadow-lg h-80"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <span className="bg-secondary text-primary text-xs font-bold px-2 py-1 rounded w-fit mb-2">{dest.tag}</span>
                <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/destinations" className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded-full hover:bg-primary hover:text-white transition-colors">
            View All Destinations
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and let us help you achieve your travel dreams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-secondary text-primary font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-colors text-lg"
            >
              Contact Us Now
            </Link>
            <a 
              href="https://wa.me/2347030266090" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold py-4 px-10 rounded-full hover:bg-green-500 transition-colors text-lg flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

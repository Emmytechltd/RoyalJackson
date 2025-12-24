"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or email service
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Have questions about your travel plans? We're here to help you every step of the way.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us via phone, email, or visit our office. We look forward to assisting you with your travel needs.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-md text-secondary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600 mb-1">Call us for immediate assistance</p>
                <a href="tel:+2347030266090" className="text-primary font-bold text-lg hover:underline">
                  +234 703 026 6090
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-md text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Email</h3>
                <p className="text-gray-600 mb-1">Send us your inquiries anytime</p>
                <a href="mailto:info@royaljacksontravels.com" className="text-primary font-bold text-lg hover:underline">
                  info@royaljacksontravels.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-full shadow-md text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Office Location</h3>
                <p className="text-gray-600 mb-1">Visit us for a consultation</p>
                <p className="text-primary font-bold">
                  Abuja, Nigeria
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/2347030266090" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 bg-white p-4 rounded-xl shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d7.322359691811566!3d9.024416999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e614f1774a38d%3A0x296e38b323c22026!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1716300000000!5m2!1sen!2sng" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

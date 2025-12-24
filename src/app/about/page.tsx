"use client";

import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Discover the story behind Royal Jackson Travel And Tours and our commitment to excellence.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12">
        {/* Company Overview */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Royal Jackson Travel And Tours is a premier travel agency based in Abuja, Nigeria, dedicated to providing top-notch travel and visa solutions to clients across the globe.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Established with a vision to simplify the complexities of international travel, we have grown to become a trusted name in the industry. Whether you are looking to study abroad, work overseas, or explore new destinations, we are your reliable partner.
            </p>
            <p className="text-gray-600 text-lg">
              Our team of experienced consultants works tirelessly to ensure that every application is handled with precision and care, maximizing your chances of success.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1484&q=80" 
              alt="Our Team" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide seamless, reliable, and affordable travel solutions that empower individuals to achieve their global aspirations, while delivering exceptional customer service at every touchpoint.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading travel agency in Nigeria and beyond, recognized for our integrity, expertise, and commitment to turning travel dreams into reality.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">Why Choose Royal Jackson?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Guidance", desc: "Our team comprises seasoned travel experts with years of experience in visa processing and travel planning." },
              { title: "High Success Rate", desc: "We pride ourselves on our high visa approval rates, thanks to our meticulous attention to detail." },
              { title: "Personalized Service", desc: "We understand that every client is unique, and we tailor our services to meet your specific needs." },
              { title: "Transparent Process", desc: "No hidden fees or surprises. We maintain complete transparency throughout the entire process." },
              { title: "Global Network", desc: "Our strong partnerships with international institutions and organizations give you an edge." },
              { title: "24/7 Support", desc: "We are always available to answer your questions and provide assistance whenever you need it." },
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="text-secondary w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

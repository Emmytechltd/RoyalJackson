"use client";

import Link from "next/link";
import { Calendar, User, ArrowRight, AlertCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Show alert on page load
    setShowAlert(true);
  }, []);

  const posts = [
    {
      id: 0,
      title: "CHINA 🇨🇳 VISA 2026 - Group Application for April/May 2026 Canton Fair",
      excerpt: "Non-refundable Registration Fee: ₦90k | Submission Ends: March 30, 2026 | 30 Days China Business Sticker Visa with 90 Days Validity",
      date: "January 11, 2026",
      author: "Visa Team",
      category: "URGENT",
      image: "https://images.unsplash.com/photo-1494783367193-149034c05e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      featured: true
    },
    {
      id: 1,
      title: "How to Apply for a Canadian Student Visa in 2025",
      excerpt: "A step-by-step guide to securing your study permit for Canada, including latest requirements and tips for success.",
      date: "May 15, 2025",
      author: "Admin",
      category: "Visa Guide",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
    },
    {
      id: 2,
      title: "Top 5 Destinations for Summer Vacation",
      excerpt: "Looking for the perfect summer getaway? Check out our top picks for 2025, from tropical beaches to cultural city breaks.",
      date: "May 10, 2025",
      author: "Travel Expert",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80"
    },
    {
      id: 3,
      title: "UK Care Worker Visa: Everything You Need to Know",
      excerpt: "The UK health and care worker visa offers a great opportunity for professionals. Learn about eligibility and application process.",
      date: "May 05, 2025",
      author: "Admin",
      category: "Work Visa",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Essential Packing Tips for International Students",
      excerpt: "Moving abroad for studies? Here's a comprehensive checklist of what to pack and what to leave behind.",
      date: "April 28, 2025",
      author: "Student Advisor",
      category: "Study Abroad",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      title: "Understanding the Schengen Visa Application Process",
      excerpt: "Planning a trip to Europe? Don't let the visa process stress you out. Read our guide to navigating the Schengen visa application.",
      date: "April 20, 2025",
      author: "Visa Consultant",
      category: "Visa Guide",
      image: "https://images.unsplash.com/photo-1467269204594-9661b133dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      title: "Why You Should Visit Dubai This Year",
      excerpt: "From the Museum of the Future to the world's deepest pool, discover the new attractions that make Dubai a must-visit.",
      date: "April 15, 2025",
      author: "Travel Expert",
      category: "Destinations",
      image: "https://images.unsplash.com/photo-1512453979798-5ea904acfb5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: 7,
      title: "New E-Visa Updates for 2026",
      excerpt: "Get the latest updates on our expanded e-visa list, including new countries and streamlined application processes for our clients.",
      date: "February 25, 2026",
      author: "Visa Team",
      category: "Visa Update",
      image: "/images/new1.jpeg"
    },
    {
      id: 8,
      title: "Special Travel Packages Now Available",
      excerpt: "Explore our newly launched travel packages designed to give you the best value and experience for your next international trip.",
      date: "February 25, 2026",
      author: "Travel Advisor",
      category: "Special Offer",
      image: "/images/new2.jpeg"
    }
  ];

  return (
    <div className="pb-16">
      {/* Alert Popup */}
      {showAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white">
              <h2 className="text-2xl font-bold text-red-600 flex items-center gap-2">
                <AlertCircle size={28} />
                URGENT: CHINA VISA 2026
              </h2>
              <button
                onClick={() => setShowAlert(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Alert Content */}
            <div className="p-6 text-gray-800 space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                <p className="font-bold text-yellow-800">Group Application for April/May 2026 Canton Fair</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-primary mb-2">📋 Non-Refundable Registration Fee</h3>
                <p className="text-xl font-bold text-red-600">₦90,000</p>
                <p className="text-sm text-red-600 font-semibold">Submission Deadline: March 30, 2026</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-primary mb-2">📄 Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Data page</li>
                  <li>Passport photo</li>
                  <li>Copy of visas (If Available)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-primary mb-2">🏷️ Visa Type</h3>
                <p className="font-semibold">30 Days China Business Sticker Visa</p>
                <p className="text-sm text-gray-600">Validity: 90 Days</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-primary mb-2">⚙️ Procedure</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>E-copies of requirements are sent to us for application</li>
                  <li>Embassy makes a decision on the application in April 2026</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-lg text-primary mb-2">💰 Rate</h3>
                <ul className="space-y-2 text-sm">
                  <li><span className="font-semibold">Balance of ₦600,000</span> - Paid if Visa is approved</li>
                  <li><span className="font-semibold">₦159,000</span> - Visa Fees paid to the Visa center if visa is approved</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
                <h3 className="font-bold text-red-800 mb-2">⚠️ Terms & Conditions</h3>
                <p className="text-sm text-red-800">
                  Please note that Fly Zone Tourism is a visa facilitator and not the embassy. Approvals, Rejections, Delays and Application stuck on the portal are at the discretion of the immigration officer and we cannot be held responsible.
                </p>
              </div>

              <button
                onClick={() => setShowAlert(false)}
                className="w-full mt-6 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Got It, Let me explore
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Travel Updates & Tips</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Stay informed with the latest news on visas, travel destinations, and expert advice.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden border flex flex-col h-full hover:shadow-xl transition-shadow ${
                post.featured 
                  ? 'lg:col-span-3 border-red-600 border-2' 
                  : 'border-gray-100'
              }`}
            >
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${
                  post.featured 
                    ? 'bg-red-600 text-white' 
                    : 'bg-secondary text-primary'
                }`}>
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 mb-3 text-xs">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 hover:text-secondary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                <Link 
                  href={`/blog`} 
                  className="mt-auto flex items-center text-primary font-bold hover:text-secondary transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

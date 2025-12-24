"use client";

import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
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
    }
  ];

  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Travel Updates & Tips</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Stay informed with the latest news on visas, travel destinations, and expert advice.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">
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

"use client";

import Link from "next/link";
import { MapPin, Calendar, CheckCircle } from "lucide-react";

export default function OpportunitiesPage() {
  const opportunities = [
    {
      country: "Canada",
      title: "Skilled Worker Visa",
      type: "Work & Migration",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      deadline: "Open all year",
      eligibility: ["Minimum 1 year work experience", "IELTS required", "Degree or Diploma"],
      description: "Canada is looking for skilled workers in various sectors including IT, Healthcare, and Engineering. Apply for the Express Entry program today."
    },
    {
      country: "United Kingdom",
      title: "Care Worker Visa",
      type: "Work Visa",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      deadline: "Rolling basis",
      eligibility: ["Job offer required", "English proficiency", "Clean criminal record"],
      description: "Opportunities available for care workers in the UK. Get sponsored by approved employers and start your new career in the healthcare sector."
    },
    {
      country: "Australia",
      title: "Study & Work Program",
      type: "Student Visa",
      image: "https://images.unsplash.com/photo-1523482580672-01e6f2eb6056?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      deadline: "July Intake",
      eligibility: ["High School or Bachelor's degree", "Proof of funds", "English test (PTE/IELTS)"],
      description: "Study in top Australian universities with the opportunity to work part-time during studies and full-time during breaks."
    },
    {
      country: "USA",
      title: "Summer Work & Travel",
      type: "Exchange Program",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      deadline: "Apply by March",
      eligibility: ["Current university student", "Age 18-28", "Intermediate English"],
      description: "Experience the American culture while working during your summer break. A perfect opportunity for students to travel and earn."
    },
    {
      country: "Poland",
      title: "Factory Worker Jobs",
      type: "Work Permit",
      image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      deadline: "Urgent",
      eligibility: ["No language requirement", "Physically fit", "Valid passport"],
      description: "Immediate employment opportunities in manufacturing and production factories in Poland. Accommodation often provided."
    },
    {
      country: "Schengen Area",
      title: "Tourist Visa",
      type: "Visit Visa",
      image: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      deadline: "Apply 3 months ahead",
      eligibility: ["Valid passport", "Bank statement", "Travel itinerary"],
      description: "Explore the beauty of Europe with a Schengen visa. Visit multiple countries including France, Germany, Italy, and Spain with a single visa."
    }
  ];

  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Travel Opportunities</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Explore the latest visa and travel opportunities available for you.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
              <div className="relative h-48">
                <img 
                  src={opp.image} 
                  alt={opp.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">
                  {opp.type}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{opp.title}</h3>
                </div>
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <MapPin size={16} className="mr-1" />
                  <span className="mr-4">{opp.country}</span>
                  <Calendar size={16} className="mr-1" />
                  <span>{opp.deadline}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{opp.description}</p>
                
                <div className="mb-6 mt-auto">
                  <h4 className="font-bold text-gray-800 text-sm mb-2">Eligibility:</h4>
                  <ul className="space-y-1">
                    {opp.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-primary text-white font-bold py-2 px-4 rounded hover:bg-blue-900 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

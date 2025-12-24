"use client";

import Link from "next/link";

export default function DestinationsPage() {
  const destinations = [
    {
      country: "Canada",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1411&q=80",
      description: "Experience the stunning landscapes, diverse cities, and welcoming culture of Canada.",
      highlights: ["Niagara Falls", "Banff National Park", "CN Tower", "Old Quebec"]
    },
    {
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "Discover the rich history, royal heritage, and modern vibes of the UK.",
      highlights: ["Big Ben", "London Eye", "Edinburgh Castle", "Stonehenge"]
    },
    {
      country: "Australia",
      image: "https://images.unsplash.com/photo-1523482580672-01e6f2eb6056?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      description: "Explore the outback, beautiful beaches, and vibrant cities down under.",
      highlights: ["Sydney Opera House", "Great Barrier Reef", "Uluru", "Bondi Beach"]
    },
    {
      country: "United States",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      description: "From the Statue of Liberty to the Grand Canyon, the USA has it all.",
      highlights: ["Times Square", "Golden Gate Bridge", "Grand Canyon", "Disney World"]
    },
    {
      country: "France",
      image: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "Indulge in the romance, art, and cuisine of France.",
      highlights: ["Eiffel Tower", "Louvre Museum", "Palace of Versailles", "French Riviera"]
    },
    {
      country: "Dubai (UAE)",
      image: "https://images.unsplash.com/photo-1512453979798-5ea904acfb5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      description: "Witness the luxury, modern architecture, and desert adventures in Dubai.",
      highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall", "Desert Safari"]
    },
    {
      country: "South Africa",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1372&q=80",
      description: "Experience the wild safaris, stunning coastlines, and vibrant culture.",
      highlights: ["Table Mountain", "Kruger National Park", "Cape Winelands", "Robben Island"]
    },
    {
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1404&q=80",
      description: "A melting pot of cultures, futuristic gardens, and world-class shopping.",
      highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Orchard Road"]
    }
  ];

  return (
    <div className="pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Destinations</h1>
        <p className="text-xl max-w-2xl mx-auto px-4">
          Explore the world's most amazing destinations with Royal Jackson Travel And Tours.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg h-96">
              <img 
                src={dest.image} 
                alt={dest.country} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{dest.country}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{dest.description}</p>
                <div className="space-y-1">
                  {dest.highlights.slice(0, 2).map((highlight, idx) => (
                    <span key={idx} className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded mr-2 mb-1">
                      {highlight}
                    </span>
                  ))}
                  {dest.highlights.length > 2 && (
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded mb-1">
                      +{dest.highlights.length - 2} more
                    </span>
                  )}
                </div>
                <Link 
                  href="/contact" 
                  className="mt-4 block w-full text-center bg-secondary text-primary font-bold py-2 rounded hover:bg-yellow-400 transition-colors"
                >
                  Plan Trip
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const culturalTours = [
  {
    title: "Traditional Tea Ceremony",
    location: "Kyoto, Japan",
    duration: "3 hours",
    groupSize: "Small (2-6 people)",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop",
    description:
      "Learn the ancient art of Japanese tea ceremony in an authentic tea house.",
    includes: [
      "Tea ceremony demonstration",
      "Traditional sweets",
      "Kimono wearing experience",
      "Photo opportunities",
    ],
    price: "From $89",
  },
  {
    title: "Tuscan Cooking Class",
    location: "Florence, Italy",
    duration: "6 hours",
    groupSize: "Medium (6-12 people)",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2940&auto=format&fit=crop",
    description:
      "Master the art of Italian cooking with local chefs in a historic villa.",
    includes: [
      "Market visit",
      "Hands-on cooking",
      "Wine pairing",
      "Recipe booklet",
    ],
    price: "From $149",
  },
  {
    title: "Flamenco Experience",
    location: "Seville, Spain",
    duration: "4 hours",
    groupSize: "Medium (8-15 people)",
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=2959&auto=format&fit=crop",
    description:
      "Immerse yourself in the passionate world of flamenco dance and music.",
    includes: [
      "Dance workshop",
      "Live performance",
      "Traditional tapas",
      "Historical overview",
    ],
    price: "From $129",
  },
  {
    title: "Ancient Temple Tour",
    location: "Siem Reap, Cambodia",
    duration: "Full day",
    groupSize: "Small (4-8 people)",
    image:
      "https://images.unsplash.com/photo-1559629819-638a8f0a4303?q=80&w=2940&auto=format&fit=crop",
    description:
      "Explore the magnificent temples of Angkor with expert guides.",
    includes: [
      "Expert guide",
      "Temple passes",
      "Sunrise viewing",
      "Local lunch",
    ],
    price: "From $199",
  },
];

export default function CulturalTours() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cultural Tours & Experiences
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Immerse yourself in authentic local traditions and create meaningful
            connections with cultures around the world.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {culturalTours.map((tour, index) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30">
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tour.groupSize}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{tour.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {tour.description}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-blue-600">
                    {tour.price}
                  </p>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      {tour.location}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      {tour.duration}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">What&apos;s Included:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {tour.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Experience
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cultural Sensitivity Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8"
        >
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-purple-500 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Cultural Sensitivity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our cultural experiences are designed with respect and
                authenticity in mind. We work closely with local communities to
                ensure our tours provide genuine insights while preserving and
                honoring local traditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

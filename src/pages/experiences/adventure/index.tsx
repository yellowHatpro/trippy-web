import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const adventures = [
  {
    title: "Mountain Trekking",
    location: "Swiss Alps",
    duration: "7 days",
    difficulty: "Moderate",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2942&auto=format&fit=crop",
    description:
      "Trek through stunning Alpine landscapes and picturesque mountain villages.",
    highlights: [
      "Professional mountain guides",
      "Equipment provided",
      "Mountain hut stays",
      "Stunning views",
    ],
    price: "From $1,499",
  },
  {
    title: "Desert Safari",
    location: "Sahara Desert",
    duration: "5 days",
    difficulty: "Moderate",
    image:
      "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?q=80&w=2832&auto=format&fit=crop",
    description: "Experience the magic of the desert under countless stars.",
    highlights: [
      "Camel trekking",
      "Desert camping",
      "Traditional meals",
      "Sandboarding",
    ],
    price: "From $999",
  },
  {
    title: "White Water Rafting",
    location: "Colorado River",
    duration: "3 days",
    difficulty: "Challenging",
    image:
      "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=2940&auto=format&fit=crop",
    description: "Navigate through thrilling rapids in the Grand Canyon.",
    highlights: [
      "Expert rafting guides",
      "Safety equipment",
      "Riverside camping",
      "Canyon exploration",
    ],
    price: "From $799",
  },
  {
    title: "Rock Climbing",
    location: "Yosemite",
    duration: "4 days",
    difficulty: "Challenging",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2943&auto=format&fit=crop",
    description: "Scale iconic rock faces with experienced climbers.",
    highlights: [
      "All gear included",
      "Safety training",
      "Various difficulty levels",
      "Stunning views",
    ],
    price: "From $899",
  },
];

export default function AdventureTours() {
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
            Adventure Tours
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Push your limits and discover the thrill of adventure in some of the
            world&apos;s most spectacular locations.
          </p>
        </motion.div>

        {/* Adventure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adventures.map((adventure, index) => (
            <motion.div
              key={adventure.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={adventure.image}
                  alt={adventure.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30">
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {adventure.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {adventure.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {adventure.description}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-blue-600">
                    {adventure.price}
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
                      {adventure.location}
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
                      {adventure.duration}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Highlights:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {adventure.highlights.map((highlight) => (
                      <li
                        key={highlight}
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
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Adventure
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-8"
        >
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-yellow-500 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All our adventure tours are led by certified guides and include
                comprehensive safety briefings and equipment. Participants
                should be in good physical condition and follow all safety
                guidelines.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

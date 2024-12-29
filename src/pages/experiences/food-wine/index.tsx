import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const foodWineExperiences = [
  {
    title: "Wine Tasting in Bordeaux",
    location: "Bordeaux, France",
    duration: "Full day",
    type: "Wine Tour",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2940&auto=format&fit=crop",
    description:
      "Explore prestigious châteaux and taste world-renowned wines in the heart of French wine country.",
    highlights: [
      "Visit to 3 châteaux",
      "Professional sommelier",
      "Wine tasting workshop",
      "Gourmet lunch",
    ],
    price: "From $299",
  },
  {
    title: "Pasta Making in Bologna",
    location: "Bologna, Italy",
    duration: "4 hours",
    type: "Cooking Class",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2940&auto=format&fit=crop",
    description:
      "Learn the art of pasta making from local nonnas in the gastronomic capital of Italy.",
    highlights: [
      "Traditional techniques",
      "3 pasta varieties",
      "Local wine pairing",
      "Recipe booklet",
    ],
    price: "From $159",
  },
  {
    title: "Tapas Tour in Barcelona",
    location: "Barcelona, Spain",
    duration: "3 hours",
    type: "Food Tour",
    image:
      "https://images.unsplash.com/photo-1593252725-6e7f36d64566?q=80&w=2940&auto=format&fit=crop",
    description:
      "Discover the best tapas bars in Barcelona's historic neighborhoods.",
    highlights: [
      "6 tapas stops",
      "Local guide",
      "Wine and cava",
      "Cultural insights",
    ],
    price: "From $129",
  },
  {
    title: "Sake Brewery Tour",
    location: "Kyoto, Japan",
    duration: "Half day",
    type: "Brewery Tour",
    image:
      "https://images.unsplash.com/photo-1622921491193-345c3f4cdb46?q=80&w=2940&auto=format&fit=crop",
    description:
      "Visit traditional sake breweries and learn about Japan's national drink.",
    highlights: [
      "Brewery tour",
      "Sake tasting",
      "Traditional snacks",
      "Expert guide",
    ],
    price: "From $179",
  },
];

export default function FoodWine() {
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
            Food & Wine Experiences
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Savor the world&apos;s finest cuisines and wines through immersive
            culinary experiences led by local experts.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {foodWineExperiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30">
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {experience.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {experience.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {experience.description}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-blue-600">
                    {experience.price}
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
                      {experience.location}
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
                      {experience.duration}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Experience Highlights:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {experience.highlights.map((highlight) => (
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
                  Book Experience
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Dietary Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-8"
        >
          <div className="flex items-start space-x-4">
            <svg
              className="w-6 h-6 text-orange-500 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Dietary Requirements
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We accommodate all dietary requirements including vegetarian,
                vegan, gluten-free, and allergies. Please inform us of any
                special requirements when booking your experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

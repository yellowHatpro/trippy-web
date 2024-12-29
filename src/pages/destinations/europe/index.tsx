import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const europeanDestinations = [
  {
    country: "Italy",
    destinations: [
      {
        city: "Rome",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2940&auto=format&fit=crop",
        description: "Explore ancient history in the Eternal City.",
        highlights: [
          "Colosseum",
          "Vatican Museums",
          "Roman Forum",
          "Trevi Fountain",
        ],
        href: "/destinations/europe/italy/rome",
      },
      {
        city: "Venice",
        image:
          "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2940&auto=format&fit=crop",
        description: "Experience the magic of floating city canals.",
        highlights: [
          "St. Mark's Basilica",
          "Grand Canal",
          "Rialto Bridge",
          "Doge's Palace",
        ],
        href: "/destinations/europe/italy/venice",
      },
    ],
  },
  {
    country: "France",
    destinations: [
      {
        city: "Paris",
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2946&auto=format&fit=crop",
        description: "Immerse yourself in art, culture, and romance.",
        highlights: [
          "Eiffel Tower",
          "Louvre Museum",
          "Notre-Dame",
          "Champs-Élysées",
        ],
        href: "/destinations/europe/france/paris",
      },
      {
        city: "Nice",
        image:
          "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=2940&auto=format&fit=crop",
        description: "Relax on the French Riviera's stunning coastline.",
        highlights: [
          "Promenade des Anglais",
          "Old Town",
          "Castle Hill",
          "Mediterranean Beaches",
        ],
        href: "/destinations/europe/france/nice",
      },
    ],
  },
  {
    country: "Spain",
    destinations: [
      {
        city: "Barcelona",
        image:
          "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2940&auto=format&fit=crop",
        description: "Discover unique architecture and vibrant culture.",
        highlights: [
          "Sagrada Familia",
          "Park Güell",
          "Las Ramblas",
          "Gothic Quarter",
        ],
        href: "/destinations/europe/spain/barcelona",
      },
      {
        city: "Seville",
        image:
          "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?q=80&w=2940&auto=format&fit=crop",
        description: "Experience the heart of Andalusian culture.",
        highlights: [
          "Royal Alcázar",
          "Plaza de España",
          "Giralda",
          "Flamenco Shows",
        ],
        href: "/destinations/europe/spain/seville",
      },
    ],
  },
];

export default function Europe() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Europe
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From ancient ruins to modern cities, explore the diverse
            destinations and rich cultural heritage of Europe.
          </p>
        </motion.div>

        {europeanDestinations.map((country, countryIndex) => (
          <div key={country.country} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: countryIndex * 0.1 }}
              className="text-3xl font-bold mb-8 border-b pb-2"
            >
              {country.country}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {country.destinations.map((destination, destIndex) => (
                <motion.div
                  key={destination.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (countryIndex + destIndex) * 0.1,
                  }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
                >
                  <Link href={destination.href} className="block">
                    <div className="relative h-64">
                      <Image
                        src={destination.image}
                        alt={destination.city}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {destination.city}
                        </h3>
                        <p className="text-gray-100">
                          {destination.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold mb-3">Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Travel Tips Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Travel Tips for Europe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-blue-500 mt-1"
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
              <div>
                <h3 className="font-semibold mb-1">Best Time to Visit</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  April-June or September-October for mild weather and fewer
                  crowds
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-blue-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Currency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Euro (€) in most countries, with some exceptions
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-blue-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Transportation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Extensive train network and budget airlines available
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-blue-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Travel Insurance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Recommended for all European travel
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

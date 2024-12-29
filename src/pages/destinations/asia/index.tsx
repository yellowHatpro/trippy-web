import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const asianDestinations = [
  {
    country: "Japan",
    destinations: [
      {
        city: "Kyoto",
        image:
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop",
        description:
          "Experience ancient temples and traditional Japanese culture.",
        highlights: [
          "Fushimi Inari Shrine",
          "Kinkaku-ji",
          "Arashiyama Bamboo Grove",
          "Gion District",
        ],
        href: "/destinations/asia/japan/kyoto",
      },
      {
        city: "Tokyo",
        image:
          "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2940&auto=format&fit=crop",
        description:
          "Explore the perfect blend of modern technology and tradition.",
        highlights: [
          "Shibuya Crossing",
          "Senso-ji Temple",
          "Tokyo Skytree",
          "Tsukiji Market",
        ],
        href: "/destinations/asia/japan/tokyo",
      },
    ],
  },
  {
    country: "Thailand",
    destinations: [
      {
        city: "Bangkok",
        image:
          "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2940&auto=format&fit=crop",
        description: "Discover vibrant street life and ornate temples.",
        highlights: [
          "Grand Palace",
          "Wat Arun",
          "Chatuchak Market",
          "Khao San Road",
        ],
        href: "/destinations/asia/thailand/bangkok",
      },
      {
        city: "Phuket",
        image:
          "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2940&auto=format&fit=crop",
        description: "Relax on pristine beaches and explore tropical islands.",
        highlights: [
          "Phi Phi Islands",
          "Old Town",
          "Big Buddha",
          "Phang Nga Bay",
        ],
        href: "/destinations/asia/thailand/phuket",
      },
    ],
  },
  {
    country: "Vietnam",
    destinations: [
      {
        city: "Hanoi",
        image:
          "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?q=80&w=2944&auto=format&fit=crop",
        description: "Experience the charm of Vietnam's historic capital.",
        highlights: [
          "Hoàn Kiếm Lake",
          "Old Quarter",
          "Temple of Literature",
          "Water Puppet Theater",
        ],
        href: "/destinations/asia/vietnam/hanoi",
      },
      {
        city: "Ha Long Bay",
        image:
          "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2940&auto=format&fit=crop",
        description: "Cruise through limestone karsts in emerald waters.",
        highlights: [
          "Overnight Cruises",
          "Cave Exploration",
          "Kayaking",
          "Floating Villages",
        ],
        href: "/destinations/asia/vietnam/halong-bay",
      },
    ],
  },
];

export default function Asia() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Asia</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover the perfect harmony of ancient traditions and modern
            wonders across Asia&apos;s most captivating destinations.
          </p>
        </motion.div>

        {asianDestinations.map((country, countryIndex) => (
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
          <h2 className="text-2xl font-bold mb-4">Travel Tips for Asia</h2>
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
                  November to March for most regions (varies by country)
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
                <h3 className="font-semibold mb-1">Local Currency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Varies by country, carry cash and cards
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Cultural Etiquette</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Respect local customs and dress codes
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
                <h3 className="font-semibold mb-1">Health & Safety</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Check vaccinations and travel advisories
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

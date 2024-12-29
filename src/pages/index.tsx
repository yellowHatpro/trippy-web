import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
            Explore breathtaking destinations, create unforgettable memories,
            and experience the world like never before.
          </p>
          <Link
            href="/destinations"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Exploring
          </Link>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <section className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={destination.href}>
                  <div className="relative h-80 mb-4 rounded-2xl overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {destination.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const featuredDestinations = [
  {
    title: "Santorini, Greece",
    description:
      "Experience the stunning sunsets and white-washed buildings of this Mediterranean paradise.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2940&auto=format&fit=crop",
    href: "/destinations/europe/greece/santorini",
  },
  {
    title: "Kyoto, Japan",
    description:
      "Immerse yourself in ancient temples, traditional gardens, and Japanese culture.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop",
    href: "/destinations/asia/japan/kyoto",
  },
  {
    title: "Machu Picchu, Peru",
    description:
      "Discover the ancient Incan citadel set high in the Andes Mountains.",
    image:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2940&auto=format&fit=crop",
    href: "/destinations/americas/peru/machu-picchu",
  },
];

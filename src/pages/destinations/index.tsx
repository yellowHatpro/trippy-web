import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const regions = [
  {
    name: "Europe",
    image:
      "https://images.unsplash.com/photo-1471874276752-65e2d717604a?q=80&w=2940&auto=format&fit=crop",
    description:
      "From ancient cities to stunning landscapes, discover the diverse cultures of Europe.",
    href: "/destinations/europe",
  },
  {
    name: "Asia",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2940&auto=format&fit=crop",
    description:
      "Experience the perfect blend of tradition and modernity across Asian destinations.",
    href: "/destinations/asia",
  },
  {
    name: "Americas",
    image:
      "https://images.unsplash.com/photo-1461863109726-246fa9598dc3?q=80&w=2948&auto=format&fit=crop",
    description: "Explore diverse landscapes from the Arctic to Patagonia.",
    href: "/destinations/americas",
  },
  {
    name: "Africa",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2832&auto=format&fit=crop",
    description:
      "Discover incredible wildlife and rich cultural heritage across the African continent.",
    href: "/destinations/africa",
  },
];

export default function Destinations() {
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
            Explore the World
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose your next destination from our carefully curated selection of
            world regions. Each offering unique experiences and unforgettable
            memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={region.href} className="group block">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {region.name}
                      </h2>
                      <p className="text-gray-200">{region.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

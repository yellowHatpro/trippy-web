import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const planningOptions = [
  {
    title: "Custom Trip",
    description: "Design your perfect journey with our expert travel planners.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2940&auto=format&fit=crop",
    href: "/plan/custom-trip",
    features: [
      "Personalized Itineraries",
      "Local Expert Guidance",
      "Flexible Scheduling",
      "24/7 Support",
    ],
  },
  {
    title: "Group Travel",
    description:
      "Join like-minded travelers on expertly curated group adventures.",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2940&auto=format&fit=crop",
    href: "/plan/group-travel",
    features: [
      "Expert Tour Leaders",
      "Small Groups",
      "Shared Experiences",
      "Great Value",
    ],
  },
  {
    title: "Honeymoon",
    description:
      "Start your journey together with a romantic and memorable trip.",
    image:
      "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=2875&auto=format&fit=crop",
    href: "/plan/honeymoon",
    features: [
      "Romantic Settings",
      "Luxury Accommodations",
      "Special Moments",
      "Couple Activities",
    ],
  },
  {
    title: "Luxury Travel",
    description:
      "Experience the finest accommodations and exclusive experiences.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop",
    href: "/plan/luxury",
    features: [
      "5-Star Hotels",
      "Private Tours",
      "VIP Access",
      "Premium Service",
    ],
  },
];

export default function Plan() {
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
            Plan Your Perfect Trip
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you&apos;re planning a solo adventure, romantic getaway, or
            group expedition, we have the perfect travel solution for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {planningOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
            >
              <Link href={option.href} className="block">
                <div className="relative h-64">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {option.title}
                    </h2>
                    <p className="text-gray-100">{option.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-4">Key Features:</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg mb-4">Need help planning your trip?</p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Our Travel Experts
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

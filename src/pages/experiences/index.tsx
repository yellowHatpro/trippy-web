import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Adventure Tours",
    description:
      "Push your limits with thrilling outdoor activities and adventures.",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop",
    href: "/experiences/adventure",
    activities: ["Hiking", "Rock Climbing", "White Water Rafting", "Skydiving"],
  },
  {
    title: "Cultural Tours",
    description:
      "Immerse yourself in local traditions and authentic cultural experiences.",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2940&auto=format&fit=crop",
    href: "/experiences/cultural",
    activities: [
      "Local Workshops",
      "Traditional Ceremonies",
      "Art & Craft",
      "Historical Tours",
    ],
  },
  {
    title: "Food & Wine",
    description:
      "Savor local cuisines and discover the world through its flavors.",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2944&auto=format&fit=crop",
    href: "/experiences/food-wine",
    activities: [
      "Wine Tasting",
      "Cooking Classes",
      "Food Tours",
      "Farm Visits",
    ],
  },
  {
    title: "Wellness Retreats",
    description: "Rejuvenate your mind, body, and soul in serene settings.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop",
    href: "/experiences/wellness",
    activities: ["Yoga", "Meditation", "Spa Treatments", "Holistic Healing"],
  },
];

export default function Experiences() {
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
            Unforgettable Experiences
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose from our curated selection of unique experiences designed to
            create lasting memories and deeper connections with the places you
            visit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <Link href={experience.href}>
                <div className="relative h-64">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">
                    {experience.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description}
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Popular Activities:</h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.activities.map((activity) => (
                        <span
                          key={activity}
                          className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
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

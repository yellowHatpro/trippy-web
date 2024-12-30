import { NextApiRequest, NextApiResponse } from "next";
import { ExperienceCategory } from "@/types";

// This would typically come from a database
const experienceData: Record<string, ExperienceCategory> = {
  adventure: {
    title: "Adventure Tours",
    description:
      "Push your limits and discover the thrill of adventure in some of the world's most spectacular locations.",
    image:
      "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?q=80&w=2940&auto=format&fit=crop",
    experiences: [
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
        description:
          "Experience the magic of the desert under countless stars.",
        highlights: [
          "Camel trekking",
          "Desert camping",
          "Traditional meals",
          "Sandboarding",
        ],
        price: "From $999",
      },
    ],
  },
  cultural: {
    title: "Cultural Tours",
    description:
      "Immerse yourself in authentic local traditions and create meaningful connections with cultures around the world.",
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2940&auto=format&fit=crop",
    experiences: [
      {
        title: "Traditional Tea Ceremony",
        location: "Kyoto, Japan",
        duration: "3 hours",
        difficulty: "Easy",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop",
        description:
          "Learn the ancient art of Japanese tea ceremony in an authentic tea house.",
        highlights: [
          "Tea ceremony demonstration",
          "Traditional sweets",
          "Kimono wearing",
          "Photo opportunities",
        ],
        price: "From $89",
      },
      {
        title: "Ancient Temple Tour",
        location: "Siem Reap, Cambodia",
        duration: "Full day",
        difficulty: "Moderate",
        image:
          "https://images.unsplash.com/photo-1559629819-638a8f0a4303?q=80&w=2940&auto=format&fit=crop",
        description:
          "Explore the magnificent temples of Angkor with expert guides.",
        highlights: [
          "Expert guide",
          "Temple passes",
          "Sunrise viewing",
          "Local lunch",
        ],
        price: "From $199",
      },
    ],
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExperienceCategory | { error: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { category } = req.query;
  const categoryData = experienceData[category as string];

  if (!categoryData) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.status(200).json(categoryData);
}

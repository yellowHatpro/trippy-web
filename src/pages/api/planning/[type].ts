import { NextApiRequest, NextApiResponse } from "next";
import { PlanningOption } from "@/types";

// This would typically come from a database
const planningData: Record<string, PlanningOption> = {
  "custom-trip": {
    title: "Custom Trip Planning",
    description: "Design your perfect journey with our expert travel planners.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2940&auto=format&fit=crop",
    features: [
      {
        title: "Personalized Itineraries",
        description: "Tailored to your interests, pace, and style of travel.",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      },
      {
        title: "Local Expert Guidance",
        description:
          "Access to our network of local experts and insider knowledge.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock assistance throughout your journey.",
        icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
      },
    ],
    process: [
      "Initial Consultation",
      "Itinerary Design",
      "Refinement & Booking",
      "Travel Support",
    ],
  },
  "group-travel": {
    title: "Group Travel",
    description:
      "Join like-minded travelers on expertly curated group adventures.",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2940&auto=format&fit=crop",
    features: [
      {
        title: "Expert Tour Leaders",
        description: "Experienced guides who know the destination inside out.",
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      },
      {
        title: "Small Groups",
        description:
          "Intimate group sizes for better experiences and connections.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      },
      {
        title: "Great Value",
        description: "Competitive pricing and included experiences.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
    ],
    process: [
      "Choose Your Trip",
      "Book & Prepare",
      "Meet Your Group",
      "Share Adventures",
    ],
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlanningOption | { error: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { type } = req.query;
  const planData = planningData[type as string];

  if (!planData) {
    return res.status(404).json({ error: "Planning type not found" });
  }

  res.status(200).json(planData);
}

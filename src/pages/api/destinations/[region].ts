import { NextApiRequest, NextApiResponse } from "next";
import { Region } from "@/types";

// This would typically come from a database
const destinationData: Record<string, Region> = {
  europe: {
    title: "Europe",
    description:
      "From ancient cities to stunning landscapes, discover the diverse cultures of Europe.",
    image:
      "https://images.unsplash.com/photo-1471874276752-65e2d717604a?q=80&w=2940&auto=format&fit=crop",
    countries: [
      {
        name: "Italy",
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
          },
        ],
      },
    ],
  },
  asia: {
    title: "Asia",
    description:
      "Experience the perfect blend of tradition and modernity across Asian destinations.",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2940&auto=format&fit=crop",
    countries: [
      {
        name: "Japan",
        destinations: [
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
          },
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
          },
        ],
      },
    ],
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Region | { error: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { region } = req.query;
  const regionData = destinationData[region as string];

  if (!regionData) {
    return res.status(404).json({ error: "Region not found" });
  }

  res.status(200).json(regionData);
}

import { Region, ExperienceCategory, PlanningOption } from "@/types";

const API_BASE_URL = "/api";

export async function fetchDestination(region: string): Promise<Region> {
  const response = await fetch(`${API_BASE_URL}/destinations/${region}`);
  if (!response.ok) {
    throw new Error("Failed to fetch destination data");
  }
  return response.json();
}

export async function fetchExperience(
  category: string
): Promise<ExperienceCategory> {
  const response = await fetch(`${API_BASE_URL}/experiences/${category}`);
  if (!response.ok) {
    throw new Error("Failed to fetch experience data");
  }
  return response.json();
}

export async function fetchPlanningOption(
  type: string
): Promise<PlanningOption> {
  const response = await fetch(`${API_BASE_URL}/planning/${type}`);
  if (!response.ok) {
    throw new Error("Failed to fetch planning data");
  }
  return response.json();
}

// Helper function to handle API errors
export function handleApiError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
}

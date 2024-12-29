import { GetServerSideProps } from "next";
import { ExperienceCategory } from "@/types";
import { fetchExperience, handleApiError } from "@/lib/api";
import Image from "next/image";

interface Props {
  category: ExperienceCategory;
  error?: string;
}

export default function ExperiencePage({ category, error }: Props) {
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{category.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{category.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.experiences.map((experience) => (
          <div
            key={experience.title}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {experience.title}
              </h2>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold">Location:</span>{" "}
                  {experience.location}
                </div>
                <div>
                  <span className="font-semibold">Duration:</span>{" "}
                  {experience.duration}
                </div>
                {experience.difficulty && (
                  <div>
                    <span className="font-semibold">Difficulty:</span>{" "}
                    {experience.difficulty}
                  </div>
                )}
                <div>
                  <span className="font-semibold">Price:</span>{" "}
                  {experience.price}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Highlights:</h3>
                  <ul className="list-disc list-inside">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-600">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  try {
    const category = await fetchExperience(params?.slug as string);
    return {
      props: {
        category,
      },
    };
  } catch (error) {
    return {
      props: {
        category: {} as ExperienceCategory,
        error: handleApiError(error),
      },
    };
  }
};

import { GetServerSideProps } from "next";
import { PlanningOption } from "@/types";
import { fetchPlanningOption, handleApiError } from "@/lib/api";
import Image from "next/image";

interface Props {
  planningOption: PlanningOption;
  error?: string;
}

export default function PlanningPage({ planningOption, error }: Props) {
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">{planningOption.title}</h1>
          <p className="text-lg text-gray-600">{planningOption.description}</p>
        </div>

        <div className="relative h-64 rounded-lg overflow-hidden mb-12">
          <Image
            src={planningOption.image}
            alt={planningOption.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {planningOption.features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Planning Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planningOption.process.map((step, index) => (
              <div key={step} className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Start Planning
          </button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  try {
    const planningOption = await fetchPlanningOption(params?.slug as string);
    return {
      props: {
        planningOption,
      },
    };
  } catch (error) {
    return {
      props: {
        planningOption: {} as PlanningOption,
        error: handleApiError(error),
      },
    };
  }
};

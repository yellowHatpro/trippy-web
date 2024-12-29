import { GetServerSideProps } from "next";
import { Region } from "@/types";
import { fetchDestination, handleApiError } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

interface Props {
  region: Region;
  error?: string;
}

export default function DestinationPage({ region, error }: Props) {
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
      <h1 className="text-4xl font-bold mb-6">{region.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{region.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {region.countries.map((country) => (
          <div
            key={country.name}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              <Image
                src={country.image}
                alt={country.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{country.name}</h2>
              <p className="text-gray-600 mb-4">{country.description}</p>
              <div className="space-y-2">
                <h3 className="font-semibold">Popular Destinations:</h3>
                <ul className="list-disc list-inside">
                  {country.destinations.map((destination) => (
                    <li key={destination.city}>
                      <Link
                        href={destination.href}
                        className="text-primary hover:underline"
                      >
                        {destination.city}
                      </Link>
                    </li>
                  ))}
                </ul>
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
    const region = await fetchDestination(params?.slug as string);
    return {
      props: {
        region,
      },
    };
  } catch (error) {
    return {
      props: {
        region: {} as Region,
        error: handleApiError(error),
      },
    };
  }
};

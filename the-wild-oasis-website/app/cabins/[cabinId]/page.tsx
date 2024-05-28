import Image from "next/image";

import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

import { CabinIdProps, CabinInterface } from "@/app/_components/types";
import TextExpander from "@/app/_components/TextExpander";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

export async function generateMetadata({ params }: CabinIdProps) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin: any) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function CabinId({ params }: CabinIdProps) {
  const cabin = await getCabin(params.cabinId);

  const {
    id,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  }: CabinInterface = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}

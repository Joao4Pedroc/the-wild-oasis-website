import { Cabin } from "@/app/_components/types";
import CabinCard from "../_components/CabinCard";

export const metadata = {
  title: "Cabins",
};

export default function Cabins() {
  const cabins: Cabin[] = [];
  return (
    <div>
      <h1 className="text-4xl text-accent-400 font-medium mb-5">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountai views, spendig your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beuty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin: Cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

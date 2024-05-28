import { CabinInterface } from "@/app/_components/types";
import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";

async function CabinList({ filter }: any) {
  const cabins: CabinInterface[] = await getCabins();

  if (!cabins.length) return null;

  let displayedCabin: CabinInterface[] = [];
  if (filter === "all") displayedCabin = cabins;
  if (filter === "small")
    displayedCabin = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabin = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayedCabin = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabin.map((cabin: CabinInterface) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;

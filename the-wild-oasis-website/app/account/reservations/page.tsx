import ReservationCard from "@/app/_components/ReservationsCard";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default function Reservations() {
  const bookings = [];
  return (
    <div>
      <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet! Check out our{" "}
          <Link className="text-accent-400 underline" href="/cabins">
            Luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";
// redo design on big screens

export default function Home() {
  return (
    <main>
      <Image
        src={bg}
        fill
        className="object-cover"
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 tracking-tight font-normal mb-10">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="text-lg py-6 bg-accent-500 px-8 font-semibold hover:bg-accent-600 transition-all text-primary-800"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}

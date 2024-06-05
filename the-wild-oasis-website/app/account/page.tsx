import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Account() {
  const session = await auth();
  return (
    <div>
      <h2 className="font-semibold text-accent-400 mb-7">
        Welcome {session?.user?.name?.split(" ").at(0)}
      </h2>
    </div>
  );
}

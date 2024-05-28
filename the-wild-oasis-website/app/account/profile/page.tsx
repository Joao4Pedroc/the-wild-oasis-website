import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = { title: "Update profile" };

export default function Page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          className="text-primary-800 shadow-sm w-full rounded-sm px-5 py-3 bg-primary-200"
          name="nationality"
          id="nationality"
          defaultCountry="nationality"
        />
      </UpdateProfileForm>
    </div>
  );
}

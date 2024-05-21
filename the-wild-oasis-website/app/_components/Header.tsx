import Navigation from "@/app/_components/Navigations";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

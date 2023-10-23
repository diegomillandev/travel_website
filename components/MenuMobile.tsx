import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";

type menuMobileProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

const MenuMobile = ({ isMenuOpen, setIsMenuOpen }: menuMobileProps) => {
  return (
    <div
      className={`fixed z-50 top-0 w-2/3 ${
        !isMenuOpen ? "-left-full" : "left-0 transition-transform duration-300"
      } h-full bg-white px-1 pt-8 shadow-2xl`}
    >
      <nav className="flex flex-col gap-4 relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-3 bg-gray-50 px-4 p-2 rounded-full text-white hover:bg-gray-90"
        >
          X
        </button>
        <ul className="flex flex-col h-full mt-16 gap-8">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-2">
          <Button
            type="button"
            title={"Login"}
            icon={"/user.svg"}
            variant={"btn_dark_green"}
          />
        </div>
      </nav>
    </div>
  );
};

export default MenuMobile;

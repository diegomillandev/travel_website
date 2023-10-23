"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import MenuMobile from "./MenuMobile";
import { use, useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [isMenuOpen]);

  return (
    <>
      <header className="flexBetween max-container padding-container relative z-10 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <nav>
          <ul className="hidden lg:flex h-full gap-16">
            {NAV_LINKS.map((link) => (
              <li
                key={link.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-15 transition-all hover:font-bold"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title={"Login"}
            icon={"/user.svg"}
            variant={"btn_dark_green"}
          />
        </div>

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flexCenter cursor-pointer"
        >
          <Image src="/menu.svg" alt="menu" width={24} height={24} />
        </div>
      </header>
      {isMenuOpen && (
        <MenuMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </>
  );
};

export default Navbar;

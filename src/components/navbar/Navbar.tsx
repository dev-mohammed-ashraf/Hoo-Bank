"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const lastScrollY = useRef(0);
  const [navBarWidth, setNavBarWidth] = useState("full");

  const controlNavbar = () => {
    if (window.scrollY == 0) {
      setNavBarWidth("full");
      console.log("full");
    } else {
      setNavBarWidth("");
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] px-8 py-7 ${
          navBarWidth == "full"
            ? ""
            : "md:!w-[65%] !py-4 after:border-b after:md:border after:border-lightBlue after:border-t-white/30 after:bg-white/30 after:backdrop-blur-md after:rounded-br-md after:rounded-bl-md"
        } fixed z-10 top-0 left-1/2 -translate-x-1/2 shadow-md transition-[width,padding] duration-300 flex items-center justify-between
        after:content-[''] after:fixed after:-z-5 after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-full `}
      >
        <Link href="/">
          <Image
            src={"/assets/logo.svg"}
            alt="Logo"
            width={150}
            height={150}
            suppressHydrationWarning
          />
        </Link>

        <NavLinks />
      </nav>
    </>
  );
}

export default Navbar;

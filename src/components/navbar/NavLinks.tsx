"use client";

import Link from "next/link";
import { AlignJustify, X } from "@deemlol/next-icons";
import { useEffect, useState } from "react";

function NavLinks() {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowLinks(false);
    });
  }, []);

  function handleSwitch() {
    setShowLinks((prev) => !prev);
  }

  return (
    <div className="flex">
      <ul
        className={`capitalize block md:flex md:items-center gap-12 container md:px-0 md:w-full fixed z-10 md:relative top-[97px] md:top-0  ${
          !showLinks
            ? "left-full"
            : "left-1/2 -translate-x-1/2 md:translate-x-0"
        } md:left-0 duration-200`}
      >
        {["home", "about", "features", "partners"].map((li, i) => (
          <Link key={i} href={`/${li}`}>
            <li
              onClick={handleSwitch}
              className="bg-white/30 backdrop-blur-md md:bg-transparent md:backdrop-blur-none text-dimWhite hover:text-white duration-200 w-full text-center border-b border-b-lightBlue md:border-none py-4 text-sm md:text-base"
            >
              {li}
            </li>
          </Link>
        ))}
      </ul>

      <button onClick={handleSwitch} className="md:hidden">
        {showLinks ? <X size={28} /> : <AlignJustify size={28} />}
      </button>
    </div>
  );
}

export default NavLinks;

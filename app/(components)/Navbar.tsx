"use client";

import Link from "next/link";
import common from "../(utils)/common";

const Navbar = () => {
  return (
    <nav className="sticky grid grid-cols-3 top-0 z-40 text-center py-3 backdrop-blur-md bg-black/50">
      <div className="col-span-1 ml-3 text-lg flex font-black items-center text-left">
        <Link href={"/"}>Hafizuddin Sharif</Link>
      </div>
      <div className="col-span-2 flex justify-around items-center text-right">
        <Link href="#whyMe" onClick={(e) => common.scrollToSection(e, "whyMe")}>
          Why me?
        </Link>
        <Link href="#pastProjects" onClick={(e) => common.scrollToSection(e, "pastProjects")}>
          Projects
        </Link>
        <Link href="#contact" onClick={(e) => common.scrollToSection(e, "contact")}>
          Contact me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import common from "../(utils)/common";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-40 py-3 backdrop-blur-md bg-black/50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-black">
            <Link href={"/"}>Hafizuddin Sharif</Link>
          </div>

          {/* Hamburger button for mobile */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
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
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 py-4">
            <Link
              href="#whyMe"
              onClick={(e) => {
                common.scrollToSection(e, "whyMe");
                setMobileMenuOpen(false);
              }}
              className="block py-2"
            >
              Why me?
            </Link>
            <Link
              href="#pastProjects"
              onClick={(e) => {
                common.scrollToSection(e, "pastProjects");
                setMobileMenuOpen(false);
              }}
              className="block py-2"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                common.scrollToSection(e, "contact");
                setMobileMenuOpen(false);
              }}
              className="block py-2"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

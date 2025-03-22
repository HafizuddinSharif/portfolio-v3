"use client";

import ReasonOneDiagram from "./(components)/ReasonOneDiagram";
import CleanCode from "./(components)/CleanCode";
import MessyCode from "./(components)/MessyCode";
import ReasonThreeDiagram from "./(components)/ReasonThreeDiagram";
import Project from "./(components)/Project";
import NextPic from "../public/kerisik_banner.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import Link from "next/link";
import common from "./(utils)/common";

export default function Home() {
  const Boxes = () => {
    return (
      <div className=" grid grid-cols-10 border-y border-y-lightGrey">
        <div className=" border-r border-r-lightGrey h-10"></div>
        <div className=" border-r border-r-lightGrey h-10"></div>
        <div className=" border-r border-r-lightGrey h-10"></div>
        <div className=" border-r border-r-lightGrey h-10"></div>
        <div className=" border-r border-r-lightGrey h-10"></div>
        <div className=" border-r border-r-lightGrey h-10"></div>
        <div className=" border-r border-r-lightGrey h-10"></div>
        <div className=" border-r border-r-lightGrey h-10"></div>
        <div className=" border-r border-r-lightGrey h-10"></div>
      </div>
    );
  };

  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const main = gsap.timeline();

      // gsap code here...
      main.fromTo(".backblur", { opacity: 0 }, { opacity: 1, duration: 1.5 });
      main.fromTo(".heroText", { opacity: 0 }, { opacity: 1, duration: 1 });
      main.fromTo(".cta", { opacity: 0 }, { opacity: 1, duration: 1 });
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  // Use a regular useEffect for the contact glow animation
  useEffect(() => {
    if (contactRef.current) {
      console.log("Contact element found:", contactRef.current);

      // Create and start the animation
      const animation = gsap.fromTo(
        contactRef.current,
        { boxShadow: "0 0 30px rgba(239, 68, 68, 0.7)" },
        {
          boxShadow: "0 0 50px rgba(239, 68, 68, 1)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      // Clean up animation on unmount
      return () => {
        animation.kill();
      };
    }
  }, []);

  return (
    <div className="border border-lightGrey mb-10">
      {/* Hero Section */}
      <div ref={container} id="hero" className="relative">
        <Boxes />
        <div className="backblur font-bold py-10 px-5 relative bg-gradient-to-r from-neutral-900 to-zinc-900 bg-opacity-10 backdrop-filter backdrop-blur-sm">
          <h1 className="heroText text-center text-3xl fireball">
            I BUILD BEAUTIFUL PRODUCTS THAT{" "}
            <div className="heroPop">
              <p className="inline-block">MATTERS</p>
            </div>
          </h1>
          <div className="flex justify-center mt-5 text-2xl">
            <Link
              href="#contact"
              onClick={(e) => common.scrollToSection(e, "contact")}
              className="cta rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 px-5 hover:from-white hover:to-white hover:text-black transition-all cursor-pointer py-1"
            >
              <p>Reach me out!</p>
            </Link>
          </div>
        </div>

        <Boxes />
        <div className="border-t border-t-lightGrey py-10 px-5 gap-3 flex flex-col">
          <p>Hi! I'm Sharif</p>
          <p>I'm currently building Kerisik, a recipe manager app that helps you store recipes, plan meals, and generate grocery lists.</p>
          <p>Took an undergraduate degree in Computer Science and currently working for a bank.</p>
          <p>I yap a lot in Youtube and X (formerly Twitter) and played volleyball to keep myself for sitting too long in front of the computer.</p>
        </div>
      </div>

      <div id="whyMe" className="h-24 border-t border-t-lightGrey">
        <div className="h-full w-full mx-auto p-6 bg-gradient-to-tl from-slate-900 to-slate-800 backdrop-blur-lg opacity-30"></div>
      </div>

      {/* Why me section */}
      <div>
        <div className="border-t border-t-lightGrey py-10 px-5">
          <h2 className="text-center text-2xl">
            Why you should <span className=" font-extrabold text-red-500">work</span> with me?
          </h2>
        </div>
        <div className="border-t border-t-lightGrey py-10 px-5">
          <div>
            <h3 className="text-xl">Full ownership towards my work</h3>
            <p className="py-3">I treat every project like my own startup—committed, accountable, and always delivering with pride.</p>
          </div>
          <ReasonOneDiagram />
        </div>
        <div className="border-t border-t-lightGrey py-10 px-5">
          <div>
            <h3 className="text-xl">Writing clean and readable code for the future</h3>
            <p className="py-3">{"I write code so clear that even future developers will thank me (or at least won't curse me)."}</p>
          </div>
          <div className="relative">
            <MessyCode />
            <CleanCode />
          </div>
        </div>
        <div className="border-t border-t-lightGrey py-10 px-5">
          <div>
            <h3 className="text-xl">Tools agnostic</h3>
            <p className="py-3">{"I don't marry tools—I date them, learn their quirks, and pick the best one for the job."}</p>
          </div>
        </div>
        <ReasonThreeDiagram />
      </div>

      <div id="pastProjects" className="h-24 border-t border-t-lightGrey">
        <div className="h-full w-full mx-auto p-6 bg-gradient-to-tl from-slate-900 to-slate-800 backdrop-blur-lg opacity-30"></div>
      </div>

      {/* Past projects section */}
      <div>
        <div className="border-t border-t-lightGrey py-10 px-5">
          <h2 className="text-center text-2xl">
            Some of my current (or past) <span className="font-extrabold text-blue-500">projects</span>
          </h2>
        </div>
        <Project
          title={"Kerisik: Recipe Manager"}
          description={"A utility app that stores recipe, plan meals, and generate grocery list."}
          imageUrl={NextPic}
          altImage={"Screenshot of Kerisik app"}
        />
      </div>

      <div id="contact" className="h-24 border-t border-t-lightGrey">
        <div className="h-full w-full mx-auto p-6 bg-gradient-to-tl from-slate-900 to-slate-800 backdrop-blur-lg opacity-30"></div>
      </div>

      {/* Contact me section */}
      <div>
        <div ref={contactRef} className="border-t border-t-lightGrey py-10 px-5 bg-lightDark text-center" style={{ position: "relative" }}>
          <h2 className="text-2xl pb-5">{"You can reach out to me for"}</h2>
          <p>hiring me, collab, need advice in software development, or just to have a chat!</p>
          <div className="flex justify-center space-x-6 mt-5">
            {/* X (Twitter) Icon and Link */}
            <a
              href="https://x.com/sharippu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn Icon and Link */}
            <a
              href="https://www.linkedin.com/in/hafizuddin-sharif-umar-sharif/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="h-24 border-t border-t-lightGrey">
        <div className="h-full w-full mx-auto p-6 bg-gradient-to-tl from-slate-900 to-slate-800 backdrop-blur-lg opacity-30"></div>
      </div>
    </div>
  );
}

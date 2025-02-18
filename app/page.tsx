import ReasonOneDiagram from "./(components)/ReasonOneDiagram";
import CleanCode from "./(components)/CleanCode";
import MessyCode from "./(components)/MessyCode";
import ReasonThreeDiagram from "./(components)/ReasonThreeDiagram";
import Project from "./(components)/Project";
import NextPic from "../public/kerisik_banner.png";

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
  return (
    <div className="border border-lightGrey my-10">
      {/* Hero Section */}
      <div id="hero" className="relative">
        <Boxes />
        <div className="font-bold text-3xl py-10 px-5 relative bg-my_bg_image bg-cover bg-center backdrop-blur-lg">
          <h1 className="text-center">I BUILD BEAUTIFUL PRODUCTS THAT MATTERS</h1>
          <div className="flex justify-center mt-3">
            <div className="rounded-sm bg-gradient-to-r from-blue-400 to-blue-600 px-5 hover:from-white hover:to-white hover:text-black transition-all cursor-pointer py-1">
              <p>Hire me!</p>
            </div>
          </div>
          <div className="bg-black/40 backdrop-blur-2xl h-full w-full absolute top-0 left-0 -z-10"></div>
        </div>

        <Boxes />
        <div className="border-t border-t-lightGrey py-10 px-5">
          <p className="text-justify">
            <span className="font-bold text-blue-600">user-first approach</span> that prioritize user feedback while delivering modern and sleek design{" "}
          </p>
        </div>
      </div>

      {/* Why me section */}
      <div id="whyMe">
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

      {/* Past projects section */}
      <div id="pastProjects">
        <div className="border-t border-t-lightGrey py-10 px-5">
          <h2 className="text-center text-2xl">Some of my past projects</h2>
        </div>
        <Project title={"Kerisik: Recipe Manager"} description={"A utility app that stores recipe, plan meals, and generate grocery list."} imageUrl={NextPic} altImage={"Screenshot of Kerisik app"} />
      </div>

      {/* Contact me section */}
      <div>
        <form className="border-t border-t-lightGrey py-10 px-5 bg-lightDark">
          <h2 className="text-2xl">Let's work together</h2>
          <div className="my-5">
            <label className="block mb-2" htmlFor="">
              Your email
            </label>
            <input className="block w-full rounder-sm border border-lightGrey bg-black" type="email" name="" id="" />
          </div>

          <div className="my-5">
            <label className="block mb-2" htmlFor="">
              Your message
            </label>
            <textarea className="block w-full rounded-sm border border-lightGrey bg-black" name="" id=""></textarea>
          </div>

          <button className="block bg-blue-600 py-1 px-3 rounded-sm mt-3">
            <p>Send message</p>
          </button>
        </form>
      </div>
    </div>
  );
}

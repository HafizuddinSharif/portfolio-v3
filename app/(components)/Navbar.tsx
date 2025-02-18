import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-40 text-center py-3 backdrop-blur-md bg-black/50">
      <div className="mb-3 text-lg font-black">Hafizuddin Sharif</div>
      <div className="flex justify-around">
        <Link href={"#whyMe"}>Why me?</Link>
        <Link href={"#pastProjects"}>Projects</Link>
        <Link href={"#contact"}>Contact me</Link>
      </div>
    </nav>
  );
};

export default Navbar;

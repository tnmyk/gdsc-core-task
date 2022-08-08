import Link from "next/link";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <nav className="flex justify-between  py-8 px-[10%] gap-x-8">
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="" width="40px" />
        </a>
      </Link>
      <button
        onClick={() => {
          setSidebarOpen(true);
        }}
        className="md:hidden w-8 h-8 grid place-items-center bg-gray-200 rounded-lg"
      >
        <BiMenuAltLeft />
      </button>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import { memo, useState } from "react";
import Dropdown from "../common/Dropdown";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

const SocialIcon = memo(({ icon }: { icon: string }) => {
  return (
    <Link href="/">
      <a
        className="flex items-center justify-center shadow-lg bg-white
        w-9 h-9 rounded-full"
      >
        <img src={icon} width={"20px"} />
      </a>
    </Link>
  );
});

SocialIcon.displayName = "SocialIcon";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const moreItems = ["About", "Contact", "Privacy Policy"];
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
      <div
        className={`transition-all z-40 flex md:items-center md:justify-between fixed md:relative flex-col md:flex-row w-44 md:w-full bg-white md:bg-transparent h-screen md:h-auto top-0 ${
          sidebarOpen ? "right-0" : "right-[-100%]"
        } md:right-0 p-7 md:p-0 gap-y-10`}
      >
        <div className="flex mb-4 items-center justify-between md:hidden">
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="" width="40px" />
            </a>
          </Link>
          <button
            onClick={() => {
              setSidebarOpen(false);
            }}
            className="w-8 h-8 grid place-items-center bg-gray-200 rounded-lg"
          >
            <GrFormClose />
          </button>
        </div>
        <div className="flex flex-col md:flex-row  gap-x-6 gap-y-4 text-sm font-medium text-gray-500 ">
          <Link href="/">
            <a>Vector</a>
          </Link>
          <Link href="/">
            <a>Photos</a>
          </Link>
          <Link href="/">
            <a>PSD</a>
          </Link>
          <Link href="/">
            <a>Video</a>
          </Link>
          <div
            className="relative text-gray-700 cursor-pointer"
            onMouseEnter={() => {
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              setDropdownOpen(false);
            }}
          >
            <span>
              More
              <IoMdArrowDropdown className="text-lg inline-flex align-sub" />
            </span>
            <Dropdown
              dropdownOpen={dropdownOpen}
              dropdownItems={moreItems}
              onSelect={() => {
                setDropdownOpen(false);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col text-sm md:flex-row items-center gap-x-4 md:gap-x-0">
          <button className="px-4 py-2 md:mr-4  text-gray-500 font-medium rounded-lg border border-gray-800">
            + Submit
          </button>
          <div className="flex mt-3 gap-x-3 md:mt-0 justify-center">
            <SocialIcon icon="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" />
            <SocialIcon icon="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

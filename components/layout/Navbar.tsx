import Link from "next/link";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const moreItems = ["About", "Contact", "Privacy Policy"];
  return (
    <nav className="flex justify-between py-8 px-[10%]">
      <div className="flex items-center gap-x-6 text-sm font-medium text-gray-500">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="" width="40px" />
          </a>
        </Link>
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
      <div>
        <button className="px-4 py-2 rounded border">+ Submit</button>
      </div>
    </nav>
  );
};

export default Navbar;

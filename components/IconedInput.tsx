import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Dropdown from "./Dropdown";

const IconedInput = ({
  dropdownItems,
  className,
}: {
  dropdownItems: string[];
  className?: string;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState<string>(dropdownItems[0]);

  const handleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleDropDownSelect = (item: string) => {
    setCurrentFilter(item);
    setDropdownOpen(false);
  };

  return (
    <div className={`flex relative rounded-lg px-2 py-1 bg-white ${className}`}>
      <button
        onClick={handleDropDown}
        className="inline-flex items-center justify-center py-2.5 px-3 min-w-[6rem] text-sm font-medium text-center text-gray-900 border border-gray-600 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100"
        type="button"
      >
        {currentFilter}
        <svg
          aria-hidden="true"
          className="ml-1 w-4 h-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
        </svg>
      </button>
      <Dropdown
        dropdownOpen={dropdownOpen}
        dropdownItems={dropdownItems}
        onSelect={handleDropDownSelect}
      />
      <div className="relative w-full rounded">
        <input
          type="search"
          className="block p-2.5 px-4 pr-8 w-full z-20 text-sm text-gray-900 outline-none"
          placeholder={`Search ${currentFilter}...`}
        />
        <div className="absolute inline-flex items-center top-0 bottom-0 right-0 p-2.5 text-lg">
          <FiSearch />
        </div>
      </div>
    </div>
  );
};

export default IconedInput;

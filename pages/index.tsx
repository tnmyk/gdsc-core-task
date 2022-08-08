import type { NextPage } from "next";
import Gallery from "../components/home/Gallery";
import SearchWithDropdown from "../components/common/SearchWithDropdown";
import { useState } from "react";

const Home: NextPage = () => {
  const searchDropdownItems = ["Vectors", "Photos", "PSD", "Videos"];
  const [filter, setFilter] = useState("");
  return (
    <div className="flex flex-col items-center mt-3">
      <h1 className="text-4xl text-center">Popular Pro Stock Vectors</h1>
      <h2 className="mt-4 text-center text-gray-500">
        High quality Vector with worry-free licensing for
        <br />
        personal and commerical use.
      </h2>
      <SearchWithDropdown
        dropdownItems={searchDropdownItems}
        value={filter}
        setValue={setFilter}
        className="my-8 sm:w-[80%] md:w-[30rem]"
      />
      <Gallery filter={filter} />
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import { CgOptions } from "react-icons/cg";
import IconedInput from "../components/IconedInput";
import { BiBookmarks } from "react-icons/bi";
const Home: NextPage = () => {
  const searchDropdownItems = ["Vectors", "Photos", "PSD", "Videos"];
  return (
    <div className="flex flex-col items-center mt-3">
      <h1 className="text-4xl">Popular Pro Stock Vectors</h1>
      <h2 className="mt-4 text-center">
        High quality Vector with worry-free licensing for
        <br />
        personal and commerical use
      </h2>
      <div className="py-8">
        <IconedInput
          dropdownItems={searchDropdownItems}
          className="w-[30rem]"
        />
      </div>
      <div className="w-9/12 flex justify-between">
        <div className="flex gap-x-6">
          <div>Latest</div>
          <div>Popular</div>
          <div>|</div>
          <div>Premium</div>
          <div>Free</div>
        </div>
        <div className="flex gap-x-4 text-lg">
          <CgOptions />
          <BiBookmarks />
        </div>
      </div>
    </div>
  );
};

export default Home;

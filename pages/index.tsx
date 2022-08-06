import type { NextPage } from "next";
import Gallery from "../components/home/Gallery";
import IconedInput from "../components/IconedInput";

const Home: NextPage = () => {
  const searchDropdownItems = ["Vectors", "Photos", "PSD", "Videos"];
  return (
    <div className="flex flex-col items-center mt-3">
      <h1 className="text-4xl">Popular Pro Stock Vectors</h1>
      <h2 className="mt-4 text-center text-gray-500">
        High quality Vector with worry-free licensing for
        <br />
        personal and commerical use.
      </h2>
      <div className="py-8">
        <IconedInput
          dropdownItems={searchDropdownItems}
          className="w-[30rem]"
        />
      </div>
      <Gallery />
    </div>
  );
};

export default Home;

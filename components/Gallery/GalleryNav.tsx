import { BiBookmarks } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";

const GalleryNav = () => {
  return (
    <div className="w-9/12 flex flex-col sm:flex-row items-center sm:justify-between gap-y-3">
      <div className="flex gap-x-6 font-medium">
        <button>Latest</button>
        <button>Popular</button>
        <div>|</div>
        <button className="text-orange-500">Premium</button>
        <button className="text-blue-500">Free</button>
      </div>
      <div className="flex gap-x-4 text-lg">
        <CgOptions />
        <BiBookmarks />
      </div>
    </div>
  );
};

export default GalleryNav;

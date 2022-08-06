import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { TbLockOff, TbLockOpenOff } from "react-icons/tb";

interface Props {
  title: string;
  isPremium: boolean;
  imageURL: string;
}

const Card = ({ title, isPremium, imageURL }: Props) => {
  return (
    <div className="w-[32%] bg-white rounded-2xl p-3 pb-6 flex flex-col items-center shadow-lg">
      <div className="relative w-full h-[12rem] rounded bg-gray-100 flex items-center justify-center ">
        <img src={imageURL} />
        <div className="absolute right-3 top-2 text-sm text-gray-500 font-medium flex items-center gap-x-1">
          {isPremium ? (
            <>
              Premium <TbLockOff className="text-lg" />
            </>
          ) : (
            <>
              Free <TbLockOpenOff className="text-lg" />
            </>
          )}
        </div>
      </div>
      <h2 className="mt-3 text-lg text-neutral-400 first-letter:text-3xl first-letter:text-black">
        {title}
      </h2>
      <Link href="/">
        <a className="mt-3 text-lg font-medium underline">
          Download
          <HiOutlineDownload className="inline-flex align-sub ml-1" />
        </a>
      </Link>
    </div>
  );
};

export default Card;

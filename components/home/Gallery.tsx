import Link from "next/link";
import { useState } from "react";
import { BiBookmarks } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { CgOptions } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "../../components/Card";
import PaginationButton from "./PaginationButton";

const tempGalleryArr = [
  {
    title: "Dog illustration",
    isPremium: true,
    imageURL: "https://picsum.photos/150/100",
  },
  {
    title: "Dog illustration",
    isPremium: true,
    imageURL: "https://picsum.photos/150/100",
  },
  {
    title: "Dog illustration",
    isPremium: false,
    imageURL: "https://picsum.photos/150/100",
  },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className="w-9/12 flex justify-between">
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
      <div className="mt-6 flex w-9/12 justify-between">
        {tempGalleryArr.map((card, index) => (
          <Card
            key={`card-${index}`}
            title={card.title}
            isPremium={card.isPremium}
            imageURL={card.imageURL}
          />
        ))}
      </div>
      <button className="mt-4 p-3 px-5 bg-white rounded-lg shadow-md flex gap-x-4 justify-center items-center">
        Next Page <BsArrowRight />
      </button>
      <div className="w-9/12 flex justify-between">
        <Link href="">
          <a>Discover All Collections</a>
        </Link>
        <div className="flex gap-x-3 items-center text-sm font-medium text-gray-500">
          Page{" "}
          <div className="flex gap-x-1">
            <PaginationButton
              disabled={currentPage === 1}
              onClick={() => {
                if (currentPage == 1) return;
                setCurrentPage(currentPage - 1);
              }}
            >
              <IoIosArrowBack />
            </PaginationButton>
            <PaginationButton>{currentPage}</PaginationButton>
            <PaginationButton
              disabled={currentPage === 10}
              onClick={() => {
                if (currentPage == 10) return;
                setCurrentPage(currentPage + 1);
              }}
            >
              <IoIosArrowForward />
            </PaginationButton>
          </div>
          of 10
        </div>
      </div>
    </>
  );
};
export default Gallery;

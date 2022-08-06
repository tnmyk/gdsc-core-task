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

const collectionsImages = [
  "https://picsum.photos/100/100",
  "https://picsum.photos/100/100",
  "https://picsum.photos/100/100",
];

const CollectionsImage = ({ imageURL }: { imageURL: string }) => {
  return (
    <div className="w-10 h-10 rounded-lg overflow-hidden transition-all border-2 border-white ml-[-1rem]">
      <img src={imageURL} width="105%" />
    </div>
  );
};

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
      <button className="mt-8 p-3 px-7 bg-white rounded-lg shadow-md flex gap-x-4 justify-center items-center font-medium">
        Next Page <BsArrowRight />
      </button>
      <div className="w-9/12 flex justify-between items-center">
        <Link href="">
          <a className="flex gap-x-4 text-md underline font-medium">
            <span>
              Discover All
              <br />
              Collections
            </span>
            <div className="flex ml-4 [&:hover>*]:ml-1">
              {collectionsImages.map((imageURL, index) => (
                <CollectionsImage
                  key={`collection-img-${index}`}
                  imageURL={imageURL}
                />
              ))}
            </div>
          </a>
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
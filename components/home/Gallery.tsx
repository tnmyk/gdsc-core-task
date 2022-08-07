import Link from "next/link";
import { useState } from "react";
import { BiBookmarks } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { CgOptions } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GalleryCard from "./GalleryCard";
import PaginationButton from "./PaginationButton";

const galleryData = [
  {
    title: "Wave illustration",
    isPremium: true,
    imageURL:
      "https://www.freeiconspng.com/uploads/abstract-circle-wave-logo-png-image-11.png",
  },
  {
    title: "Batman illustration",
    isPremium: true,
    imageURL:
      "https://w7.pngwing.com/pngs/509/584/png-transparent-batman-logo-sticker-batman-logo-comics-emblem-superhero.png",
  },
  {
    title: "Med illustration",
    isPremium: false,
    imageURL:
      "https://www.freeiconspng.com/uploads/vaccine-medical-icon-symbol-png-15.png",
  },
];

const collectionsImagesData = [
  `https://picsum.photos/seed/${Math.random()}/100`,
  `https://picsum.photos/seed/${Math.random()}/100`,
  `https://picsum.photos/seed/${Math.random()}/100`,
];

const CollectionsImage = ({ imageURL }: { imageURL: string }) => {
  return (
    <div className="w-10 h-10 rounded-lg shadow-lg overflow-hidden transition-all border-2 border-white ml-[-1rem]">
      <img src={imageURL} width="105%" />
    </div>
  );
};

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
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
      <div className="mt-6 flex flex-wrap flex-row w-9/12 gap-x-4 gap-y-5 justify-center">
        {galleryData.map((card, index) => (
          <GalleryCard
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
      <div className="w-9/12 mt-6 md:mt-0 flex flex-col-reverse sm:flex-row gap-y-6 justify-between items-center">
        <Link href="">
          <a className="flex gap-x-4 text-md underline font-medium">
            <span>
              Discover All
              <br />
              Collections
            </span>
            <div className="flex ml-4 [&:hover>*]:ml-1">
              {collectionsImagesData.map((imageURL, index) => (
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

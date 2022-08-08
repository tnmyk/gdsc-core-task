import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { collectionsImagesData } from "../../data/galleryData";
import { IGalleryEnd } from "../../types/gallery";
import GalleryPagination from "./GalleryPagination";

const CollectionsImage = ({ imageURL }: { imageURL: string }) => {
  return (
    <div className="w-10 h-10 rounded-lg shadow-lg overflow-hidden transition-all border-2 border-white ml-[-1rem]">
      <img src={imageURL} width="105%" />
    </div>
  );
};

const DiscoverCollections = () => {
  return (
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
  );
};

const GalleryEnd = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: IGalleryEnd) => {
  const handlePageNext = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <button
        className="mt-8 p-3 px-7 bg-white rounded-lg shadow-md flex gap-x-4 justify-center items-center font-medium"
        onClick={handlePageNext}
      >
        Next Page <BsArrowRight />
      </button>
      <div className="w-9/12 mt-6 md:mt-0 flex flex-col-reverse sm:flex-row gap-y-6 justify-between items-center">
        <DiscoverCollections />
        <GalleryPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default GalleryEnd;

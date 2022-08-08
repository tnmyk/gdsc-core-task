import { useEffect, useState } from "react";
import { galleryData } from "../../data/galleryData";
import GalleryCard from "./GalleryCard";
import GalleryEnd from "./GalleryEnd";
import GalleryNav from "./GalleryNav";

const Gallery = ({ filter }: { filter: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentGalleryData = galleryData.filter((galleryEle) =>
    galleryEle.title.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(currentGalleryData.length / 3);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <>
      <GalleryNav />
      <div className="mt-6 flex flex-wrap flex-row w-9/12 gap-x-4 gap-y-5 justify-center">
        {currentGalleryData
          .slice((currentPage - 1) * 3, (currentPage - 1) * 3 + 3)
          .map((card, index) => (
            <GalleryCard
              key={`card-${index}`}
              title={card.title}
              isPremium={card.isPremium}
              imageURL={card.imageURL}
            />
          ))}
        {currentGalleryData.length === 0 && (
          <h2 className="py-36 font-medium text-gray-500">
            Sorry, No Illustrations Found!
          </h2>
        )}
      </div>
      <GalleryEnd
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};
export default Gallery;

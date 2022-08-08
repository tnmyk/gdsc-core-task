import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IGalleryEnd } from "../../types/gallery";
import PaginationButton from "./PaginationButton";

const GalleryPagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: IGalleryEnd) => {
  const handlePageNext = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  const handlePagePrev = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="flex gap-x-3 items-center text-sm font-medium text-gray-500">
      Page{" "}
      <div className="flex gap-x-1">
        <PaginationButton disabled={currentPage === 1} onClick={handlePagePrev}>
          <IoIosArrowBack />
        </PaginationButton>
        <PaginationButton>{currentPage}</PaginationButton>
        <PaginationButton
          disabled={currentPage >= totalPages}
          onClick={handlePageNext}
        >
          <IoIosArrowForward />
        </PaginationButton>
      </div>
      of {totalPages || 1}
    </div>
  );
};

export default GalleryPagination;

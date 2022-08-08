import { IPaginationButton } from "../../types/gallery";

const PaginationButton = ({
  children,
  onClick,
  disabled,
}: IPaginationButton) => {
  const commonStyle =
    "w-6 h-6 flex items-center justify-center rounded text-gray-700";
  if (typeof onClick === "function")
    return (
      <button
        onClick={onClick}
        className={`${commonStyle}   ${
          disabled
            ? "opacity-30 cursor-no-drop bg-gray-300"
            : "opacity-100 bg-gray-200"
        } `}
      >
        {children}
      </button>
    );
  else
    return (
      <div
        className={`${commonStyle} bg-gray-50 border-[1.5px] border-neutral-200`}
      >
        {children}
      </div>
    );
};

export default PaginationButton;

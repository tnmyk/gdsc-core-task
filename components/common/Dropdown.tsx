import { IDropdownLiEle, IDropdownProps } from "../../types/common";

const DropdownLiEle = ({ item, onSelect }: IDropdownLiEle) => {
  return (
    <li
      onClick={() => {
        typeof onSelect === "function" && onSelect(item);
      }}
    >
      <button
        type="button"
        className="inline-flex py-2 px-4 w-full hover:bg-gray-100"
      >
        {item}
      </button>
    </li>
  );
};

const Dropdown = ({
  dropdownOpen,
  dropdownItems,
  onSelect,
}: IDropdownProps) => {
  return (
    <div
      className={`${
        dropdownOpen ? "block" : "hidden"
      } absolute z-10 w-44 bg-white rounded shadow top-[105%]`}
    >
      <ul className="py-1 text-sm text-gray-700">
        {dropdownItems.map((item) => {
          return <DropdownLiEle onSelect={onSelect} item={item} key={item} />;
        })}
      </ul>
    </div>
  );
};

export default Dropdown;

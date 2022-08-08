export interface IDropdownProps {
  dropdownOpen: boolean;
  dropdownItems: string[];
  onSelect?: (item: string) => void;
}
export interface IDropdownLiEle {
  item: string;
  onSelect: ((item: string) => void) | undefined;
}

export interface ISearchWithDropdown {
  dropdownItems: string[];
  className?: string;
  setValue: (value: string) => void;
}

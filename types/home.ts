import { ReactNode } from "react";

export interface IPaginationButton {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface IGalleryCard {
  title: string;
  isPremium: boolean;
  imageURL: string;
}

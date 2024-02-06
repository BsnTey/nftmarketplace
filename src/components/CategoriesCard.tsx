import { FC } from "react";

export interface CategoriesCardProps {
  imgBack: string;
  imgFront: string;
  title: string;
}

export const CategoriesCard: FC<CategoriesCardProps> = ({ imgBack, imgFront, title }: CategoriesCardProps): JSX.Element => {
  return (
    <li className="rounded-2xl overflow-hidden relative">
      <img src={imgBack} alt="Category back image" className="blur-sm " />
      <img src={imgFront} alt="Image front" className="absolute top-[70px] right-[70px]" />
      <h3 className="bg-main-second rounded-b-2xl py-5 px-7 font-workSans text-2xl font-medium">{title}</h3>
    </li>
  );
};

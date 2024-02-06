import CategoryArt from "../../public/img/browse-categories/Art.png";
import CategoryCollectibles from "../../public/img/browse-categories/Collectibles.png";
import CategoryMusic from "../../public/img/browse-categories/Music.png";
import CategoryPhotography from "../../public/img/browse-categories/Photography.png";
import CategoryVideo from "../../public/img/browse-categories/Video.png";
import CategoryUtility from "../../public/img/browse-categories/Utility.png";
import CategorySport from "../../public/img/browse-categories/Sport.png";
import CategoryVirtualWorlds from "../../public/img/browse-categories/Virtual Worlds.png";

import PaintBrush from "../../public/img/browse-categories/PaintBrush.svg";
import Swatches from "../../public/img/browse-categories/Swatches.svg";
import MusicNotes from "../../public/img/browse-categories/MusicNotes.svg";
import Camera from "../../public/img/browse-categories/Camera.svg";
import VideoCamera from "../../public/img/browse-categories/VideoCamera.svg";
import MagicWand from "../../public/img/browse-categories/MagicWand.svg";
import Basketball from "../../public/img/browse-categories/Basketball.svg";
import Planet from "../../public/img/browse-categories/Planet.svg";
import { FC } from "react";
import { CategoriesCard, CategoriesCardProps } from "./CategoriesCard";

const browseCategoriesList: CategoriesCardProps[] = [
  {
    imgBack: CategoryArt,
    imgFront: PaintBrush,
    title: "Art",
  },
  {
    imgBack: CategoryCollectibles,
    imgFront: Swatches,
    title: "Collectibles",
  },
  {
    imgBack: CategoryMusic,
    imgFront: MusicNotes,
    title: "Music",
  },
  {
    imgBack: CategoryPhotography,
    imgFront: Camera,
    title: "Photography",
  },
  {
    imgBack: CategoryVideo,
    imgFront: VideoCamera,
    title: "Video",
  },
  {
    imgBack: CategoryUtility,
    imgFront: MagicWand,
    title: "Utility",
  },
  {
    imgBack: CategorySport,
    imgFront: Basketball,
    title: "Sport",
  },
  {
    imgBack: CategoryVirtualWorlds,
    imgFront: Planet,
    title: "Virtual Worlds",
  },
];

export const BrowseCategories: FC = (): JSX.Element => {
  return (
    <>
      <h2 className="text-white font-workSans text-4xl font-medium">Browse Categories</h2>
      <ul className="mt-16 flex justify-between flex-wrap gap-x-7 gap-y-7 text-white">
        {browseCategoriesList.map((categorie) => (
          <CategoriesCard key={categorie.title} imgBack={categorie.imgBack} imgFront={categorie.imgFront} title={categorie.title} />
        ))}
      </ul>
    </>
  );
};

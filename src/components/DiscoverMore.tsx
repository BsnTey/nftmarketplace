import { FC } from "react";

import Eye from "../../public/img/Eye.svg";
import DistantGalaxy from "../../public/img/discover/DistantGalaxy.png";
import Life from "../../public/img/discover/Life.png";
import AstroFiction from "../../public/img/discover/AstroFiction.png";
import MoonDancer from "../../public/img/discover/MoonDancer.png";
import NebulaKid from "../../public/img/discover/NebulaKid.png";
import Spaceone from "../../public/img/discover/Spaceone.png";
import { Button } from "./Button";
import { DiscoverMoreCard, DiscoverMoreCardProps } from "./DiscoverMoreCard";

const discoverMoreList: DiscoverMoreCardProps[] = [
  {
    img: DistantGalaxy,
    avatar: MoonDancer,
    title: "Distant Galaxy",
    name: "MoonDancer",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: Life,
    avatar: NebulaKid,
    title: "Life On Edena",
    name: "NebulaKid",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: AstroFiction,
    avatar: Spaceone,
    title: "AstroFiction",
    name: "Spaceone",
    price: "1.63",
    bid: "0.33",
  },
];

export const DiscoverMore: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-between items-end text-white">
        <div className="font-workSans">
          <h2 className="text-4xl font-medium">Discover More NFTs</h2>
          <p className="text-2xl font-light mt-2.5">Explore New Trending NFTs</p>
        </div>
        <Button imgPath={Eye} text={"See All"} className="!px-12 border-violet bg-main-base hover:bg-regal-violet transition-colors" />
      </div>

      <ul className="mt-16 flex justify-between text-white">
        {discoverMoreList.map((discover) => (
          <DiscoverMoreCard
            key={discover.title}
            img={discover.img}
            avatar={discover.avatar}
            title={discover.title}
            name={discover.name}
            price={discover.price}
            bid={discover.bid}
          />
        ))}
      </ul>
    </>
  );
};

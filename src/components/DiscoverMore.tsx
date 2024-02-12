import { FC } from "react";

import Eye from "../../public/img/Eye.svg";

import { Button } from "./Button";
import { DiscoverMoreCard } from "./DiscoverMoreCard";
import { discoverMoreList } from "../mock/mock";
import { Link } from "react-router-dom";



export const DiscoverMore: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-between items-end text-white">
        <div className="font-workSans">
          <h2 className="text-4xl font-medium">Discover More NFTs</h2>
          <p className="text-2xl font-light mt-2.5">Explore New Trending NFTs</p>
        </div>
        <Link to="/marketplace">
        <Button imgPath={Eye} text={"See All"} className="!px-12 border-violet bg-main-base hover:bg-regal-violet transition-colors" />
        </Link>

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

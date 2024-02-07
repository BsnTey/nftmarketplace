import { FC } from "react";

import Rocket from "../../public/img/RocketLaunch.svg";
import { CreatorCard } from "./CreatorCard";
import { Button } from "./Button";
import { topCreatorsList } from "../mock/mock";



export const TopCreators: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-between items-end text-white">
        <div className="font-workSans">
          <h2 className="text-4xl font-medium">Top Creators</h2>
          <p className="text-2xl font-light mt-2.5">Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <Button imgPath={Rocket} text={"View Rankings"} className="!px-12 border-violet bg-main-base hover:bg-regal-violet transition-colors" />
      </div>

      <ul className="mt-16 flex justify-between flex-wrap gap-x-7 gap-y-7 text-white">
        {topCreatorsList.map((topCreator, index) => (
          <CreatorCard key={topCreator.title} numberCard={index + 1} avatar={topCreator.avatar} title={topCreator.title} sale={topCreator.sale} />
        ))}
      </ul>
    </>
  );
};

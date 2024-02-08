import { FC } from "react";
import { rankingsList } from "../mock/mock";
import { RankingsCard } from "./RankingsCard";

export const RankingsTable: FC = (): JSX.Element => {
  return (
    <>
      <div className="border-greyCust rounded-2xl w-full text-left font-space text-greyDark font-light flex items-center py-3 px-5 mt-10">
        <div className="px-2">#</div>
        <div className="px-5 w-full">Artist</div>
        <div className="pr-24">Change</div>
        <div className="pr-24 text-nowrap">NFTs Sold</div>
        <div className="pr-24">Volume</div>
      </div >

      <ul className="mt-5 flex flex-col gap-y-5 text-white">
        {rankingsList.map((discover, index) => (
          <RankingsCard key={discover.name} index={index} avatar={discover.avatar} name={discover.name} change={discover.change} nftsSold={discover.nftsSold} volume={discover.volume} />
        ))}
      </ul>
    </>
  );
};

import { FC } from "react";
import { AuctionTimer } from "./AuctionTimer";

import Orbitians from "../../public/img/Orbitians.png";
import ArrowRight from "../../public/img/ArrowRight.svg";
import Spaceone from "../../public/img/discover/Spaceone.png";
import Globe from "../../public/img/social-logo/Globe.svg";
import { Button } from "./Button";
import { MarketplaceList } from "./MarketplaceList";
import { DiscoverMoreCard } from "./DiscoverMoreCard";
import { marketplaceList } from "../mock/mock";
import { Link } from "react-router-dom";

export const NftCard: FC = (): JSX.Element => {
  return (
    <>
      <div className="container max-w-[1280px]">
        <img src={Orbitians} alt="Orbitians" />
      </div>

      <div className="container max-w-[1050px]">
        <div className="py-10 flex justify-between">
          <div className="max-w-[605px] font-workSans text-white text-2xl font-light">
            <p className="text-5xl font-medium">The Orbitians</p>
            <p className="text-greyDark mt-2">Minted on Sep 30, 2022</p>
            <p className="text-greyDark font-medium mt-7">Created By</p>
            <div className="mt-2 flex gap-x-3 font-medium items-center">
              <img src={Spaceone} alt="Spaceone" className="w-[24px] h-[24px]" />
              Orbitian
            </div>
            <p className="text-greyDark font-medium mt-7">Description</p>
            <p className="mt-2">
              The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain.
              <br />
              <br />
              There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.
              <br />
              <br />
              They live in a metal space machines, high up in the sky and only have one foot on Earth.
              <br />
              These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their
              inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an
              eye into Orbitian territory, so they've taken to make human beings their target.
            </p>
            <p className="text-greyDark font-medium mt-7">Details</p>
            <div className="flex gap-x-2 items-center mt-2">
              <img src={Globe} alt="Globe" />
              View on Etherscan
            </div>
            <div className="flex gap-x-2 items-center mt-2">
              <img src={Globe} alt="Globe" />
              View Original
            </div>
            <p className="text-greyDark font-medium mt-7">Tags</p>
            <div className="mt-5 flex gap-x-5">
              <div className="bg-main-second rounded-full py-3 px-7 text-base font-medium uppercase">Animation</div>
              <div className="bg-main-second rounded-full py-3 px-7 text-base font-medium uppercase">Illustration</div>
              <div className="bg-main-second rounded-full py-3 px-7 text-base font-medium uppercase">Moon</div>
              <div className="bg-main-second rounded-full py-3 px-7 text-base font-medium uppercase">Moon</div>
            </div>
          </div>
          <div>
            <AuctionTimer initialHours={59} initialMinutes={59} initialSeconds={59} isBtnActive={true} />
          </div>
        </div>

        <div className="py-20">
          <div className="flex justify-between items-center">
            <p className="text-4xl font-semibold text-white">More From This Artist</p>
            <Link to={"/profile"}>
              <Button imgPath={ArrowRight} text={"Go To Artist Page"} className="!px-7 !py-4 border-violet bg-main-base hover:bg-regal-violet transition-colors" />
            </Link>
          </div>
          <div className="mt-16">
            <ul className="flex flex-wrap gap-x-7 gap-y-7 text-white">
              {marketplaceList.map((discover) => (
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
          </div>
        </div>
      </div>
    </>
  );
};

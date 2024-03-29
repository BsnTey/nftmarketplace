import { FC } from "react";

export interface DiscoverMoreCardProps {
  img: string;
  avatar: string;
  title: string;
  name: string;
  price: string;
  bid: string;
  bgCard?: string;
}

export const DiscoverMoreCard: FC<DiscoverMoreCardProps> = ({ img, avatar, title, name, price, bid, bgCard }: DiscoverMoreCardProps): JSX.Element => {
  return (
    <li className="rounded-2xl">
      <img src={img} alt="DistantGalaxy" />
      <div className={"px-7 py-5  rounded-b-2xl " + (bgCard ? bgCard : "bg-main-second")}>
        <h3 className="font-workSans text-2xl font-medium">{title}</h3>
        <div className="mt-1 flex gap-x-4 items-center font-space">
          <img src={avatar} alt="MoonDancer" />
          {name}
        </div>
        <div className="mt-8 flex justify-between font-space">
          <div>
            <h4 className="text-greyDark text-xs">Price</h4>
            <p className="mt-2">{price} ETH</p>
          </div>
          <div className="flex flex-col items-end">
            <h4 className="text-greyDark text-xs">Highest Bid</h4>
            <p className="mt-2">{bid} wETH</p>
          </div>
        </div>
      </div>
    </li>
  );
};

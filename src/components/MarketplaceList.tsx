import { FC } from "react";

import { DiscoverMoreCard } from "./DiscoverMoreCard";
import { marketplaceList } from "../mock/mock";

export const MarketplaceList: FC = (): JSX.Element => {
  return (
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
          bgCard="bg-main-base"
        />
      ))}
    </ul>
  );
};

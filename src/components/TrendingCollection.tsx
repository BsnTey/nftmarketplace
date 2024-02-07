import { FC } from "react";
import { trendingCollectionList } from "../mock/mock";
import { TrendingCard } from "./TrendingCard";

export const TrendingCollection: FC = (): JSX.Element => {
  return (
    <>
      <div className="font-workSans text-white">
        <h2 className="text-4xl font-medium">Trending Collection</h2>
        <p className="text-2xl font-light">Checkout Our Weekly Updated Trending Collection.</p>
      </div>
      <ul className="pt-16 flex justify-between text-white">
        {trendingCollectionList.map((trendingCollection) => (
          <TrendingCard
            key={trendingCollection.text}
            mainImg={trendingCollection.mainImg}
            oneImg={trendingCollection.oneImg}
            secondImg={trendingCollection.secondImg}
            text={trendingCollection.text}
            avatar={trendingCollection.avatar}
            nameAvatar={trendingCollection.nameAvatar}
          />
        ))}
      </ul>
    </>
  );
};

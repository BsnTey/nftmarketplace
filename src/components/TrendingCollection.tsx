import DogCardMainOne from "../../public/img/trending-collection/dog-card-main-one.png";
import RabbitCardBodyOne from "../../public/img/trending-collection/rabbit-card-body-one.png";
import BearCardBodyOne from "../../public/img/trending-collection/bear-card-body-one.png";
import FoxCardAvatarOne from "../../public/img/trending-collection/fox-card-avatar-one.png";

import MushroomCardMainSecond from "../../public/img/trending-collection/mushroom-card-main-second.png";
import MushroomOneCardBodySecond from "../../public/img/trending-collection/mushroom-one-card-body-second.png";
import MushroomTwoCardBodySecond from "../../public/img/trending-collection/mushroom-two-card-body-second.png";
import AvatarCardAvatarSecond from "../../public/img/trending-collection/avatar-card-avatar-second.png";

import RobotCardMainThirty from "../../public/img/trending-collection/robot-card-main-thirty.png";
import RobotOneCardBodyThirty from "../../public/img/trending-collection/robot-one-card-body-thirty.png";
import RobotTwoCardBodyThirty from "../../public/img/trending-collection/robot-two-card-body-thirty.png";
import RobotCardAvatarThirty from "../../public/img/trending-collection/robot-card-avatar-thirty.png";
import { TrendingCard, TrendingCardProps } from "./TrendingCard";
import { FC } from "react";

const trendingCollectionList: TrendingCardProps[] = [
  {
    mainImg: DogCardMainOne,
    oneImg: RabbitCardBodyOne,
    secondImg: BearCardBodyOne,
    text: "DSGN Animals",
    avatar: FoxCardAvatarOne,
    nameAvatar: "MrFox",
  },
  {
    mainImg: MushroomCardMainSecond,
    oneImg: MushroomOneCardBodySecond,
    secondImg: MushroomTwoCardBodySecond,
    text: "Magic Mushrooms",
    avatar: AvatarCardAvatarSecond,
    nameAvatar: "Shroomie",
  },
  {
    mainImg: RobotCardMainThirty,
    oneImg: RobotOneCardBodyThirty,
    secondImg: RobotTwoCardBodyThirty,
    text: "Disco Machines",
    avatar: RobotCardAvatarThirty,
    nameAvatar: "BeKind2Robots",
  },
];

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

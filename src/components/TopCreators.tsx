import CreatorsOne from "../../public/img/top-creators/one.png";
import CreatorsTwo from "../../public/img/top-creators/two.png";
import CreatorsThree from "../../public/img/top-creators/three.png";
import CreatorsFour from "../../public/img/top-creators/four.png";
import CreatorsFive from "../../public/img/top-creators/five.png";
import CreatorsSix from "../../public/img/top-creators/six.png";
import CreatorsSeven from "../../public/img/top-creators/seven.png";
import CreatorsEight from "../../public/img/top-creators/eight.png";
import CreatorsNine from "../../public/img/top-creators/nine.png";
import CreatorsTen from "../../public/img/top-creators/ten.png";
import CreatorsEleven from "../../public/img/top-creators/eleven.png";
import CreatorsTwelve from "../../public/img/top-creators/twelve.png";
import Rocket from "../../public/img/RocketLaunch.svg";
import { FC } from "react";
import { CreatorCard, CreatorCardProps } from "./CreatorCard";
import { Button } from "./Button";

const topCreatorsList: CreatorCardProps[] = [
  {
    avatar: CreatorsOne,
    title: "Keepitreal",
    sale: "34.53",
  },
  {
    avatar: CreatorsTwo,
    title: "DigiLab",
    sale: "34.53",
  },
  {
    avatar: CreatorsThree,
    title: "GravityOne",
    sale: "34.53",
  },
  {
    avatar: CreatorsFour,
    title: "Juanie",
    sale: "34.53",
  },
  {
    avatar: CreatorsFive,
    title: "BlueWhale",
    sale: "34.53",
  },
  {
    avatar: CreatorsSix,
    title: "Mr Fox",
    sale: "34.53",
  },
  {
    avatar: CreatorsSeven,
    title: "Shroomie",
    sale: "34.53",
  },
  {
    avatar: CreatorsEight,
    title: "Robotica",
    sale: "34.53",
  },
  {
    avatar: CreatorsNine,
    title: "RustyRobot",
    sale: "34.53",
  },
  {
    avatar: CreatorsTen,
    title: "Animakid",
    sale: "34.53",
  },
  {
    avatar: CreatorsEleven,
    title: "Dotgu",
    sale: "34.53",
  },
  {
    avatar: CreatorsTwelve,
    title: "Ghiblier",
    sale: "34.53",
  },
];

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

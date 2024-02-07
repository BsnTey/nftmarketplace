import { DiscoverMoreCardProps } from "../components/DiscoverMoreCard";
import { TrendingCardProps } from "../components/TrendingCard";
import { CreatorCardProps } from "../components/CreatorCard";

import DistantGalaxy from "../../public/img/discover/DistantGalaxy.png";
import Life from "../../public/img/discover/Life.png";
import AstroFiction from "../../public/img/discover/AstroFiction.png";
import MoonDancer from "../../public/img/discover/MoonDancer.png";
import NebulaKid from "../../public/img/discover/NebulaKid.png";
import Spaceone from "../../public/img/discover/Spaceone.png";

import DogCardMainOne from "../../public/img/trending-collection/dog-card-main-one.png";
import RabbitCardBodyOne from "../../public/img/trending-collection/rabbit-card-body-one.png";
import BearCardBodyOne from "../../public/img/trending-collection/bear-card-body-one.png";
import MrFox from "../../public/img/trending-collection/fox-card-avatar-one.png";

import MushroomCardMainSecond from "../../public/img/trending-collection/mushroom-card-main-second.png";
import MushroomOneCardBodySecond from "../../public/img/trending-collection/mushroom-one-card-body-second.png";
import MushroomTwoCardBodySecond from "../../public/img/trending-collection/mushroom-two-card-body-second.png";
import Shroomie from "../../public/img/trending-collection/avatar-card-avatar-second.png";

import RobotCardMainThirty from "../../public/img/trending-collection/robot-card-main-thirty.png";
import RobotOneCardBodyThirty from "../../public/img/trending-collection/robot-one-card-body-thirty.png";
import RobotTwoCardBodyThirty from "../../public/img/trending-collection/robot-two-card-body-thirty.png";
import BeKind2Robots from "../../public/img/trending-collection/robot-card-avatar-thirty.png";

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

import Animakid from "../../public/img/marketplace/Animakid.png";
import Catch22 from "../../public/img/marketplace/Catch22.png";
import CherryBlossomGirl from "../../public/img/marketplace/CherryBlossomGirl.png";
import ColorfulDog0344 from "../../public/img/marketplace/ColorfulDog0344.png";
import ColorfulDog0356 from "../../public/img/marketplace/ColorfulDog0356.png";
import DancingRobot0312 from "../../public/img/marketplace/DancingRobot0312.png";
import DesertWalk from "../../public/img/marketplace/DesertWalk.png";
import DesignerBear from "../../public/img/marketplace/DesignerBear.png";
import HappyRobot024 from "../../public/img/marketplace/HappyRobot024.png";
import HappyRobot032 from "../../public/img/marketplace/HappyRobot032.png";
import IceApeClub from "../../public/img/marketplace/IceApeClub.png";
import IceCreamApe from "../../public/img/marketplace/IceCreamApe.png";
import MagicMushroom from "../../public/img/marketplace/MagicMushroom.png";
import PuppyPower from "../../public/img/marketplace/PuppyPower.png";
import Robotica from "../../public/img/marketplace/Robotica.png";
import SpaceTravel from "../../public/img/marketplace/SpaceTravel.png";
import SunsetDimension from "../../public/img/marketplace/SunsetDimension.png";


export const trendingCollectionList: TrendingCardProps[] = [
  {
    mainImg: DogCardMainOne,
    oneImg: RabbitCardBodyOne,
    secondImg: BearCardBodyOne,
    text: "DSGN Animals",
    avatar: MrFox,
    nameAvatar: "MrFox",
  },
  {
    mainImg: MushroomCardMainSecond,
    oneImg: MushroomOneCardBodySecond,
    secondImg: MushroomTwoCardBodySecond,
    text: "Magic Mushrooms",
    avatar: Shroomie,
    nameAvatar: "Shroomie",
  },
  {
    mainImg: RobotCardMainThirty,
    oneImg: RobotOneCardBodyThirty,
    secondImg: RobotTwoCardBodyThirty,
    text: "Disco Machines",
    avatar: BeKind2Robots,
    nameAvatar: "BeKind2Robots",
  },
];

export const discoverMoreList: DiscoverMoreCardProps[] = [
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

export const topCreatorsList: CreatorCardProps[] = [
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

export const marketplaceList: DiscoverMoreCardProps[] = [
  {
    img: MagicMushroom,
    avatar: Shroomie,
    title: "Magic Mushroom 0325",
    name: "Shroomie",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: HappyRobot032,
    avatar: BeKind2Robots,
    title: "Happy Robot 032",
    name: "BeKind2Robots",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: HappyRobot024,
    avatar: BeKind2Robots,
    title: "Happy Robot 024",
    name: "BeKind2Robots",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: DesignerBear,
    avatar: MrFox,
    title: "Designer Bear",
    name: "Mr Fox",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: ColorfulDog0356,
    avatar: Spaceone,
    title: "Colorful Dog 0356",
    name: "Keepitreal",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: DancingRobot0312,
    avatar: Robotica,
    title: "Dancing Robot 0312",
    name: "Robotica",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: CherryBlossomGirl,
    avatar: MoonDancer,
    title: "Cherry Blossom Girl 035",
    name: "MoonDancer",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: SpaceTravel,
    avatar: NebulaKid,
    title: "Space Travel",
    name: "NebulaKid",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: SunsetDimension,
    avatar: Animakid,
    title: "Sunset Dimension",
    name: "Animakid",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: DesertWalk,
    avatar: Catch22,
    title: "Desert Walk",
    name: "Catch 22",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: IceCreamApe,
    avatar: IceApeClub,
    title: "IceCream Ape 0324",
    name: "Ice Ape Club",
    price: "1.63",
    bid: "0.33",
  },
  {
    img: ColorfulDog0344,
    avatar: PuppyPower,
    title: "Colorful Dog 0344",
    name: "PuppyPower",
    price: "1.63",
    bid: "0.33",
  },
];

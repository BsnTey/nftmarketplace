import "./App.css";

import LogoName from "../public/img/NFT Marketplace.png";
import Storefront from "../public/img/Storefront.svg";
import User from "../public/img/User.svg";
import Rocket from "../public/img/RocketLaunch.svg";
import Space from "../public/img/space.png";
import Avatar from "../public/img/Avatar.png";

import DogCardMainOne from "../public/img/trending-collection/dog-card-main-one.png";
import RabbitCardBodyOne from "../public/img/trending-collection/rabbit-card-body-one.png";
import BearCardBodyOne from "../public/img/trending-collection/bear-card-body-one.png";
import FoxCardAvatarOne from "../public/img/trending-collection/fox-card-avatar-one.png";

import MushroomCardMainSecond from "../public/img/trending-collection/mushroom-card-main-second.png";
import MushroomOneCardBodySecond from "../public/img/trending-collection/mushroom-one-card-body-second.png";
import MushroomTwoCardBodySecond from "../public/img/trending-collection/mushroom-two-card-body-second.png";
import AvatarCardAvatarSecond from "../public/img/trending-collection/avatar-card-avatar-second.png";

import RobotCardMainThirty from "../public/img/trending-collection/robot-card-main-thirty.png";
import RobotOneCardBodyThirty from "../public/img/trending-collection/robot-one-card-body-thirty.png";
import RobotTwoCardBodyThirty from "../public/img/trending-collection/robot-two-card-body-thirty.png";
import RobotCardAvatarThirty from "../public/img/trending-collection/robot-card-avatar-thirty.png";

import CreatorsOne from "../public/img/top-creators/one.png";
import CreatorsTwo from "../public/img/top-creators/two.png";
import CreatorsThree from "../public/img/top-creators/three.png";
import CreatorsFour from "../public/img/top-creators/four.png";
import CreatorsFive from "../public/img/top-creators/five.png";
import CreatorsSix from "../public/img/top-creators/six.png";
import CreatorsSeven from "../public/img/top-creators/seven.png";
import CreatorsEight from "../public/img/top-creators/eight.png";
import CreatorsNine from "../public/img/top-creators/nine.png";
import CreatorsTen from "../public/img/top-creators/ten.png";
import CreatorsEleven from "../public/img/top-creators/eleven.png";
import CreatorsTwelve from "../public/img/top-creators/twelve.png";

function App() {
  return (
    <div className="bg-main-base">
      <div className="container">
        <nav className="flex justify-between px-12.5 py-4">
          <div className="flex gap-x-3 items-center">
            <img src={Storefront} alt="Storefront" />
            <img src={LogoName} alt="LogoName" className="h-5" />
          </div>
          <div className="flex gap-x-2.5 text-white text-base font-workSans">
            <button className="px-3 py-5">Marketplace</button>
            <button className="px-3 py-5">Rankings</button>
            <button className="px-3 py-5">Connect a wallet</button>
            <button className="flex gap-x-3 items-center px-7 py-5 bg-main-action rounded-2xl drop-shadow-lg">
              <img src={User} alt="User" />
              Sign Up
            </button>
          </div>
        </nav>
      </div>
      <div className="container max-w-[1050px]">
        <div className="py-20">
          <div className="flex justify-between">
            <div className="flex flex-col max-w-[510px]">
              <p className="font-workSans text-6xl text-white">Discover Digital Srt & Collect NFTs</p>
              <p className="font-workSans font-light text-white text-2xl mt-5 pr-8">
                NFT marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.
              </p>
              <button className="mt-7 py-5 px-14 flex items-center gap-x-3 rounded-2xl w-fit-content text-white bg-main-action">
                <img src={Rocket} alt="Rocket" />
                Get Started
              </button>
              <div className="flex mt-7 gap-x-7 text-white font-space text-3xl">
                <div className="w-[150px]">
                  <p>240k+</p>
                  <p className="font-workSans text-3.5xl font-light">Total Sale</p>
                </div>
                <div className="w-[150px]">
                  <p>100k+</p>
                  <p className="font-workSans text-3.5xl font-light">Auctions</p>
                </div>
                <div className="w-[150px]">
                  <p>240k+</p>
                  <p className="font-workSans text-3.5xl font-light">Artists</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl">
              <img src={Space} alt="Space" />
              <div className="bg-main-second rounded-b-2xl py-6 px-5 flex flex-col gap-y-3 text-white">
                <p className="text-2xl">Space Walking</p>
                <div className="flex gap-x-4 items-center text-base font-workSans font-light">
                  <img src={Avatar} alt="Avatar" />
                  Animakid
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white py-20">
          <div className="font-workSans">
            <p className="text-4xl font-medium">Trending Collection</p>
            <p className="text-2xl font-light">Checkout Our Weekly Updated Trending Collection.</p>
          </div>
          <div className="pt-16 flex justify-between">
            <div>
              <img src={DogCardMainOne} alt="DogCardMainOne" className="rounded-2xl" />
              <div className="flex justify-between mt-4">
                <img src={RabbitCardBodyOne} alt="RabbitCardBodyOne" className="rounded-2xl" />

                <img src={BearCardBodyOne} alt="BearCardBodyOne" className="rounded-2xl" />

                <p className="bg-main-action rounded-2xl w-[100px] flex items-center justify-center font-space text-2xl">1025+</p>
              </div>
              <p className="font-workSans text-2xl mt-4">DSGN Animals</p>
              <div className="mt-2.5 flex gap-x-3 items-center font-workSans font-light">
                <img src={FoxCardAvatarOne} alt="FoxCardAvatarOne" className="rounded-full" />
                MrFox
              </div>
            </div>
            <div>
              <img src={MushroomCardMainSecond} alt="MushroomCardMainSecond" className="rounded-2xl" />
              <div className="flex justify-between mt-4">
                <img src={MushroomOneCardBodySecond} alt="MushroomOneCardBodySecond" className="rounded-2xl" />

                <img src={MushroomTwoCardBodySecond} alt="MushroomTwoCardBodySecond" className="rounded-2xl" />

                <p className="bg-main-action rounded-2xl w-[100px] flex items-center justify-center font-space text-2xl">1025+</p>
              </div>
              <p className="font-workSans text-2xl mt-4">Magic Mushrooms</p>
              <div className="mt-2.5 flex gap-x-3 items-center font-workSans font-light">
                <img src={AvatarCardAvatarSecond} alt="AvatarCardAvatarSecond" className="rounded-full" />
                Shroomie
              </div>
            </div>
            <div>
              <img src={RobotCardMainThirty} alt="RobotCardMainThirty" className="rounded-2xl" />
              <div className="flex justify-between mt-4">
                <img src={RobotOneCardBodyThirty} alt="RobotOneCardBodyThirty" className="rounded-2xl" />

                <img src={RobotTwoCardBodyThirty} alt="RobotTwoCardBodyThirty" className="rounded-2xl" />

                <p className="bg-main-action rounded-2xl w-[100px] flex items-center justify-center font-space text-2xl">1025+</p>
              </div>
              <p className="font-workSans text-2xl mt-4">Disco Machines</p>
              <div className="mt-2.5 flex gap-x-3 items-center font-workSans font-light">
                <img src={RobotCardAvatarThirty} alt="RobotCardAvatarThirty" className="rounded-full" />
                BeKind2Robots
              </div>
            </div>
          </div>
        </div>

        <div className="text-white py-20">
          <div className="flex justify-between items-end">
            <div className="font-workSans">
              <p className="text-4xl font-medium">Top Creators</p>
              <p className="text-2xl font-light mt-2.5">Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <button className="flex gap-x-3 items-center rounded-2xl border-violet border-white font-semibold py-5 px-10 hover:bg-regal-violet transition-colors">
              <img src={Rocket} alt="Rocket" />
              View Rankings
            </button>
          </div>

          <ul className="mt-16 flex justify-between flex-wrap gap-x-7 gap-y-7">
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">1</p>
              <img src={CreatorsOne} alt="CreatorsOne" className="rounded-full" />
              <p className="mt-5 text-2xl ">Keepitreal</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">2</p>
              <img src={CreatorsTwo} alt="CreatorsTwo" className="rounded-full" />
              <p className="mt-5 text-2xl ">DigiLab</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">3</p>
              <img src={CreatorsThree} alt="GravityOne" className="rounded-full" />
              <p className="mt-5 text-2xl ">GravityOne</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">4</p>
              <img src={CreatorsFour} alt="CreatorsFour" className="rounded-full" />
              <p className="mt-5 text-2xl ">Juanie</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">5</p>
              <img src={CreatorsFive} alt="CreatorsFive" className="rounded-full" />
              <p className="mt-5 text-2xl ">BlueWhale</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">6</p>
              <img src={CreatorsSix} alt="CreatorsSix" className="rounded-full" />
              <p className="mt-5 text-2xl ">Mr Fox</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">7</p>
              <img src={CreatorsSeven} alt="CreatorsSeven" className="rounded-full" />
              <p className="mt-5 text-2xl ">Shroomie</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">8</p>
              <img src={CreatorsEight} alt="CreatorsEight" className="rounded-full" />
              <p className="mt-5 text-2xl ">Robotica</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">9</p>
              <img src={CreatorsNine} alt="CreatorsNine" className="rounded-full" />
              <p className="mt-5 text-2xl ">RustyRobot</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">10</p>
              <img src={CreatorsTen} alt="CreatorsTen" className="rounded-full" />
              <p className="mt-5 text-2xl ">Animakid</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">11</p>
              <img src={CreatorsEleven} alt="CreatorsEleven" className="rounded-full" />
              <p className="mt-5 text-2xl ">Dotgu</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
            <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
              <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">12</p>
              <img src={CreatorsTwelve} alt="CreatorsTwelve" className="rounded-full" />
              <p className="mt-5 text-2xl ">Ghiblier</p>
              <p className="mt-1 text-caption text-base">
                Total Sales: <span className="text-white font-space font-medium">34.53 ETH</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

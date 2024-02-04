import "./App.css";

import LogoName from "../public/img/NFT Marketplace.png";
import Storefront from "../public/img/Storefront.svg";
import User from "../public/img/User.svg";
import Rocket from "../public/img/RocketLaunch.svg";
import Space from "../public/img/space.png";
import Avatar from "../public/img/Avatar.png";

import DogCardMainOne from "../public/img/dog-card-main-one.png";
import RabbitCardBodyOne from "../public/img/rabbit-card-body-one.png";
import BearCardBodyOne from "../public/img/bear-card-body-one.png";
import FoxCardAvatarOne from "../public/img/fox-card-avatar-one.png";

import MushroomCardMainSecond from "../public/img/mushroom-card-main-second.png";
import MushroomOneCardBodySecond from "../public/img/mushroom-one-card-body-second.png";
import MushroomTwoCardBodySecond from "../public/img/mushroom-two-card-body-second.png";
import AvatarCardAvatarSecond from "../public/img/avatar-card-avatar-second.png";

import RobotCardMainThirty from "../public/img/robot-card-main-thirty.png";
import RobotOneCardBodyThirty from "../public/img/robot-one-card-body-thirty.png";
import RobotTwoCardBodyThirty from "../public/img/robot-two-card-body-thirty.png";
import RobotCardAvatarThirty from "../public/img/robot-card-avatar-thirty.png";

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
      </div>
    </div>
  );
}

export default App;

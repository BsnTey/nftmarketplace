import "./App.css";

import LogoName from "../public/img/NFT Marketplace.png";
import Storefront from "../public/img/Storefront.svg";
import User from "../public/img/User.svg";
import Rocket from "../public/img/RocketLaunch.svg";
import Space from "../public/img/space.png";
import Avatar from "../public/img/Avatar.png";
import Eye from "../public/img/Eye.svg";

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

import CategoryArt from "../public/img/browse-categories/Art.png";
import CategoryCollectibles from "../public/img/browse-categories/Collectibles.png";
import CategoryMusic from "../public/img/browse-categories/Music.png";
import CategoryPhotography from "../public/img/browse-categories/Photography.png";
import CategoryVideo from "../public/img/browse-categories/Video.png";
import CategoryUtility from "../public/img/browse-categories/Utility.png";
import CategorySport from "../public/img/browse-categories/Sport.png";
import CategoryVirtualWorlds from "../public/img/browse-categories/Virtual Worlds.png";

import PaintBrush from "../public/img/browse-categories/PaintBrush.svg";
import Swatches from "../public/img/browse-categories/Swatches.svg";
import MusicNotes from "../public/img/browse-categories/MusicNotes.svg";
import Camera from "../public/img/browse-categories/Camera.svg";
import VideoCamera from "../public/img/browse-categories/VideoCamera.svg";
import MagicWand from "../public/img/browse-categories/MagicWand.svg";
import Basketball from "../public/img/browse-categories/Basketball.svg";
import Planet from "../public/img/browse-categories/Planet.svg";

import DistantGalaxy from "../public/img/discover/DistantGalaxy.png";
import Life from "../public/img/discover/Life.png";
import AstroFiction from "../public/img/discover/AstroFiction.png";
import MoonDancer from "../public/img/discover/MoonDancer.png";
import NebulaKid from "../public/img/discover/NebulaKid.png";
import Spaceone from "../public/img/discover/Spaceone.png";

import Setup from "../public/img/how-it-works/setup.png";
import Create from "../public/img/how-it-works/create.png";
import Start from "../public/img/how-it-works/start.png";

import Astronaut from "../public/img/Astronaut.png";
import EnvelopeSimple from "../public/img/EnvelopeSimple.svg";

import DiscordLogo from "../public/img/social-logo/DiscordLogo.svg";
import InstagramLogo from "../public/img/social-logo/InstagramLogo.svg";
import TwitterLogo from "../public/img/social-logo/TwitterLogo.svg";
import YoutubeLogo from "../public/img/social-logo/YoutubeLogo.svg";

function App() {
  return (
    <div>
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
              <h2 className="text-4xl font-medium">Trending Collection</h2>
              <p className="text-2xl font-light">Checkout Our Weekly Updated Trending Collection.</p>
            </div>
            <ul className="pt-16 flex justify-between">
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
            </ul>
          </div>

          <div className="text-white py-20">
            <div className="flex justify-between items-end">
              <div className="font-workSans">
                <h2 className="text-4xl font-medium">Top Creators</h2>
                <p className="text-2xl font-light mt-2.5">Checkout Top Rated Creators on the NFT Marketplace</p>
              </div>
              <button className="flex gap-x-3 items-center justify-center rounded-2xl border-violet border-white font-semibold py-5 w-48 hover:bg-regal-violet transition-colors">
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

          <div className="text-white py-20">
            <h2 className="font-workSans text-4xl font-medium">Browse Categories</h2>
            <ul className="mt-16 flex justify-between flex-wrap gap-x-7 gap-y-7">
              <li className="rounded-2xl overflow-hidden relative">
                <img src={CategoryArt} alt="CategoryArt" className="blur-sm " />
                <img src={PaintBrush} alt="PaintBrush" className="absolute top-[70px] right-[70px]" />
                <h3 className="bg-main-second rounded-b-2xl py-5 px-7 font-workSans text-2xl font-medium">Art</h3>
              </li>
              <li className="rounded-2xl overflow-hidden relative">
                <img src={CategoryCollectibles} alt="CategoryCollectibles" className="blur-sm " />
                <img src={Swatches} alt="Swatches" className="absolute top-[70px] right-[70px]" />
                <h3 className="bg-main-second rounded-b-2xl py-5 px-7 font-workSans text-2xl font-medium">Collectibles</h3>
              </li>
              <li className="rounded-2xl overflow-hidden relative">
                <img src={CategoryMusic} alt="CategoryMusic" className="blur-sm " />
                <img src={MusicNotes} alt="MusicNotes" className="absolute top-[70px] right-[70px]" />
                <h3 className="bg-main-second rounded-b-2xl py-5 px-7 font-workSans text-2xl font-medium">Music</h3>
              </li>
              <li className="rounded-2xl overflow-hidden relative">
                <img src={CategoryPhotography} alt="CategoryPhotography" className="blur-sm " />
                <img src={Camera} alt="Camera" className="absolute top-[70px] right-[70px]" />
                <h3 className="bg-main-second rounded-b-2xl py-5 px-7 font-workSans text-2xl font-medium">Photography</h3>
              </li>
              <li className="rounded-2xl overflow-hidden relative">
                <img src={CategoryVideo} alt="CategoryVideo" className="blur-sm " />
                <img src={VideoCamera} alt="VideoCamera" className="absolute top-[70px] right-[70px]" />
                <h3 className="bg-main-second rounded-b-2xl py-5 px-7 font-workSans text-2xl font-medium">Video</h3>
              </li>
              <li className="rounded-2xl overflow-hidden relative">
                <img src={CategoryUtility} alt="CategoryUtility" className="blur-sm " />
                <img src={MagicWand} alt="MagicWand" className="absolute top-[70px] right-[70px]" />
                <h3 className="bg-main-second rounded-b-2xl py-5 px-7 font-workSans text-2xl font-medium">Utility</h3>
              </li>
              <li className="rounded-2xl overflow-hidden relative">
                <img src={CategorySport} alt="CategorySport" className="blur-sm " />
                <img src={Basketball} alt="Basketball" className="absolute top-[70px] right-[70px]" />
                <h3 className="bg-main-second rounded-b-2xl py-5 px-7 font-workSans text-2xl font-medium">Sport</h3>
              </li>
              <li className="rounded-2xl overflow-hidden relative">
                <img src={CategoryVirtualWorlds} alt="CategoryVirtualWorlds" className="blur-sm " />
                <img src={Planet} alt="Planet" className="absolute top-[70px] right-[70px]" />
                <h3 className="bg-main-second rounded-b-2xl py-5 px-7 font-workSans text-2xl font-medium">Virtual Worlds</h3>
              </li>
            </ul>
          </div>

          <div className="text-white py-20">
            <div className="flex justify-between items-end">
              <div className="font-workSans">
                <h2 className="text-4xl font-medium">Discover More NFTs</h2>
                <p className="text-2xl font-light mt-2.5">Explore New Trending NFTs</p>
              </div>
              <button className="flex gap-x-3 items-center justify-center rounded-2xl border-violet border-white font-semibold py-5 w-48 hover:bg-regal-violet transition-colors">
                <img src={Eye} alt="Eye" />
                See All
              </button>
            </div>

            <ul className="mt-16 flex justify-between">
              <li className="rounded-2xl">
                <img src={DistantGalaxy} alt="DistantGalaxy" />
                <div className="px-7 py-5 bg-main-second rounded-b-2xl">
                  <h3 className="font-workSans text-2xl font-medium">Distant Galaxy</h3>
                  <div className="mt-1 flex gap-x-4 items-center font-space">
                    <img src={MoonDancer} alt="MoonDancer" />
                    MoonDancer
                  </div>
                  <div className="mt-8 flex justify-between font-space">
                    <div>
                      <h4 className="text-caption text-xs">Price</h4>
                      <p className="mt-2">1.63 ETH</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h4 className="text-caption text-xs">Highest Bid</h4>
                      <p className="mt-2">0.33 wETH</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="rounded-2xl">
                <img src={Life} alt="Life" />
                <div className="px-7 py-5 bg-main-second rounded-b-2xl">
                  <h3 className="font-workSans text-2xl font-medium">Distant Galaxy</h3>
                  <div className="mt-1 flex gap-x-4 items-center font-space">
                    <img src={NebulaKid} alt="NebulaKid" />
                    NebulaKid
                  </div>
                  <div className="mt-8 flex justify-between font-space">
                    <div>
                      <h4 className="text-caption text-xs">Price</h4>
                      <p className="mt-2">1.63 ETH</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h4 className="text-caption text-xs">Highest Bid</h4>
                      <p className="mt-2">0.33 wETH</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="rounded-2xl">
                <img src={AstroFiction} alt="AstroFiction" />
                <div className="px-7 py-5 bg-main-second rounded-b-2xl">
                  <h3 className="font-workSans text-2xl font-medium">Distant Galaxy</h3>
                  <div className="mt-1 flex gap-x-4 items-center font-space">
                    <img src={Spaceone} alt="Spaceone" />
                    Spaceone
                  </div>
                  <div className="mt-8 flex justify-between font-space">
                    <div>
                      <h4 className="text-caption text-xs">Price</h4>
                      <p className="mt-2">1.63 ETH</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h4 className="text-caption text-xs">Highest Bid</h4>
                      <p className="mt-2">0.33 wETH</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white h-[640px] bg-[url('../public/img/Mushroom.jpg')] bg-cover bg-center ">
          <div className="h-[640px] bg-gradient-to-t from-[#A259FF]">
            <div className="container max-w-[1050px]">
              <div className="pt-[360px] flex justify-between items-end">
                <div className="flex flex-col gap-y-7 font-workSans">
                  <div className="py-2 px-5 flex gap-x-3 font-light rounded-2xl bg-main-second w-fit">
                    <img src={AvatarCardAvatarSecond} alt="AvatarCardAvatarSecond" />
                    Shroomie
                  </div>
                  <h2 className="text-5xl font-medium">Magic Mashrooms</h2>
                  <button className="flex gap-x-3 items-center justify-center rounded-2xl bg-white text-black  font-semibold py-5 w-48 hover:bg-regal-violet transition-colors">
                    <img src={Eye} alt="Eye" />
                    See NFT
                  </button>
                </div>

                <div className="p-7 rounded-2xl bg-main-second bg-opacity-50 font-space ">
                  <p className="text-xs">Auction ends in:</p>
                  <div className="mt-2.5 flex gap-x-2.5">
                    <div className="flex flex-col gap-y-1">
                      <p className="text-4xl font-bold">59</p>
                      <p className="text-xs">Hours</p>
                    </div>
                    <p className="text-3xl mt-1.5">:</p>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-4xl font-bold">59</p>
                      <p className="text-xs">Minutes</p>
                    </div>
                    <p className="text-3xl mt-1.5">:</p>
                    <div className="flex flex-col gap-y-1">
                      <p className="text-4xl font-bold">59</p>
                      <p className="text-xs">Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-[1050px]">
          <div className="py-20">
            <div className="text-white font-workSans">
              <div>
                <h2 className="text-4xl font-medium">How it works</h2>
                <p className="text-2xl">Find Out How To Get Started</p>
              </div>
              <ul className="flex justify-between mt-12">
                <li className="w-[330px] rounded-2xl bg-main-second flex flex-col items-center gap-y-5 pt-2.5 p-7">
                  <img src={Setup} alt="Setup" className="max-w-[250px]" />
                  <div className="flex items-center flex-col gap-y-2.5">
                    <h3 className="text-2xl font-medium">Setup Your Wallet</h3>
                    <p className="text-center font-light ">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
                  </div>
                </li>
                <li className="w-[330px] rounded-2xl bg-main-second flex flex-col items-center gap-y-5 pt-2.5 p-7">
                  <img src={Create} alt="Create" className="max-w-[250px]" />
                  <div className="flex items-center flex-col gap-y-2.5">
                    <h3 className="text-2xl font-medium">Create Collection</h3>
                    <p className="text-center font-light ">Upload your work and setup your collection. Add a description, social links and floor price.</p>
                  </div>
                </li>
                <li className="w-[330px] rounded-2xl bg-main-second flex flex-col items-center gap-y-5 pt-2.5 p-7">
                  <img src={Start} alt="Start" className="max-w-[250px]" />
                  <div className="flex items-center flex-col gap-y-2.5">
                    <h3 className="text-2xl font-medium">Start Earning</h3>
                    <p className="text-center font-light ">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 pb-20">
            <div className="bg-main-second rounded-2xl p-16">
              <div className="flex justify-between">
                <img src={Astronaut} alt="Astronaut" />
                <div className="max-w-[425px] font-workSans text-white">
                  <h2 className="text-4xl font-semibold">Join Our Weekly Digest</h2>
                  <p className="text-2xl font-light mt-2.5">Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
                  <div className="mt-10">
                    <div className="bg-white rounded-2xl flex pl-5 h-16 justify-between">
                      <input type="text" placeholder="Enter your email here" className="text-black" />
                      <button className="flex gap-x-3 bg-main-action items-center px-12 rounded-2xl font-medium">
                        <img src={EnvelopeSimple} alt="EnvelopeSimple" />
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main-second">
        <div className="container max-w-[1050px]">
          <div className="pt-10 pb-10 text-[#CCCCCC] font-workSans">
            <ul className="px-8 pb-8 flex justify-between">
              <li>
                <div className="flex gap-x-3 items-center">
                  <img src={Storefront} alt="Storefront" />
                  <h2 className="font-space text-2xl text-white font-bold">NFT Marketplace</h2>
                </div>
                <ul className="mt-6 w-[240px]">
                  <li>
                    <a href="#">NFT marketplace UI created with Anima for Figma.</a>
                  </li>
                  <li className="mt-5">
                    <a href="#">Join our community</a>
                  </li>
                </ul>

                <div className="flex gap-x-2.5 mt-4">
                  <img src={DiscordLogo} alt="DiscordLogo" />
                  <img src={InstagramLogo} alt="InstagramLogo" />
                  <img src={TwitterLogo} alt="TwitterLogo" />
                  <img src={YoutubeLogo} alt="YoutubeLogo" />
                </div>
              </li>
              <li>
                <h2 className="font-space text-2xl text-white font-bold">Explore</h2>
                <ul className="flex flex-col gap-y-5 mt-6">
                  <li>
                    <a href="#">Marketplace</a>
                  </li>
                  <li>
                    <a href="#">Rankings</a>
                  </li>
                  <li>
                    <a href="#">Connect a wallet</a>
                  </li>
                </ul>
              </li>
              <li>
                <h2 className="font-space text-2xl text-white font-bold">Join our weekly digest</h2>
                <p className="w-[330px] mt-6">
                  <a href="#">Get exclusive promotions & updates straight to your inbox.</a>
                </p>
                <div className="mt-5">
                  <div className="bg-white rounded-2xl flex pl-5 h-16 justify-between">
                    <input type="text" placeholder="Enter your email here" className="text-black" />
                    <button className="flex gap-x-3 bg-main-action items-center px-12 rounded-2xl font-medium">
                      <img src={EnvelopeSimple} alt="EnvelopeSimple" />
                      Subscribe
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <p className="pt-5 border-caption text-xs">Ⓒ NFT Market. Use this template freely.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

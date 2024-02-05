import Rocket from "../public/img/RocketLaunch.svg";
import Space from "../../public/img/space.png";
import Avatar from "../../public/img/Avatar.png";

export const Discover = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col max-w-[510px]">
        <p className="font-workSans text-6xl text-white">Discover Digital Art & Collect NFTs</p>
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
  );
};



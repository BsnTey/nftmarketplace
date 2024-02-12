import { FC } from "react";
import Eye from "../../public/img/Eye.svg";
import AvatarCardAvatarSecond from "../../public/img/trending-collection/avatar-card-avatar-second.png";
import { Button } from "./Button";
import { AuctionTimer } from "./AuctionTimer";

export const MagicMashrooms: FC = (): JSX.Element => {
  return (
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
              <Button imgPath={Eye} text={"See NFT"} className="!px-12 bg-white !text-black" />
            </div>

            <AuctionTimer initialHours={59} initialMinutes={59} initialSeconds={59} />
          </div>
        </div>
      </div>
    </div>
  );
};

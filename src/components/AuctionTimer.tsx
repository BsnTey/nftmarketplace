import { FC } from "react";

export interface AuctionTimerpRrops {
  hours: string;
  minutes: string;
  seconds: string;
}

export const AuctionTimer: FC<AuctionTimerpRrops> = ({ hours, minutes, seconds }: AuctionTimerpRrops): JSX.Element => {
  return (
    <div className="p-7 rounded-2xl bg-main-second bg-opacity-50 font-space ">
      <p className="text-xs">Auction ends in:</p>
      <div className="mt-2.5 flex gap-x-2.5">
        <div className="flex flex-col gap-y-1">
          <p className="text-4xl font-bold">{hours}</p>
          <p className="text-xs">Hours</p>
        </div>
        <p className="text-3xl mt-1.5">:</p>
        <div className="flex flex-col gap-y-1">
          <p className="text-4xl font-bold">{minutes}</p>
          <p className="text-xs">Minutes</p>
        </div>
        <p className="text-3xl mt-1.5">:</p>
        <div className="flex flex-col gap-y-1">
          <p className="text-4xl font-bold">{seconds}</p>
          <p className="text-xs">Seconds</p>
        </div>
      </div>
    </div>
  );
};

// import { FC, useState } from "react";

// export interface AuctionTimerpRrops {
//   hours: string;
//   minutes: string;
//   seconds: string;
//   isBtnActive?: boolean;
// }

// export const AuctionTimer: FC<AuctionTimerpRrops> = ({ hours, minutes, seconds, isBtnActive }: AuctionTimerpRrops): JSX.Element => {
//   const [hour, setHours] = useState(hours);
//   const [minute, setMinutes] = useState(minutes);
//   const [second, setSeconds] = useState(seconds);

//   return (
//     <div className="p-7 rounded-2xl bg-main-second bg-opacity-50 font-space text-white">
//       <p className="text-xs">Auction ends in:</p>
//       <div className="mt-2.5 flex gap-x-2.5">
//         <div className="flex flex-col gap-y-1">
//           <p className="text-4xl font-bold">{hours}</p>
//           <p className="text-xs">Hours</p>
//         </div>
//         <p className="text-3xl mt-1.5">:</p>
//         <div className="flex flex-col gap-y-1">
//           <p className="text-4xl font-bold">{minutes}</p>
//           <p className="text-xs">Minutes</p>
//         </div>
//         <p className="text-3xl mt-1.5">:</p>
//         <div className="flex flex-col gap-y-1">
//           <p className="text-4xl font-bold">{seconds}</p>
//           <p className="text-xs">Seconds</p>
//         </div>
//       </div>
//       {isBtnActive && (
//         <div className="mt-7">
//           <button className="bg-main-action rounded-2xl w-full py-5 font-workSans font-semibold">Place Bid</button>
//         </div>
//       )}
//     </div>
//   );
// };

import { FC, useState, useEffect } from "react";

export interface AuctionTimerProps {
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
  isBtnActive?: boolean;
}

export const AuctionTimer: FC<AuctionTimerProps> = ({ initialHours, initialMinutes, initialSeconds, isBtnActive }: AuctionTimerProps): JSX.Element => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    let totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;

    const intervalId = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(intervalId);
      } else {
        totalSeconds -= 1;
        setTime({
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="p-7 rounded-2xl bg-main-second bg-opacity-50 font-space text-white">
      <p className="text-xs">Auction ends in:</p>
      <div className="mt-2.5 flex gap-x-2.5">
        <div className="flex flex-col gap-y-1">
          <p className="text-4xl font-bold">{String(time.hours).padStart(2, '0')}</p>
          <p className="text-xs">Hours</p>
        </div>
        <p className="text-3xl mt-1.5">:</p>
        <div className="flex flex-col gap-y-1">
          <p className="text-4xl font-bold">{String(time.minutes).padStart(2, '0')}</p>
          <p className="text-xs">Minutes</p>
        </div>
        <p className="text-3xl mt-1.5">:</p>
        <div className="flex flex-col gap-y-1">
          <p className="text-4xl font-bold">{String(time.seconds).padStart(2, '0')}</p>
          <p className="text-xs">Seconds</p>
        </div>
      </div>
      {isBtnActive && (
        <div className="mt-7">
          <button className="bg-main-action rounded-2xl w-full py-5 font-workSans font-semibold">Place Bid</button>
        </div>
      )}
    </div>
  );
};

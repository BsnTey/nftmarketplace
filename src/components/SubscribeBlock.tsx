import { FC } from "react";
import Astronaut from "../../public/img/Astronaut.png";
import { SubscribeForm } from "./SubscribeForm";

export const SubscribeBlock: FC = (): JSX.Element => {
  return (
    <div className="bg-main-second rounded-2xl p-16">
      <div className="flex justify-between">
        <img src={Astronaut} alt="Astronaut" />
        <div className="max-w-[425px] font-workSans text-white">
          <h2 className="text-4xl font-semibold">Join Our Weekly Digest</h2>
          <p className="text-2xl font-light mt-2.5">Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
          <div className="mt-10">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

import { FC } from "react";
import EnvelopeSimple from "../../public/img/EnvelopeSimple.svg";

export const SubscribeForm: FC = (): JSX.Element => {
  return (
    <div className="bg-white rounded-2xl flex pl-5 h-16 justify-between">
      <input type="text" placeholder="Enter your email here" className="text-black" />
      <button className="flex gap-x-3 bg-main-action items-center px-12 rounded-2xl font-medium text-white">
        <img src={EnvelopeSimple} alt="EnvelopeSimple" />
        Subscribe
      </button>
    </div>
  );
};

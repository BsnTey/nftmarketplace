import { FC } from "react";
import { HowItWorksStepCard, HowItWorksStepCardProps } from "./HowItWorksStepCard";

import Setup from "../../public/img/how-it-works/setup.png";
import Create from "../../public/img/how-it-works/create.png";
import Start from "../../public/img/how-it-works/start.png";

const howItWorksStepList: HowItWorksStepCardProps[] = [
  {
    img: Setup,
    title: "Setup Your Wallet",
    descript: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    img: Create,
    title: "Create Collection",
    descript: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    img: Start,
    title: "Start Earning",
    descript: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

export const HowItWorksSteps: FC = (): JSX.Element => {
  return (
    <div className="text-white font-workSans">
      <div>
        <h2 className="text-4xl font-medium">How it works</h2>
        <p className="text-2xl">Find Out How To Get Started</p>
      </div>
      <ul className="flex justify-between mt-12">
        {howItWorksStepList.map((step) => (
          <HowItWorksStepCard key={step.title} img={step.img} descript={step.descript} title={step.title} />
        ))}
      </ul>
    </div>
  );
};

import { FC } from "react";

import { Discover } from "./Discover";
import { TrendingCollection } from "./TrendingCollection";
import { TopCreators } from "./TopCreators";
import { BrowseCategories } from "./BrowseCategories";
import { DiscoverMore } from "./DiscoverMore";
import { MagicMashrooms } from "./MagicMashrooms";
import { HowItWorksSteps } from "./HowItWorksSteps";
import { SubscribeBlock } from "./SubscribeBlock";

export const MainPage: FC = (): JSX.Element => {
  return (
    <>
      <div className="container max-w-[1050px]">
        <div className="py-20">
          <Discover />
        </div>
        <div className="py-20">
          <TrendingCollection />
        </div>

        <div className="py-20">
          <TopCreators />
        </div>

        <div className="py-20">
          <BrowseCategories />
        </div>

        <div className="py-20">
          <DiscoverMore />
        </div>
      </div>

      <MagicMashrooms />

      <div className="container max-w-[1050px]">
        <div className="py-20">
          <HowItWorksSteps />
        </div>

        <div className="pt-10 pb-20">
          <SubscribeBlock />
        </div>
      </div>
      <div />
    </>
  );
};

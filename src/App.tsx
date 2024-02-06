import "./App.css";


import { Header } from "./components/Header";
import { Discover } from "./components/Discover";
import { TrendingCollection } from "./components/TrendingCollection";
import { TopCreators } from "./components/TopCreators";
import { BrowseCategories } from "./components/BrowseCategories";
import { DiscoverMore } from "./components/DiscoverMore";
import { MagicMashrooms } from "./components/MagicMashrooms";
import { HowItWorksSteps } from "./components/HowItWorksSteps";
import { SubscribeBlock } from "./components/SubscribeBlock";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <div className="bg-main-base">
        <div className="container py-4">
          <Header />
        </div>
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
      </div>
      <Footer />
    </div>
  );
}

export default App;

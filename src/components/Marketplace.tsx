import { FC, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

import Search from "../../public/img/Search.svg";
import { MarketplaceList } from "./MarketplaceList";

export const Marketplace: FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("NFTs");

  return (
    <>
      <div className="container max-w-[1050px]">
        <div className="py-20">
          <div className="text-white font-workSans">
            <h2 className="text-5xl font-semibold">Browse Marketplace</h2>
            <p className="text-2xl font-light">Browse through more than 50k NFTs on the NFT Marketplace.</p>
          </div>
          <div className="flex justify-between py-5 rounded-2xl  border-greyCust mt-7">
            <input type="text" placeholder="Search your favourite NFTs" className="pl-5 w-full bg-main-base" />
            <button>
              <img src={Search} alt="Search" className="px-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-top-lightGreyCust"></div>

      <Tabs value={activeTab}>
        <div className="container max-w-[1050px]">
          <TabsHeader
            children={[
              <Tab
                key={"NFTs"}
                value={"NFTs"}
                onClick={() => setActiveTab("NFTs")}
                className={activeTab === "NFTs" ? "border-bot-caption" : ""}
                children={
                  <button className={"font-workSans text-2xl flex gap-x-4 items-center py-4 " + (activeTab === "NFTs" ? "text-white" : "text-greyDark")}>
                    NFTs
                    <p className="font-space py-1 px-2 rounded-2xl bg-main-second w-fit-content text-base">302</p>
                  </button>
                }
                placeholder={"NFTs"}
              ></Tab>,
              <Tab
                key={"Collections"}
                value={"Collections"}
                onClick={() => setActiveTab("Collections")}
                className={activeTab === "Collections" ? "border-bot-caption" : ""}
                children={
                  <button className={"font-workSans text-2xl flex gap-x-4 items-center py-4 " + (activeTab === "Collections" ? "text-white" : "text-greyDark")}>
                    Collections
                    <p className="font-space py-1 px-2 rounded-2xl bg-main-second w-fit-content text-base">67</p>
                  </button>
                }
                placeholder={"Collections"}
              ></Tab>,
            ]}
            placeholder={"TabsHeader"}
          ></TabsHeader>
        </div>
        <div className="bg-main-second pb-20">
          <div className="container max-w-[1050px] pt-16">
            <TabsBody
              children={[
                <TabPanel key={"NFTs"} value={"NFTs"}>
                  <MarketplaceList />
                </TabPanel>,
                <TabPanel key={"Collections"} value={"Collections"}>
                  Desk collections
                </TabPanel>,
              ]}
              placeholder={"TabsBody"}
            ></TabsBody>
          </div>
        </div>
      </Tabs>
    </>
  );
};

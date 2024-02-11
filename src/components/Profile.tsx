import { FC, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import ProfileBg from "../../public/img/ProfileBg.png";
import AvatarProfile from "../../public/img/AvatarProfile.png";
import DiscordLogo from "../../public/img/social-logo/DiscordLogo.svg";
import Globe from "../../public/img/social-logo/Globe.svg";
import YoutubeLogo from "../../public/img/social-logo/YoutubeLogo.svg";
import TwitterLogo from "../../public/img/social-logo/TwitterLogo.svg";
import InstagramLogo from "../../public/img/social-logo/InstagramLogo.svg";
import Copy from "../../public/img/Copy.svg";
import Plus from "../../public/img/Plus.svg";
import { Button } from "./Button";
import { MarketplaceList } from "./MarketplaceList";

export const Profile: FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("Created");
  return (
    <>
      <div className="relative h-[450px]">
        <img src={ProfileBg} alt="Futuristic Landscape" className="w-full h-96 absolute" />
        <div className="container max-w-[1050px] z-10 relative top-[320px]">
          <div className="w-32 h-32 profile__avatar rounded-2xl">
            <img src={AvatarProfile} alt="Artist Icon" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      <div className="container max-w-[1050px]">
        <div className="py-10 text-white flex justify-between">
          <div>
            <p className="font-workSans text-5xl font-semibold">Animakid</p>
            <div className="flex mt-7 gap-x-7 text-white font-space text-3xl">
              <div className="w-[150px]">
                <p>250k+</p>
                <p className="font-workSans text-text-2xl font-light">Volume</p>
              </div>
              <div className="w-[150px]">
                <p>50+</p>
                <p className="font-workSans text-2xl font-light">NFTs Sold</p>
              </div>
              <div className="w-[150px]">
                <p>3000+</p>
                <p className="font-workSans text-2xl font-light">Followers</p>
              </div>
            </div>
            <p className="font-space text-2xl text-greyDark mt-7">Bio</p>
            <p className="font-workSans text-2xl font-light mt-2">The Internet's Friendliest Designer Kid.</p>
            <p className="font-space text-2xl text-greyDark mt-7">Links</p>
            <div className="flex gap-x-2 mt-2">
              <img src={DiscordLogo} alt="DiscordLogo" />
              <img src={Globe} alt="Globe" />
              <img src={YoutubeLogo} alt="YoutubeLogo" />
              <img src={TwitterLogo} alt="TwitterLogo" />
              <img src={InstagramLogo} alt="InstagramLogo" />
            </div>
          </div>

          <div className="flex gap-x-5 items-baseline">
            <Button imgPath={Copy} text={"Скопировать"} />
            <Button imgPath={Plus} text={"Follow"} className="!px-7 border-violet bg-main-base hover:bg-regal-violet transition-colors" />
          </div>
        </div>
      </div>
      <div className="border-top-lightGreyCust"></div>
      <Tabs value={activeTab}>
        <div className="container max-w-[1050px]">
          <TabsHeader
            children={[
              <Tab
                key={"Created"}
                value={"Created"}
                onClick={() => setActiveTab("Created")}
                className={activeTab === "Created" ? "border-bot-caption" : ""}
                children={
                  <button className={"font-workSans text-2xl flex gap-x-4 items-center py-4 " + (activeTab === "Created" ? "text-white" : "text-greyDark")}>
                    Created
                    <p className="font-space py-1 px-2 rounded-2xl bg-main-second w-fit-content text-base">302</p>
                  </button>
                }
                placeholder={"Created"}
              ></Tab>,
              <Tab
                key={"Owned"}
                value={"Owned"}
                onClick={() => setActiveTab("Owned")}
                className={activeTab === "Owned" ? "border-bot-caption" : ""}
                children={
                  <button className={"font-workSans text-2xl flex gap-x-4 items-center py-4 " + (activeTab === "Owned" ? "text-white" : "text-greyDark")}>
                    Owned
                    <p className="font-space py-1 px-2 rounded-2xl bg-main-second w-fit-content text-base">67</p>
                  </button>
                }
                placeholder={"Owned"}
              ></Tab>,
              <Tab
                key={"Collection"}
                value={"Collection"}
                onClick={() => setActiveTab("Collection")}
                className={activeTab === "Collection" ? "border-bot-caption" : ""}
                children={
                  <button className={"font-workSans text-2xl flex gap-x-4 items-center py-4 " + (activeTab === "Collection" ? "text-white" : "text-greyDark")}>
                    Collection
                    <p className="font-space py-1 px-2 rounded-2xl bg-main-second w-fit-content text-base">4</p>
                  </button>
                }
                placeholder={"Collection"}
              ></Tab>,
            ]}
            placeholder={"TabsHeader"}
          ></TabsHeader>
        </div>
        <div className="bg-main-second pb-20">
          <div className="container max-w-[1050px] pt-16">
            <TabsBody
              children={[
                <TabPanel key={"Created"} value={"Created"}>
                  <MarketplaceList />
                </TabPanel>,
                <TabPanel key={"Owned"} value={"Owned"}>
                  Owned Owned
                </TabPanel>,
                <TabPanel key={"Collection"} value={"Collection"}>
                  Collection Collection
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

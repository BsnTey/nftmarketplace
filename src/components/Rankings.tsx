import { FC, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { RankingsTable } from "./RankingsTable";

export const Rankings: FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("Today");

  return (
    <>
      <div className="container max-w-[1050px]">
        <div className="py-20">
          <div className="text-white font-workSans">
            <h2 className="text-5xl font-semibold">Top Creators</h2>
            <p className="text-2xl font-light">Check out top ranking NFT artists on the NFT Marketplace.</p>
          </div>
        </div>
        <Tabs value={activeTab}>
          <TabsHeader
            className="font-medium font-workSans"
            children={[
              <Tab
                key={"Today"}
                value={"Today"}
                onClick={() => setActiveTab("Today")}
                className={activeTab === "Today" ? "border-bot-caption" : ""}
                children={<button className={" text-2xl flex gap-x-4 items-center py-4 " + (activeTab === "Today" ? "text-white" : "text-greyDark")}>Today</button>}
                placeholder={"Today"}
              ></Tab>,
              <Tab
                key={"ThisWeek"}
                value={"ThisWeek"}
                onClick={() => setActiveTab("ThisWeek")}
                className={activeTab === "ThisWeek" ? "border-bot-caption" : ""}
                children={
                  <button className={"text-2xl flex gap-x-4 items-center py-4 " + (activeTab === "ThisWeek" ? "text-white" : "text-greyDark")}>This Week</button>
                }
                placeholder={"ThisWeek"}
              ></Tab>,
              <Tab
                key={"ThisMonth"}
                value={"ThisMonth"}
                onClick={() => setActiveTab("ThisMonth")}
                className={activeTab === "ThisMonth" ? "border-bot-caption" : ""}
                children={
                  <button className={"text-2xl flex gap-x-4 items-center py-4 " + (activeTab === "ThisMonth" ? "text-white" : "text-greyDark")}>This Month</button>
                }
                placeholder={"ThisMonth"}
              ></Tab>,
              <Tab
                key={"AllTime"}
                value={"AllTime"}
                onClick={() => setActiveTab("AllTime")}
                className={activeTab === "AllTime" ? "border-bot-caption" : ""}
                children={
                  <button className={"text-2xl flex gap-x-4 items-center py-4 " + (activeTab === "AllTime" ? "text-white" : "text-greyDark")}>All Time</button>
                }
                placeholder={"AllTime"}
              ></Tab>,
            ]}
            placeholder={"TabsHeader"}
          ></TabsHeader>

          <TabsBody
            className="pb-10"
            children={[
              <TabPanel key={"Today"} value={"Today"}>
                <RankingsTable />
              </TabPanel>,
              <TabPanel key={"Collections"} value={"Collections"}>
                Desk collections
              </TabPanel>,
            ]}
            placeholder={"TabsBody"}
          ></TabsBody>
        </Tabs>
      </div>
    </>
  );
};

import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <div className="bg-main-base">
        <div className="container max-w-[1180px] py-5">
          <Header />
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

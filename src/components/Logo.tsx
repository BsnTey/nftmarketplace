import { FC } from "react";
import Storefront from "../../public/img/Storefront.svg";

export const Logo: FC = (): JSX.Element => {
  return (
    <div className="flex gap-x-3 items-center">
      <img src={Storefront} alt="Storefront" />
      <h2 className="font-space text-2xl text-white font-bold">NFT Marketplace</h2>
    </div>
  );
};

import { FC } from "react";
import Metamask from "../../public/img/Metamask.png";
import WalletConnect from "../../public/img/WalletConnect.png";
import Coinbase from "../../public/img/Coinbase.png";

import ConnectWalletSpace from "../../public/img/ConnectWalletSpace.jpg";

export const ConnectWallet: FC = (): JSX.Element => {
  return (
    <div className="container max-w-[1280px]">
      <div className="flex justify-between">
        <img src={ConnectWalletSpace} alt="RegisterSpace" />
        <div className="font-workSans text-white flex flex-col w-[610px] justify-center">
          <h2 className="text-5xl font-semibold">Connect Wallet</h2>
          <p className="text-2xl w-[460px]">Choose a wallet you want to connect. There are several wallet providers.</p>
          <div className="mt-7">
            <div className="w-[320px] flex flex-col gap-y-5 font-workSans text-2xl font-medium">
              <button className="flex items-center gap-x-5 py-3 px-10 border-violet bg-main-second rounded-2xl">
                <img src={Metamask} alt="Metamask" />
                Metamask
              </button>
              <button className="flex items-center gap-x-5 py-3 px-10 border-violet bg-main-second rounded-2xl">
                <img src={WalletConnect} alt="WalletConnect" />
                Wallet Connect
              </button>
              <button className="flex items-center gap-x-5 py-3 px-10 border-violet bg-main-second rounded-2xl">
                <img src={Coinbase} alt="Coinbase" />
                Coinbase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

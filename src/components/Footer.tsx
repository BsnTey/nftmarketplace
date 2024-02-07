import { FC } from "react";

import DiscordLogo from "../../public/img/social-logo/DiscordLogo.svg";
import InstagramLogo from "../../public/img/social-logo/InstagramLogo.svg";
import TwitterLogo from "../../public/img/social-logo/TwitterLogo.svg";
import YoutubeLogo from "../../public/img/social-logo/YoutubeLogo.svg";
import { Logo } from "./Logo";
import { SubscribeForm } from "./SubscribeForm";

export const Footer: FC = (): JSX.Element => {
  return (
    <div className="bg-main-second border-top-darkGreyCust">
      <div className="container max-w-[1050px]">
        <div className="pt-10 pb-10 text-[#CCCCCC] font-workSans">
          <ul className="px-8 pb-8 flex justify-between">
            <li>
              <Logo />
              <ul className="mt-6 w-[240px]">
                <li>
                  <a href="#">NFT marketplace UI created with Anima for Figma.</a>
                </li>
                <li className="mt-5">
                  <a href="#">Join our community</a>
                </li>
              </ul>

              <div className="flex gap-x-2.5 mt-4">
                <img src={DiscordLogo} alt="DiscordLogo" />
                <img src={InstagramLogo} alt="InstagramLogo" />
                <img src={TwitterLogo} alt="TwitterLogo" />
                <img src={YoutubeLogo} alt="YoutubeLogo" />
              </div>
            </li>
            <li>
              <h2 className="font-space text-2xl text-white font-bold">Explore</h2>
              <ul className="flex flex-col gap-y-5 mt-6">
                <li>
                  <a href="#">Marketplace</a>
                </li>
                <li>
                  <a href="#">Rankings</a>
                </li>
                <li>
                  <a href="#">Connect a wallet</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="font-space text-2xl text-white font-bold">Join our weekly digest</h2>
              <p className="w-[330px] mt-6">
                <a href="#">Get exclusive promotions & updates straight to your inbox.</a>
              </p>
              <div className="mt-5">
                <SubscribeForm />
              </div>
            </li>
          </ul>
          <p className="pt-5 border-caption text-xs">Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </div>
    </div>
  );
};

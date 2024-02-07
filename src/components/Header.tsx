import { FC } from "react";
import { Link } from "react-router-dom";
import User from "../../public/img/User.svg";
import { Button } from "./Button";
import { Logo } from "./Logo";

export const Header: FC = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="flex gap-x-2.5 text-white text-base font-workSans">
        <Link to="marketplace">
          <button className="px-3 py-5">Marketplace</button>
        </Link>

        <Link to="rankings">
          <button className="px-3 py-5">Rankings</button>
        </Link>

        <Link to="connect">
          <button className="px-3 py-5">Connect a wallet</button>
        </Link>

        <Link to="register">
          <Button imgPath={User} text="Sign Up" className="drop-shadow-lg" />
        </Link>
      </div>
    </nav>
  );
};

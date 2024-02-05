import User from "../../public/img/User.svg";
import { Button } from "./Button";
import { Logo } from "./Logo";

export const Header = () => {
    return (
        <nav className="flex justify-between">
            <Logo />
            <div className="flex gap-x-2.5 text-white text-base font-workSans">
                <button className="px-3 py-5">Marketplace</button>
                <button className="px-3 py-5">Rankings</button>
                <button className="px-3 py-5">Connect a wallet</button>
                <Button imgPath={User} text="Sign Up" />
            </div>
        </nav>
    )
}
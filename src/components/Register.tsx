import { FC } from "react";

import RegisterSpace from "../../public/img/RegisterSpace.jpg";
import { RegisterForm } from "./RegisterForm";

export const Register: FC = (): JSX.Element => {
  return (
    <div className="container max-w-[1280px]">
      <div className="flex justify-between">
        <img src={RegisterSpace} alt="RegisterSpace" />
        <div className="font-workSans text-white flex flex-col w-[610px]">
          <h2 className="text-5xl font-semibold">Create account</h2>
          <p className="text-2xl w-[460px]">Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.</p>
          <div className="mt-7">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

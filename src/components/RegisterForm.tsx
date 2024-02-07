import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import User from "../../public/img/User.svg";
import EnvelopeSimple from "../../public/img/EnvelopeSimple.svg";
import LockKey from "../../public/img/LockKey.svg";

export interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const schema = yup
  .object({
    username: yup.string().required("Filed is required").min(3, "Must be at least 3 characters long"),
    email: yup.string().required("Filed is required").email("Must be a valid email"),
    password: yup.string().required("Filed is required").min(6, "Password is too short - should be 6 chars minimum."),
    confirmPassword: yup
      .string()
      .required()
      .label("Confirm password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export const RegisterForm: FC = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[330px]">
      <div className="flex flex-col gap-y-4">
        <div>
          <div className="flex gap-x-3 rounded-2xl py-3 px-5 bg-white">
            <label htmlFor="Username" className="flex items-center">
              <img src={User} alt="User" className="svg-fill-grey" />
            </label>

            <input type="text" id="Username" placeholder="Username" className="text-black" {...register("username")} />
          </div>
          <p className="text-xs text-red-500 pl-5 mt-2">{errors.username?.message}</p>
        </div>

        <div>
          <div className="flex gap-x-3 rounded-2xl py-3 px-5 bg-white">
            <label htmlFor="email" className="flex items-center">
              <img src={EnvelopeSimple} alt="EnvelopeSimple" className="svg-fill-grey" />
            </label>

            <input type="email" id="email" placeholder="Email Address" className="text-black" {...register("email")} />
          </div>
          <p className="text-xs text-red-500 pl-5 mt-2">{errors.email?.message}</p>
        </div>

        <div>
          <div className="flex gap-x-3 rounded-2xl py-3 px-5 bg-white">
            <label htmlFor="Username" className="flex items-center">
              <img src={LockKey} alt="LockKey" className="svg-fill-grey" />
            </label>

            <input type="Password" id="Password" placeholder="Password" className="text-black" {...register("password")} />
          </div>
          <p className="text-xs text-red-500 pl-5 mt-2">{errors.password?.message}</p>
        </div>

        <div>
          <div className="flex gap-x-3 rounded-2xl py-3 px-5 bg-white">
            <label htmlFor="RepeatPassword" className="flex items-center">
              <img src={LockKey} alt="LockKey" className="svg-fill-grey" />
            </label>

            <input type="Password" id="RepeatPassword" placeholder="Confirm Password" className="text-black" {...register("confirmPassword")} />
          </div>
          <p className="text-xs text-red-500 pl-5 mt-2">{errors.confirmPassword?.message}</p>
        </div>
      </div>

      <div className="bg-main-action rounded-2xl flex items-center justify-center mt-7">
        <input type="submit" value="Create account" className=" text-white py-3 font-workSans font-medium" />
      </div>
    </form>
  );
};

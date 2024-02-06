import { FC } from "react";

export interface ButtonProps {
  imgPath: string;
  text: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ imgPath, text, className }: ButtonProps): JSX.Element => {
  const classNameBtn = `flex gap-x-3 items-center text-white px-7 py-5 font-workSans font-medium bg-main-action rounded-2xl w-fit ${className}`;

  return (
    <button className={classNameBtn}>
      <img src={imgPath} alt="Image Button" />
      {text}
    </button>
  );
};

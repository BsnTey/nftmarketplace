import { FC } from "react";

export interface ButtonProps {
    imgPath: string;
    text: string;
}




export const Button: FC<ButtonProps> = ({ imgPath, text }: ButtonProps): JSX.Element => {
    return (
        <button className="flex gap-x-3 items-center px-7 py-5 bg-main-action rounded-2xl drop-shadow-lg">
            <img src={imgPath} alt="User" />
            {text}
        </button>
    )
}
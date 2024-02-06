import { FC } from "react";

export interface TrendingCardProps {
  mainImg: string;
  oneImg: string;
  secondImg: string;
  text: string;
  avatar: string;
  nameAvatar: string;
}

export const TrendingCard: FC<TrendingCardProps> = ({ mainImg, oneImg, secondImg, text, avatar, nameAvatar }: TrendingCardProps): JSX.Element => {
  return (
    <li>
      <img src={mainImg} alt="CardMain" className="rounded-2xl" />
      <div className="flex justify-between mt-4">
        <img src={oneImg} alt="CardBodyOne" className="rounded-2xl" />

        <img src={secondImg} alt="CardBodyTwo" className="rounded-2xl" />

        <p className="bg-main-action rounded-2xl w-[100px] flex items-center justify-center font-space text-2xl">1025+</p>
      </div>
      <p className="font-workSans text-2xl mt-4">{text}</p>
      <div className="mt-2.5 flex gap-x-3 items-center font-workSans font-light">
        <img src={avatar} alt="CardAvatar" className="rounded-full" />
        {nameAvatar}
      </div>
    </li>
  );
};

import { FC } from "react";

export interface CreatorCardProps {
  numberCard?: number;
  avatar: string;
  title: string;
  sale: string;
}

export const CreatorCard: FC<CreatorCardProps> = ({ numberCard, avatar, title, sale }: CreatorCardProps): JSX.Element => {
  return (
    <li className="p-5 bg-main-second rounded-2xl flex flex-col items-center font-workSans relative w-[240px]">
      <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-caption font-space absolute top-5 left-5">{numberCard}</p>
      <img src={avatar} alt="Avatar" className="rounded-full" />
      <p className="mt-5 text-2xl ">{title}</p>
      <p className="mt-1 text-caption text-base">
        Total Sales: <span className="text-white font-space font-medium">{sale} ETH</span>
      </p>
    </li>
  );
};

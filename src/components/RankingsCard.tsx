import { FC } from "react";

export interface RankingsCardProps {
    index?: number,
    avatar: string,
    name: string,
    change: string,
    nftsSold: number,
    volume: string,
}


export const RankingsCard: FC<RankingsCardProps> = ({ index, avatar, name, change, nftsSold, volume }: RankingsCardProps): JSX.Element => {
    return (
        <li className="flex items-center bg-main-second font-space rounded-2xl py-3 px-5">
            <p className="bg-main-base rounded-full w-[30px] h-[30px] flex items-center justify-center text-greyDark px-3">{index}</p>
            <img src={avatar} alt={name} className="ml-5" />
            <p className="font-workSans text-2xl font-medium w-full ml-5">{name}</p>
            <p className="text-green pr-32">{change}</p>
            <p className="pr-28">{nftsSold}</p>
            <p className="text-nowrap pr-24">{volume}</p>
        </li>
    );
};

import { FC } from "react";

export interface HowItWorksStepCardProps {
  img: string;
  title: string;
  descript: string;
}

export const HowItWorksStepCard: FC<HowItWorksStepCardProps> = ({ img, title, descript }: HowItWorksStepCardProps): JSX.Element => {
  return (
    <li className="w-[330px] rounded-2xl bg-main-second flex flex-col items-center gap-y-5 pt-2.5 p-7">
      <img src={img} alt="Step" className="max-w-[250px]" />
      <div className="flex items-center flex-col gap-y-2.5">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-center font-light ">{descript}</p>
      </div>
    </li>
  );
};

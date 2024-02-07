import { FC } from "react";
import NotFoundImg from "../../public/img/notFound.jpg";

export const NotFound: FC = (): JSX.Element => {
  return (
    <div className="flex justify-center h-[640px]">
      <img src={NotFoundImg} alt="NotFound" />
    </div>
  );
};

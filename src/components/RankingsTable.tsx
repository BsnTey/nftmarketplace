import { FC } from "react";

export const RankingsTable: FC = (): JSX.Element => {
  return (
    <table className="w-full text-sm">
      <thead className="">
        <tr className="text-leftfont-space text-base text-greyDark font-light  ">
          <th className="text-center rounded-2xl border-greyCust">#</th>
          <th className="py-3 px-5">Artist</th>
          <th className="">Change</th>
          <th className="">NFTs Sold</th>
          <th className="">Volume</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chris</td>
          <td>HTML tables</td>
          <td>22</td>
          <td>22</td>
          <td>22</td>
        </tr>
      </tbody>
    </table>
  );
};

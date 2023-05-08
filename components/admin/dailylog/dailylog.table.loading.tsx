import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DailyLogTableLoading: FC = () => {
  return (
    <tr>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
    </tr>
  );
};

export default DailyLogTableLoading;

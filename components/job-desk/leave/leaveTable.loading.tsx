import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";

const LeaveTableLoading: FC = () => {
  return (
    <tr>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        <Skeleton />
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        <Skeleton />
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        <Skeleton />
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        <Skeleton />
      </td>
    </tr>
  );
};

export default LeaveTableLoading;

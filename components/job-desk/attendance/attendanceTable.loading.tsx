import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AttendanceTableLoading: FC = () => {
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

export default AttendanceTableLoading;

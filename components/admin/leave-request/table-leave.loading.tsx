import React, { FC } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Skeleton from "react-loading-skeleton";

const TableLeaveLoading: FC = () => {
  return (
    <>
      <tr>
        <td className={"flex flex-row items-center gap-2 p-3"}>
          <Skeleton
            borderRadius={99}
            inline={true}
            width={"2.25rem"}
            height={"2.25rem"}
          />
          <Skeleton inline={true} width={"6rem"} />
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
        <td className={"gap-2 p-3"}>
          <Skeleton />
        </td>
        <td className={"gap-2 p-3"}>
          <button className={"relative"}>
            <EllipsisVerticalIcon className={"h-6 w-6 flex-shrink-0"} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableLeaveLoading;

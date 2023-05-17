import React, { FC } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { LeavesResponse, UsersResponse } from "@/types";
import { format } from "date-fns";

type TExpand = {
  user: UsersResponse;
};

interface Props {
  data: LeavesResponse<TExpand>;
  openAction: LeavesResponse["id"] | undefined;
  setOpenAction: (id: LeavesResponse["id"] | undefined) => void;
}

const TableLeaveItems: FC<Props> = ({ data, openAction, setOpenAction }) => {
  return (
    <>
      <tr>
        <td className={"flex flex-row items-center gap-2 p-3"}>
          {/* todo: add user image */}
          <div className={"h-9 w-9 rounded-full bg-black"}></div>
          <div className={"text-sm font-normal text-black"}>
            {data.expand?.user && data.expand?.user.name}
          </div>
        </td>
        <td className={"gap-2 p-3"}>
          {format(new Date(data.leave_date), "d/MM/yy hh:mm:ss a")}
        </td>
        <td className={"gap-2 p-3"}>{data.leave_type}</td>
        <td className={"gap-2 p-3"}>{data.attachment}</td>
        <td className={"gap-2 p-3"}>{data.status}</td>
        <td className={"gap-2 p-3"}>
          <button className={"relative"}>
            {openAction === data.id && (
              <div
                className={
                  "absolute right-2/3 top-0 z-10 flex w-[238px] flex-col bg-white text-black drop-shadow-lg"
                }
              >
                <button className={"px-3.5 py-2 text-left"}>Approve</button>
                <button className={"px-3.5 py-2 text-left"}>Reject</button>
              </div>
            )}
            <EllipsisVerticalIcon
              className={"h-6 w-6 flex-shrink-0"}
              onClick={() =>
                setOpenAction(openAction !== data.id ? data.id : undefined)
              }
            />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableLeaveItems;

import React, { FC, useContext } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { LeavesResponse, LeavesStatusOptions, UsersResponse } from "@/types";
import { format } from "date-fns";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import Image from "next/image";
import toast from "react-hot-toast";
import { pocketBase } from "@/utils";
import { LeaveRequestContext } from "@/components/admin/leave-request/leave.request.page";

type TExpand = {
  user: UsersResponse;
};

interface Props {
  data: LeavesResponse<TExpand>;
  openAction: LeavesResponse["id"] | undefined;
  setOpenAction: (id: LeavesResponse["id"] | undefined) => void;
}

const TableLeaveItems: FC<Props> = ({ data, openAction, setOpenAction }) => {
  const avatar = createAvatar(initials, {
    seed: data.expand?.user.name,
  }).toDataUriSync();

  const { mutate } = useContext(LeaveRequestContext);

  const handleAction = async (action: LeavesStatusOptions) => {
    try {
      await pocketBase.collection("leaves").update(data.id, {
        status: action,
      });

      setOpenAction(undefined);
      toast.success("Leave request has been updated");
      mutate();
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  return (
    <>
      <tr>
        <td className={"flex flex-row items-center gap-2 p-3"}>
          <Image
            src={avatar}
            alt={""}
            width={36}
            height={36}
            className={"h-9 w-9 rounded-full"}
          />
          <div className={"truncate text-sm font-normal text-black"}>
            {data.expand?.user && data.expand?.user.name}
          </div>
        </td>
        <td className={"gap-2 p-3"}>
          {data.leave_date &&
            format(new Date(data.leave_date), "d/MM/yy hh:mm:ss a")}
        </td>
        <td className={"gap-2 truncate p-3"}>{data.leave_type}</td>
        <td className={"gap-2 truncate p-3"}>{data.attachment}</td>
        <td className={"gap-2 truncate p-3"}>{data.status}</td>
        <td className={"gap-2 p-3"}>
          <button className={"relative"}>
            {openAction === data.id && (
              <div
                className={
                  "absolute right-2/3 top-0 z-10 flex w-[238px] flex-col bg-white text-black drop-shadow-lg"
                }
              >
                <button
                  onClick={() => handleAction(LeavesStatusOptions.paid)}
                  className={"px-3.5 py-2 text-left hover:bg-[#f5f5f5]"}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(LeavesStatusOptions.rejected)}
                  className={"px-3.5 py-2 text-left hover:bg-[#f5f5f5]"}
                >
                  Reject
                </button>
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

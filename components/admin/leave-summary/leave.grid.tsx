import React, { FC } from "react";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { LeavesResponse, LeavesStatusOptions } from "@/types";

const fetcher = async (table: string): Promise<LeavesResponse[]> => {
  try {
    return await pocketBase.collection(table).getFullList<LeavesResponse>();
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const LeaveGrid: FC = () => {
  const { data } = useSWR<LeavesResponse[]>("leaves", fetcher);

  const leaveTaken = data?.filter((leave) => {
    return new Date(leave.leave_date) < new Date();
  }).length;

  const upcomingLeave = data?.filter((leave) => {
    return new Date(leave.leave_date) > new Date();
  }).length;

  const pendingRequest = data?.filter((leave) => {
    return leave.status === LeavesStatusOptions.pending;
  }).length;

  return (
    <div
      className={
        "grid grid-cols-3 divide-x rounded-lg border border-[#EDEDED] px-4 py-6 text-left"
      }
    >
      <span className={"flex flex-col"}>
        <span className={"text-5xl text-[#404040]"}>{leaveTaken}</span>
        <span className={"text-md pt-2 text-[#9E9E9E]"}>Leave taken</span>
      </span>
      <span className={"flex flex-col px-4"}>
        <span className={"text-5xl text-[#404040]"}>{upcomingLeave}</span>
        <span className={"text-md pt-2 text-[#9E9E9E]"}>Upcoming leave</span>
      </span>
      <span className={"flex flex-col px-4"}>
        <span className={"text-5xl text-[#404040]"}>{pendingRequest}</span>
        <span className={"text-md pt-2 text-[#9E9E9E]"}>Pending Request</span>
      </span>
    </div>
  );
};

export default LeaveGrid;

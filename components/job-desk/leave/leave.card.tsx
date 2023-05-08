import React, { FC } from "react";
import LeaveTable from "@/components/job-desk/leave/leave.table";
import LeaveStats from "@/components/job-desk/leave/leave.stats";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { LeavesResponse } from "@/types";

const fetcher = async (page: number, perPage: number) => {
  try {
    return await pocketBase
      .collection("leaves")
      .getList<LeavesResponse>(page, perPage, {
        sort: "-created",
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const LeaveCard: FC = () => {
  const { data, error } = useSWR([1, 10], fetcher);

  return (
    <>
      <div className={"mb-6"}>
        <LeaveStats data={data} error={error} />
      </div>
      <LeaveTable data={data} error={error} />
    </>
  );
};

export default LeaveCard;

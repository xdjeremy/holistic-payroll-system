import React, { FC } from "react";
import LeaveStatsItems from "@/components/job-desk/leave/leavestats.item";
import { LeavesResponse, LeavesStatusOptions } from "@/types";
import { ListResult } from "pocketbase";
import LeaveStatsLoading from "@/components/job-desk/leave/leavestats.loading";

interface Props {
  data: ListResult<LeavesResponse> | undefined;
  error: any;
}

const LeaveStats: FC<Props> = ({ data, error }) => {
  const leaveTaken = data?.items.filter(
    (item) => item.status === LeavesStatusOptions.paid
  );
  const pendingRequest = data?.items.filter(
    (item) => item.status === LeavesStatusOptions.pending
  );

  return (
    <div
      className={
        "grid grid-cols-1 divide-x rounded-lg border border-[#EDEDED] px-6 py-4 lg:grid-cols-3"
      }
    >
      {!data &&
        !error &&
        [1, 2, 3].map((item) => <LeaveStatsLoading key={item} />)}
      {data && (
        <>
          <LeaveStatsItems
            value={leaveTaken ? leaveTaken.length.toString() : "0"}
            label={"Leave taken"}
          />
          <LeaveStatsItems value={"16 Days"} label={"Upcoming leave"} />
          <LeaveStatsItems
            value={pendingRequest ? pendingRequest.length.toString() : "0"}
            label={"Pending request"}
          />
        </>
      )}
    </div>
  );
};

export default LeaveStats;

import React, { FC } from "react";
import LeaveTableItem from "@/components/job-desk/leave/leaveTable.item";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { LeavesResponse } from "@/types";
import LeaveTableLoading from "@/components/job-desk/leave/leaveTable.loading";

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
const LeaveTable: FC = () => {
  const { data, error } = useSWR([1, 10], fetcher);

  return (
    <table className={"w-full"}>
      <thead>
        <tr>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Date & time
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Leave Type
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Attachments
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {!data &&
          !error &&
          [1, 2, 3, 4, 5].map((item) => <LeaveTableLoading key={item} />)}
        {data &&
          data.items.map((item) => (
            <LeaveTableItem
              key={item.id}
              date={item.leave_date}
              leaveType={item.leave_type}
              status={item.status}
              attachments={item.attachment}
            />
          ))}
      </tbody>
    </table>
  );
};

export default LeaveTable;

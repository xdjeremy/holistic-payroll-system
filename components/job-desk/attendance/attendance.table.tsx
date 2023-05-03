import React, { FC } from "react";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { AttendancesResponse } from "@/types";
import AttendanceTableLoading from "@/components/job-desk/attendance/attendanceTable.loading";
import AttendanceTableItem from "@/components/job-desk/attendance/attendanceTable.item";

const fetcher = async (page: number, perPage: number) => {
  try {
    return await pocketBase
      .collection("attendances")
      .getList<AttendancesResponse>(page, perPage, {
        sort: "-created",
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const AttendanceTable: FC = () => {
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
            Date
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Punched in
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            In Geolocation
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Punched out
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Out Geolocation
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Behavior
          </th>
        </tr>
      </thead>
      <tbody>
        {!data &&
          !error &&
          [1, 2, 3, 4, 5].map((k) => <AttendanceTableLoading key={k} />)}

        {data &&
          data.items.map((data) => (
            <AttendanceTableItem
              key={data.id}
              date={data.created}
              punchedIn={data.punch_in}
              punchedOut={data.punch_out}
              outGeolocation={"Philippines"}
              inGeolocation={"Philippines"}
            />
          ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;

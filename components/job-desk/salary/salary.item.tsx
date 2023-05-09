import React, { FC } from "react";
import { AttendancesResponse, UsersResponse } from "@/types";
import { useUser } from "@/context";
import { getTotalHoursFromAttendanceArray, salaryToHour } from "@/utils";
import { format } from "date-fns";

interface Props {
  attendance: AttendancesResponse<{ user: UsersResponse }>[];
}

const SalaryItem: FC<Props> = ({ attendance }) => {
  const { user } = useUser();

  // hourly rate
  const dailyRate = salaryToHour(user?.salary);
  const totalHours = getTotalHoursFromAttendanceArray(attendance);

  // total salary max 2 decimal places
  const totalSalary = (dailyRate * totalHours).toFixed(2);
  return (
    <div
      className={
        "flex flex-col gap-10 rounded-lg border-b border-[#E0E0E0] px-6 pb-4 pt-2"
      }
    >
      <div className={"flex flex-col gap-2"}>
        <span className={"text-xs text-[#757575]"}>Amount</span>
        <h2 className={"text-3xl font-medium text-[#0A7E22]"}>
          ₱{totalSalary}
        </h2>
      </div>
      <div className={"flex flex-row gap-10"}>
        <div className={"flex flex-col gap-2"}>
          <span className={"text-xs text-[#757575]"}>Month</span>
          <span className={"text-sm text-[#0A0A0A]"}>
            {format(new Date(attendance[0].punch_in), "MMMM")}
          </span>
        </div>
        <div className={"flex flex-col gap-2"}>
          <span className={"text-xs text-[#757575]"}>To</span>
          <span className={"text-sm text-[#0A0A0A]"}>{user?.name}</span>
        </div>
        <div className={"flex flex-col gap-2"}>
          <span className={"text-xs text-[#757575]"}>Daily Rate</span>
          <span className={"text-sm text-[#0A0A0A]"}>₱{dailyRate}</span>
        </div>
      </div>
    </div>
  );
};
export default SalaryItem;

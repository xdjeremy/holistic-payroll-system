import React, { FC } from "react";
import { compareAsc, format } from "date-fns";

interface Props {
  date: string;
  punchedIn: string;
  inGeolocation: string;
  punchedOut: string;
  outGeolocation: string;
}

const AttendanceTableItem: FC<Props> = ({
  date,
  punchedIn,
  inGeolocation,
  punchedOut,
  outGeolocation,
}) => {
  return (
    <tr>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {date && format(new Date(date), "MM/dd/yyyy")}
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {punchedIn && format(new Date(punchedIn), "hh:mm:ss a")}
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {inGeolocation}
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {punchedOut && format(new Date(punchedOut), "hh:mm:ss a")}
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {outGeolocation}
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {
          // compare the time of the punched in and the time of the 8:00:00 AM
          // if the punched in is less than the 8:00:00 AM then it is late
          // if the punched in is equal to the 8:00:00 AM then it is on time
          // if the punched in is greater than the 8:00:00 AM then it is early
        }

        {compareAsc(new Date(punchedIn).getTime(), new Date("08:00:00")) === -1
          ? "Late"
          : compareAsc(new Date(punchedIn), new Date("08:00:00")) === 0
          ? "On Time"
          : "Early"}
      </td>
    </tr>
  );
};

export default AttendanceTableItem;

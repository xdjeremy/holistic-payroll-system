import { AttendancesResponse } from "@/types";
import { addHours, differenceInHours } from "date-fns";

const getTotalHoursFromAttendanceArray = (
  attendanceArray: AttendancesResponse[]
) => {
  let totalHours = 0;
  attendanceArray.forEach((attendance) => {
    // if there is no punch out then add 8 hours to punch in
    const punchOut = attendance.punch_out
      ? new Date(attendance.punch_out)
      : addHours(new Date(attendance.punch_in), 8);

    const hours = differenceInHours(punchOut, new Date(attendance.punch_in));

    totalHours += hours;
  });
  return totalHours;
};

export { getTotalHoursFromAttendanceArray };

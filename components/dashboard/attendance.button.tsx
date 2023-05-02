import React, { FC, useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/common";
import { pocketBase } from "@/utils";
import { AttendancesResponse } from "@/types";
import { useEffectOnce } from "usehooks-ts";
import toast from "react-hot-toast";

enum IAttendanceStatus {
  PUNCH_IN = "Punch In",
  PUNCH_OUT = "Punch Out",
  DISABLED = "Already Punch Out",
}

const AttendanceButton: FC = () => {
  const [attendanceStatus, setAttendanceStatus] = useState<IAttendanceStatus>(
    IAttendanceStatus.DISABLED
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const user = pocketBase.authStore.model;
  const currentDateNoTime = new Date().setHours(0, 0, 0, 0);

  useEffectOnce(() => {
    (async () => {
      try {
        setIsLoading(true);

        const userAttendance = await pocketBase
          .collection("attendances")
          .getFullList<AttendancesResponse>({
            filter: `user = '${user?.id}'`,
          });
        const attendanceForToday = userAttendance.find((attendance) => {
          const attendanceDate = new Date(attendance.created).setHours(
            0,
            0,
            0,
            0
          );
          return attendanceDate === currentDateNoTime;
        });

        // if user already punch in, disable button
        if (attendanceForToday?.punch_out) {
          return setAttendanceStatus(IAttendanceStatus.DISABLED);
        }

        // if user already punch out, change button text to punch out
        if (attendanceForToday?.punch_in) {
          return setAttendanceStatus(IAttendanceStatus.PUNCH_OUT);
        }

        // if user not punch in yet, change button text to punch in
        if (!attendanceForToday) {
          return setAttendanceStatus(IAttendanceStatus.PUNCH_IN);
        }
      } catch (err: any) {
      } finally {
        setIsLoading(false);
      }
    })();
  });

  const handleAttendance = async () => {
    try {
      setIsLoading(true);

      // check if user already punch in
      const userAttendance = await pocketBase
        .collection("attendances")
        .getFullList<AttendancesResponse>({
          filter: `user = '${user?.id}'`,
        });
      // get attendance record for today
      const attendanceForToday = userAttendance.find((attendance) => {
        const attendanceDate = new Date(attendance.created).setHours(
          0,
          0,
          0,
          0
        );
        return attendanceDate === currentDateNoTime;
      });

      // if not, create new attendance record
      if (!attendanceForToday) {
        await pocketBase.collection("attendances").create({
          user: user?.id,
          punch_in: new Date().toISOString(),
        });

        return setAttendanceStatus(IAttendanceStatus.PUNCH_OUT);
      }

      // if yes, update attendance record
      if (attendanceForToday) {
        await pocketBase
          .collection("attendances")
          .update(attendanceForToday.id, {
            punch_out: new Date().toISOString(),
          });

        return setAttendanceStatus(IAttendanceStatus.DISABLED);
      }
    } catch (err: any) {
      toast.error(err.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      disabled={attendanceStatus === IAttendanceStatus.DISABLED || isLoading}
      onClick={handleAttendance}
      color={"black"}
    >
      <PlusIcon className={"mr-2 h-5 w-5"} />
      <span>{attendanceStatus}</span>
    </Button>
  );
};

export default AttendanceButton;

import React, { FC, useState } from "react";
import Image from "next/image";
import PunchIn from "../../assets/images/punch_in.svg";
import PunchOut from "../../assets/images/punch_out.svg";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";
import { pocketBase } from "@/utils";
import { AttendancesResponse } from "@/types";
import { compareAsc, format, formatDistance } from "date-fns";

const BannerItem: FC = () => {
  const { user } = useUser();
  const [attendanceToday, setAttendanceToday] =
    useState<AttendancesResponse | null>(null);

  useEffectOnce(() => {
    const getAttendanceToday = async () => {
      const attendance = await pocketBase
        .collection("attendances")
        .getFirstListItem<AttendancesResponse>(
          `user='${pocketBase.authStore.model?.id}'`,
          {
            sort: "-created",
            $autoCancel: false,
          }
        );

      // check if created date is today
      const createdDate = new Date(attendance.created);
      const today = new Date();
      if (createdDate.getDate() !== today.getDate()) {
        return;
      }

      setAttendanceToday(attendance);
    };

    getAttendanceToday().then();
  });

  const renderGreetings = () => {
    const today = new Date();
    // set hour to 8:00 am
    today.setHours(8, 0, 0, 0);

    // check if user punch in today
    if (!attendanceToday?.punch_in) {
      return "You haven't punch in yet.";
    }

    const earlyOrLate = compareAsc(new Date(attendanceToday.punch_in), today);

    const difference =
      attendanceToday?.punch_in &&
      formatDistance(new Date(attendanceToday?.punch_in), today);

    switch (earlyOrLate) {
      case 1:
        return `You came ${difference} early`;
      case -1:
        return `You came ${difference} late`;
      default:
        return "You came on time";
    }
  };

  return (
    <div
      className={
        "my-4 flex flex-row items-center justify-between rounded-lg bg-white px-4 py-2"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <h2 className={"font-bold text-[#0A0A0A]"}>
          Good to see you, {user?.name} 👋
        </h2>
        <p className={"text-sm text-[#616161]"}>{renderGreetings()}</p>
      </div>

      <div className={"flex flex-row items-center gap-8"}>
        {/* punch in start */}
        <div className={"flex flex-row items-center gap-2"}>
          <div className={"rounded bg-[#CEE5D3] p-1.5"}>
            <Image src={PunchIn} alt={"In"} width={24} height={24} />
          </div>
          <div className={"flex flex-col"}>
            <span className={"text-xs font-medium text-[#404040]"}>
              {attendanceToday?.punch_in
                ? format(new Date(attendanceToday?.punch_in), "hh:mm a")
                : "N/A"}
            </span>
            <span className={"text-xs text-[#616161]"}>Punch In</span>
          </div>
        </div>
        {/* punch in end*/}

        {/* punch out start */}
        <div className={"flex flex-row items-center gap-2"}>
          <div className={"rounded bg-[#FFD6DB] p-1.5"}>
            <Image src={PunchOut} alt={"Out"} width={24} height={24} />
          </div>
          <div className={"flex flex-col"}>
            <span className={"text-xs font-medium text-[#404040]"}>
              {attendanceToday?.punch_out
                ? format(new Date(attendanceToday?.punch_out), "hh:mm a")
                : "N/A"}
            </span>
            <span className={"text-xs text-[#616161]"}>Punch Out</span>
          </div>
        </div>
        {/* punch out end */}
      </div>
    </div>
  );
};

export default BannerItem;

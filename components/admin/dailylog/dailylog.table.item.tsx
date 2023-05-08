import React, { FC } from "react";
import { differenceInHours, format } from "date-fns";
import { AttendancesResponse, UsersResponse } from "@/types";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import Image from "next/image";

type TExpand = {
  user: UsersResponse;
};

interface Props {
  data: AttendancesResponse<TExpand>;
}

const DailyLogTableItem: FC<Props> = ({ data }) => {
  const avatar = createAvatar(initials, {
    seed: data.expand?.user.name,
  }).toDataUriSync();
  return (
    <tr>
      <td className={"flex flex-row items-center gap-2 p-3"}>
        <Image
          src={avatar}
          alt={""}
          width={36}
          height={36}
          className={"h-9 w-9 rounded-full"}
        />
        <div className={"text-sm font-normal text-black"}>
          {data.expand?.user && data.expand?.user.name}
        </div>
      </td>
      <td className={"gap-2 p-3"}>
        {data.punch_in && format(new Date(data.punch_in), "d/MM/yy hh:mm:ss a")}
      </td>
      <td className={"gap-2 p-3"}>
        {data.punch_out &&
          format(new Date(data.punch_out), "d/MM/yy hh:mm:ss a")}
      </td>
      <td className={"gap-2 p-3"}>
        {data.punch_in &&
          data.punch_out &&
          differenceInHours(new Date(data.punch_out), new Date(data.punch_in))}
      </td>
    </tr>
  );
};

export default DailyLogTableItem;

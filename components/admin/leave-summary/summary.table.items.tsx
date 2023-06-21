import React, { FC } from "react";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import { LeavesResponse, UsersResponse } from "@/types";
import Image from "next/image";
import { format } from "date-fns";

type TExpand = {
  user: UsersResponse;
};

interface Props {
  data: LeavesResponse<TExpand>;
}

const SummaryTableItems: FC<Props> = ({ data }) => {
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
          {data.expand?.user.name}
        </div>
      </td>
      <td className={"gap-2 p-3"}>
        {format(new Date(data.leave_date), "d/MM/yy hh:mm:ss a")}
      </td>
      <td className={"gap-2 p-3"}>{data.expand?.user.department}</td>
      <td className={"gap-2 p-3"}>{data.leave_type}</td>
      <td className={"gap-2 p-3"}>{data.attachment}</td>
    </tr>
  );
};

export default SummaryTableItems;

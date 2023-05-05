import React, { FC } from "react";
import { format } from "date-fns";

interface Props {
  date: string;
  leaveType: string;
  attachments?: string;
  status: string;
}

const LeaveTableItem: FC<Props> = ({
  date,
  leaveType,
  attachments,
  status,
}) => {
  return (
    <tr>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {date && format(new Date(date), "dd MMM yyyy hh:mm aa")}
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {leaveType && leaveType}
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {attachments && attachments}
      </td>
      <td className={"p-3 text-xs font-normal text-[#0A0A0A]"}>
        {status && status}
      </td>
    </tr>
  );
};

export default LeaveTableItem;

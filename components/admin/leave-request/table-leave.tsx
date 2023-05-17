import React, { FC, useContext, useState } from "react";
import TableLeaveItems from "@/components/admin/leave-request/table-leave-items";
import { LeavesResponse } from "@/types";
import { LeaveRequestContext } from "@/components/admin/leave-request/leave.request.page";
import TableLeaveLoading from "@/components/admin/leave-request/table-leave.loading";

const TableLeave: FC = () => {
  const { data, error } = useContext(LeaveRequestContext);

  const [openAction, setOpenAction] = useState<
    LeavesResponse["id"] | undefined
  >(undefined);

  return (
    <table className={"w-full table-auto"}>
      <thead>
        <tr>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Profile
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Date & Time
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Type
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Attachment
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Status
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {!data && !error && <TableLeaveLoading />}
        {data &&
          !error &&
          data.items.map((data) => (
            <TableLeaveItems
              key={data.id}
              data={data}
              openAction={openAction}
              setOpenAction={setOpenAction}
            />
          ))}
      </tbody>
    </table>
  );
};

export default TableLeave;

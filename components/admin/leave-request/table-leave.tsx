import React, { FC, useState } from "react";
import TableLeaveItems from "@/components/admin/leave-request/table-leave-items";
import { ListResult } from "pocketbase";
import { LeavesResponse, UsersResponse } from "@/types";

type TExpand = {
  user: UsersResponse;
};

interface Props {
  data: ListResult<LeavesResponse<TExpand>> | undefined;
  error: any;
}

const TableLeave: FC<Props> = ({ data, error }) => {
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
        {/*<TableLeaveItems profile={"Theresa Webb"} time={"11/7/16"} duration={"10h 25m"} type={"Marketing"} attachment={"McKeeDebit01.pdf"} stat={"Ready"} action={""}/>*/}
        {/*<TableLeaveItems profile={"Kathryn Murphy"} time={"6/19/14"} duration={"16h 55m"} type={"Support"} attachment={"dealsheet2020.pdf"} stat={"Busy"} action={""}/>*/}
        {/*<TableLeaveItems profile={"Courtney Henry"} time={"7/11/19"} duration={"15h 45m"} type={"Operations"} attachment={"debitnote_march.pdf"} stat={"Ready"} action={""}/>*/}
        {/*<TableLeaveItems profile={"Jane Cooper"} time={"8/2/19"} duration={"10h 45m"} type={"HR"} attachment={"dealsheet_march.xlsx"} stat={"Busy"} action={""}/>*/}
      </tbody>
    </table>
  );
};

export default TableLeave;
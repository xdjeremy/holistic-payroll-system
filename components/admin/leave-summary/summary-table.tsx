import React, { FC, useContext } from "react";
import SummaryTableItems from "@/components/admin/leave-summary/summary.table.items";
import { LeaveSummaryContext } from "@/components/admin/leave-summary/leave.summary.page";
import SummaryTableLoading from "@/components/admin/leave-summary/summary-table.loading";

const SummaryTable: FC = () => {
  const { data, error } = useContext(LeaveSummaryContext);

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
            Department
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Type
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Attachment
          </th>
        </tr>
        {!data &&
          !error &&
          [1, 2, 3, 4, 5].map((item) => <SummaryTableLoading key={item} />)}
        {data &&
          !error &&
          data.items.map((data) => (
            <SummaryTableItems key={data.id} data={data} />
          ))}
      </thead>
    </table>
  );
};

export default SummaryTable;

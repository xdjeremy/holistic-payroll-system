import React, { FC } from "react";
import SummaryTableItems from "@/components/admin/leave-summary/summary.table.items";

const SummaryTable: FC = () => {
  return (
    <table className={"w-full table-fixed"}>
      <thead>
        <tr>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Profile
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Date & Time
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Duration
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
        <SummaryTableItems
          profile={"Jeremy Neigh"}
          time={"9/23/16"}
          duration={"15h 40m"}
          department={"Finance"}
          type={"Design"}
          attachment={"DebitNoteMckee.jpg"}
        />
        <SummaryTableItems
          profile={"Annette Black"}
          time={"7/27/13"}
          duration={"11h 45m"}
          department={"Accounting"}
          type={"Product"}
          attachment={"debitnote_0310.xlsx"}
        />
        <SummaryTableItems
          profile={"Theresa Webb"}
          time={"11/7/16"}
          duration={"10h 25m"}
          department={"Front Desk"}
          type={"Marketing"}
          attachment={"McKeeDebit01.pdf"}
        />
        <SummaryTableItems
          profile={"Kathryn Murphy"}
          time={"6/19/14"}
          duration={"16h 55m"}
          department={"Houseman"}
          type={"Support"}
          attachment={"dealsheet2020.pdf"}
        />
        <SummaryTableItems
          profile={"Courtney Henry"}
          time={"7/11/19"}
          duration={"15h 45m"}
          department={"Laundry"}
          type={"Operation"}
          attachment={"debitnote_march.pdf"}
        />
        <SummaryTableItems
          profile={"Jane Cooper"}
          time={"8/2/19"}
          duration={"10h 45m"}
          department={"Legal"}
          type={"HR"}
          attachment={"dealsheet_march.xlsx"}
        />
      </thead>
    </table>
  );
};

export default SummaryTable;
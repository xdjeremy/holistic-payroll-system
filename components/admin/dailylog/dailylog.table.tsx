import React, { FC, useContext } from "react";
import { DailyLogContext } from "@/components/admin/dailylog/dailylog.page";
import DailyLogTableItem from "@/components/admin/dailylog/dailylog.table.item";

const DailyLogTable: FC = () => {
  const { data } = useContext(DailyLogContext);

  return (
    <table className={"w-full table-auto"}>
      <thead>
        <tr>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Profile
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Punch In
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Punch Out
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Total hours
          </th>
        </tr>
      </thead>
      <tbody>
        {/*{!data &&*/}
        {/*    !error &&*/}
        {/*    [1, 2, 3, 4, 5].map((i) => <EmployeesTableLoading key={i} />)}*/}

        {data &&
          data.items.map((item) => (
            <DailyLogTableItem key={item.id} data={item} />
          ))}
      </tbody>
    </table>
  );
};

export default DailyLogTable;

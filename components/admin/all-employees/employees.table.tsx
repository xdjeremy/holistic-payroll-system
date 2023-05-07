import React, { FC } from "react";
import EmployeesTableItems from "@/components/admin/all-employees/employees.table.items";
import { ListResult } from "pocketbase";
import { UsersResponse } from "@/types";
import EmployeesTableLoading from "@/components/admin/all-employees/employees.table.loading";

interface Props {
  data: ListResult<UsersResponse> | undefined;
  error: any;
}

const EmployeesTable: FC<Props> = ({ data, error }) => {
  return (
    <table className={"w-full table-fixed"}>
      <thead>
        <tr>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Profile
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            ID
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Status
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Department
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Shift
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Joining Date
          </th>
          <th className={"border bg-[#F5F5F5] py-3 pl-3 text-left font-medium"}>
            Role
          </th>
        </tr>
      </thead>
      <tbody>
        {!data &&
          !error &&
          [1, 2, 3, 4, 5].map((i) => <EmployeesTableLoading key={i} />)}

        {data &&
          data.items.map((item) => (
            <EmployeesTableItems
              key={item.id}
              name={item.name}
              id={item.id}
              status={item.status}
              dept={item.department}
              shift={"8h-13h"}
              date={item.created}
              role={item.role}
            />
          ))}
      </tbody>
    </table>
  );
};

export default EmployeesTable;

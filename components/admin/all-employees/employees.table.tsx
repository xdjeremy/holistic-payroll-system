import React from "react";
import EmployeesTableItems from "@/components/admin/all-employees/employees.table.items";

const EmployeesTable = () => {
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
      <EmployeesTableItems/>
      </tbody>
    </table>
  );
};

export default EmployeesTable;

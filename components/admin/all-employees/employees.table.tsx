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
      <EmployeesTableItems name={'Jeremy Neigh'} id={'A0B1C028'} status={'Part-time'} dept={'Support'} shift={'8h-17h'} date={'9/23/16'} role={'Tax officer'}/>
      <EmployeesTableItems name={'Annette Black'} id={'A0B1C086'} status={'On-contract'} dept={'QA'} shift={'8h-13h'} date={'7/27/13'} role={'Branch Manager'}/>
      <EmployeesTableItems name={'Theresa Webb'} id={'A0B1C025'} status={'Seasonal'} dept={'People Ops'} shift={'13h-22h'} date={'11/7/16'} role={'Regional Manager'}/>
      <EmployeesTableItems name={'Kathryn Murphy'} id={'A0B1C044'} status={'Part-time'} dept={'IT'} shift={'17h-22h'} date={'6/19/14'} role={'Trust Administrator'}/>
      <EmployeesTableItems name={'Courtney Henry'} id={'A0B1C099'} status={'Full-time'} dept={'Customer Success'} shift={'8h-17h'} date={'7/11/19'} role={'Vice President'}/>
      <EmployeesTableItems name={'Jane Cooper'} id={'A0B1C095'} status={'Full-time'} dept={'Product'} shift={'8h-17h'} date={'8/2/19'} role={'Trust Office'}/>
      </tbody>
    </table>
  );
};

export default EmployeesTable;

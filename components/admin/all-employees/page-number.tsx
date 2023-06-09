import React, { FC, useContext } from "react";
import { EmployeeContext } from "@/components/admin/all-employees/all-employees.page";

const PageNumber: FC = () => {
  const { page } = useContext(EmployeeContext);

  return (
    <div className={"flex flex-row"}>
      <div className={"px-2 pt-1 text-black"}>Page:</div>
      <div
        className={
          "h-8 w-20 rounded-lg border border-[#E0E0E0] bg-white px-2 pt-1 text-black"
        }
      >
        {page}
      </div>
      <div className={"px-2 pt-1 text-black"}>of</div>
      <div className={"pr-1.5 pt-1 text-blue-600"}>100</div>
    </div>
  );
};

export default PageNumber;
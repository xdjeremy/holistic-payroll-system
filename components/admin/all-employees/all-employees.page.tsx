import React, {FC} from "react";
import {PlusIcon} from "@heroicons/react/20/solid";
import {Button, PageTitle} from "@/components/common";
import {EnvelopeIcon} from "@heroicons/react/24/outline";
import SearchBar from "@/components/admin/all-employees/search-bar";
import EmployeesTable from "@/components/admin/all-employees/employees.table";

const AllEmployeesPage:FC = () => {
    return (
      <>
        <PageTitle title={"All Employee"}>
          <div className={"flex flex-row px-3"}>
            <Button color={"black"}>
              <PlusIcon className={"mr-2 h-5 w-5"} />
              <span>Add Employee</span>
            </Button>
          </div>
            <button
              className={
                "flex flex-row items-center rounded-md bg-white px-4 py-1.5 font-medium text-[#0A0A0A]"
              }
            >
              <EnvelopeIcon className={"mr-2 h-5 w-5"} />
              <span>Invite</span>
            </button>
        </PageTitle>
          <div className={"bg-white rounded-md px-8 pt-4"}>
              <SearchBar/>
              <div className={"text-black font-bold text-xl py-8"}>
                  Announcements
              </div>
              <EmployeesTable/>
              <div className={"border border-[#E0E0E0] border-t-3 mt-2.5"}></div>


          </div>
      </>
    );
}
export default AllEmployeesPage
import React, { FC } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Button, PageTitle } from "@/components/common";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import SearchBar from "@/components/admin/all-employees/search-bar";
import EmployeesTable from "@/components/admin/all-employees/employees.table";
import PageButton from "@/components/admin/all-employees/page-button";
import PageNumber from "@/components/admin/all-employees/page-number";
import Dropdown from "@/components/admin/all-employees/dropdown";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { UsersResponse } from "@/types";

const getUsers = async (page: number, perPage: number) => {
  try {
    return await pocketBase
      .collection("users")
      .getList<UsersResponse>(page, perPage);
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const AllEmployeesPage: FC = () => {
  const { data, error } = useSWR([1, 10], getUsers);

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
      <div className={"rounded-md bg-white px-8 pt-4"}>
        <SearchBar />
        <div className={"py-8 text-xl font-bold text-black"}>Announcements</div>
        <EmployeesTable data={data} error={error} />
        <div className={"border-t-3 mb-2 mt-2.5 border border-[#E0E0E0]"}></div>
        <div className={"flex flex-row justify-end pb-2.5"}>
          <PageButton />
          <PageNumber />
          <Dropdown />
        </div>
      </div>
    </>
  );
};
export default AllEmployeesPage;

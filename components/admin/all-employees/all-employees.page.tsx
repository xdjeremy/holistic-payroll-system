import React, { createContext, FC, useState } from "react";
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
import { ListResult } from "pocketbase";
import AddEmployeeModal from "@/components/admin/all-employees/add.employee.modal";

export const EmployeeContext = createContext({
  page: 1,
  perPage: 10,
  setPage: (_page: number) => {},
  setPerPage: (_perPage: number) => {},
  data: {} as ListResult<UsersResponse> | undefined,
  error: undefined as any,
  searchQuery: "",
  setSearchQuery: (_searchQuery: string) => {},
});
const getUsers = async (params: any) => {
  const [page, perPage, searchQuery] = params;

  try {
    return await pocketBase
      .collection("users")
      .getList<UsersResponse>(page, perPage, {
        sort: "-created",
        filter: `name ~ "${searchQuery}" || email ~ "${searchQuery}" || role ~ "${searchQuery}" || department ~ "${searchQuery}"`,
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const AllEmployeesPage: FC = () => {
  const [perPage, setPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [showModal, setShowModal] = useState<boolean>(false);

  const { data, error } = useSWR([page, perPage, searchQuery], getUsers);

  return (
    <>
      {showModal && (
        <div
          className={
            "absolute left-0 top-0 z-10 h-screen w-full bg-black bg-opacity-50"
          }
        >
          <AddEmployeeModal setShowModal={setShowModal} />
        </div>
      )}
      <EmployeeContext.Provider
        value={{
          page,
          perPage,
          setPage,
          setPerPage,
          data,
          error,
          searchQuery,
          setSearchQuery,
        }}
      >
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
          <div className={"py-8 text-xl font-bold text-black"}>
            Announcements
          </div>
          <EmployeesTable data={data} error={error} />
          <div
            className={"border-t-3 mb-2 mt-2.5 border border-[#E0E0E0]"}
          ></div>
          <div className={"flex flex-row justify-end pb-2.5"}>
            <PageButton />
            <PageNumber />
            <Dropdown />
          </div>
        </div>
      </EmployeeContext.Provider>
    </>
  );
};
export default AllEmployeesPage;

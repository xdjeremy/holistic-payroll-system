import React, { createContext, FC, useState } from "react";
import { PageTitle } from "@/components/common";
import SearchBarLeave from "@/components/admin/leave-request/search-bar-leave";
import TableLeave from "@/components/admin/leave-request/table-leave";
import { pocketBase } from "@/utils";
import useSWR from "swr";
import { LeavesResponse, UsersResponse } from "@/types";
import Pagination from "@/components/common/pagination";
import { ListResult } from "pocketbase";
import { any } from "prop-types";

type TExpand = {
  user: UsersResponse;
};

export const LeaveRequestContext = createContext({
  data: {} as ListResult<LeavesResponse<TExpand>> | undefined,
  error: any,
  page: 1,
  perPage: 10,
  setPage: (_page: number) => {},
  setPerPage: (_perPage: number) => {},
  searchQuery: "",
  setSearchQuery: (_searchQuery: string) => {},
});

const fetcher = async (query: any) => {
  const [page, perPage, searchQuery] = query;
  try {
    return await pocketBase
      .collection("leaves")
      .getList<LeavesResponse<TExpand>>(page, perPage, {
        sort: "-created",
        expand: "user",
        filter: `user.name ~ '${searchQuery}' || leave_type ~ '${searchQuery}' || status ~ '${searchQuery}'`,
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};

const LeaveRequestPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, error } = useSWR([page, perPage, searchQuery], fetcher);
  console.log(data);

  return (
    <>
      <LeaveRequestContext.Provider
        value={{
          data,
          error,
          page,
          perPage,
          setPage,
          setPerPage,
          searchQuery,
          setSearchQuery,
        }}
      >
        <PageTitle title={"Leave Request"}>
          <></>
        </PageTitle>
        <div className={"justify-between rounded-md bg-white px-8 pt-4"}>
          <div className={"flex flex-col gap-5 pb-10 lg:flex-row"}>
            <div className={"w-full"}>
              <button
                className={"rounded-l-lg border border-[#C2C2C2] px-4 py-1.5"}
              >
                Apply Between
              </button>
              <button className={" border border-[#C2C2C2] px-4 py-1.5"}>
                Department
              </button>
              <button className={"border border-[#C2C2C2] px-4 py-1.5"}>
                Work shift
              </button>
              <button className={"border border-[#C2C2C2] px-4 py-1.5"}>
                Rejected
              </button>
              <button
                className={"rounded-r-lg border border-[#C2C2C2] px-4 py-1.5"}
              >
                Duration
              </button>
            </div>
            <SearchBarLeave />
          </div>
          <div className={"relative overflow-auto"}>
            <TableLeave />
          </div>

          <div
            className={"border-t-3 mb-2 mt-2.5 border border-[#E0E0E0]"}
          ></div>
          <Pagination context={LeaveRequestContext} />
        </div>
      </LeaveRequestContext.Provider>
    </>
  );
};

export default LeaveRequestPage;

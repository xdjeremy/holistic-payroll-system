import React, { createContext, FC, useState } from "react";
import { PageTitle } from "@/components/common";
import LeaveGrid from "@/components/admin/leave-summary/leave.grid";
import SummarySearchbar from "@/components/admin/leave-summary/summary-searchbar";
import SummaryTable from "@/components/admin/leave-summary/summary-table";
import { pocketBase } from "@/utils";
import Pagination from "@/components/common/pagination";
import { LeavesResponse, UsersResponse } from "@/types";
import { ListResult } from "pocketbase";
import { any } from "prop-types";
import useSWR from "swr";

type TExpand = {
  user: UsersResponse;
};

export const LeaveSummaryContext = createContext({
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
        filter: `attachment ~ '${searchQuery}' || user.name ~ '${searchQuery}' || user.department ~ '${searchQuery}'`,
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const LeaveSummaryPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data, error } = useSWR([page, perPage, searchQuery], fetcher);

  return (
    <>
      <LeaveSummaryContext.Provider
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
        <PageTitle title={"Summary"}>
          {/*<div className={"flex flex-row px-3"}>*/}
          {/*  <Button color={"black"}>*/}
          {/*    <ArrowRightOnRectangleIcon className={"mr-2 h-5 w-5"} />*/}
          {/*    <span>Assign Leave</span>*/}
          {/*  </Button>*/}
          {/*</div>*/}
        </PageTitle>
        <div className={"rounded-md bg-white px-8 pt-4"}>
          {/*<div className={"flex flex-row justify-between pb-8"}>*/}
          {/*  <LeaveDropdown />*/}
          {/*  <Button color={"white"}>*/}
          {/*    <CalendarIcon className={"mr-2 h-5 w-5"} />*/}
          {/*    <span>Select Date</span>*/}
          {/*  </Button>*/}
          {/*</div>*/}
          <LeaveGrid />
          <div className={"py-6"}>
            <SummarySearchbar />
          </div>
          <div className={"relative overflow-auto"}>
            <SummaryTable />
          </div>
          <div
            className={"border-t-3 mb-2 mt-2.5 border border-[#E0E0E0]"}
          ></div>
          <div className={"flex flex-row justify-end"}>
            <Pagination context={LeaveSummaryContext} />
          </div>
        </div>
      </LeaveSummaryContext.Provider>
    </>
  );
};

export default LeaveSummaryPage;

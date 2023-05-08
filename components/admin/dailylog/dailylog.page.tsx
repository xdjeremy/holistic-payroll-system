import React, { createContext, FC, useState } from "react";
import { PageTitle } from "@/components/common";
import DailyLogSearchBar from "@/components/admin/dailylog/dailylog.searchbar";
import DailyLogTable from "@/components/admin/dailylog/dailylog.table";
import { pocketBase } from "@/utils";
import { AttendancesResponse, UsersResponse } from "@/types";
import useSWR from "swr";
import { ListResult } from "pocketbase";
import { any } from "prop-types";

type TExpand = {
  user: UsersResponse;
};
export const DailyLogContext = createContext({
  data: {} as ListResult<AttendancesResponse<TExpand>> | undefined,
  error: any,
  page: 1,
  perPage: 10,
  setPage: (_page: number) => {},
  setPerPage: (_perPage: number) => {},
  searchQuery: "",
  setSearchQuery: (_searchQuery: string) => {},
});
const fetcher = async (params: any) => {
  const [page, perPage, query] = params;
  try {
    return pocketBase
      .collection("attendances")
      .getList<AttendancesResponse<TExpand>>(page, perPage, {
        filter: `user.username ~ '${query}'`,
        expand: "user",
        sort: "-created",
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const DailyLogPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, error } = useSWR([page, perPage, searchQuery], fetcher);

  return (
    <>
      <DailyLogContext.Provider
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
        <PageTitle title={"Daily Log"}>
          <></>
        </PageTitle>
        <div className={"rounded-md bg-white px-8 py-4"}>
          <DailyLogSearchBar />
          <div className={"mt-6"}>
            <DailyLogTable />
          </div>
        </div>
      </DailyLogContext.Provider>
    </>
  );
};

export { DailyLogPage };

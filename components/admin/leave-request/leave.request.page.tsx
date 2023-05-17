import React, { FC, useState } from "react";
import { PageTitle } from "@/components/common";
import SearchBarLeave from "@/components/admin/leave-request/search-bar-leave";
import TableLeave from "@/components/admin/leave-request/table-leave";
import PageButton from "@/components/admin/all-employees/page-button";
import PageNumber from "@/components/admin/all-employees/page-number";
import Dropdown from "@/components/admin/all-employees/dropdown";
import { pocketBase } from "@/utils";
import useSWR from "swr";
import { LeavesResponse, UsersResponse } from "@/types";

type TExpand = {
  user: UsersResponse;
};
const fetcher = async (query: any) => {
  const [page, perPage, filter] = query;
  try {
    return await pocketBase
      .collection("leaves")
      .getList<LeavesResponse<TExpand>>(page, perPage, {
        sort: "-created",
        // filter: `user.name ~ '${filter}', leave_type ~ '${filter}', status ~ '${filter}'`,
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const LeaveRequestPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [filter, setFilter] = useState<string>("");
  const { data, error } = useSWR([page, perPage, filter], fetcher);

  return (
    <>
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
        <TableLeave data={data} error={error} />

        <div className={"border-t-3 mb-2 mt-2.5 border border-[#E0E0E0]"}></div>
        <div className={"flex flex-row justify-end pb-36"}>
          <PageButton />
          <PageNumber />
          <Dropdown />
        </div>
      </div>
    </>
  );
};

export default LeaveRequestPage;

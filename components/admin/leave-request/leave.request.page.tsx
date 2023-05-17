import React, {FC} from 'react';
import {PageTitle} from "@/components/common";
import SearchBarLeave from "@/components/admin/leave-request/search-bar-leave";
import TableLeave from "@/components/admin/leave-request/table-leave";
import PageButton from "@/components/admin/all-employees/page-button";
import PageNumber from "@/components/admin/all-employees/page-number";
import Dropdown from "@/components/admin/all-employees/dropdown";

const LeaveRequestPage: FC = () => {
    return (
      <>
        <PageTitle title={"Leave Request"}>
          <></>
        </PageTitle>
          <div className={"justify-between rounded-md bg-white px-8 pt-4"}>
        <div
          className={"flex flex-row pb-10"}
        >
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
            <TableLeave/>

          <div
              className={"border-t-3 mb-2 mt-2.5 border border-[#E0E0E0]"}
          ></div>
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
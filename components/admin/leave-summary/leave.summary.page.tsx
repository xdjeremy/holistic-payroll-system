import React, { FC } from "react";
import { Button, PageTitle } from "@/components/common";
import {
  ArrowRightOnRectangleIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import LeaveDropdown from "@/components/admin/leave-summary/leave.dropdown";
import LeaveGrid from "@/components/admin/leave-summary/leave.grid";
import SummarySearchbar from "@/components/admin/leave-summary/summary-searchbar";
import SummaryTable from "@/components/admin/leave-summary/summary-table";
import PageButton from "@/components/admin/all-employees/page-button";
import PageNumber from "@/components/admin/all-employees/page-number";
import Dropdown from "@/components/admin/all-employees/dropdown";

const LeaveSummaryPage: FC = () => {
  return (
    <>
      <PageTitle title={"Summary"}>
        <div className={"flex flex-row px-3"}>
          <Button color={"black"}>
            <ArrowRightOnRectangleIcon className={"mr-2 h-5 w-5"} />
            <span>Assign Leave</span>
          </Button>
        </div>
      </PageTitle>
      <div className={"rounded-md bg-white px-8 pt-4"}>
        <div className={"flex flex-row justify-between pb-8"}>
          <LeaveDropdown />
          <Button color={"white"}>
            <CalendarIcon className={"mr-2 h-5 w-5"} />
            <span>Select Date</span>
          </Button>
        </div>
        <LeaveGrid />
        <div className={"py-6"}>
          <SummarySearchbar />
        </div>
        <SummaryTable />
        <div className={"border-t-3 mb-2 mt-2.5 border border-[#E0E0E0]"}></div>
        <div className={"flex flex-row justify-end"}>
          <PageButton />
          <PageNumber />
          <Dropdown />
        </div>
      </div>
    </>
  );
};

export default LeaveSummaryPage;
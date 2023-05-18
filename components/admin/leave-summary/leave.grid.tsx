import React, { FC } from "react";

const LeaveGrid: FC = () => {
  return (
    <div
      className={
        "grid grid-cols-3 divide-x rounded-lg border border-[#EDEDED] px-4 py-6 text-left"
      }
    >
      <span className={"flex flex-col"}>
        <span className={"text-5xl text-[#404040]"}>12</span>
        <span className={"text-md pt-2 text-[#9E9E9E]"}>Leave taken</span>
      </span>
      <span className={"flex flex-col px-4"}>
        <span className={"text-5xl text-[#404040]"}>23 days</span>
        <span className={"text-md pt-2 text-[#9E9E9E]"}>Upcoming leave</span>
      </span>
      <span className={"flex flex-col px-4"}>
        <span className={"text-5xl text-[#404040]"}>6</span>
        <span className={"text-md pt-2 text-[#9E9E9E]"}>Pending Request</span>
      </span>
    </div>
  );
};

export default LeaveGrid;
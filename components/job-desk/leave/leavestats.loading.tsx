import React, { FC } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const LeaveStatsLoading: FC = () => {
  return (
    <div className={"flex flex-col px-4 font-medium"}>
      <span className={"text-base text-[#404040]"}>
        <Skeleton />
      </span>
      <span className={"text-xs text-[#9E9E9E]"}>
        <Skeleton />
      </span>
    </div>
  );
};

export default LeaveStatsLoading;

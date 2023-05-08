import React, { FC } from "react";

interface Props {
  value: string;
  label: string;
}

const LeaveStatsItems: FC<Props> = ({ value, label }) => {
  return (
    <div className={"flex flex-col px-4 font-medium"}>
      <span className={"text-base text-[#404040]"}>{value}</span>
      <span className={"text-xs text-[#9E9E9E]"}>{label}</span>
    </div>
  );
};

export default LeaveStatsItems;

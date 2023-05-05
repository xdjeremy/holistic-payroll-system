import React, { FC } from "react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const AllowanceBanner: FC = () => {
  return (
    <div
      className={
        "flex flex-row gap-2 rounded-lg border border-[#F0B732] bg-[#FCF1D6] p-4"
      }
    >
      <ExclamationTriangleIcon className={"h-7 w-7 text-[#F0B732]"} />
      <div className={"flex w-full flex-col gap-2"}>
        <h4 className={"font-bold text-[#0A0A0A]"}>Allowance Policy</h4>
        <span className={"text-sm text-[#404040]"}>
          <p>1. Leave will start from the month of January</p>
          <p>2. Any type of change will be effective on the next day.</p>
        </span>
      </div>
      <XMarkIcon className={"h-6 w-6 cursor-pointer text-[#F0B732]"} />
    </div>
  );
};

export default AllowanceBanner;

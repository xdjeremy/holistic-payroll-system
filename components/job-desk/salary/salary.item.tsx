import React, { FC } from "react";

const SalaryItem: FC = () => {
  return (
    <div
      className={
        "flex flex-col gap-10 rounded-lg border-b border-[#E0E0E0] px-6 pb-4 pt-2"
      }
    >
      <div className={"flex flex-col gap-2"}>
        <span className={"text-xs text-[#757575]"}>Amount</span>
        <h2 className={"text-3xl font-medium text-[#0A7E22]"}>₱20,000.00</h2>
      </div>
      <div className={"flex flex-row gap-10"}>
        <div className={"flex flex-col gap-2"}>
          <span className={"text-xs text-[#757575]"}>To</span>
          <span className={"text-sm text-[#0A0A0A]"}>Sebastian Vettel</span>
        </div>
        <div className={"flex flex-col gap-2"}>
          <span className={"text-xs text-[#757575]"}>To</span>
          <span className={"text-sm text-[#0A0A0A]"}>Sebastian Vettel</span>
        </div>
        <div className={"flex flex-col gap-2"}>
          <span className={"text-xs text-[#757575]"}>To</span>
          <span className={"text-sm text-[#0A0A0A]"}>Sebastian Vettel</span>
        </div>
      </div>
    </div>
  );
};
export default SalaryItem;

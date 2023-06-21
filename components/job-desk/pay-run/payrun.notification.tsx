import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const PayRunNotification = () => {
  return (
    <div
      className={
        "flex h-full flex-row gap-2 rounded-lg border border-[#146ADC] bg-[#D0E1F8] p-4"
      }
    >
      <div className={"flex"}>
        <ExclamationTriangleIcon className={"h-6 w-6 text-[#146ADC]"} />
      </div>
      <div className={"flex h-full flex-col gap-2"}>
        <h3 className={"text- font-bold"}>Payrun</h3>
        <ol className={"list-decimal text-sm text-[#404040]"} type={"1"}>
          <li>
            By default all payrun and beneficiary badges is set from default
            setting.
          </li>
          <li>
            You can individually update or change these values from the edit
            option.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PayRunNotification;

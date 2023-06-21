import React, { FC } from "react";

const PayRunInput: FC<{
  label: string;
  value: string;
}> = ({ label, value }) => {
  return (
    <div className={"flex w-full flex-col gap-2"}>
      <label htmlFor={label} className={"text-sm text-[#0A0A0A]"}>
        {label}
      </label>
      <input
        className={
          "w-full rounded-lg border border-[#C2C2C2] p-2 text-sm text-[#404040]"
        }
        name={label}
        value={value}
        readOnly={true}
      />
    </div>
  );
};
const PayRunForm: FC = () => {
  return (
    <div className={"flex w-full flex-row items-center justify-evenly gap-6"}>
      <PayRunInput label={"Payrun period"} value={"Monthly"} />
      <PayRunInput label={"Bonus"} value={"10 %"} />
      <PayRunInput label={"Tax"} value={"1.5 %"} />
    </div>
  );
};

export default PayRunForm;

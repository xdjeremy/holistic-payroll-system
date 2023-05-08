import React, { FC } from "react";

interface Props {
  name: string;
  register: any;
  type: "text" | "number";
  validation: any;
  label?: string;
}

const JobDeskInput: FC<Props> = ({
  name,
  register,
  type,
  validation,
  label,
}) => {
  return (
    <div className={"flex flex-col gap-2"}>
      <label className={"text-sm"}>{label}</label>
      <input
        className={"rounded-lg border border-[#C2C2C2] bg-white"}
        type={type}
        {...register(name, validation)}
      />
    </div>
  );
};

export default JobDeskInput;

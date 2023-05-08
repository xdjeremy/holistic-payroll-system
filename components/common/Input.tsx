import React, { FC } from "react";
import { classNames } from "@/utils";

interface Props {
  name: string;
  label: string;
  register: any;
  validation: any;
  error?: string;
  type?: "text" | "password" | "email" | "number";
}

const Input: FC<Props> = ({
  name,
  label,
  register,
  validation,
  error,
  type = "text",
}) => {
  return (
    <div className={"flex flex-col gap-2"}>
      <label htmlFor={name} className={"text-sm"}>
        {label}
      </label>
      <div className={"flex flex-col gap-0"}>
        <input
          {...register(name, validation)}
          id={name}
          type={type}
          className={classNames(
            error ? "border-red-500" : "border-[#C2C2C2]",
            "h-11 w-full rounded-lg border px-2 py-3 focus:outline-none"
          )}
        />
        <label className={"ml-2 text-sm text-red-500"}>{error}</label>
      </div>
    </div>
  );
};

export { Input };

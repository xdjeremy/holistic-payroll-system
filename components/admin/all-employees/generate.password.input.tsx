import React, { FC } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  register: any;
  setValue: any;
}

const GeneratePasswordInput: FC<Props> = ({ register, setValue }) => {
  const generatePassword = () => {
    const password = Math.random().toString(36).slice(-8);
    setValue("password", password);
  };

  useEffectOnce(() => {
    generatePassword();
  });
  return (
    <div className={"relative flex flex-col gap-2"}>
      <label htmlFor={"password"} className={"text-sm"}>
        Password
      </label>
      <label
        onClick={generatePassword}
        className={
          "absolute right-1 top-8 cursor-pointer rounded-lg bg-black p-2 "
        }
      >
        <ArrowPathIcon className={"h-5 w-5 text-[#C2C2C2]"} />
      </label>
      <div className={"flex flex-col gap-0"}>
        <input
          {...register("password")}
          id={"password"}
          disabled={true}
          type={"text"}
          className={
            "h-11 w-full rounded-lg border border-[#C2C2C2] px-2 py-3 focus:outline-none"
          }
        />
      </div>
    </div>
  );
};

export default GeneratePasswordInput;

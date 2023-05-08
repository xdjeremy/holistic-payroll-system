import React, { FC } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

interface Props {
  isLoading: boolean;
}

const LoginButton: FC<Props> = ({ isLoading }) => {
  return (
    <button
      disabled={isLoading}
      type={"submit"}
      className={
        "flex w-44 flex-row items-center justify-center gap-6 rounded-2xl bg-[#585CE5] px-5 py-4 hover:bg-[#4245ac] disabled:bg-[#2c2e72]"
      }
    >
      <span className={"font-semibold"}>Sign In</span>
      <ArrowLongRightIcon className={"ml-2 h-6 w-6"} />
    </button>
  );
};

export default LoginButton;

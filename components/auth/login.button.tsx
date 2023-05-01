import React, { FC } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const LoginButton: FC = () => {
  return (
    <button type={'submit'} className={'bg-[#585CE5] rounded-2xl py-4 px-5 flex flex-row items-center w-44 justify-center gap-6 hover:bg-[#4245ac]'}>
      <span className={'font-semibold'}>Sign In</span>
      <ArrowLongRightIcon className={"ml-2 h-6 w-6"} />
    </button>
  );
};

export default LoginButton;

import React, { FC } from "react";
import { UserIcon } from "@heroicons/react/24/outline";

const TextInput: FC = () => {
  return (
    <div className={"relative w-full"}>
      <label htmlFor="username" className={"absolute top-6 left-5"}>
        <UserIcon className={"h-5 w-5 text-[#898D9E]"} />
      </label>
      <input
        id={"username"}
        type="text"
        className={"h-16 rounded-2xl px-11 text-black w-full"}
        placeholder={"Enter Username"}
      />
    </div>
  );
};

export default TextInput;

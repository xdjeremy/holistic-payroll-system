import React, { FC, useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const PasswordInput: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={"relative w-full"}>
      <label htmlFor="password" className={"absolute left-5 top-6"}>
        <LockClosedIcon className={"h-5 w-5 text-[#898D9E]"} />
      </label>
      <input
        id={"password"}
        type={showPassword ? "text" : "password"}
        className={"h-16 w-full rounded-2xl px-11 text-black"}
        placeholder={"Enter Username"}
      />
      <label
        htmlFor="password"
        className={"absolute right-5 top-6 cursor-pointer"}
      >
        {showPassword ? (
          <EyeIcon
            onClick={() => setShowPassword(!showPassword)}
            className={"h-5 w-5 text-[#898D9E]"}
          />
        ) : (
          <EyeSlashIcon
            onClick={() => setShowPassword(!showPassword)}
            className={"h-5 w-5 text-[#898D9E]"}
          />
        )}
      </label>
    </div>
  );
};

export default PasswordInput;

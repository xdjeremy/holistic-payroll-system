import React, { FC, useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { useFormContext } from "react-hook-form";
import { LoginInputs } from "@/components/auth/login.page";
import { LoginValidation } from "@/utils/validations";

interface Props {
  isLoading: boolean;
}

const PasswordInput: FC<Props> = ({ isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginInputs>();

  return (
    <div className={"relative w-full"}>
      <label htmlFor="password" className={"absolute left-5 top-6"}>
        <LockClosedIcon className={"h-5 w-5 text-[#898D9E]"} />
      </label>
      <input
        {...register("password", LoginValidation.password)}
        id={"password"}
        type={showPassword ? "text" : "password"}
        className={"h-16 w-full rounded-2xl px-11 text-black"}
        placeholder={"Enter Password"}
        disabled={isLoading}
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
      <label className={"ml-2 text-sm text-error"}>
        {errors.password?.message}
      </label>
    </div>
  );
};

export default PasswordInput;

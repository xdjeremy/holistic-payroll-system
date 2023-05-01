import React, { FC } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { useFormContext } from "react-hook-form";
import { LoginInputs } from "@/components/auth/login.page";
import { LoginValidation } from "@/utils/validations";

interface Props {
  isLoading: boolean;
}

const TextInput: FC<Props> = ({ isLoading }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginInputs>();

  return (
    <div className={"relative w-full"}>
      <label htmlFor="username" className={"absolute left-5 top-6"}>
        <UserIcon className={"h-5 w-5 text-[#898D9E]"} />
      </label>
      <input
        {...register("username", LoginValidation.username)}
        id={"username"}
        type="text"
        className={"h-16 w-full rounded-2xl px-11 text-black"}
        placeholder={"Enter Username"}
        disabled={isLoading}
      />
      <label className={"ml-2 text-sm text-error"}>
        {errors.username?.message}
      </label>
    </div>
  );
};

export default TextInput;

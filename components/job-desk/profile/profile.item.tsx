import React, { FC, useContext } from "react";
import { classNames } from "@/utils";
import { useFormContext } from "react-hook-form";
import { ProfileInput } from "@/components/job-desk/profile/profile.card";
import { ProfileContext } from "@/components/job-desk/profile/profile.form";

interface Props {
  label: string;
  name: keyof ProfileInput;
  editable?: boolean;
  validation?: any;
  showInput?: boolean;
  placeholder?: string;
  type?: "text" | "password";
}

const ProfileItem: FC<Props> = ({
  label,
  name,
  editable,
  validation,
  showInput,
  placeholder,
  type = "text",
}) => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<ProfileInput>();
  const { edit, setEdit, isLoading } = useContext(ProfileContext);

  const renderEdit = () =>
    edit === name || showInput ? (
      <input
        {...register(name, validation ? validation : { required: true })}
        type={type}
        className={
          "rounded-lg border-2 border-[#B1CDF3] px-4 py-2 focus:outline-[#146ADC]"
        }
        placeholder={placeholder}
        disabled={isLoading}
      />
    ) : (
      <span
        onClick={() => (editable ? setEdit(name) : null)}
        className={classNames(
          editable ? "cursor-pointer text-[#146ADC]" : "font-medium text-black",
          "ml-auto"
        )}
      >
        {getValues(name)}
      </span>
    );
  return (
    <div className={"flex h-11 w-full flex-row justify-between"}>
      <label htmlFor={name} className={"flex flex-row items-center gap-2"}>
        <span className={"text-[#404040]"}>{label}</span>
      </label>
      <span className={"flex flex-col"}>
        {renderEdit()}
        <label htmlFor={name} className={"ml-auto text-sm text-red-500"}>
          {errors[name]?.message}
        </label>
      </span>
    </div>
  );
};

export default ProfileItem;

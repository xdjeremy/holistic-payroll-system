import React, { Dispatch, FC, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@/components/common";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NewAccountValidation } from "@/utils/validations";
import { UsersStatusOptions } from "@/types";
import GeneratePasswordInput from "@/components/admin/all-employees/generate.password.input";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const statusList: UsersStatusOptions[] = [
  UsersStatusOptions.seasonal,
  UsersStatusOptions["part-time"],
  UsersStatusOptions["full-time"],
  UsersStatusOptions["on-contract"],
];

interface FormValues {
  name: string;
  username: string;
  email: string;
  salary: number;
  role: string;
  status: string;
  department: string;
}

const AddEmployeeModal: FC<Props> = ({ setShowModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  const handleAddEmployee = () => {
    try {
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  return (
    <div
      className={
        "absolute flex h-screen w-full flex-col items-center justify-center"
      }
    >
      <div className={"w-full max-w-xl rounded-lg bg-white p-8"}>
        <div className={"flex flex-row items-center justify-between"}>
          <h1 className={"text-2xl font-medium text-[#0A0A0A]"}>
            Add Employee
          </h1>
          <XMarkIcon
            onClick={() => setShowModal(false)}
            className={"h-5 w-5 cursor-pointer"}
          />
        </div>

        <form
          onSubmit={handleSubmit(handleAddEmployee)}
          className={"mt-4 flex flex-col gap-6"}
        >
          <Input
            name={"name"}
            label={"Name"}
            register={register}
            validation={NewAccountValidation.name}
            error={errors.name?.message}
          />
          <Input
            name={"username"}
            label={"Username"}
            register={register}
            validation={NewAccountValidation.username}
            error={errors.username?.message}
          />
          <Input
            name={"email"}
            label={"Email"}
            register={register}
            validation={NewAccountValidation.email}
            error={errors.email?.message}
          />
          <Input
            name={"salary"}
            label={"Salary"}
            register={register}
            validation={NewAccountValidation.salary}
            type={"number"}
            error={errors.salary?.message}
          />
          <Input
            name={"role"}
            label={"Role"}
            register={register}
            validation={NewAccountValidation.role}
            type={"text"}
            error={errors.role?.message}
          />

          <div className={"flex flex-col gap-2"}>
            <label htmlFor={"leaveType"}>Leave Type</label>
            <select
              {...register("status", { required: true })}
              className={
                "w-full rounded-lg border border-[#C2C2C2] bg-white px-2 py-3"
              }
            >
              {statusList.map((item) => (
                <option key={item} value={item} className={"capitalize"}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <GeneratePasswordInput register={register} setValue={setValue} />

          {/* todo: generate random password */}

          <div className={"flex flex-row gap-3.5"}>
            <Button color={"black"}>Save</Button>
            <Button
              onClick={() => setShowModal(false)}
              color={"white"}
              type={"button"}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;

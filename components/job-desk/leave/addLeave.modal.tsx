import React, { Dispatch, FC, SetStateAction } from "react";
import { LeavesLeaveTypeOptions } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/common";
import toast from "react-hot-toast";
import { pocketBase } from "@/utils";

const leaveTypeOptions: {
  label: string;
  value: LeavesLeaveTypeOptions;
}[] = [
  {
    label: "Sick Leave",
    value: LeavesLeaveTypeOptions.sickleave,
  },
  {
    label: "Holiday",
    value: LeavesLeaveTypeOptions.holiday,
  },
  {
    label: "Jury Duty",
    value: LeavesLeaveTypeOptions.juryduty,
  },
  {
    label: "Vacation",
    value: LeavesLeaveTypeOptions.vacation,
  },
  {
    label: "Other",
    value: LeavesLeaveTypeOptions.other,
  },
];

interface Props {
  closeModal: Dispatch<SetStateAction<boolean>>;
}

interface Input {
  leaveType: LeavesLeaveTypeOptions;
  leaveDate: string;
}

const AddLeaveModal: FC<Props> = ({ closeModal }) => {
  const { register, handleSubmit } = useForm<Input>();

  const handleAddLeave: SubmitHandler<Input> = async ({
    leaveType,
    leaveDate,
  }) => {
    try {
      // check if user is logged in
      if (!pocketBase.authStore.model) {
        toast.error("You are not logged in");
        return;
      }

      // const data: LeavesRecord = {
      //   user: pocketBase.authStore.model?.id,
      //   leave_date: leaveDate,
      //   leave_type: leaveType,
      //   status: LeavesStatusOptions.pending,
      //   attachments: [],
      // };

      await pocketBase.collection("leaves").create({
        user: pocketBase.authStore.model?.id,
      });
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
      <div className={"w-96 rounded-lg bg-white p-8"}>
        <div className={"flex flex-row items-center justify-between"}>
          <h1 className={"text-2xl font-medium text-[#0A0A0A]"}>
            Request Leave
          </h1>
          <XMarkIcon
            onClick={() => closeModal(false)}
            className={"h-5 w-5 cursor-pointer"}
          />
        </div>

        <form
          onSubmit={handleSubmit(handleAddLeave)}
          className={"mt-4 flex flex-col gap-6"}
        >
          <div className={"flex flex-col gap-2"}>
            <label htmlFor={"leaveType"}>Leave Type</label>
            <select
              {...register("leaveType", { required: true })}
              className={
                "w-80 rounded-lg border border-[#C2C2C2] bg-white px-2 py-3"
              }
            >
              {leaveTypeOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className={"flex w-80 flex-col gap-2"}>
            <label htmlFor={"leaveDate"}>Leave Date</label>
            <input
              {...register("leaveDate", { required: true })}
              type={"datetime-local"}
            />
          </div>

          <div className={"flex w-80 flex-col gap-2"}>
            <label>Leave Type</label>
            <input type={"file"} />
          </div>
          <div className={"flex flex-row gap-3.5"}>
            <Button color={"black"}>Save</Button>
            <Button
              onClick={() => closeModal(false)}
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

export default AddLeaveModal;

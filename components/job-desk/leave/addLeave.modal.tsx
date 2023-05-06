import React, { Dispatch, FC, SetStateAction } from "react";
import { LeavesLeaveTypeOptions, LeavesStatusOptions } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/common";
import toast from "react-hot-toast";
import { pocketBase } from "@/utils";
import FormData from "form-data";

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
  leaveDate: Date;
  attachment: FileList;
}

const AddLeaveModal: FC<Props> = ({ closeModal }) => {
  const { register, handleSubmit, resetField } = useForm<Input>();

  const handleAddLeave: SubmitHandler<Input> = async ({
    leaveType,
    leaveDate,
    attachment,
  }) => {
    try {
      // check if user is logged in
      if (!pocketBase.authStore.model) {
        toast.error("You are not logged in");
        return;
      }

      const formData = new FormData();

      formData.append("user", pocketBase.authStore.model?.id);
      formData.append("leave_date", new Date(leaveDate).toUTCString());
      formData.append("leave_type", leaveType);
      formData.append("status", LeavesStatusOptions.pending);
      formData.append("attachment", attachment[0]);

      await pocketBase.collection("leaves").create(formData);

      toast.success("Leave request has been sent");
      closeModal(false);

      resetField("leaveType");
      resetField("leaveDate");
      resetField("attachment");
    } catch (err: any) {
      console.log(err.data);
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
            <label htmlFor={"attachment"}>Attachment</label>
            <input
              {...register("attachment", { required: true })}
              type={"file"}
            />
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

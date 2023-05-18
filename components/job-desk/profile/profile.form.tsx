import React, { createContext, FC, useEffect, useState } from "react";
import ProfileItem from "@/components/job-desk/profile/profile.item";
import { pocketBase } from "@/utils";
import { UsersResponse } from "@/types";
import toast from "react-hot-toast";
import useSWR from "swr";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { ProfileInput } from "@/components/job-desk/profile/profile.card";
import { Button } from "@/components/common";
import { ProfileValidation } from "@/utils/validations";

const fetcher = async (): Promise<UsersResponse> => {
  try {
    return await pocketBase
      .collection("users")
      .getOne<UsersResponse>(pocketBase.authStore.model?.id || "");
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};

export const ProfileContext = createContext({
  edit: undefined as keyof ProfileInput | undefined,
  setEdit: (_value: keyof ProfileInput | undefined) => {},
});

const ProfileForm: FC = () => {
  const { data, error } = useSWR<UsersResponse>("users", fetcher);
  const { setValue, handleSubmit, setError } = useFormContext<ProfileInput>();
  const [edit, setEdit] = useState<keyof ProfileInput | undefined>(undefined);

  useEffect(() => {
    if (data && !error) {
      setValue("username", data.username);
      setValue("name", data.name);
      setValue("email", data.email);
      setValue("role", data.role);
      setValue("department", data.department);
      setValue("salary", data.salary);
    }
  }, [data, error, setValue]);

  const saveHandler: SubmitHandler<ProfileInput> = async ({
    username,
    email,
    name,
    oldPassword,
    password,
    passwordConfirm,
  }) => {
    try {
      const user = pocketBase.authStore.model?.id;
      if (!user) {
        return toast.error("User not found");
      }

      if (oldPassword || password || passwordConfirm) {
        await pocketBase.collection("users").update(user, {
          username,
          email,
          name,
          oldPassword,
          password,
          passwordConfirm,
        });
      } else {
        await pocketBase.collection("users").update(user, {
          username,
          email,
          name,
        });
      }

      setEdit(undefined);
      toast.success("Profile updated");
    } catch (err: any) {
      const obj = Object.keys(err.data.data);
      obj.map((key) => {
        setError(key as keyof ProfileInput, {
          type: "manual",
          message: err.data.data[key].message,
        });
      });
    }
  };

  const cancelHandler = () => {
    setEdit(undefined);
    setValue("username", data?.username || "");
    setValue("name", data?.name || "");
  };

  return (
    <ProfileContext.Provider
      value={{
        edit,
        setEdit,
      }}
    >
      <form
        onSubmit={handleSubmit(saveHandler)}
        className={"flex flex-col gap-4"}
      >
        <ProfileItem
          label={"Username"}
          name={"username"}
          editable={true}
          validation={ProfileValidation.username}
        />
        <ProfileItem
          label={"Name"}
          name={"name"}
          editable={true}
          validation={ProfileValidation.name}
        />
        <ProfileItem label={"Email"} name={"email"} editable={false} />
        <ProfileItem label={"Role"} name={"role"} editable={false} />
        <ProfileItem
          label={"Department"}
          name={"department"}
          editable={false}
        />

        <ProfileItem label={"Salary"} name={"salary"} editable={false} />
        <hr></hr>
        <div className={"flex flex-col gap-6"}>
          <ProfileItem
            label={"Old Password"}
            name={"oldPassword"}
            editable={true}
            showInput={true}
            type={"password"}
            validation={ProfileValidation.oldPassword}
            placeholder={"Leave empty for no change"}
          />
          <ProfileItem
            label={"New Password"}
            name={"password"}
            editable={true}
            showInput={true}
            type={"password"}
            validation={ProfileValidation.newPassword}
            placeholder={"Leave empty for no change"}
          />
          <ProfileItem
            label={"New Password Confirm"}
            name={"passwordConfirm"}
            editable={true}
            showInput={true}
            type={"password"}
            validation={ProfileValidation.newPasswordConfirm}
            placeholder={"Leave empty for no change"}
          />
        </div>

        <div className={"mt-2 flex flex-row gap-3.5"}>
          <Button type={"submit"} color={"black"}>
            Save
          </Button>
          <button
            onClick={() => cancelHandler()}
            type={"button"}
            className={
              "flex flex-row items-center rounded-md bg-[#D3D3D9] px-4 py-1.5 font-medium text-[#07070D] hover:bg-[#D3D3D9]/50 disabled:cursor-not-allowed disabled:opacity-50"
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </ProfileContext.Provider>
  );
};

export default ProfileForm;

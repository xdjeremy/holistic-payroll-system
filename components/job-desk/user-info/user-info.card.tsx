import React, { FC } from "react";
import UserProfileItem from "@/components/job-desk/user-info/user-profile.item";
import UserInfoItem from "@/components/job-desk/user-info/user-info.item";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const UserInfoCard: FC = () => {
  return (
    <div
      className={
        "hidden w-72 flex-col items-center gap-8 rounded-lg bg-white px-8 py-4 lg:flex"
      }
    >
      <UserProfileItem />

      <div className={"flex w-full flex-col"}>
        <h3 className={"pb-4 text-sm font-medium"}>Info</h3>
        <div className={"flex flex-col gap-6"}>
          <UserInfoItem
            icon={<ClipboardIcon className={"h-5 w-5"} />}
            value={"Admin"}
            label={"Department"}
          />
          <UserInfoItem
            icon={<ClipboardIcon className={"h-5 w-5"} />}
            value={"Admin"}
            label={"Department"}
          />
          <UserInfoItem
            icon={<ClipboardIcon className={"h-5 w-5"} />}
            value={"Admin"}
            label={"Department"}
          />
          <UserInfoItem
            icon={<ClipboardIcon className={"h-5 w-5"} />}
            value={"Admin"}
            label={"Department"}
          />
        </div>
      </div>

      <div className={"flex w-full flex-col pb-32"}>
        <h3 className={"pb-4 text-sm font-medium"}>Info</h3>
        <div className={"flex flex-col gap-6"}>
          <UserInfoItem
            icon={<ClipboardIcon className={"h-5 w-5"} />}
            value={"Admin"}
            label={"Department"}
          />
          <UserInfoItem
            icon={<ClipboardIcon className={"h-5 w-5"} />}
            value={"Admin"}
            label={"Department"}
          />
          <UserInfoItem
            icon={<ClipboardIcon className={"h-5 w-5"} />}
            value={"Admin"}
            label={"Department"}
          />
          <UserInfoItem
            icon={<ClipboardIcon className={"h-5 w-5"} />}
            value={"Admin"}
            label={"Department"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;

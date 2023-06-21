import React, { FC } from "react";
import UserProfileItem from "@/components/job-desk/user-info/user-profile.item";
import UserInfoItem from "@/components/job-desk/user-info/user-info.item";
import { CalendarIcon, ClipboardIcon, EnvelopeIcon, UserIcon, WalletIcon } from "@heroicons/react/24/outline";
import { useUser } from "@/context";
import { format } from "date-fns";

const UserInfoCard: FC = () => {
  const { user } = useUser();

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
            value={user?.department || ""}
            label={"Department"}
          />
          <UserInfoItem
            icon={<WalletIcon className={"h-5 w-5"} />}
            value={
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "PHP,
              }).format(user?.salary || 0) || ""
            }
            label={"Salary"}
          />
          <UserInfoItem
            icon={<CalendarIcon className={"h-5 w-5"} />}
            value={
              user?.created
                ? format(new Date(user?.created), "dd MMMM yyyy")
                : ""
            }
            label={"Joining date"}
          />
        </div>
      </div>

      <div className={"flex w-full flex-col pb-32"}>
        <h3 className={"pb-4 text-sm font-medium"}>Contact</h3>
        <div className={"flex flex-col gap-6"}>
          <UserInfoItem
            icon={<EnvelopeIcon className={"h-5 w-5"} />}
            value={user?.email || ""}
            label={"Email"}
          />
          <UserInfoItem
            icon={<UserIcon className={"h-5 w-5"} />}
            value={user?.username || ""}
            label={"Username"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;

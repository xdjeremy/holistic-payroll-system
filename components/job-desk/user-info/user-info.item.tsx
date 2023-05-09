import React, { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  value: string;
  label: string;
}

const UserInfoItem: FC<Props> = ({ icon, value, label }) => {
  return (
    <div className={"flex w-full flex-row items-center justify-center gap-4"}>
      <span
        className={
          "flex h-8 w-8 flex-col items-center justify-center rounded bg-[#F5F5F5] p-2"
        }
      >
        {icon}
      </span>

      <div className={"flex w-full flex-col"}>
        <span className={"text-sm font-medium text-[#404040]"}>{value}</span>
        <span className={"text[#9E9E9E] text-xs capitalize"}>{label}</span>
      </div>
    </div>
  );
};

export default UserInfoItem;

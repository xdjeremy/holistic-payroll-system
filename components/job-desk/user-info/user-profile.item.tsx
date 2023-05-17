import React, { FC } from "react";
import Image from "next/image";
import { useUser } from "@/context";
import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

const UserProfileItem: FC = () => {
  const { user } = useUser();
  const avatar = createAvatar(initials, {
    seed: user?.name,
  }).toDataUriSync();

  return (
    <div className={"flex w-full flex-row items-center gap-3"}>
      <Image
        className={"rounded-full"}
        width={50}
        height={50}
        src={avatar}
        alt={user?.name || ""}
      />
      <div className={"flex flex-col"}>
        <span className={"text-sm font-bold text-[#404040]"}>{user?.name}</span>
        <span className={"text-xs capitalize text-[#9E9E9E]"}>
          {user?.privilege}
        </span>
      </div>
    </div>
  );
};

export default UserProfileItem;

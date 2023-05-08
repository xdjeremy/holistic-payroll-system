import React, { FC, ReactNode, useState } from "react";
import { useUser } from "@/context";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import Image from "next/image";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface IDropDown {
  icon: ReactNode;
  text: string;
  href: string;
}

const DropDownItems: IDropDown[] = [
  {
    icon: <ArrowRightOnRectangleIcon className={"h-5 w-5"} />,
    text: "Logout",
    href: "/logout",
  },
];

const DropDownItem: FC<IDropDown> = ({ text, icon, href }) => {
  return (
    <Link
      href={href}
      className={
        "flex cursor-pointer flex-row items-center gap-2 px-5 py-2 hover:bg-[#E0E0E0]"
      }
    >
      {icon}
      <span className={"text-xs font-semibold uppercase text-[#404040]"}>
        {text}
      </span>
    </Link>
  );
};
const ProfileDropDown: FC = () => {
  const { user } = useUser();
  const avatar = createAvatar(initials, {
    seed: user?.name,
  }).toDataUriSync();

  const [show, setShow] = useState(false);

  return (
    <div>
      <Image
        src={avatar}
        alt={"Profile"}
        width={30}
        height={30}
        className={"cursor-pointer rounded-full border"}
        onClick={() => setShow(!show)}
      />

      {show && (
        <div
          className={"absolute right-0 mr-3 rounded-lg bg-white py-5 shadow-lg"}
        >
          <div className={"flex flex-col gap-2"}>
            {DropDownItems.map((item) => (
              <DropDownItem
                icon={item.icon}
                text={item.text}
                href={item.href}
                key={item.text}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;

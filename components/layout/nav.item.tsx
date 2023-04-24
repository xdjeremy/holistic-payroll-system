import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { classNames } from "@/utils";

interface Props {
  icon: ReactNode;
  title: string;
  href: string;
  active?: boolean;
}

const NavItem: FC<Props> = ({ icon, title, href, active }) => {
  return (
    <Link
      href={href}
      className={classNames(
        active ? "bg-[#E0E0E0]" : "bg-[#F5F5F5]",
        "flex w-fit flex-row items-center py-3 pl-4"
      )}
    >
      {icon}
      <span className={"ml-2 mr-4 w-56 font-medium"}>{title}</span>
    </Link>
  );
};

export default NavItem;

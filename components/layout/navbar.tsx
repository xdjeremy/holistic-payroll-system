import React, { FC } from "react";
import userNavLinks, { UserNavLinks } from "@/components/layout/userNavLinks";
import NavItem from "@/components/layout/nav.item";
import { classNames } from "@/utils";

interface Props {
  sidebarOpen: boolean;
  pageTitle: UserNavLinks["label"];
}

const Navbar: FC<Props> = ({ sidebarOpen, pageTitle }) => {
  return (
    <div
      className={classNames(
        sidebarOpen ? "block" : "hidden lg:block",
        "w-fit border-r-2 border-r-[#E0E0E0] "
      )}
    >
      {userNavLinks.map((nav, id) => (
        <NavItem
          key={id}
          icon={nav.icon}
          title={nav.label}
          href={nav.href}
          active={nav.label === pageTitle}
        />
      ))}
    </div>
  );
};

export default Navbar;

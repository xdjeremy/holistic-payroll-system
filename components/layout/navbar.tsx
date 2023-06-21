import React, { FC } from "react";
import userNavLinks, { UserNavLinks } from "@/components/layout/userNavLinks";
import NavItem from "@/components/layout/nav.item";
import { classNames } from "@/utils";
import adminNavLinks from "@/components/layout/adminNavLinks";
import { useUser } from "@/context";
import { UsersPrivilegeOptions } from "@/types";

interface Props {
  sidebarOpen: boolean;
  pageTitle: UserNavLinks["label"];
}

const Navbar: FC<Props> = ({ sidebarOpen, pageTitle }) => {
  const { user } = useUser();

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

      {user?.privilege === UsersPrivilegeOptions.admin && (
        <>
          <span>
            <hr className={"my-4 border-[#E0E0E0]"} />
            <span>
              <h3 className={"px-4 text-sm font-semibold text-gray-500"}>
                Admin
              </h3>
            </span>
          </span>
          {adminNavLinks.map((nav) => (
            <NavItem
              key={nav.label}
              icon={nav.icon}
              title={nav.label}
              href={nav.href}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Navbar;

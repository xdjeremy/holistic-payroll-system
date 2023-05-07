import React, { FC } from "react";
import Logo from "../../assets/images/holistic_logo.png";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { BellIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import ProfileDropDown from "@/components/layout/profile.dropdown";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

const TopBar: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div
      className={
        "flex flex-row items-center justify-between bg-white px-5 py-3"
      }
    >
      <div className={"flex flex-row items-center"}>
        <Image src={Logo} alt={"Holistic"} width={60} height={60} />
        <span>Payroll System</span>
      </div>
      <Bars3Icon
        onClick={handleSidebarOpen}
        className={"h-6 w-6 cursor-pointer lg:hidden"}
      />
      <div
        className={"hidden flex-row items-center gap-6 text-[#212143] lg:flex"}
      >
        <span className={"flex flex-row items-center gap-2"}>
          <GlobeAltIcon className={"h-6 w-6"} />
          <span className={"font-medium"}>EN</span>
        </span>
        <BellIcon className={"h-6 w-6"} />
        <ProfileDropDown />
      </div>
    </div>
  );
};

export default TopBar;

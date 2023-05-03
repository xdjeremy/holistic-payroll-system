import { ReactNode } from "react";
import {
  BriefcaseIcon,
  Cog8ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export interface UserNavLinks {
  icon: ReactNode;
  label: string;
  href: string;
}

const userNavLinks: UserNavLinks[] = [
  {
    icon: <HomeIcon className={"h-5 w-5"} />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <BriefcaseIcon className={"h-5 w-5"} />,
    label: "Job Desk",
    href: "/jobdesk",
  },
  {
    icon: <Cog8ToothIcon className={"h-5 w-5"} />,
    label: "Settings",
    href: "/settings",
  },
];

export default userNavLinks;

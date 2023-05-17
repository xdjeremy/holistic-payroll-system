import { UserNavLinks } from "@/components/layout/userNavLinks";
import {
  ArrowsRightLeftIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const adminNavLinks: UserNavLinks[] = [
  {
    icon: <UsersIcon className={"h-5 w-5"} />,
    label: "Users",
    href: "/admin/all-employees",
  },
  {
    icon: <ClockIcon className={"h-5 w-5"} />,
    label: "Daily Log",
    href: "/admin/daily-log",
  },
  {
    icon: <ArrowsRightLeftIcon className={"h-5 w-5"} />,
    label: "Leave Request",
    href: "/admin/leave-request",
  },
];

export default adminNavLinks;

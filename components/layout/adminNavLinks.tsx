import { UserNavLinks } from "@/components/layout/userNavLinks";
import { UsersIcon } from "@heroicons/react/24/outline";

const adminNavLinks: UserNavLinks[] = [
  {
    icon: <UsersIcon className={"h-5 w-5"} />,
    label: "Users",
    href: "/admin/all-employees",
  },
];

export default adminNavLinks;

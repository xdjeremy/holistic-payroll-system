import {ReactNode} from "react";
import {BriefcaseIcon, Cog8ToothIcon, HomeIcon} from "@heroicons/react/24/outline";

interface UserNavLinks {
    icon: ReactNode;
    label: string;
    href: string;
}

const userNavLinks: UserNavLinks[] = [
    {
        icon: <HomeIcon className={'w-5 h-5'}/>,
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: <BriefcaseIcon className={'w-5 h-5'}/>,
        label: "Job Desk",
        href: "/job-desk",
    },
    {
        icon: <Cog8ToothIcon className={'w-5 h-5'}/>,
        label: "Settings",
        href: "/settings",
    }
]

export default userNavLinks;
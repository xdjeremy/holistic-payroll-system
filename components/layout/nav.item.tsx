import React, {FC, ReactNode} from 'react';
import Link from "next/link";
import {classNames} from "@/utils";

interface Props {
    icon: ReactNode;
    title: string;
    href: string;
    active?: boolean;
}
const NavItem: FC<Props> = ({icon, title, href, active}) => {
    return (
        <Link href={href} className={classNames(active ? 'bg-[#E0E0E0]' : 'bg-[#F5F5F5]', 'flex flex-row items-center py-3 pl-4 w-fit')}>
            {icon}
            <span className={'ml-2 font-medium w-44'}>{title}</span>
        </Link>
    );
};

export default NavItem;
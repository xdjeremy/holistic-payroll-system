import React, {FC} from 'react';
import userNavLinks from "@/components/layout/userNavLinks";
import NavItem from "@/components/layout/nav.item";
import {classNames} from "@/utils";

interface Props {
    sidebarOpen: boolean;
}
const Navbar: FC<Props> = ({sidebarOpen}) => {
    return (
        <div className={classNames(sidebarOpen ? 'block' : 'hidden lg:block', 'border-r-[#E0E0E0] border-r-2 w-fit ')}>
            {
                userNavLinks.map((nav, id) => (
                    <NavItem key={id} icon={nav.icon} title={nav.label} href={nav.href} />
                ))
            }
        </div>
    );
};

export default Navbar;
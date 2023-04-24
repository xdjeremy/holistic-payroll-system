import React, {FC} from 'react';
import Logo from '../../assets/images/holistic_logo.png';
import Image from "next/image";
import {Bars3Icon} from "@heroicons/react/20/solid";

interface Props {
    sidebarOpen: boolean;
    setSidebarOpen: (sidebarOpen: boolean) => void;
}
const TopBar: FC<Props> = ({sidebarOpen, setSidebarOpen}) => {

    const handleSidebarOpen = () => {
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <div className={'bg-white flex flex-row items-center justify-between px-5 py-3'}>
            <div className={'flex flex-row items-center'}>
                <Image src={Logo} alt={'Holistic'} width={60} height={60}/>
                <span>Payroll System</span>
            </div>
            <Bars3Icon onClick={handleSidebarOpen} className={'w-6 h-6 cursor-pointer'}/>
        </div>
    );
};

export default TopBar;
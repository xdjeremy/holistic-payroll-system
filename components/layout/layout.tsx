import React, {FC, ReactNode, useState} from 'react';
import TopBar from "@/components/layout/topbar";
import Navbar from "@/components/layout/navbar";

interface Props {
    children: ReactNode;
    title: string;
}

const Layout: FC<Props> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className={'bg-[#F5F5F5] min-h-screen'}>
            <TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className={'w-full flex flex-row'}>
                <Navbar sidebarOpen={sidebarOpen}/>
                <div className={'px-8 py-4'}>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    );
};

export {Layout};
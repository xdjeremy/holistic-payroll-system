import React, { FC, ReactNode, useState } from "react";
import TopBar from "@/components/layout/topbar";
import Navbar from "@/components/layout/navbar";
import { UserNavLinks } from "@/components/layout/userNavLinks";

interface Props {
  children: ReactNode;
  title: UserNavLinks["label"];
}

const Layout: FC<Props> = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={"min-h-screen bg-[#F5F5F5]"}>
      <TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={"flex w-full flex-row"}>
        <Navbar pageTitle={title} sidebarOpen={sidebarOpen} />
        <div className={"w-full px-8 py-4"}>{children}</div>
      </div>
    </div>
  );
};

export { Layout };

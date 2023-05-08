import React, { FC, ReactNode } from "react";
import {
  JobDeskLinks,
  JobDeskPageTabs,
} from "@/components/job-desk/jobdesk.links";
import { classNames } from "@/utils";
import JobDeskTitle from "@/components/common/jobdesk.title";

interface Props {
  children: ReactNode;
  activeTab: JobDeskPageTabs;
  setActiveTab: (tab: JobDeskPageTabs) => void;
}

const JobDeskLayout: FC<Props> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className={"w-full rounded-lg bg-white"}>
      <div className={"flex flex-row items-center justify-evenly px-4"}>
        {JobDeskLinks.map((link) => (
          <span
            key={link}
            className={classNames(
              activeTab === link
                ? "border-b-[1.5px] border-[#146ADC] text-[#212143]"
                : "text-[#757575]",
              "cursor-pointer p-2 capitalize"
            )}
            onClick={() => setActiveTab(link)}
          >
            {link}
          </span>
        ))}
      </div>
      <div className={"mt-6 px-8 py-4"}>
        <JobDeskTitle title={activeTab} />
        {children}
      </div>
    </div>
  );
};

export default JobDeskLayout;

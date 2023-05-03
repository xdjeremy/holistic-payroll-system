import React, { useState } from "react";
import { Button, PageTitle } from "@/components/common";
import { PlusIcon } from "@heroicons/react/20/solid";
import UserInfoCard from "@/components/job-desk/user-info/user-info.card";
import AttendanceCard from "@/components/job-desk/attendance/attendance.card";
import { JobDeskPageTabs } from "@/components/job-desk/jobdesk.links";
import JobDeskLayout from "@/components/job-desk/jobdesk.layout";
import AllowanceCard from "@/components/job-desk/allowance/allowance.card";

const JobDeskPage = () => {
  const [activeTab, setActiveTab] = useState<JobDeskPageTabs>(
    JobDeskPageTabs.ALLOWANCE
  );

  const renderTab = () => {
    switch (activeTab) {
      case JobDeskPageTabs.ATTENDANCE:
        return <AttendanceCard />;
      case JobDeskPageTabs.ALLOWANCE:
        return <AllowanceCard />;
    }
  };

  return (
    <>
      <PageTitle title={"Job Desk"}>
        <Button color={"black"}>
          <PlusIcon className={"mr-2 h-5 w-5"} />
          <span>Action</span>
        </Button>
      </PageTitle>
      <div className={"my-4 flex w-full flex-row gap-8"}>
        <UserInfoCard />
        <JobDeskLayout activeTab={activeTab} setActiveTab={setActiveTab}>
          {renderTab()}
        </JobDeskLayout>
      </div>
    </>
  );
};

export { JobDeskPage };

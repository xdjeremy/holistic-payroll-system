import React, { useState } from "react";
import { Button, PageTitle } from "@/components/common";
import { PlusIcon } from "@heroicons/react/20/solid";
import UserInfoCard from "@/components/job-desk/user-info/user-info.card";
import AttendanceCard from "@/components/job-desk/attendance/attendance.card";
import { JobDeskPageTabs } from "@/components/job-desk/jobdesk.links";

const JobDeskPage = () => {
  const [activeTab, setActiveTab] = useState<JobDeskPageTabs>(
    JobDeskPageTabs.ATTENDANCE
  );

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
        <AttendanceCard />
      </div>
    </>
  );
};

export { JobDeskPage };

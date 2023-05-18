import React, { useState } from "react";
import { Button, PageTitle } from "@/components/common";
import { PlusIcon } from "@heroicons/react/20/solid";
import UserInfoCard from "@/components/job-desk/user-info/user-info.card";
import AttendanceCard from "@/components/job-desk/attendance/attendance.card";
import { JobDeskPageTabs } from "@/components/job-desk/jobdesk.links";
import JobDeskLayout from "@/components/job-desk/jobdesk.layout";
import LeaveCard from "@/components/job-desk/leave/leave.card";
import AddLeaveModal from "@/components/job-desk/leave/addLeave.modal";
import SalaryCard from "@/components/job-desk/salary/salary.card";
import ProfileCard from "@/components/job-desk/profile.card";

const JobDeskPage = () => {
  const [activeTab, setActiveTab] = useState<JobDeskPageTabs>(
    JobDeskPageTabs.ATTENDANCE
  );

  const [openAction, setOpenAction] = useState<boolean>(false);

  const renderTab = () => {
    switch (activeTab) {
      case JobDeskPageTabs.ATTENDANCE:
        return <AttendanceCard />;
      case JobDeskPageTabs.LEAVE:
        return <LeaveCard />;
      case JobDeskPageTabs.SALARY:
        return <SalaryCard />;
      case JobDeskPageTabs.PROFILE:
        return <ProfileCard />;
    }
  };

  const modalRender = () => {
    switch (activeTab) {
      // case JobDeskPageTabs.ATTENDANCE:
      //   return;
      // case JobDeskPageTabs.ALLOWANCE:
      //   return;
      case JobDeskPageTabs.LEAVE:
        return <AddLeaveModal closeModal={setOpenAction} />;
    }
  };

  return (
    <>
      {/* modal */}
      {openAction && (
        <div
          className={
            "absolute left-0 top-0 z-10 h-screen w-full bg-black bg-opacity-50"
          }
        >
          {modalRender()}
        </div>
      )}
      {/* end modal */}
      <PageTitle title={"Job Desk"}>
        <Button onClick={() => setOpenAction(true)} color={"black"}>
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

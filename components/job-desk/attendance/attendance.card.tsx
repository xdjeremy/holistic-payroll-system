import React, { FC } from "react";
import JobDeskLayout from "@/components/job-desk/jobdesk.layout";
import { JobDeskPageTabs } from "@/components/job-desk/jobdesk.links";
import AttendanceTable from "@/components/job-desk/attendance/attendance.table";

const AttendanceCard: FC = () => {
  return (
    <JobDeskLayout activeTab={JobDeskPageTabs.ATTENDANCE}>
      <AttendanceTable />
    </JobDeskLayout>
  );
};

export default AttendanceCard;

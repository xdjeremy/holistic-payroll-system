import React, { FC } from "react";
import JobDeskLayout from "@/components/job-desk/jobdesk.layout";
import { JobDeskPageTabs } from "@/components/job-desk/jobdesk.links";

const AttendanceCard: FC = () => {
  return (
    <JobDeskLayout activeTab={JobDeskPageTabs.ATTENDANCE}>monds</JobDeskLayout>
  );
};

export default AttendanceCard;

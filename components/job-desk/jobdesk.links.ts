enum JobDeskPageTabs {
  ATTENDANCE = "attendance",
  LEAVE = "leave",
  SALARY = "salary",
  PAY_RUN = "pay-run",
  PROFILE = "profile",
}

const JobDeskLinks: JobDeskPageTabs[] = [
  JobDeskPageTabs.ATTENDANCE,
  JobDeskPageTabs.LEAVE,
  JobDeskPageTabs.SALARY,
  JobDeskPageTabs.PAY_RUN,
  JobDeskPageTabs.PROFILE,
];

export { JobDeskPageTabs, JobDeskLinks };

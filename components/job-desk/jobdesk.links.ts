enum JobDeskPageTabs {
  ALLOWANCE = "allowance",
  ATTENDANCE = "attendance",
  LEAVE = "leave",
  HISTORY = "history",
  SALARY = "salary",
  PAY_RUN = "pay run",
  PROFILE = "profile",
}

const JobDeskLinks: JobDeskPageTabs[] = [
  JobDeskPageTabs.ALLOWANCE,
  JobDeskPageTabs.ATTENDANCE,
  JobDeskPageTabs.LEAVE,
  JobDeskPageTabs.HISTORY,
  JobDeskPageTabs.SALARY,
  JobDeskPageTabs.PAY_RUN,
];

export { JobDeskPageTabs, JobDeskLinks };

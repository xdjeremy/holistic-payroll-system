enum JobDeskPageTabs {
  ALLOWANCE = "allowance",
  ATTENDANCE = "attendance",
  LEAVE = "leave",
  FOLDER = "folder",
  ASSETS = "assets",
  HISTORY = "history",
  SALARY = "salary",
  PAY_RUN = "pay run",
}

const JobDeskLinks: JobDeskPageTabs[] = [
  JobDeskPageTabs.ALLOWANCE,
  JobDeskPageTabs.ATTENDANCE,
  JobDeskPageTabs.LEAVE,
  JobDeskPageTabs.FOLDER,
  JobDeskPageTabs.ASSETS,
  JobDeskPageTabs.HISTORY,
  JobDeskPageTabs.SALARY,
  JobDeskPageTabs.PAY_RUN,
];

export { JobDeskPageTabs, JobDeskLinks };

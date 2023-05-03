enum JobDeskPageTabs {
  ALLOWANCE = "allowance",
  ATTENDANCE = "attendance",
  LEAVE = "leave",
  FOLDER = "folder",
  ASSETS = "assets",
  HISTORY = "history",
  SALARY = "salary",
}

const JobDeskLinks: JobDeskPageTabs[] = [
  JobDeskPageTabs.ALLOWANCE,
  JobDeskPageTabs.ATTENDANCE,
  JobDeskPageTabs.LEAVE,
  JobDeskPageTabs.FOLDER,
  JobDeskPageTabs.ASSETS,
  JobDeskPageTabs.HISTORY,
  JobDeskPageTabs.SALARY,
];

export { JobDeskPageTabs, JobDeskLinks };

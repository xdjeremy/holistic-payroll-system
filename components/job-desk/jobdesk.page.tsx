import React from "react";
import { Button, PageTitle } from "@/components/common";
import { PlusIcon } from "@heroicons/react/20/solid";
import UserInfoCard from "@/components/job-desk/user-info/user-info.card";

const JobDeskPage = () => {
  return (
    <>
      <PageTitle title={"Job Desk"}>
        <Button color={"black"}>
          <PlusIcon className={"mr-2 h-5 w-5"} />
          <span>Action</span>
        </Button>
      </PageTitle>
      <div className={"flex my-4 w-full flex-row items-center"}>
        <UserInfoCard />
      </div>
    </>
  );
};

export { JobDeskPage };

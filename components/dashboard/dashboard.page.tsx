import React, { FC } from "react";
import { Button, PageTitle } from "@/components/common";
import { PlusIcon } from "@heroicons/react/20/solid";
import BannerItem from "@/components/dashboard/banner.item";

const DashboardPage: FC = () => {
  return (
    <>
      <PageTitle title={"Dashboard"}>
        <Button color={"black"}>
          <PlusIcon className={"mr-2 h-5 w-5"} />
          <span>Punch In</span>
        </Button>
      </PageTitle>
      <BannerItem />
    </>
  );
};

export { DashboardPage };

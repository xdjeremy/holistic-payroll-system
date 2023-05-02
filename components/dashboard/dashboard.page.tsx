import React, { FC } from "react";
import { PageTitle } from "@/components/common";
import BannerItem from "@/components/dashboard/banner.item";
import AttendanceButton from "@/components/dashboard/attendance.button";

const DashboardPage: FC = () => {
  return (
    <>
      <PageTitle title={"Dashboard"}>
        <AttendanceButton />
      </PageTitle>
      <BannerItem />
    </>
  );
};

export { DashboardPage };

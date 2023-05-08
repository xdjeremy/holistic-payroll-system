import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { DailyLogPage } from "@/components/admin/dailylog";

const DailyLog: NextPage = () => {
  return (
    <Layout title={"Daily Log"}>
      <DailyLogPage />
    </Layout>
  );
};

export default DailyLog;

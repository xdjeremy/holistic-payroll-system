import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { DashboardPage } from "@/components/dashboard";

const Dashboard: NextPage = () => {
  return (
    <Layout title={"Dashboard"}>
      <DashboardPage />
    </Layout>
  );
};

export default Dashboard;

import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { PageTitle } from "@/components/common";

const Dashboard: NextPage = () => {
  return (
    <Layout title={"Dashboard"}>
      <PageTitle title={"Dashboard"}>
        <>Monds</>
      </PageTitle>
    </Layout>
  );
};

export default Dashboard;

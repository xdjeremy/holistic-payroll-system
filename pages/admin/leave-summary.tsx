import React from "react";
import { Layout } from "@/components/layout";
import LeaveSummaryPage from "@/components/admin/leave-summary/leave.summary.page";

const LeaveSummary = () => {
  return (
    <Layout title={"Leave Summary"}>
      <LeaveSummaryPage />
    </Layout>
  );
};

export default LeaveSummary;

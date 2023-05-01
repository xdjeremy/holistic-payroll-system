import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { DashboardPage } from "@/components/dashboard";
import { initPocketBase } from "@/utils";

const Dashboard: NextPage = () => {
  return (
    <Layout title={"Dashboard"}>
      <DashboardPage />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // check if user is not logged in
    if (!pb.authStore.isValid) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  } catch (_) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

export default Dashboard;

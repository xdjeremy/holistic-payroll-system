import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { DashboardPage } from "@/components/dashboard";
import { initPocketBase } from "@/utils";
import { useEffectOnce } from "usehooks-ts";
import { useUser } from "@/context";
import { UsersResponse } from "@/types";

interface Props {
  user: string;
}

const Dashboard: NextPage<Props> = ({ user }) => {
  const userData = JSON.parse(user) as UsersResponse;
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(userData);
  });

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
    if (!pb.authStore.isValid || !pb.authStore.model?.id) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const user = await pb.collection("users").getOne(pb.authStore.model?.id);

    return {
      props: {
        user: JSON.stringify(user),
      },
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

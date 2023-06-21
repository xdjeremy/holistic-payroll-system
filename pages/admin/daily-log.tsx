import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { DailyLogPage } from "@/components/admin/dailylog";
import { initPocketBase } from "@/utils";
import { UsersPrivilegeOptions, UsersResponse } from "@/types";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  user: string;
}

const DailyLog: NextPage<Props> = ({ user }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(user));
  });

  return (
    <Layout title={"Daily Log"}>
      <DailyLogPage />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pb = await initPocketBase(ctx);
  // if user is not logged in, redirect to login page
  if (!pb.authStore.model || !pb.authStore.isValid) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const user = await pb
    .collection("users")
    .getOne<UsersResponse>(pb.authStore.model?.id);

  // if user is not admin, 404
  if (user.privilege !== UsersPrivilegeOptions.admin) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: JSON.stringify(user),
    },
  };
};

export default DailyLog;

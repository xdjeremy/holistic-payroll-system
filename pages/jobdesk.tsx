import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { JobDeskPage } from "@/components/job-desk";
import { initPocketBase } from "@/utils";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";
import { UsersResponse } from "@/types";

interface Props {
  user: string;
}

const JobDesk: NextPage<Props> = ({ user }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(user) as UsersResponse);
  });

  return (
    <Layout title={"Job Desk"}>
      <JobDeskPage />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // if user is not logged in, redirect to login page
    if (!pb.authStore.isValid || !pb.authStore.model) {
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
      props: {},
    };
  }
};

export default JobDesk;

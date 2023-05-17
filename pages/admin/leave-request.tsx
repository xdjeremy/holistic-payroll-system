import React from "react";
import { Layout } from "@/components/layout";
import LeaveRequestPage from "@/components/admin/leave-request/leave.request.page";
import { GetServerSideProps, NextPage } from "next";
import { initPocketBase } from "@/utils";
import { UsersPrivilegeOptions, UsersResponse } from "@/types";
import { useEffectOnce } from "usehooks-ts";
import { useUser } from "@/context";

interface Props {
  user: string;
}

const LeaveRequest: NextPage<Props> = ({ user }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(user));
  });

  return (
    <Layout title={"Leave Request"}>
      <LeaveRequestPage />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
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
  } catch (_) {
    return {
      notFound: true,
    };
  }
};

export default LeaveRequest;

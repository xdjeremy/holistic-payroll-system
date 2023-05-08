import React, { FC, useEffect } from "react";
import { Layout } from "@/components/layout";
import { useRouter } from "next/router";
import { initPocketBase, pocketBase } from "@/utils";
import { GetServerSideProps } from "next";

const Logout: FC = () => {
  const router = useRouter();

  useEffect(() => {
    pocketBase.authStore.clear();

    // wait for 1 second and redirect to login page
    setTimeout(() => {
      router.push("login").then();
    }, 1000);
  }, [router]);

  return (
    <Layout title={"Logging out..."}>
      <span>Logging out...</span>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pb = await initPocketBase(ctx);
  pb.authStore.clear();

  return {
    props: {},
  };
};

export default Logout;

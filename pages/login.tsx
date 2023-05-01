import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { LoginPage } from "@/components/auth";
import { initPocketBase } from "@/utils";

const Login: NextPage = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // if user is already logged in, redirect to home page
    if (pb.authStore.isValid) {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  } catch (_) {
    return {
      props: {},
    };
  }
};

export default Login;

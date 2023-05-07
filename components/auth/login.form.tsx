import React, { FC, useState } from "react";
import TextInput from "@/components/auth/text.input";
import PasswordInput from "@/components/auth/password.input";
import RememberMeButton from "@/components/auth/rememberMe.button";
import LoginButton from "@/components/auth/login.button";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { LoginInputs } from "@/components/auth/login.page";
import { initPocketBase, pocketBase } from "@/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

const LoginForm: FC = () => {
  const { handleSubmit } = useFormContext<LoginInputs>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const loginHandler: SubmitHandler<LoginInputs> = async ({
    username,
    password,
  }) => {
    try {
      setIsLoading(true);

      await pocketBase.collection("users").authWithPassword(username, password);

      // save to cookie
      document.cookie = pocketBase.authStore.exportToCookie({
        httpOnly: false,
        path: "/",
      });

      toast.success("Login Success");
      await router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={
        "mx-auto w-full max-w-lg bg-[#141414] px-14 pb-16 pt-10 text-white sm:rounded-2xl"
      }
    >
      <h3 className={"text-center text-xl font-bold"}>
        Sign In to start your session
      </h3>

      <form
        onSubmit={handleSubmit(loginHandler)}
        className={"mt-7 flex w-full flex-col gap-10"}
      >
        <TextInput isLoading={isLoading} />
        <PasswordInput isLoading={isLoading} />
        <div className={"flex flex-col gap-6"}>
          <RememberMeButton />
          <LoginButton isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // if user is already logged in
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

export default LoginForm;

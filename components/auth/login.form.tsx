import React, { FC } from "react";
import TextInput from "@/components/auth/text.input";
import PasswordInput from "@/components/auth/password.input";
import RememberMeButton from "@/components/auth/rememberMe.button";
import LoginButton from "@/components/auth/login.button";

const LoginForm: FC = () => {
  return (
    <div
      className={
        "w-full max-w-lg bg-[#141414] mx-auto px-14 pb-16 pt-10 text-white sm:rounded-2xl"
      }
    >
      <h3 className={"text-center text-xl font-bold"}>
        Sign In to start your session
      </h3>
      <form className={"mt-7 flex w-full flex-col gap-10"}>
        <TextInput />
        <PasswordInput />
        <div className={'flex flex-col gap-6'}>
          <RememberMeButton />
          <LoginButton />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

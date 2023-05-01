import React, { FC } from "react";
import LoginForm from "@/components/auth/login.form";
import Logo from "../../assets/images/login_logo.png";
import Image from "next/image";

const LoginPage: FC = () => {
  return (
    <div className={"flex min-h-screen flex-row items-center justify-center"}>
      {/* logo */}
      <Image
        className={"hidden xl:block"}
        src={Logo}
        alt={"Holistic Payroll System"}
        width={483}
        height={451}
      />

      {/* form */}
      <div className={"w-full xl:w-[512px]"}>
        <h1 className={"mb-10 uppercase text-center text-3xl font-bold lg:text-5xl"}>
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export { LoginPage };

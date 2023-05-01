import React, { FC } from "react";
import LoginForm from "@/components/auth/login.form";
import Logo from "../../assets/images/login_logo.png";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";

export interface LoginInputs {
  username: string;
  password: string;
}

const LoginPage: FC = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
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
          <h1
            className={
              "mb-10 text-center text-3xl font-bold uppercase lg:text-5xl"
            }
          >
            Login
          </h1>
          <LoginForm />
        </div>
      </div>
    </FormProvider>
  );
};

export { LoginPage };

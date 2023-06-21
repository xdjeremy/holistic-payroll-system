import React, { FC } from "react";
import ProfileForm from "@/components/job-desk/profile/profile.form";
import { FormProvider, useForm } from "react-hook-form";

export interface ProfileInput {
  username: string;
  email: string;
  name: string;
  role: string;
  department: string;
  salary: number;
  oldPassword: string;
  password: string;
  passwordConfirm: string;
}

const ProfileCard: FC = () => {
  const methods = useForm<ProfileInput>();
  return (
    <>
      <FormProvider {...methods}>
        <ProfileForm />
      </FormProvider>
    </>
  );
};

export default ProfileCard;

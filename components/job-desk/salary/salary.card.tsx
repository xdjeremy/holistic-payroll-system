import React, { FC } from "react";
import SalaryItem from "@/components/job-desk/salary/salary.item";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { AttendancesResponse, UsersResponse } from "@/types";

type TExpand = {
  user: UsersResponse;
};
const fetcher = async (params: any) => {
  const [user] = params;

  try {
    return pocketBase
      .collection("attendances")
      .getFullList<AttendancesResponse<TExpand>>({
        filter: `user.id = '${user}'`,
        expand: "user",
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const SalaryCard: FC = () => {
  const user = pocketBase.authStore.model;
  const { data, error } = useSWR([user?.id], fetcher);

  // create an array of attendance inside an array per month of punch_in
  const groupedAttendance = data?.reduce((acc: any, curr) => {
    const date = new Date(curr.punch_in);
    const month = date.getMonth();
    const year = date.getFullYear();
    const key = `${month}-${year}`;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(curr);

    return acc;
  });

  console.log(groupedAttendance);

  return (
    <>
      <div className={"flex w-full flex-col gap-6"}>
        <SalaryItem />
        <SalaryItem />
        <SalaryItem />
        <SalaryItem />
      </div>
    </>
  );
};

export default SalaryCard;

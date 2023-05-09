import React, { FC } from "react";
import SalaryItem from "@/components/job-desk/salary/salary.item";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { AttendancesResponse, UsersResponse } from "@/types";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

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
  let months: AttendancesResponse<TExpand>[][] = [];
  data?.map((attendance) => {
    const month = new Date(attendance.punch_in).getMonth();
    if (!months[month]) {
      months[month] = [];
    }
    months[month].push(attendance);
  });

  return (
    <>
      <div className={"flex w-full flex-col gap-6"}>
        {!data &&
          !error &&
          [1, 2, 3, 4, 5].map((i) => <Skeleton key={i} height={100} />)}

        {data &&
          months.map((month, index) => (
            <SalaryItem key={index} attendance={month} />
          ))}
      </div>
    </>
  );
};

export default SalaryCard;

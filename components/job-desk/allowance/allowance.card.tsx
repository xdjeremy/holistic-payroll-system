import React, { FC } from "react";
import AllowanceBanner from "@/components/job-desk/allowance/allowance.banner";
import AllowanceItem from "@/components/job-desk/allowance/allowance.item";

const AllowanceCard: FC = () => {
  return (
    <>
      <AllowanceBanner />
      <div
        className={
          "mt-6 grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4"
        }
      >
        <AllowanceItem
          title={"Paid Casual"}
          type={"Paid"}
          allowance={"07.00"}
          earned={"P21,000"}
          taken={"P3"}
          availability={"P5"}
        />
        <AllowanceItem
          title={"Paid Casual"}
          type={"Paid"}
          allowance={"07.00"}
          earned={"P21,000"}
          taken={"P3"}
          availability={"P5"}
        />
        <AllowanceItem
          title={"Paid Casual"}
          type={"Paid"}
          allowance={"07.00"}
          earned={"P21,000"}
          taken={"P3"}
          availability={"P5"}
        />
        <AllowanceItem
          title={"Paid Casual"}
          type={"Paid"}
          allowance={"07.00"}
          earned={"P21,000"}
          taken={"P3"}
          availability={"P5"}
        />
      </div>
    </>
  );
};

export default AllowanceCard;

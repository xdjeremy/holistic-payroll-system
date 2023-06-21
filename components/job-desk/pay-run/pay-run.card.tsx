import React, { FC } from "react";
import PayRunNotification from "@/components/job-desk/pay-run/payrun.notification";
import PayRunForm from "@/components/job-desk/pay-run/pay-run.form";

const PayRunCard: FC = () => {
  return (
    <div className={"flex flex-col gap-6 pb-10"}>
      <PayRunNotification />
      <PayRunForm />
    </div>
  );
};

export default PayRunCard;

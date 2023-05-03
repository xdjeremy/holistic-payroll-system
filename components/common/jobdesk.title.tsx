import React, { FC } from "react";

interface JobDeskTitleProps {
  title: string;
}

const JobDeskTitle: FC<JobDeskTitleProps> = ({ title }) => {
  return (
    <div className={"pb-6"}>
      <h1 className={"text-base font-bold capitalize text-[#0A0A0A]"}>
        {title}
      </h1>
    </div>
  );
};

export default JobDeskTitle;

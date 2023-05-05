import React, { FC } from "react";

interface Props {
  title: string;
  type: string;
  allowance: string;
  earned: string;
  taken: string;
  availability: string;
}

const Item = ({ data }: { data: string }) => {
  return (
    <div className={"flex flex-col gap-1 text-xs"}>
      <span className={"text-[#404040]"}>{data}</span>
      <span className={"text-[#9E9E9E]"}>Type</span>
    </div>
  );
};

const AllowanceItem: FC<Props> = ({
  title,
  type,
  allowance,
  earned,
  taken,
  availability,
}) => {
  return (
    <div
      className={
        "flex w-full flex-col gap-4 rounded-lg border border-[#EDEDED] px-6 py-4"
      }
    >
      <h2 className={"font-medium text-[#0A0A0A]"}>{title}</h2>

      <Item data={type} />
      <Item data={allowance} />
      <Item data={earned} />
      <Item data={taken} />
      <Item data={availability} />
    </div>
  );
};

export default AllowanceItem;

import React, { Context, FC } from "react";
import PageButton from "@/components/common/page.button";
import PageNumber from "@/components/common/page.number";
import PageDropdown from "@/components/common/page.dropdown";

interface Props {
  context: Context<any>;
}

const Pagination: FC<Props> = ({ context }) => {
  return (
    <div className={"flex flex-row justify-end pb-2.5"}>
      <PageButton context={context} />
      <PageNumber context={context} />
      <PageDropdown context={context} />
    </div>
  );
};

export default Pagination;

import React, { FC } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const EmployeesTableLoading: FC = () => {
  return (
    <tr>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
      <td className={"gap-2 p-3"}>
        <Skeleton />
      </td>
    </tr>
  );
};

export default EmployeesTableLoading;

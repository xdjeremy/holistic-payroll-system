import React, { FC } from "react";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { LeavesResponse } from "@/types";
import FolderTableLoading from "@/components/job-desk/folder/folderTable.loading";
import FolderTableItem from "@/components/job-desk/folder/folderTable.item";

const fetcher = async (page: number, perPage: number) => {
  try {
    return await pocketBase
      .collection("leaves")
      .getList<LeavesResponse>(page, perPage, {
        sort: "-created",
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const FolderTable: FC = () => {
  const { data, error } = useSWR([1, 10], fetcher);
  return (
    <table className={"w-full"}>
      <thead>
        <tr>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Date & time
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Attachment
          </th>
          <th
            className={
              "bg-[#F5F5F5] p-3 text-left text-xs font-normal text-[#0A0A0A]"
            }
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {!data &&
          !error &&
          [1, 2, 3, 4, 5].map((i) => <FolderTableLoading key={i} />)}
        {data &&
          data.items.map((item) => (
            <FolderTableItem
              key={item.id}
              date={item.created}
              status={item.status}
              attachments={item.attachment}
            />
          ))}
      </tbody>
    </table>
  );
};

export default FolderTable;

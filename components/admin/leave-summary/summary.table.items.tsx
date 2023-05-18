import React, { FC } from "react";

interface Props {
  profile: string;
  time: string;
  duration: string;
  department: string;
  type: string;
  attachment: string;
}
const SummaryTableItems: FC<Props> = ({profile, time, duration, department, type, attachment}) => {
    return (
        <tr>
            <td className={"flex flex-row items-center gap-2 p-3"}>
                <div className={"h-9 w-9 rounded-full bg-black"}></div>
                <div className={"text-sm font-normal text-black"}>{profile}</div>
            </td>
            <td className={"gap-2 p-3"}>{time}</td>
            <td className={"gap-2 p-3"}>
                <div>{duration}</div>
            </td>
            <td className={"gap-2 p-3"}>{department}</td>
            <td className={"gap-2 p-3"}>{type}</td>
            <td className={"gap-2 p-3"}>{attachment}</td>
        </tr>
    );
};

export default SummaryTableItems;
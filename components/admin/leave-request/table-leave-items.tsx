import React, {FC, useState} from 'react';
import {EllipsisVerticalIcon} from "@heroicons/react/20/solid";

interface Props {
    profile: string;
    time: string;
    duration: string;
    type: string;
    attachment: string;
    stat: string;
    action: any;
}
const TableLeaveItems: FC<Props> = ({profile, time, duration, type, attachment, stat, action}) => {
    const [openAction, setOpenAction] = useState(false)
    return (
      <>
        <tr>
          <td className={"flex flex-row items-center gap-2 p-3"}>
            <div className={"h-9 w-9 rounded-full bg-black"}></div>
            <div className={"text-sm font-normal text-black"}>{profile}</div>
          </td>
          <td className={"gap-2 p-3"}>{time}</td>
          <td className={"gap-2 p-3"}>
            <div>{duration}</div>
          </td>
          <td className={"gap-2 p-3"}>{type}</td>
          <td className={"gap-2 p-3"}>{attachment}</td>
          <td className={"gap-2 p-3"}>{stat}</td>
          <td className={"gap-2 p-3"}>
            {action}
            <button className={"relative"}>
                {
                    openAction && (
                        <div
                            className={"absolute flex flex-col top-0 right-2/3 w-[238px] z-10 bg-white text-black drop-shadow-lg"}>
                            <button className={"text-left px-3.5 py-2"}>
                                Approve
                            </button>
                            <button className={"text-left px-3.5 py-2"}>
                                Reject
                            </button>
                        </div>

                    )
                }
              <EllipsisVerticalIcon
                className={"h-8 w-8 flex-shrink-0"}
                onClick={() => setOpenAction(!openAction)}
              />
            </button>
          </td>
        </tr>
      </>
    );
};

export default TableLeaveItems;
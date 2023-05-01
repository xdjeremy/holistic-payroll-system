import React, { FC } from "react";
import Image from "next/image";
import PunchIn from "../../assets/images/punch_in.svg";
import PunchOut from "../../assets/images/punch_out.svg";
import { useUser } from "@/context";

const BannerItem: FC = () => {
  const { user } = useUser();

  return (
    <div
      className={
        "my-4 flex flex-row items-center justify-between rounded-lg bg-white px-4 py-2"
      }
    >
      <div className={"flex flex-col gap-1"}>
        <h2 className={"font-bold text-[#0A0A0A]"}>
          Good to see you, {user?.name} 👋
        </h2>
        <p className={"text-sm text-[#616161]"}>
          You came 15 minutes early today.
        </p>
      </div>

      <div className={"flex flex-row items-center gap-8"}>
        {/* punch in start */}
        <div className={"flex flex-row items-center gap-2"}>
          <div className={"rounded bg-[#CEE5D3] p-1.5"}>
            <Image src={PunchIn} alt={"In"} width={24} height={24} />
          </div>
          <div className={"flex flex-col"}>
            <span className={"text-xs font-medium text-[#404040]"}>
              7:14 AM
            </span>
            <span className={"text-xs text-[#616161]"}>Punch In</span>
          </div>
        </div>
        {/* punch in end*/}

        {/* punch out start */}
        <div className={"flex flex-row items-center gap-2"}>
          <div className={"rounded bg-[#FFD6DB] p-1.5"}>
            <Image src={PunchOut} alt={"Out"} width={24} height={24} />
          </div>
          <div className={"flex flex-col"}>
            <span className={"text-xs font-medium text-[#404040]"}>
              05:00 PM
            </span>
            <span className={"text-xs text-[#616161]"}>Punch Out</span>
          </div>
        </div>
        {/* punch out end */}
      </div>
    </div>
  );
};

export default BannerItem;

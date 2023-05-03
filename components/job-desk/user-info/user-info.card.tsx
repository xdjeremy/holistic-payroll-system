import React, { FC } from "react";
import UserProfileItem from "@/components/job-desk/user-info/user-profile.item";
import UserInfoItem from "@/components/job-desk/user-info/user-info.item";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const UserInfoCard: FC = () => {
  return (
    <div className={'bg-white rounded-lg px-8 py-4 gap-8 flex flex-col items-center w-72'}>
      <UserProfileItem />

      <div className={'flex flex-col w-full'}>
        <h3 className={'font-medium text-sm pb-4'}>
          Info
        </h3>
        <div className={'flex flex-col gap-6'}>
          <UserInfoItem icon={<ClipboardIcon className={'w-5 h-5'} />} value={'Admin'} label={'Department'} />
          <UserInfoItem icon={<ClipboardIcon className={'w-5 h-5'} />} value={'Admin'} label={'Department'} />
          <UserInfoItem icon={<ClipboardIcon className={'w-5 h-5'} />} value={'Admin'} label={'Department'} />
          <UserInfoItem icon={<ClipboardIcon className={'w-5 h-5'} />} value={'Admin'} label={'Department'} />
        </div>
      </div>

      <div className={'flex flex-col w-full pb-32'}>
        <h3 className={'font-medium text-sm pb-4'}>
          Info
        </h3>
        <div className={'flex flex-col gap-6'}>
          <UserInfoItem icon={<ClipboardIcon className={'w-5 h-5'} />} value={'Admin'} label={'Department'} />
          <UserInfoItem icon={<ClipboardIcon className={'w-5 h-5'} />} value={'Admin'} label={'Department'} />
          <UserInfoItem icon={<ClipboardIcon className={'w-5 h-5'} />} value={'Admin'} label={'Department'} />
          <UserInfoItem icon={<ClipboardIcon className={'w-5 h-5'} />} value={'Admin'} label={'Department'} />
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
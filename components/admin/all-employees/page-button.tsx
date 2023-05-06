import React, {FC} from 'react';
import {ChevronLeftIcon} from "@heroicons/react/24/solid";

const PageButton: FC = () => {
    return (
      <div>
        <button
          className={"h-8 w-8 rounded-lg border border-[#E0E0E0] bg-white"}
        >
          <ChevronLeftIcon className={"ml-1.5 h-4 w-4 flex-shrink-0"} />
        </button>
        <button
          className={
            "ml-1.5 mb-1 h-8 w-12 rounded-lg border border-[#E0E0E0] bg-white pt-1"
          }
        >
          <span>Prev</span>
        </button>
        <button
          className={
            "ml-1.5 mb-1 h-8 w-12 rounded-lg border border-[#E0E0E0] bg-blue-600 pt-1 text-white"
          }
        >
          <span>Next</span>
        </button>
      </div>
    );
};

export default PageButton;
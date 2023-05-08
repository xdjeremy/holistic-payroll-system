import React, { Context, FC, useContext } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  context: Context<any>;
}

const PageButton: FC<Props> = ({ context }) => {
  const { setPage, data, page } = useContext(context);

  const handlePrev = () => {
    setPage(page === 1 ? 1 : page - 1);
  };

  const handleNext = () => {
    setPage(page === data?.totalPages ? data?.totalPages : page + 1);
  };

  const goToFirstPage = () => {
    setPage(1);
  };
  return (
    <div>
      <button
        onClick={goToFirstPage}
        className={"h-8 w-8 rounded-lg border border-[#E0E0E0] bg-white"}
      >
        <ChevronLeftIcon className={"ml-1.5 h-4 w-4 flex-shrink-0"} />
      </button>
      <button
        onClick={handlePrev}
        disabled={data?.page === 1}
        className={
          "mb-1 ml-1.5 h-8 w-12 rounded-lg border border-[#E0E0E0] bg-white pt-1 disabled:cursor-not-allowed disabled:opacity-50"
        }
      >
        <span>Prev</span>
      </button>
      <button
        onClick={handleNext}
        disabled={data?.page === data?.totalPages}
        className={
          "mb-1 ml-1.5 h-8 w-12 rounded-lg border border-[#E0E0E0] bg-blue-600 pt-1 text-white disabled:cursor-not-allowed disabled:opacity-50"
        }
      >
        <span>Next</span>
      </button>
    </div>
  );
};

export default PageButton;

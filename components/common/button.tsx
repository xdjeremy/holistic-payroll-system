import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | string;
  color: "black" | "white";
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        "flex flex-row items-center rounded-md bg-[#07070D] px-4 py-1.5 font-medium text-[#F5F5F5]"
      }
    >
      {children}
    </button>
  );
};

export { Button };

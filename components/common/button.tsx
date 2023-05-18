import React, { FC, ReactNode } from "react";
import { classNames } from "@/utils";

interface Props {
  children: ReactNode | string;
  color: "black" | "white";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: FC<Props> = ({ children, onClick, disabled, color, type }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames(
        color === "black"
          ? "bg-[#07070D] text-[#F5F5F5] hover:brightness-75"
          : "border border-[#07070D] bg-white text-black hover:brightness-75",
        "flex flex-row items-center rounded-md  px-4 py-1.5 font-medium  disabled:cursor-not-allowed disabled:opacity-50"
      )}
    >
      {children}
    </button>
  );
};

export { Button };

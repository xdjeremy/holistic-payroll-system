import { RegisterOptions } from "react-hook-form";

const LoginValidation: {
  [x: string]: RegisterOptions;
} = {
  username: {
    required: {
      value: true,
      message: "Username is required",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password is required",
    },
  },
};

export { LoginValidation };

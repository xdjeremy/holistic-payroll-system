import { RegisterOptions } from "react-hook-form";

const ProfileValidation: {
  [key: string]: RegisterOptions;
} = {
  username: {
    required: "Username is required",
    minLength: {
      value: 3,
      message: "Username must be at least 3 characters",
    },
    maxLength: {
      value: 50,
      message: "Username must be less than 50 characters",
    },
  },
  name: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters",
    },
    maxLength: {
      value: 50,
      message: "Name must be less than 50 characters",
    },
  },
  oldPassword: {
    required: {
      value: false,
      message: "Old password is not required",
    },
  },
  newPassword: {
    required: {
      value: false,
      message: "New password is not required",
    },
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    maxLength: {
      value: 50,
      message: "Password must be less than 50 characters",
    },
  },
  newPasswordConfirm: {
    required: {
      value: false,
      message: "New password confirm is not required",
    },
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    maxLength: {
      value: 50,
      message: "Password must be less than 50 characters",
    },
  },
};

export { ProfileValidation };

import { RegisterOptions } from "react-hook-form";

const NewAccountValidation: {
  [x: string]: RegisterOptions;
} = {
  name: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters long",
    },
    maxLength: {
      value: 50,
      message: "Name must be less than 50 characters long",
    },
  },
  username: {
    required: "Username is required",
    minLength: {
      value: 3,
      message: "Username must be at least 3 characters long",
    },
    maxLength: {
      value: 50,
      message: "Username must be less than 50 characters long",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: "Email is invalid",
    },
  },
  salary: {
    required: "Salary is required",
    min: {
      value: 1,
      message: "Salary must be greater than 0",
    },
    max: {
      value: 1000000,
      message: "Salary must be less than 1000000",
    },
  },
  role: {
    required: "Role is required",
    minLength: {
      value: 3,
      message: "Role must be at least 3 characters long",
    },
    maxLength: {
      value: 50,
      message: "Role must be less than 50 characters long",
    },
  },
  department: {
    required: "Department is required",
    minLength: {
      value: 3,
      message: "Department must be at least 3 characters long",
    },
    maxLength: {
      value: 50,
      message: "Department must be less than 50 characters long",
    },
  },
};

export { NewAccountValidation };

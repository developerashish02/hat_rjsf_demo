import { RJSFSchema } from "@rjsf/utils";

export const schema: RJSFSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      title: "First Name",
      description: "Enter your first name",
    },
    lastName: {
      type: "string",
      title: "Last Name",
      description: "Enter your last name",
    },
    email: {
      type: "string",
      title: "Email",
      description: "Enter your email address",
    },
    password: {
      type: "string",
      title: "Password",
      description: "Enter your password",
    },
    confirmPassword: {
      type: "string",
      title: "Confirm Password",
      description: "Confirm your password",
    },
  },
  required: ["firstName", "lastName", "email", "password", "confirmPassword"],
};

export const schema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      title: "First Name",
      minLength: 1,
      maxLength: 50,
    },
    lastName: {
      type: "string",
      title: "Last Name",
      minLength: 1,
      maxLength: 50,
    },
    email: {
      type: "string",
      title: "Email",
      format: "email",
      minLength: 1,
    },
    password: {
      type: "string",
      title: "Password",
      minLength: 8,
    },
    confirmPassword: {
      type: "string",
      title: "Confirm Password",
      minLength: 8,
    },
  },
  required: ["firstName", "lastName", "email", "password", "confirmPassword"],
};

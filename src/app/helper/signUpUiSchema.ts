export const signUpUiSchema = {
  "firstName": {
    "ui:placeholder": "Enter your first name",
    "ui:autofocus": true
  },
  "lastName": {
    "ui:placeholder": "Enter your last name"
  },
  "email": {
    "ui:widget": "email",
    "ui:placeholder": "Enter your email address"
  },
  "password": {
    "ui:widget": "password",
    "ui:placeholder": "Enter your password"
  },
  "confirmPassword": {
    "ui:widget": "password",
    "ui:placeholder": "Confirm your password"
  }
};

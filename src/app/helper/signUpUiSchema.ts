import {
  CustomTextInput,
  CustomEmailWidget,
  CustomPasswordWidget,
} from "../templates/RJSFTemplate";

export const signUpUiSchema = {
  firstName: {
    "ui:widget": CustomTextInput,
    "ui:placeholder": "Enter your first name",
    "ui:autofocus": true,
    "ui:options": {
      label: false,
    },
  },
  lastName: {
    "ui:widget": CustomTextInput,
    "ui:placeholder": "Enter your last name",
    "ui:options": {
      label: false,
    },
  },
  email: {
    "ui:widget": CustomEmailWidget,
    "ui:placeholder": "Enter your email address",
    "ui:options": {
      label: false,
    },
  },
  password: {
    "ui:widget": CustomPasswordWidget,
    "ui:placeholder": "Enter your password",
    "ui:options": {
      label: false,
    },
  },
  confirmPassword: {
    "ui:widget": CustomPasswordWidget,
    "ui:placeholder": "Confirm your password",
    "ui:options": {
      label: false,
    },
  },
};

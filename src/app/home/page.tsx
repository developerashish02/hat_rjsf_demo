"use client";

import React from "react";
import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import {
  CustomTextInput,
  CustomEmailWidget,
  CustomPasswordWidget,
  SubmitButton,
} from "@/app/templates/RJSFTemplate";

const schema: RJSFSchema = {
  title: "Signup Form",
  type: "object",
  oneOf: [
    {
      title: "Signup with Email",
      properties: {
        username: {
          type: "string",
          title: "Username",
          minLength: 3,
        },
        email: {
          type: "string",
          title: "Email",
          format: "email",
        },
        password: {
          type: "string",
          title: "Password",
          minLength: 6,
        },
      },
      required: ["username", "email", "password"],
    },
    {
      title: "Signup with Google",
      properties: {
        googleAccount: {
          type: "string",
          title: "Google Account",
          enum: ["Login with Google"],
          default: "Login with Google",
        },
      },
      required: ["googleAccount"],
    },
  ],
};

const uiSchema = {
  username: {
    "ui:widget": CustomTextInput,
    "ui:options": {
      label: false,
    },
  },
  email: {
    "ui:widget": CustomEmailWidget,
    "ui:options": {
      label: false,
    },
  },
  password: {
    "ui:widget": CustomPasswordWidget,
    "ui:options": {
      label: false,
    },
  },
  googleAccount: {
    "ui:widget": CustomTextInput,
    "ui:options": {
      label: false,
    },
  },
};

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          validator={validator}
          templates={{
            ButtonTemplates: {
              SubmitButton,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Home;

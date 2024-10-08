"use client";

import React from "react";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import {
  CustomEmailWidget,
  CustomPasswordWidget,
  CustomSocialAccountWidget,
  SubmitButton,
} from "../templates/RJSFTemplate";
import Form from "@rjsf/core";

const schema: RJSFSchema = {
  title: "User Registration",
  type: "object",
  anyOf: [
    {
      title: "Register with Email",
      properties: {
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
      required: ["email", "password"],
    },
    {
      title: "Register with Social Account",
      properties: {
        socialAccount: {
          type: "string",
          title: "Social Account",
          enum: ["Google", "Facebook"],
          default: "Google",
        },
      },
      required: ["socialAccount"],
    },
  ],
};

const uiSchema = {
  email: {
    "ui:widget": CustomEmailWidget,
  },
  password: {
    "ui:widget": CustomPasswordWidget,
  },
  socialAccount: {
    "ui:widget": CustomSocialAccountWidget,
  },
};

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          User Registration
        </h1>
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

export default Register;

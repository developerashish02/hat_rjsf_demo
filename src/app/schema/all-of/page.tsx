"use client";

import React from "react";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";

const page = () => {
  const schema: RJSFSchema = {
    allOf: [
      {
        type: "object",
        properties: {
          firstName: { type: "string" },
          lastName: { type: "string" },
        },
        required: ["firstName", "lastName"],
      },
      {
        type: "object",
        properties: {
          email: { type: "string", format: "email" },
        },
        required: ["email"],
      },
    ],
  };

  function handleSubmit() {
    alert("Submit");
  }

  return (
    <div className="flex  justify-center items-center w-screen h-screen">
      <Form
        schema={schema}
        validator={validator}
        noHtml5Validate={false}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default page;

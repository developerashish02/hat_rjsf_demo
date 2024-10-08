"use client";

import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import React from "react";

const page = () => {
  const schema: RJSFSchema = {
    type: "object",
    anyOf: [
      {
        properties: {
          lorem: {
            type: "string",
          },
        },

        required: ["lorem"],
      },

      {
        properties: {
          lorem: {
            type: "string",
          },
          ipsum: {
            type: "string",
          },
        },
      },
    ],
  };

  const handleSubmit = () => {
    alert("Submit successful 🚀");
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Form schema={schema} validator={validator} onSubmit={handleSubmit} />
    </div>
  );
};

export default page;

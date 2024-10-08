"use client";
import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

import React from "react";

const schema: RJSFSchema = {
  title: "Select a schema",
  type: "object",
  oneOf: [
    {
      title: "Lorem Schema",
      properties: {
        lorem: {
          type: "string",
        },
      },

      required: ["lorem"],
    },

    {
      title: "Ipsum Schema",
      properties: {
        ipsum: {
          type: "string",
        },
      },

      required: ["ipsum"],
    },
  ],
};

const handleSubmit = () => {
  alert("Handle Submit");
};

const page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Form schema={schema} validator={validator} onSubmit={handleSubmit} />
    </div>
  );
};

export default page;

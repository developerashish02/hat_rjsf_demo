"use client";

import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { schema } from "./helper/signUpSchema";
import { signUpUiSchema } from "./helper/signUpUiSchema";
import { useState } from "react";
import { CustomFieldTemplate } from "./templates/RJSFTemplate";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div className="w-screen h-screen flex  justify-center items-center">
      <Form
        validator={validator}
        schema={schema}
        uiSchema={signUpUiSchema}
        formData={formData}
        className="w-1/3"
        templates={{
          FieldTemplate: CustomFieldTemplate,
        }}
      />
    </div>
  );
}

"use client";

import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { schema as defaultSchema } from "./helper/signUpSchema";
import { signUpUiSchema } from "./helper/signUpUiSchema";
import { useState, useEffect } from "react";
import { SubmitButton } from "./templates/RJSFTemplate";
import { useRoles } from "@/hooks/useRoles";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const { loading, roles, error } = useRoles();

  useEffect(() => {
    if (!loading && roles.length > 0) {
      const defaultRole = roles.find((role) => role.name === "user");
      if (defaultRole) {
        setFormData((prevData) => ({ ...prevData, role: defaultRole.id }));
      }
    }
  }, [loading, roles]);

  const customValidate = (data, errors) => {
    if (!data.firstName || data.firstName.length < 1) {
      errors.firstName.addError("First name is required.");
    }
    if (!data.lastName || data.lastName.length < 1) {
      errors.lastName.addError("Last name is required.");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      errors.email.addError("Email is required.");
    } else if (!emailRegex.test(data.email)) {
      errors.email.addError("Email must be a valid email address.");
    }
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
    if (!data.password || data.password.length < 8) {
      errors.password.addError("Password must be at least 8 characters long.");
    } else if (!passwordRegex.test(data.password)) {
      errors.password.addError(
        "Password must contain at least one letter and one number."
      );
    }
    if (data.confirmPassword !== data.password) {
      errors.confirmPassword.addError("Passwords do not match.");
    }
    return errors;
  };

  const onFormSubmit = () => {
    alert("Form submitted successfully");
    console.log("Form submitted with data:", formData);
  };

  const roleOptions = roles.map((role) => ({
    value: role.id,
    label: role.name,
  }));

  if (loading) {
    return <div>Loading roles...</div>;
  }

  if (error) {
    return <div>Error loading roles: {error.message}</div>;
  }

  const schema = {
    ...defaultSchema,
    properties: {
      ...defaultSchema.properties,
      role: {
        type: "string",
        title: "Role",
        enum: roleOptions.map((option) => option.value),
        enumNames: roleOptions.map((option) => option.label),
      },
    },
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Form
        onChange={(e) => setFormData(e.formData)}
        noHtml5Validate={true}
        customValidate={customValidate}
        liveValidate={false}
        showErrorList={false}
        validator={validator}
        schema={schema}
        uiSchema={signUpUiSchema}
        formData={formData}
        className="w-1/3"
        templates={{
          ButtonTemplates: {
            SubmitButton,
          },
        }}
        onSubmit={onFormSubmit}
      />
    </div>
  );
}

"use client";

import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { schema as defaultSchema } from "./helper/signUpSchema";
import { signUpUiSchema } from "./helper/signUpUiSchema";
import { useState, useEffect } from "react";
import { SubmitButton } from "./templates/RJSFTemplate";
import { useRoles } from "@/hooks/useRoles";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errorList, setErrorList] = useState<any[]>([]);

  const { loading, roles, error } = useRoles();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
    }
    if (!passwordRegex.test(data.password)) {
      errors.password.addError(
        "Password must contain at least one letter and one number."
      );
    }
    if (data.confirmPassword !== data.password) {
      errors.confirmPassword.addError("Passwords do not match.");
    }
    return errors;
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

  const handleSubmit = () => {
    setErrorList([]);
    alert("Form submitted successfully");
    console.log("Form submitted with data:", formData);
  };

  const handleError = (errors: any) => {
    setErrorList(errors);
    setIsSheetOpen(true);
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
        onError={handleError}
        onSubmit={handleSubmit}
        className="w-1/3"
        templates={{
          ButtonTemplates: {
            SubmitButton,
          },
        }}
      />

      <Sheet open={isSheetOpen}>
        <SheetContent className="overflow-y-scroll">
          <h2 className="text-lg font-semibold mb-2">Form Errors</h2>
          <div id="form-errors" className="p-4 bg-red-50 rounded shadow">
            {errorList.length > 0 ? (
              <ul className="list-disc ml-5 text-red-600">
                {errorList.map((error, index) => (
                  <li key={index}>{error.stack}</li>
                ))}
              </ul>
            ) : (
              <p>No errors</p>
            )}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button onClick={() => setIsSheetOpen(false)} className="mt-2">
                Close
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

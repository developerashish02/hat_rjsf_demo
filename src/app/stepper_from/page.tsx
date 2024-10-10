"use client";
import React, { useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

const StepperForm = () => {
  const [step, setStep] = useState(0);

  const stepSchemas = [
    {
      title: "Step 1: Personal Details",
      type: "object",
      required: ["firstName", "lastName"],
      properties: {
        firstName: { type: "string", title: "First Name" },
        lastName: { type: "string", title: "Last Name" },
      },
    },
    {
      title: "Step 2: Contact Details",
      type: "object",
      required: ["email", "phone"],
      properties: {
        email: { type: "string", title: "Email", format: "email" },
        phone: { type: "string", title: "Phone Number" },
      },
    },
  ];

  const [formData, setFormData] = useState({});

  const nextStep = (newData) => {
    setFormData({ ...formData, ...newData });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (step < stepSchemas.length - 1) {
      nextStep(formData);
    } else {
      console.log("Form submitted successfully!", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <h2>{`Step ${step + 1} of ${stepSchemas.length}`}</h2>
      <Form
        className="w-1/2"
        validator={validator}
        schema={stepSchemas[step]}
        formData={formData}
        onSubmit={handleSubmit}
      >
        <div className="space-x-4">
          {step > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-black text-white py-4 px-6 rounded "
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="bg-black text-white py-4 px-6 rounded "
          >
            {step === stepSchemas.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default StepperForm;

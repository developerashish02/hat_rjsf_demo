import React from "react";

import { SubmitButtonProps } from "@rjsf/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function SubmitButton(props: SubmitButtonProps) {
  return (
    <div className="text-center mt-8">
      <Button
        type="submit"
        className="bg-black hover:bg-gray-800 text-white font-bold py-8 px-10 rounded-lg text-lg transition-all duration-300"
      >
        Submit
      </Button>
    </div>
  );
}

export const CustomTextInput = ({
  id,
  label,
  value,
  onChange,
  required,
}: any) => (
  <div className="mb-8">
    <Label htmlFor={id} className="text-gray-700 font-semibold text-2xl">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Input
      type="text"
      id={id}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className="text-xl mt-2 block w-full border border-gray-300 rounded-lg shadow-lg py-8 px-4 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150"
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
);

export const CustomEmailWidget = ({
  id,
  label,
  value,
  onChange,
  required,
}: any) => (
  <div className="mb-8">
    <Label htmlFor={id} className="text-gray-700 font-semibold text-2xl">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Input
      type="email"
      id={id}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className="text-xl mt-2 block w-full border border-gray-300 rounded-lg shadow-lg py-8 px-4 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150"
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
);

export const CustomPasswordWidget = ({
  id,
  label,
  value,
  onChange,
  required,
}: any) => (
  <div className="mb-8">
    <Label htmlFor={id} className="text-gray-700 font-semibold text-2xl">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Input
      type="password"
      id={id}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className="text-xl mt-2 block w-full border border-gray-300 rounded-lg shadow-lg py-8 px-4 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150"
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
);

export const CustomSocialAccountWidget = ({
  id,
  label,
  value,
  onChange,
  required,
}: any) => (
  <div className="mb-8">
    <Label htmlFor={id} className="text-gray-700 font-semibold">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <Select
      id={id}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className="mt-2 block w-full border border-gray-300 rounded-lg shadow-lg py-2 px-4 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150"
    >
      <option value="">Select an option</option>
      <option value="Google">Google</option>
      <option value="Facebook">Facebook</option>
    </Select>
  </div>
);

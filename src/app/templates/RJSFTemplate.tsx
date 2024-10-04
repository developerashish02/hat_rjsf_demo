import React from "react";

import { FieldTemplateProps } from "@rjsf/utils";
import { Label } from "@/components/ui/label";

export function CustomFieldTemplate(props: FieldTemplateProps) {
  const {
    id,
    classNames,
    style,
    label,
    help,
    required,
    errors,
    children,
    displayLabel,
  } = props;

  return (
    <div className={`${classNames} mb-4`} style={style}>
      {id !== "root" && displayLabel ? (
        <Label className="text-lg  font-bold" htmlFor={id}>
          {label} {required && label !== "" ? "*" : null}
        </Label>
      ) : null}
      <div className="mt-2">{children}</div>
      {errors ? <p className="text-red-500">{errors}</p> : null}
      {help ? <p className="text-sm text-gray-500">{help}</p> : null}
    </div>
  );
}

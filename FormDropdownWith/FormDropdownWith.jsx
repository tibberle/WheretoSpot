import React from "react";
import { IconDropdown } from "../IconDropdown/IconDropdown";
import "./form-dropdown-with.css";

export const FormDropdownWith = ({
  className,
  override = <IconDropdown className="icon-px-dropdown" />,
}) => {
  return (
    <div className={`form-dropdown-with ${className}`}>
      <div className="text-wrapper">Label</div>

      <div className="div">
        <div className="input-2">Select an option</div>

        {override}
      </div>
    </div>
  );
};

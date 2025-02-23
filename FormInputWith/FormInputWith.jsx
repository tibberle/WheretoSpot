import React from "react";
import "./form-input-with.css";

export const FormInputWith = ({ className }) => {
  return (
    <div className={`form-input-with ${className}`}>
      <div className="label">Label</div>

      <div className="field">
        <div className="input">Enter data...</div>
      </div>
    </div>
  );
};

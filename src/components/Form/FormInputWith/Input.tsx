import React from "react";
import PropTypes from "prop-types"; // For type checking
import "./form-input-with.css";

interface FormInputWithProps {
  label?: string;
  data: string;
  placeholder: string;
}

export const FormInputWith: React.FC<FormInputWithProps> = ({ label, data, placeholder }) => {
  return (
    <div className="form-input-with">
      {label && <label className="navigated-text-normal" htmlFor={data}>{label}</label>}
      <input type="text" className="small-text-normal" placeholder={placeholder} id={data} name={data} />
    </div>
  );
};

// Type checking with PropTypes
FormInputWith.propTypes = {
  label: PropTypes.string,
  data: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
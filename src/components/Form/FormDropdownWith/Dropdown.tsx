import React from "react";
import PropTypes from "prop-types"; // For type checking
import { IconDropdown } from "../../../icon/Dropdown";
import "./form-dropdown-with.css";
import "../../../icon/IconSize24px.css";

interface FormDropdownWithProps {
  label: string;
  data: string;
  options: { value: string; label: string }[];
}

export const FormDropdownWith: React.FC<FormDropdownWithProps> = ({ label, options, data }) => {
  return (
    <div className="form-dropdown-with">
        <label className="navigated-text-normal" htmlFor={data}>{label}</label>
        <select className="small-text-normal" id={data} name={data}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <IconDropdown className="icon-size-24px" />
    </div>
  );
};

// Type checking with PropTypes
FormDropdownWith.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
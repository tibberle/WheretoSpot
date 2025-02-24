import React from "react";
import PropTypes from "prop-types"; // For type checking
import { IconUpload } from "../../../icon/Upload";
import "./form-upload-with.css";
import "../../../icon/IconSize24px.css";

interface FormUploadWithProps {
    label: string;
    data: string;
}

export const FormUploadWith: React.FC<FormUploadWithProps> = ({ label, data }) => {
  return (
    <div className="form-upload-with">
      <label className="navigated-text-normal" htmlFor={data}>{label}</label>
      <div>
        <input type="file" accept="image/png, image/jpeg" multiple id={data} name={data} className="small-text-normal"/>
        <IconUpload className="icon-size-24px" /> 
      </div>
    </div>
  );
};

// Type checking with PropTypes
FormUploadWith.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
};
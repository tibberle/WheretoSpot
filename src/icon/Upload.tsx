import React from "react";
import { ReactSVG } from "react-svg";
import Uploadsrc from "../assets/icon-upload.svg";
import PropTypes from "prop-types"; // For type checking

interface IconUploadProps {
  className: string;
}

export const IconUpload: React.FC<IconUploadProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className}`} src={Uploadsrc} />
  );
};

// Type checking with PropTypes
IconUpload.propTypes = {
  className: PropTypes.string.isRequired,
};
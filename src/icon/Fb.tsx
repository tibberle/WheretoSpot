import React from "react";
import { ReactSVG } from "react-svg";
import FbSrc from "../assets/icon-fb.svg";
import PropTypes from "prop-types"; // For type checking

interface IconFbProps {
  className: string;
}

export const IconFb: React.FC<IconFbProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className}`} src={FbSrc} />
  );
};

// Type checking with PropTypes
IconFb.propTypes = {
  className: PropTypes.string.isRequired,
};
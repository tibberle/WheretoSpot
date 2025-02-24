import React from "react";
import { ReactSVG } from "react-svg";
import ARSrc from "../assets/icon-ar.svg";
import PropTypes from "prop-types"; // For type checking

interface IconARProps {
  className: string;
}

export const IconAR: React.FC<IconARProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className}`} src={ARSrc} />
  );
};

// Type checking with PropTypes
IconAR.propTypes = {
  className: PropTypes.string.isRequired,
};

export default IconAR;
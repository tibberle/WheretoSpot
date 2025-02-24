import React from "react";
import { ReactSVG } from "react-svg";
import Boxsrc from "../assets/icon-box.svg";
import PropTypes from "prop-types"; // For type checking
import "./transparentIcon.css";

interface IconBoxProps {
  className: string;
}

export const IconBox: React.FC<IconBoxProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className} transparent-icon`} src={Boxsrc} />
  );
};

// Type checking with PropTypes
IconBox.propTypes = {
  className: PropTypes.string.isRequired,
};
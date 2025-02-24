import React from "react";
import PropTypes from "prop-types"; // For type checking
import { ReactSVG } from "react-svg";
import Dropdownsrc from "../assets/icon-dropdown.svg";

interface IconDropdownProps {
  className: string;
}

export const IconDropdown: React.FC<IconDropdownProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className}`} src={Dropdownsrc} />
  );
};

// Type checking with PropTypes
IconDropdown.propTypes = {
  className: PropTypes.string.isRequired,
};
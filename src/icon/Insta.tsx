import React from "react";
import { ReactSVG } from "react-svg";
import InstaSrc from "../assets/icon-insta.svg";
import PropTypes from "prop-types"; // For type checking

interface IconInstaProps {
  className: string;
}

export const IconInsta: React.FC<IconInstaProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className}`} src={InstaSrc} />
  );
};

// Type checking with PropTypes
IconInsta.propTypes = {
  className: PropTypes.string.isRequired,
};
import React from "react";
import { ReactSVG } from "react-svg";
import LinkedInSrc from "../assets/icon-linkedin.svg";
import PropTypes from "prop-types"; // For type checking

interface IconLinkedInProps {
  className: string;
}

export const IconLinkedIn: React.FC<IconLinkedInProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className}`} src={LinkedInSrc} />
  );
};

// Type checking with PropTypes
IconLinkedIn.propTypes = {
  className: PropTypes.string.isRequired,
};
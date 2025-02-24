import React from "react";
import PropTypes from "prop-types"; // For type checking
import "./Primary.css";

interface ButtonPrimaryProps {
  label: string;
  href: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, href }) => {
  return (
    <a className="button-primary" href={href}>
      <span className="navigated-text-bold">{label}</span>
    </a>
  );
};

// Type checking with PropTypes
ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
import React from "react";
import PropTypes from "prop-types"; // For type checking
import "./Benefit.css";

interface ButtonBenefitProps {
    label: string;
}

export const ButtonBenefit: React.FC<ButtonBenefitProps> = ({ label }) => {
  return (
    <div className="button-benefit">
      <span className="navigated-text-bold">{label}</span>
    </div>
  );
};

// Type checking with PropTypes
ButtonBenefit.propTypes = {
    label: PropTypes.string.isRequired,
};
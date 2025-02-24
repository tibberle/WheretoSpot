import React from "react";
import PropTypes from "prop-types"; // For type checking
import "./Hero.css";

interface ButtonHeroProps {
  label: string;
  href: string;
}

export const ButtonHero: React.FC<ButtonHeroProps> = ({ label, href }) => {
  return (
    <a className="button-hero" href={href}>
      <span className="navigated-text-bold">{label}</span>
    </a>
  );
};

// Type checking with PropTypes
ButtonHero.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
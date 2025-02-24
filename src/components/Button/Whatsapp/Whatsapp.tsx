import React from "react";
import PropTypes from "prop-types"; // For type checking
import { IconWhatsapp } from "../../../icon/Whatsapp";
import "./Whatsapp.css";
import "../../../icon/IconSize24px.css";

interface ButtonWhatsappProps {
  label: string;
  href: string;
}

export const ButtonWhatsapp: React.FC<ButtonWhatsappProps> = ({ label, href }) => {
  return (
    <a className="button-whatsapp" href={href}>
      <IconWhatsapp className="icon-size-24px" />
      <span className="navigated-text-bold">{label}</span >
    </a>
  );
};

// Type checking with PropTypes
ButtonWhatsapp.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

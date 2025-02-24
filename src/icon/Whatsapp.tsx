import React from "react";
import { ReactSVG } from "react-svg";
import Whatsappsrc from "../assets/icon-whatsapp.svg";
import PropTypes from "prop-types"; // For type checking

interface IconWhatsappProps {
  className: string;
}

export const IconWhatsapp: React.FC<IconWhatsappProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className}`} src={Whatsappsrc} />
  );
};

// Type checking with PropTypes
IconWhatsapp.propTypes = {
  className: PropTypes.string.isRequired,
};
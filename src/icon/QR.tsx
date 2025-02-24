import React from "react";
import { ReactSVG } from "react-svg";
import QRsrc from "../assets/icon-qr.svg";
import PropTypes from "prop-types"; // For type checking

interface IconQRProps {
  className: string;
}

export const IconQR: React.FC<IconQRProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className}`} src={QRsrc} />
  );
};

// Type checking with PropTypes
IconQR.propTypes = {
  className: PropTypes.string.isRequired,
};

export default IconQR;
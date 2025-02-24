import React from "react";
import { ReactSVG } from "react-svg";
import IncreaseSalesSrc from "../assets/icon-increase-sales.svg";
import PropTypes from "prop-types"; // For type checking
import "./transparentIcon.css";

interface IconIncreaseSalesProps {
  className: string;
}

export const IconIncreaseSales: React.FC<IconIncreaseSalesProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className} transparent-icon`} src={IncreaseSalesSrc} />
  );
};

// Type checking with PropTypes
IconIncreaseSales.propTypes = {
  className: PropTypes.string.isRequired,
};

export default IconIncreaseSales;
import React from "react";
import { ReactSVG } from "react-svg";
import Deliverysrc from "../assets/icon-delivery.svg";
import PropTypes from "prop-types"; // For type checking
import "./transparentIcon.css";

interface IconDeliveryProps {
  className: string;
}

export const IconDelivery: React.FC<IconDeliveryProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className} transparent-icon`} src={Deliverysrc} />
  );
};

// Type checking with PropTypes
IconDelivery.propTypes = {
  className: PropTypes.string.isRequired,
};
import React from "react";
import { ReactSVG } from "react-svg";
import AllInOneSrc from "../assets/icon-all-in-one.svg";
import PropTypes from "prop-types"; // For type checking

interface IconAllInOneProps {
  className: string;
}

export const IconAllInOne: React.FC<IconAllInOneProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className}`} src={AllInOneSrc} />
  );
};

// Type checking with PropTypes
IconAllInOne.propTypes = {
  className: PropTypes.string.isRequired,
};

export default IconAllInOne;
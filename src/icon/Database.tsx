import React from "react";
import { ReactSVG } from "react-svg";
import DatabaseSrc from "../assets/icon-database.svg";
import PropTypes from "prop-types"; // For type checking
import "./transparentIcon.css";

interface IconDatabaseProps {
  className: string;
}

export const IconDatabase: React.FC<IconDatabaseProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className} transparent-icon`} src={DatabaseSrc} />
  );
};

// Type checking with PropTypes
IconDatabase.propTypes = {
  className: PropTypes.string.isRequired,
};

export default IconDatabase;
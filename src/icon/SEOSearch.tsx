import React from "react";
import { ReactSVG } from "react-svg";
import SEOSearchSrc from "../assets/icon-seo-search.svg";
import PropTypes from "prop-types"; // For type checking
import "./transparentIcon.css";

interface IconSEOSearchProps {
  className: string;
}

export const IconSEOSearch: React.FC<IconSEOSearchProps> = ({ className }) => {
  return (
    <ReactSVG className={`${className} transparent-icon`} src={SEOSearchSrc} />
  );
};

// Type checking with PropTypes
IconSEOSearch.propTypes = {
  className: PropTypes.string.isRequired,
};

export default IconSEOSearch;
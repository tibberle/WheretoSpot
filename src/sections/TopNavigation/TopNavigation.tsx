import React from "react";
import PropTypes from "prop-types"; // For type checking
import { useLocation } from "react-router-dom";
import "./TopNavigation.css";

interface NavItem {
  label: string;
  link: string;
}

interface TopNavigationProps {
  items: NavItem[];
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ items }) => {
  const location = useLocation();

  return (
    <div className="top-nav-container">
      <nav className="nav">
        <div className="navigated-text-normal">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <a
                href={item.link}
                className={`${location.pathname.includes(item.link) ? "active-link" : "other-link"}`}
              >
                {item.label}
              </a>
              {index < items.length - 1 && <div className="divider" />}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </div>
  );
};

// Type checking with PropTypes
TopNavigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TopNavigation;
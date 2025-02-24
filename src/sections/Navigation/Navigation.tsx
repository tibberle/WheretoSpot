import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Navigation.css";
import Logo from "../../assets/logo.png";
import TopNavigation from "../TopNavigation/TopNavigation";

interface SubNavItem {
  label: string;
  link: string;
}

interface NavItem {
  label: string;
  link: string;
  subItems?: SubNavItem[];
}

interface NavigationProps {
  items: NavItem[];
  topNavItems: { label: string; link: string }[];
}

export const Navigation: React.FC<NavigationProps> = ({ items, topNavItems }) => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (index: number) => {
    // Toggle dropdown only when the item is clicked
    if (dropdownOpen === index) {
      setDropdownOpen(null); // Close if it's already open
    } else {
      setDropdownOpen(index); // Open the dropdown
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Ensure the click is outside the menu and dropdown
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(null); // Close dropdown if clicking outside both menu and dropdown
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav-container">
      <div className="main-content" ref={menuRef}>
        <img src={Logo} alt="Logo" />
        <div className="nav-links">
          {items.map((item, index) => (
            <div key={index} ref={dropdownRef}>
              <a
                href={item.link}
                className="navigated-text-normal"
                onClick={() => handleItemClick(index)}
              >
                {item.label}
              </a>
              {item.subItems && dropdownOpen === index && (
                <div className="dropdown-menu">
                  {item.subItems.map((subItem, subIndex) => (
                    <a key={subIndex} href={subItem.link} className="navigated-text-normal">
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`display-non ${menuOpen ? "nav-mobile" : ""}`}>
          <main>
            <header>
              <span className="navigated-text-normal" onClick={() => setMenuOpen(false)}>
                &#8592; Back to page
              </span>
              <img src={Logo} alt="Logo" />
              <TopNavigation items={topNavItems} />
            </header>

            <div className="nav">
              {items.map((item, index) => (
                <div key={index} ref={dropdownRef}>
                  <a
                    href={item.link}
                    className="navigated-text-normal"
                    onClick={() => handleItemClick(index)}
                  >
                    {item.label}
                  </a>
                  {item.subItems && dropdownOpen === index && (
                    <div className="dropdown-menu">
                      {item.subItems.map((subItem, subIndex) => (
                        <a key={subIndex} href={subItem.link} className="navigated-text-normal">
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </nav>
  );
};

// Define the shape of a single sub-navigation item
const subNavItemPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
});

// Define the shape of a single navigation item
const navItemPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  subItems: PropTypes.arrayOf(subNavItemPropType) as PropTypes.Validator<SubNavItem[] | undefined>,
});

// Define the PropTypes for Navigation
Navigation.propTypes = {
  items: PropTypes.arrayOf(navItemPropType.isRequired).isRequired,
  topNavItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Navigation;

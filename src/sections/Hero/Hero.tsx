import React from "react";
import PropTypes from "prop-types"; // For type checking
import { ButtonHero } from "../../components/Button/Hero/Hero";
import "./Hero.css";

interface HeroProps {
  title: string;
  href: string;
  slogan?: string;
  text: string;
  imgsrc: string;
  labelButton?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, slogan, text, imgsrc, labelButton, href }) => {
  const defaultImg = "path/to/default/image.jpg";
  const backgroundImage = imgsrc ? `url(${imgsrc})` : `url(${defaultImg})`;

  const containerStyle = !slogan && !labelButton
    ? { height: 'auto', paddingTop: 'var(--spacing-96)', paddingBottom: 'var(--spacing-96)' }
    : {};

  return (
    <div className="hero-container" style={{ backgroundImage, ...containerStyle }}>
      <div className="content-wrapper">
        <div className="text-content">
          <div className="intro-section">
            <h1>{title}</h1>
            {slogan && <span className="slogan">{slogan}</span>}
          </div>
          <p>
            {text}
          </p>
        </div>
        {labelButton && <ButtonHero label={labelButton} href={href} />}
      </div>
    </div>
  );
};

// Type checking with PropTypes
Hero.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string,
  text: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  labelButton: PropTypes.string,
};

export default Hero;
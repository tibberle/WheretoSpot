import React from 'react';
import PropTypes from 'prop-types'; // For type checking
import { ButtonPrimary } from '../../components/Button/Primary/Primary';
import { ButtonWhatsapp } from '../../components/Button/Whatsapp/Whatsapp';
import './Content.css';

interface Point {
  icon: React.ReactNode;
  text: string;
}

interface ContentProps {
  heading: string;
  href: string;
  intro: string;
  points?: Point[];
  buttonLabel?: string;
  imageSrc: string;
  direction?: 'left' | 'right';
  backgroundColor?: string;
  buttonType?: 'primary' | 'whatsapp';
}

const Content: React.FC<ContentProps> = ({ 
  heading, 
  intro, 
  points, 
  buttonLabel = "",  // Default value added to prevent undefined
  imageSrc, 
  href, 
  direction = 'left', 
  backgroundColor, 
  buttonType = 'primary' 
}) => {
  const containerStyle: React.CSSProperties = direction === 'right' ? { flexDirection: 'row-reverse' } : {};
  const imageStyle: React.CSSProperties = points ? {} : { display: 'block' };
  const sectionStyle: React.CSSProperties = backgroundColor ? { backgroundColor } : {};

  const renderButton = () => {
    if (buttonLabel !== "") {  // Ensure buttonLabel is not empty before rendering
      switch (buttonType) {
        case 'whatsapp':
          return <ButtonWhatsapp label={buttonLabel} href={href}/>;
        case 'primary':
        default:
          return <ButtonPrimary label={buttonLabel} href={href} />;
      }
    }
    return null;
  };
  

  return (
    <section className="content-navigate" style={sectionStyle}>
      <div className="main" style={containerStyle}>
        <div className="content">
          <div className="header">
            <h2>{heading}</h2>
            <p>{points ? <b>{intro}</b> : intro}</p>
          </div>
          {points && (
            <div className="key">
              {points.map((point, index) => (
                <div className="point" key={index}>
                  <div className="icon">{point.icon}</div>
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          )}
          {renderButton()} {/* Only renders when buttonLabel is not empty */}
        </div>
        <div className="image" style={{ ...imageStyle, backgroundImage: `url(${imageSrc})` }}></div>
      </div>
    </section>
  );
};

// Type checking with PropTypes
Content.propTypes = {
  heading: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      text: PropTypes.string.isRequired,
    })
  ) as PropTypes.Validator<Point[] | undefined>,
  buttonLabel: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
  backgroundColor: PropTypes.string,
  buttonType: PropTypes.oneOf(['primary', 'whatsapp']),
};

export default Content;

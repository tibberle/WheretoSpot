import React from 'react';
import PropTypes from 'prop-types';
import './Service.css';

interface Service {
  category: string;
  items: { image: string; href: string }[];
}

interface ServiceSectionProps {
  title: string;
  services: Service[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, services }) => {
  return (
    <div className="service-layout">
      <div className="main-content">
        <h2>{title}</h2>
        <div className="content">
          {services.map((service, index) => (
            <div key={index} className="service-section">
              <h3>{service.category}</h3>
              <div className="image-list">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="image-container">
                    <a href={item.href} style={{ backgroundImage: `url(${item.image})` }}></a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Type checking with PropTypes
ServiceSection.propTypes = {
  title: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
};

export default ServiceSection;
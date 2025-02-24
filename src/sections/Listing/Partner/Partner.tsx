import React from 'react';
import PropTypes from 'prop-types';
import './Partner.css';

interface Partner {
  image: string;
  href: string;
}

interface PartnersListingProps {
  title: string;
  partners: Partner[];
}

const PartnersListing: React.FC<PartnersListingProps> = ({ title, partners }) => {
  const renderImageRows = () => {
    const rows = [];
    for (let i = 0; i < partners.length; i += 4) {
      const rowPartners = partners.slice(i, i + 4);
      rows.push(
        <div key={i} className="partners-row">
          {rowPartners.map((partner, index) => (
            <div key={index} className="partner-image-container">
              <a className="partner-image" href={partner.href} style={{ backgroundImage: `url(${partner.image})` }}></a>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="partners-listing">
      <div className="partners-main">
        <h2>{title}</h2>
        <div className="partners-content">
          {renderImageRows()}
        </div>
      </div>
    </div>
  );
};

// Type checking with PropTypes
PartnersListing.propTypes = {
  title: PropTypes.string.isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default PartnersListing;
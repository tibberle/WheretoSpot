import React from 'react';
import PropTypes from 'prop-types';
import './Feature&Benefit.css';

interface FeatureColumn {
  icon: React.ReactNode;
  title?: string;
  description?: string;
}

interface FeatureProps {
  columns: FeatureColumn[];
  imageSrc: string;
}

const Feature: React.FC<FeatureProps> = ({ columns, imageSrc }) => {
  return (
    <section className="features-layout" style={{ backgroundImage: `url(${imageSrc})` }}>
      <main>
        <h2>What Where To Spot Offer?</h2>
        <div className="features-main">
          {columns.slice(0, 6).map((column, index) => (
            <div className="feature-column" key={index}>
              <div className="icon-container">
                {column.icon}
              </div>
              <div className="content">
                <h3>{column.title}</h3>
                <p>{column.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

// Type checking with PropTypes
Feature.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default Feature;
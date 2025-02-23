import React from 'react';
import styled from 'styled-components';
import './AddBusiness.css';

interface AddBusinessProps {
  className?: string;
}

const AddBusiness: React.FC<AddBusinessProps> = ({ className }) => {
  return (
    <div className={`add-business ${className}`}>
      <section className="content-navigate">
        <div className="main">
          <div className="content">
            <div className="header">
              <h2 className="heading">Add your Business</h2>
              <p className="intro">
                We offer you a new experience to join your new business, designed to facilitate the purchase process with us everything it can in one place.
              </p>
            </div>
            <div className="key">
              <div className="point">
                <img src="https://dashboard.codeparrot.ai/api/image/Z7WgwDO_YEiK216d/icon-32-p.png" alt="Box icon" className="icon" />
                <p className="text">
                  Invest in this distinctive experience for the satisfaction of your customers and for them, and to ensure them an unfortunate shopping trip.
                </p>
              </div>
              <div className="point">
                <img src="https://dashboard.codeparrot.ai/api/image/Z7WgwDO_YEiK216d/icon-32-p-2.png" alt="Delivery icon" className="icon" />
                <p className="text">
                  Invest in this distinctive experience for the satisfaction of your customers and for them, and to ensure them an unfortunate shopping trip.
                </p>
              </div>
            </div>
            <button className="primary-button">Label</button>
          </div>
          <div className="image">
            <img src="https://dashboard.codeparrot.ai/api/image/Z7WgwDO_YEiK216d/image.png" alt="Business visual" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBusiness;


import React, { useState } from 'react';
import { ButtonBenefit } from '../../components/Button/Benefit/Benefit';
import { ButtonPrimary } from '../../components/Button/Primary/Primary';
import { FormInputWith } from '../../components/Form/FormInputWith/Input';
import { IconLinkedIn } from '../../icon/LinkedIn';
import { IconWhatsapp } from '../../icon/Whatsapp';
import { IconInsta } from '../../icon/Insta';
import { IconFb } from '../../icon/Fb';
import './Footer.css';
import Logo from "../../assets/logo.png";
import PropTypes from 'prop-types';

interface FooterLink {
  href: string;
  text: string;
}

interface FooterProps {
  links: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  const [email, setEmail] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const renderLinks = () => {
    const linkGroups = [];
    for (let i = 0; i < links.length; i += 3) {
      linkGroups.push(
            <div key={i}>
            {links.slice(i, i + 3).map((link, index) => (
                <span key={index}>
                <a href={link.href} className="navigated-text-normal">{link.text}</a>
                </span>
            ))}
            </div>
      );
    }
    return linkGroups;
  };

  return (
    <div className="footer-layout">
      <div className="main">
        <div className="top-section">
          <div className="mailing-list">
            <h3>Join Our Mailing List</h3>
            <p className="navigated-text-bold">And Never Miss an Update</p>
            <div className="submit-form">
              <FormInputWith data="email" placeholder="Your email.." />
              <ButtonPrimary label="Subscribe" href="#" />
            </div>
            <div className="accept">
              <input
                type="checkbox"
                checked={acceptPolicy}
                onChange={(e) => setAcceptPolicy(e.target.checked)}
              />
              <p className="small-text-normal">I have read and accept the conditions outlined in the privacy policy.</p>
            </div>
          </div>
          <span className="divider mobile-only" />
          <div className="info">
            <div className="social-links">
              <div className="WhatsApp">
                <span className="navigated-text-bold">+20 12 77660666</span>
                <a href='http://wa.me/+201277660666'>
                    <IconWhatsapp className="icon-size-24px" />
                </a>
              </div>
              <div className="Others">
                <a href='https://www.facebook.com/wheretospot'>
                    <IconFb className="icon-size-24px" />
                </a>
                <a href='https://www.linkedin.com/company/where-to-spot'>
                    <IconLinkedIn className="icon-size-24px" />
                </a>
                <a href='https://www.instagram.com/wheretospot'>
                    <IconInsta className="icon-size-24px" />
                </a>
              </div>
            </div>
            <ButtonBenefit label="Donate Us" />
          </div>
        </div>
        <span className="divider" />
        <div className="bottom-section">
          <div className="useful-links">
            <h3>Useful Links</h3>
            <nav>
                {renderLinks()}
            </nav>
          </div>
          <span className="divider" />
          <div className="author">
            <img src={Logo} alt="Logo" />
            <span className="small-text-bold">© 2023 by Holmezz. Created with Passion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Type checking with PropTypes
Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Footer;
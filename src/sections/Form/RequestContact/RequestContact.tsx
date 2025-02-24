import React from 'react';
import { FormInputWith } from '../../../components/Form/FormInputWith/Input';
import { ButtonPrimary } from '../../../components/Button/Primary/Primary';
import '../Form.css';

const RequestContact: React.FC = () => {
  return (
    <div className="request-contact">
      <div className="main">
        <div className="header">
          <h2>Request a contact</h2>
          <p>
            <b>
                Register your data and you will be contacted as soon as possible
            </b>
          </p>
        </div>
        
        <form className="contact-form">
          <div className="inputs">
            <div className="author-data">
              <FormInputWith label="First name" data="First name" placeholder="First name..." />
              <FormInputWith label="Last name" data="Last name" placeholder="Last name..." />
            </div>
            
            <FormInputWith label="Email" data="Email" placeholder="Email..." />
            
            <FormInputWith label="Phone Number" data="Phone Number" placeholder="Phone Number..." />
          </div>
          
          <ButtonPrimary label="Request" href="#"/>
        </form>
      </div>
    </div>
  );
};

export default RequestContact;
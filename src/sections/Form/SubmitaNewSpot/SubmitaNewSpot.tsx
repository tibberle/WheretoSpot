import React from 'react';
import { FormInputWith } from '../../../components/Form/FormInputWith/Input';
import { FormDropdownWith } from '../../../components/Form/FormDropdownWith/Dropdown';
import { FormUploadWith } from '../../../components/Form/FormUploadWith/Upload';
import { ButtonPrimary } from '../../../components/Button/Primary/Primary';
import '../Form.css';

const SubmitaNewSpot: React.FC = () => {
  return (
    <div className="request-contact">
      <div className="main">
        <div className="header">
          <h2>Submit a New Spot</h2>
          <p>
            <b>
                Register your data and your new spot will be reviewed and added as soon as possible
            </b>
          </p>
        </div>
        
        <form className="contact-form">
          <div className="inputs">
            <FormInputWith label="Name of a spot *" data="Spot Name" placeholder="Spot Name..." />
            <FormDropdownWith label="Category *" data="Category" options={[
              { value: '', label: 'Select an option' },
              { value: 'Restaurant', label: 'Restaurant' },
              { value: 'Cafe', label: 'Cafe' },
              { value: 'Pharmacy', label: 'Pharmacy' },
              { value: 'Dry Clean', label: 'Dry Clean' },
              { value: 'Supermarket', label: 'Supermarket' },
            ]} />
            <FormInputWith label="Phone Number *" data="Phone Number" placeholder="Phone Number..." />
            <FormInputWith label="Address *" data="Address" placeholder="Address..." />
            <FormInputWith label="Website" data="Website" placeholder="Website..." />
            <FormInputWith label="Fanpage" data="Fanpage" placeholder="Fanpage..." />
            <FormInputWith label="Instagram" data="Instagram" placeholder="Instagram..." />
            <FormInputWith label="LinkedIn" data="LinkedIn" placeholder="LinkedIn..." />
            <FormUploadWith label="Images" data="Images" />
          </div>
          
          <ButtonPrimary label="Submit" href="#"/>
        </form>
      </div>
    </div>
  );
};

export default SubmitaNewSpot;
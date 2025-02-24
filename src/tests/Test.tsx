import React from 'react';
import {ButtonBenefit} from '../components/Button/Benefit/Benefit';
import {ButtonHero} from '../components/Button/Hero/Hero';
import {ButtonPrimary} from '../components/Button/Primary/Primary';
import {ButtonWhatsapp} from '../components/Button/Whatsapp/Whatsapp';
import {FormDropdownWith} from '../components/Form/FormDropdownWith/Dropdown';
import { FormInputWith } from '../components/Form/FormInputWith/Input';
import { FormUploadWith } from '../components/Form/FormUploadWith/Upload';

const testOptions = [
    { value: 'test1', label: 'Test One' },
    { value: 'test2', label: 'Test Two' },
    { value: 'test3', label: 'Test Three' },
  ];

const Home: React.FC = () => {
    return (
        <div>
            <ButtonBenefit label="Benefit" />
            <br />
            <ButtonHero label="Hero" href="#" />
            <br />
            <ButtonPrimary label="Primary" href="#"/>
            <br />
            <ButtonWhatsapp label="Whatsapp" href="#" />
            <br />
            <br />
            <FormDropdownWith label="Dropdown" data="test-dropdown" options={testOptions} />
            <br />
            <FormInputWith label="Input" data="test" placeholder="test data..."/>
            <br />
            <FormUploadWith label="Upload Test" data="test-upload" />
        </div>
    );
};

export default Home;
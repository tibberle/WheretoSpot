import React from 'react';
import TopNavigation from '../../sections//TopNavigation/TopNavigation';
import Navigation from '../../sections/Navigation/Navigation';
import FooterSection from '../../sections/Footer/Footer';
import SubmitaNewSpotSection from '../../sections/Form/SubmitaNewSpot/SubmitaNewSpot';


const topNavItems = [
    { label: "Business", link: "/business" },
    { label: "Customer", link: "/customer" },
    { label: "About us", link: "/about-us" },
];

const navBusinessItems = [
    { label: 'Add your Business', link: '/business/add-a-new-spot' },
    { label: 'Pricing', link: 'https://www.wheretospot.com/plans-pricing' },
    { label: 'Sign in', link: 'https://www.wheretospot.com/event-list' },
  ];


  const footerLinks = [
    { href: '/customer/category', text: 'Category pages' },
    { href: '/business/add-a-new-spot', text: 'Add a new spot' },
    { href: 'https://www.wheretospot.com/forum', text: 'Forum' },
    { href: 'https://www.wheretospot.com/faq', text: 'Privacy & Policy' },
  ];

const AddNewSpotPage: React.FC = () => {
    return (
        <div>
            <TopNavigation items={topNavItems} />
            <Navigation items={navBusinessItems} topNavItems={topNavItems}/>
            <SubmitaNewSpotSection />
            <FooterSection links={footerLinks} />

        </div>
    );
};

export default AddNewSpotPage;
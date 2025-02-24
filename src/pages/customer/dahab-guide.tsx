import React from 'react';
import HeroSection from '../../sections/Hero/Hero';
import TopNavigation from '../../sections/TopNavigation/TopNavigation';
import Navigation from '../../sections/Navigation/Navigation';
import FooterSection from '../../sections/Footer/Footer';
import DahabGuideImage from '../../assets/dahab-guide.png';
import ServiceListingSection from '../../sections/Listing/Service/Service';
import testService from "../../assets/Service-test.png";


const topNavItems = [
    { label: "Business", link: "/business" },
    { label: "Customer", link: "/customer" },
    { label: "About us", link: "/about-us" },
];

const navCustomerItems = [
    { label: 'Events', link: 'https://www.wheretospot.com/event-list' },
    { label: 'Guides', link: '#', subItems: [
        { label: 'Dahab Guide', link: '/customer/dahab-guide' },
        { label: 'Dahab Guide', link: '/customer/dahab-guide' },
        { label: 'Dahab Guide', link: '/customer/dahab-guide' },
        { label: 'Dahab Guide', link: '/customer/dahab-guide' },
        { label: 'Dahab Guide', link: '/customer/dahab-guide' },
        { label: 'Dahab Guide', link: '/customer/dahab-guide' },
      ] },
    { label: 'Sign in', link: 'https://www.wheretospot.com/event-list' },
  ];


  const footerLinks = [
    { href: '/customer/category', text: 'Category pages' },
    { href: '/business/add-a-new-spot', text: 'Add a new spot' },
    { href: 'https://www.wheretospot.com/forum', text: 'Forum' },
    { href: 'https://www.wheretospot.com/faq', text: 'Privacy & Policy' },
  ];

  const sampleServices = [
    {
      category: 'Category 1',
      items: [
        { image: testService, href: 'https://service1.com' },
        { image: testService, href: 'https://service1.com' },
        { image: testService, href: 'https://service1.com' },
        { image: testService, href: 'https://service2.com' },
      ],
    },
    {
      category: 'Category 2',
      items: [
        { image: testService, href: 'https://service1.com' },
        { image: testService, href: 'https://service1.com' },
      ],
    },
    {
      category: 'Category 3',
      items: [
        { image: testService, href: 'https://service1.com' },
      ],
    },
    {
      category: 'Category 4',
      items: [
        { image: testService, href: 'https://service3.com' },
        { image: testService, href: 'https://service4.com' },
        { image: testService, href: 'https://service1.com' },
      ],
    },
  ];

const DahabGuidePage: React.FC = () => {
    return (
        <div>
            <TopNavigation items={topNavItems} />
            <Navigation items={navCustomerItems} topNavItems={topNavItems}/>
            
            <HeroSection 
                href="http://wa.me/+201277660666"
                labelButton="Subscribe Now"
                imgsrc={DahabGuideImage}
                title="Dahab Travel Guide"
                slogan="A fun little artsy town"
                text="Dahab attracts large numbers of tourists. It is world-renowned for its windsurfing. Reliable winds provide superb flat-water conditions inside Dahab's sand spit."
            />
            <ServiceListingSection
                    title="Choose our services:"
                    services={sampleServices}
            />
            
            <FooterSection links={footerLinks} />

        </div>
    );
};

export default DahabGuidePage;
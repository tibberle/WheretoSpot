import React from 'react';
import HeroSection from '../sections/Hero/Hero';
import TopNavigation from '../sections/TopNavigation/TopNavigation';
import CustomerCoverImage from '../assets/Customer-landing-page.png';
import Navigation from '../sections/Navigation/Navigation';
import ContentSection from '../sections/Content/Content';
import FeatureListingSection from '../sections/Listing/Feature&Benefit/Feature&Benefit';
import WTOBackground from "../assets/WTO-background.png";
import GetSupport from "../assets/Get-support.png";
import Meeting from "../assets/Meeting.png";
import RangeOfSpot from "../assets/a-range-of-spot.png";
import PartnerListingSection from '../sections/Listing/Partner/Partner';
import RequestContactForm from '../sections/Form/RequestContact/RequestContact';
import FooterSection from '../sections/Footer/Footer';
import logoTest from "../assets/logo-test.png";
import { IconQR } from '../icon/QR';
import { IconAllInOne } from '../icon/AllInOne';
import { IconSEOSearch } from '../icon/SEOSearch';
import { IconAR } from '../icon/AR';
import { IconIncreaseSales } from '../icon/IncreaseSales';
import { IconDatabase } from '../icon/Database';
import "../icon/IconSize32px.css";
import "../icon/IconSize40px.css";


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

const businessContentFeatures = [
  { icon: <IconQR className="icon-size-40px" />, title: 'Dynamic QR Code', description: 'You can use it to access the QR code at any time, without having to install any application.' },
  { icon: <IconAllInOne className="icon-size-40px" />, title: 'Everything in One Place', description: 'Reflect your brand voice by adding your logo, style, images, and other design elements.' },
  { icon: <IconSEOSearch className="icon-size-40px" />, title: 'Get Ranked on Search Engine', description: 'Increase your organic search traffic, from potential customers visiting your site every day.' },
  { icon: <IconAR className="icon-size-40px" />, title: 'Augmented Reality', description: 'Create immersive AR QR Code experiences. Engage your audience on iOS and Android.' },
  { icon: <IconIncreaseSales className="icon-size-40px" />, title: 'Increase Sales', description: 'Increase sales by over 30% - backed by many successful models.' },
  { icon: <IconDatabase className="icon-size-40px" />, title: 'Statistics and Reports', description: 'Seamlessly export and analyze target customer demographics, behaviors, and interests.' },
];

const samplePartners = [
    { image: logoTest, href: 'https://partner1.com' },
    { image: logoTest, href: 'https://partner2.com' },
    { image: logoTest, href: 'https://partner3.com' },
    { image: logoTest, href: 'https://partner4.com' },
    { image: logoTest, href: 'https://partner5.com' },
    { image: logoTest, href: 'https://partner6.com' },
    { image: logoTest, href: 'https://partner7.com' },
    { image: logoTest, href: 'https://partner8.com' },
    { image: logoTest, href: 'https://partner9.com' },
    { image: logoTest, href: 'https://partner10.com' },
  ];


  const footerLinks = [
    { href: '/customer/category', text: 'Category pages' },
    { href: '/business/add-a-new-spot', text: 'Add a new spot' },
    { href: 'https://www.wheretospot.com/forum', text: 'Forum' },
    { href: 'https://www.wheretospot.com/faq', text: 'Privacy & Policy' },
  ];

const CustomerPage: React.FC = () => {
    return (
        <div>
            <TopNavigation items={topNavItems} />
            <Navigation items={navCustomerItems} topNavItems={topNavItems}/>
            
            <HeroSection 
                href="https://www.wheretospot.com/blog"
                labelButton="Explore Spots"
                imgsrc={CustomerCoverImage}
                title="Discover Your"
                slogan="Next Favourite Spot!"
                text="Where small businesses shine brighter, shoppers uncover hidden treasures, and freelancers unlock endless possibilities all in one vibrant and growing community. Join us and explore a world of connections waiting to be discovered."
            />

            <FeatureListingSection 
                columns={businessContentFeatures}
                imageSrc={WTOBackground}
            />

            <ContentSection
                heading="A range of spots"
                href="http://wa.me/+201277660666"
                intro="Through our previous experiences we have found that our clients have achieved at least twice the sales of our clients."
                buttonLabel="Learn More"
                imageSrc={RangeOfSpot}
                direction='right'
            />

            <ContentSection
                heading="Social Events"
                href="http://wa.me/+201277660666"
                intro="Through our previous experiences we have found that our clients have achieved at least twice the sales of our clients."
                buttonLabel="Learn More"
                imageSrc={Meeting}
                backgroundColor="#f3f3f3"
            />

            <ContentSection
                heading="Get support instantly"
                href="http://wa.me/+201277660666"
                intro="Through our previous experiences we have found that our clients have achieved at least twice the sales of our clients."
                buttonLabel="+20 12 77660666"
                imageSrc={GetSupport}
                direction='right'
                buttonType="whatsapp"
            />

            <PartnerListingSection
                title="“Join a large number of clients around the world and their unique experiences!”"
                partners={samplePartners}
            />
            <RequestContactForm/>
            <FooterSection links={footerLinks} />

        </div>
    );
};

export default CustomerPage;
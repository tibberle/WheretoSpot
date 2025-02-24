import React from 'react';
import HeroSection from '../../sections/Hero/Hero';
import TopNavigation from '../../sections/TopNavigation/TopNavigation';
import BusinessCoverImage from '../../assets/Business-landing-page.png'
import addBusinessImage from '../../assets/Add-business.png';
import Navigation from '../../sections/Navigation/Navigation';
import ContentSection from '../../sections/Content/Content';
import FeatureListingSection from '../../sections/Listing/Feature&Benefit/Feature&Benefit';
import WTOBackground from "../../assets/WTO-background.png";
import SaleIncrease from "../../assets/SaleIncrease.png";
import PartnerListingSection from '../../sections/Listing/Partner/Partner';
import RequestContactForm from '../../sections/Form/RequestContact/RequestContact';
import FooterSection from '../../sections/Footer/Footer';
import logoTest from "../../assets/logo-test.png";
import { IconBox } from '../../icon/Box';
import { IconQR } from '../../icon/QR';
import { IconAllInOne } from '../../icon/AllInOne';
import { IconSEOSearch } from '../../icon/SEOSearch';
import { IconAR } from '../../icon/AR';
import { IconIncreaseSales } from '../../icon/IncreaseSales';
import { IconDatabase } from '../../icon/Database';
import { IconDelivery } from '../../icon/Delivery';
import "../../icon/IconSize32px.css";
import "../../icon/IconSize40px.css";


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

const addBusinessContentPoints = [
  { icon: <IconBox className="icon-size-32px" />, text: 'Through a simple and smooth user interface, you can explore a wide range of products and services, increasing their chances of achieving the maximum benefit.' },
  { icon: <IconDelivery className="icon-size-32px" />, text: 'Invest in this distinctive experience for the satisfaction of your customers and for them, and to ensure them an unfortunate shopping trip.' },
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

const BusinessPage: React.FC = () => {
    return (
        <div>
            <TopNavigation items={topNavItems} />
            <Navigation items={navBusinessItems} topNavItems={topNavItems}/>
            
            <HeroSection 
                href="/business/add-a-new-spot"
                labelButton="List Your Business"
                imgsrc={BusinessCoverImage}
                title="Let’s Customer Discover"
                slogan="Their Favourite Spot!"
                text="Where small businesses shine brighter, shoppers uncover hidden treasures, and freelancers unlock endless possibilities all in one vibrant and growing community. Join us and explore a world of connections waiting to be discovered."
            />
            <ContentSection
                heading="Add Your Business"
                href="http://wa.me/+201277660666"
                intro="We offer you a new experience to join your new business, designed to facilitate the purchase process with us everything it can in one place."
                points={addBusinessContentPoints}
                buttonLabel="Contact Us"
                imageSrc={addBusinessImage}
            />
            <FeatureListingSection 
                columns={businessContentFeatures}
                imageSrc={WTOBackground}
            />
            <ContentSection
                heading="Multiply more than you earn"
                href="http://wa.me/+201277660666"
                intro="Through our previous experiences we have found that our clients have achieved at least twice the sales of our clients."
                buttonLabel="Learn More"
                imageSrc={SaleIncrease}
                direction='right'
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

export default BusinessPage;
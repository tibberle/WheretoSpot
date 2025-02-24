import React from 'react';
import HeroSection from '../sections/Hero/Hero';
import TopNavigation from '../sections/TopNavigation/TopNavigation';
import Navigation from '../sections/Navigation/Navigation';
import ContentSection from '../sections/Content/Content';
import PartnerListingSection from '../sections/Listing/Partner/Partner';
import FooterSection from '../sections/Footer/Footer';
import logoTest from "../assets/logo-test.png";
import AboutUsImage from "../assets/about.png";
import AboutEffectImage from "../assets/About-effect.png";
import VisionImage from "../assets/Vision.png";

const topNavItems = [
    { label: "Business", link: "/business" },
    { label: "Customer", link: "/customer" },
    { label: "About us", link: "/about-us" },
];

const navAboutItems = [
    { label: 'Sign in', link: 'https://www.wheretospot.com/event-list' },
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


const AboutPage: React.FC = () => {
    return (
        <div>
            <TopNavigation items={topNavItems} />
            <Navigation items={navAboutItems} topNavItems={topNavItems}/>
            
            <HeroSection 
                href="#"
                imgsrc={AboutUsImage}
                title="About us"
                text="Where to spot Your Dreams in one place First Platform that merge between Talents & Places. This Platform created for the people who seeks a different vision of live through all the noises around them and escape to a place where they really find what they seeks. Places, Activities, Online Shopping Guide, Talents, Travel Guides, Food & Drinks, Online Services and Courses..etc"
            />


            <ContentSection
                heading="Mission"
                href="#"
                intro="The company aims to be the leading global pioneer in information technology by providing innovative solutions across all sectors. We are dedicated to offering the best opportunities for you to achieve your goals and access what you desire."
                imageSrc={AboutEffectImage}
                direction='right'
                backgroundColor="#f3f3f3"
            />

            <ContentSection
                heading="Vision"
                href="#"
                intro="We strive to advance the use of technology to create interconnected and easily accessible communities. Our goal is to provide all information in one place, allowing users to access it with a single click."
                imageSrc={VisionImage}
            />


            <PartnerListingSection
                title="“Join a large number of clients around the world and their unique experiences!”"
                partners={samplePartners}
            />
            
            <FooterSection links={footerLinks} />

        </div>
    );
};

export default AboutPage;
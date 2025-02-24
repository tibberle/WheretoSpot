import React from 'react';
import HeroDesktop from '../sections/Hero/Hero';
import TopNavigation from '../sections/TopNavigation/TopNavigation';
import Navigation from '../sections/Navigation/Navigation';
import Feature from '../sections/Listing/Feature&Benefit/Feature&Benefit';
import PartnersListing from '../sections/Listing/Partner/Partner';
import ServiceListing from '../sections/Listing/Service/Service';
import Content from '../sections/Content/Content';
import Categories from '../sections/Category/Categories';
import Footer from '../sections/Footer/Footer';
import RequestContact from '../sections/Form/RequestContact/RequestContact';
import SubmitaNewSpot from '../sections/Form/SubmitaNewSpot/SubmitaNewSpot';
import testImage from "../assets/Customer-landing-page.png";
import testService from "../assets/Service-test.png";
import testImageTwo from "../assets/Business-landing-page.png";
import testImageThree from "../assets/Add-business.png";
import testImageFour from "../assets/WTO-background.png";
import logoTest from "../assets/logo-test.png";
import Meeting from "../assets/Meeting.png";
import { IconBox } from '../icon/Box';
import { IconDelivery } from '../icon/Delivery';
import "../icon/IconSize32px.css";
import "../icon/IconSize40px.css";

const sampleNavItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/sections' },
  { label: 'Services', link: '#', subItems: [
      { label: 'SubItem 1', link: '/subitem1' },
      { label: 'SubItem 2', link: '/subitem2' },
      { label: 'SubItem 3', link: '/subitem3' },
    ] 
  },
];

const topNavItems = [
  { label: "Business", link: "#" },
  { label: "Customer", link: "/sections" },
  { label: "About us", link: "#" },
];

const samplePoints = [
  { icon: <IconBox className="icon-size-32px" />, text: 'Invest in this distinctive experience for the satisfaction of your customers and for them, and to ensure them an unfortunate shopping trip.' },
  { icon: <IconDelivery className="icon-size-32px" />, text: 'Invest in this distinctive experience for the satisfaction of your customers and for them, and to ensure them an unfortunate shopping trip.' },
];

const sampleFeatures = [
  { icon: <IconBox className="icon-size-40px" />, title: 'Everything in One Place', description: 'Reflect your brand voice by adding your logo, style, images, and other design elements.' },
  { icon: <IconDelivery className="icon-size-40px" />, title: 'Everything in One Place', description: 'Reflect your brand voice by adding your logo, style, images, and other design elements.' },
  { icon: <IconBox className="icon-size-40px" />, title: 'Everything in One Place', description: 'Reflect your brand voice by adding your logo, style, images, and other design elements.' },
  { icon: <IconDelivery className="icon-size-40px" />, title: 'Everything in One Place', description: 'Reflect your brand voice by adding your logo, style, images, and other design elements.' },
  { icon: <IconBox className="icon-size-40px" />, title: 'Everything in One Place', description: 'Reflect your brand voice by adding your logo, style, images, and other design elements.' },
  { icon: <IconDelivery className="icon-size-40px" />, title: 'Everything in One Place', description: 'Reflect your brand voice by adding your logo, style, images, and other design elements.' },
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

const sampleFooterLinks = [
  { href: '#', text: 'Privacy & Policy' },
  { href: '#', text: 'Category page' },
  { href: '#', text: 'Testimonials' },
  { href: '#', text: 'Contact' },
  { href: '#', text: 'Contact' },
  { href: '#', text: 'Contact' },
  { href: '#', text: 'Contact' },
  { href: '#', text: 'Contact' },
];

const sampleCategories = [
  { name: 'Category 1', href: '#category1' },
  { name: 'Category 2', href: '#category2' },
  { name: 'Category 3', href: '#category3' },
  { name: 'Category 4', href: '#category4' },
  { name: 'Category 5', href: '#category5' },
  { name: 'Category 6', href: '#category6' },
  { name: 'Category 7', href: '#category7' },
  { name: 'Category 8', href: '#category8' },
  { name: 'Category 9', href: '#category9' },
  { name: 'Category 8', href: '#category8' },
  { name: 'Category 9', href: '#category9' },
  { name: 'Category 8', href: '#category8' },
  { name: 'Category 9', href: '#category9' },
];

const Home: React.FC = () => {
  return (
    <div>
      <TopNavigation items={topNavItems} />
      <Navigation items={sampleNavItems} topNavItems={topNavItems}/>
      <HeroDesktop
        href="#"
        labelButton="List Your Business"
        imgsrc={testImage}
        title="Let’s Customer Discover"
        slogan="Their Favourite Spot!"
        text="Where small businesses shine brighter, shoppers uncover hidden treasures, and freelancers unlock endless possibilities all in one vibrant and growing community. Join us and explore a world of connections waiting to be discovered."
      />
      <HeroDesktop
        href="#"
        imgsrc={testImageTwo}
        title="Let’s Customer Discover"
        text="Where small businesses shine brighter, shoppers uncover hidden treasures, and freelancers unlock endless possibilities all in one vibrant and growing community. Join us and explore a world of connections waiting to be discovered."
      />
      <Content
        heading="Add Your Business"
        href="#"
        intro="We offer you a new experience to join your new business, designed to facilitate the purchase process with us everything it can in one place."
        points={samplePoints}
        buttonLabel="Get Started"
        imageSrc={testImageThree}
      />
      <Content
        heading="Add Your Business"
        href="#"
        intro="We offer you a new experience to join your new business, designed to facilitate the purchase process with us everything it can in one place."
        points={samplePoints}
        buttonLabel="Get Started"
        imageSrc={testImageThree}
        direction='right'
      />
      <Content
        heading="Add Your Business"
        href="#"
        intro="We offer you a new experience to join your new business, designed to facilitate the purchase process with us everything it can in one place."
        buttonLabel="Get Started"
        imageSrc={Meeting}
      />
      <Content
        heading="Add Your Business"
        href="#"
        intro="We offer you a new experience to join your new business, designed to facilitate the purchase process with us everything it can in one place."
        buttonLabel="Get Started"
        imageSrc={Meeting}
        direction='right'
      />
      <Feature
        columns={sampleFeatures}
        imageSrc={testImageFour}
      />
      <PartnersListing
        title="“ Join a large number of clients around the world and their unique experiences! ”"
        partners={samplePartners}
      />
      <ServiceListing
        title="Our Services"
        services={sampleServices}
      />
      <RequestContact />
      <Footer links={sampleFooterLinks} />
      <Categories categories={sampleCategories} />
      <SubmitaNewSpot />
    </div>
  );
};

export default Home;
import React from 'react';
import HeroSection from '../../sections/Hero/Hero';
import TopNavigation from '../../sections/TopNavigation/TopNavigation';
import Navigation from '../../sections/Navigation/Navigation';
import PartnerListingSection from '../../sections/Listing/Partner/Partner';
import FooterSection from '../../sections/Footer/Footer';
import CategorySection from '../../sections/Category/Categories';
import logoTest from "../../assets/logo-test.png";
import CategoriesImage from "../../assets/Categories.png"

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

  const footerLinks = [
    { href: '/customer/category', text: 'Category pages' },
    { href: '/business/add-a-new-spot', text: 'Add a new spot' },
    { href: 'https://www.wheretospot.com/forum', text: 'Forum' },
    { href: 'https://www.wheretospot.com/faq', text: 'Privacy & Policy' },
  ];


const CategoryPage: React.FC = () => {
    return (
        <div>
            <TopNavigation items={topNavItems} />
            <Navigation items={navCustomerItems} topNavItems={topNavItems}/>
            
            <HeroSection 
                href="#"
                imgsrc={CategoriesImage}
                title="Categories"
                text="Where to spot Your Dreams in one place First Platform that merge between Talents & Places. This Platform created for the people who seeks a different vision of live through all the noises around them and escape to a place where they really find what they seeks. Places, Activities, Online Shopping Guide, Talents, Travel Guides, Food & Drinks, Online Services and Courses..etc"
            />
            <CategorySection categories={sampleCategories} />
            <PartnerListingSection
                title="“Join a large number of clients around the world and their unique experiences!”"
                partners={samplePartners}
            />
            
            <FooterSection links={footerLinks} />

        </div>
    );
};

export default CategoryPage;
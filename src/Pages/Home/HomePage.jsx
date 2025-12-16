import React from 'react';
import HeroSection from './Components/HeroSection';
import FAQ from './Components/FAQ';
import NewsletterSection from './Components/NewsletterSection';
import StatsSection from './Components/StatsSection';
import BrandMarquee from './Components/BrandMarquee';
import FeaturesSection from './Components/FeaturesSection';
import { ScrollRestoration } from 'react-router';
import CategoriesSection from './Components/CategoriesSection';
import OurProductsSection from './Components/OurProductsSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <CategoriesSection></CategoriesSection>
            <OurProductsSection></OurProductsSection>
            <FeaturesSection></FeaturesSection>
            <BrandMarquee></BrandMarquee>
            <StatsSection></StatsSection>
            <FAQ></FAQ>
            <NewsletterSection></NewsletterSection>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default HomePage;
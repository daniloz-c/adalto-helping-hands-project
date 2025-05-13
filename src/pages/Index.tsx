
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import DonationSection from '../components/DonationSection';
import AboutSection from '../components/AboutSection';
import ImpactSection from '../components/ImpactSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <DonationSection />
        <AboutSection />
        <ImpactSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

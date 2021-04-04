import React from 'react';
import AboutSection from '../components/Home/AboutSection';
import HeroSection from '../components/Home/HeroSection';
import Banner from '../components/Shared/Banner';
import ServicesSection from '../components/Home/ServicesSection';
import ContactSection from '../components/Home/ContactSection';

const  HomeScreen = () => {
    return (
      <>
      <HeroSection/>
      <Banner id={"#about"} title={"We are a security consulting firm"} height={"400px"}text={"Masada provides our clients with unbiased, ethical, fact-finding, investigative and consulting services."}/>
      <AboutSection/>
      <ServicesSection/>
      <Banner id={"#contact"} title={"Masada provides the security you need"} height={"200px"}/>
      <ContactSection/>
      </>
    );


  }

export default HomeScreen;
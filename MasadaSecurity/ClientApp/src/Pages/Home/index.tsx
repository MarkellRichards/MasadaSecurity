import React from 'react';
import Banner from '../../Shared/Banner';
import AboutSection from './Components/AboutSection';
import ServicesSection from './Components/ServicesSection';
import HeroSection from './Components/HeroSection';
import ContactSection from './Components/ContactSection';

const Home: React.FC = () => (
  <>
    <HeroSection />
    <Banner
      id="#about"
      title="A professional investigative, intelligence & consuling firm"
      height="400px"
      text="It is our mission to provide our clients with unbiased, ethical, fact-finding, investigative and consulting services."
    />
    <AboutSection />
    <ServicesSection />
    <Banner
      id="#contact"
      text={null}
      title="Masada provides the security you need"
      height="200px"
    />
    <ContactSection />
  </>
);

export default Home;

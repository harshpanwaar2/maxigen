import React from 'react';
import AboutHero from '../components/About/AboutHero';
import OurMission from '../components/About/OurMission';
import OurDifference from '../components/About/OurDifference';
import OurStory from '../components/About/OurStory';
import CTASection from '../components/About/CTASection';

const About = () => {
  return (
    <div className="bg-white rounded-xl px-4 text-white">
      <AboutHero />
      <OurMission />
      <OurDifference />
      {/* <OurStory /> */}
      <CTASection />
    </div>
  );
};

export default About;
import React from 'react';
import AboutFeedback from './AboutFeedback';
import AboutHero from './AboutHero';
import AboutService from './AboutService';

const About = () => {
    return (
      <div className="mt-10 mb-20 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <AboutHero />
        <AboutFeedback />
        <AboutService />
      </div>
    );
};

export default About;
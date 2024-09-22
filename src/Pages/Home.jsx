import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import FeatureSection from '../Components/FeatureSection/FeatureSection';
import CTASection from '../Components/CTASection/CTASection';
import Footer from '../Components/Footer/Footer';
import StatsSection from '../Components/StatsSection/StatsSection';
import TeamSection from '../Components/TeamSection/TeamSection';
import AnimatedTextSection from '../Components/AnimatedTextSection';


function Home(props) {
    return (
        <div>
          <AnimatedTextSection />
          <HeroSection />
          <StatsSection />
          <FeatureSection />
          <TeamSection />
          <CTASection />
           <Footer />
        </div>
    );
}

export default Home;
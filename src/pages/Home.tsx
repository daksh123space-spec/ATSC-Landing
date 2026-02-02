import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Numbers from '../components/Numbers';
import WhoWeAre from '../components/WhoWeAre';
import SuccessStories from '../components/SuccessStories';
import Waitlist from '../components/Waitlist';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Numbers />
            <WhoWeAre />
            <SuccessStories />
            <Waitlist />
        </main>
    );
};

export default Home;

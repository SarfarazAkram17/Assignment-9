import React from 'react';
import Hero from '../../Components/Hero/Hero';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import { useLoaderData } from 'react-router';
import Companies from '../../Components/Companies/Companies';

const Home = () => {
    document.title = 'JobTrack || Home';
    const companiesData = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
            <Companies companiesData={companiesData}></Companies>
        </div>
    );
};

export default Home;
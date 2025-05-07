import React, { useRef } from "react";
import Hero from "../../Components/Hero/Hero";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import { useLoaderData } from "react-router";
import Companies from "../../Components/Companies/Companies";
import Highlights from "../../Components/Highlights/Highlights";
import Faq from "../../Components/Faq/Faq";

const Home = () => {
  document.title = "JobTrack || Home";
  const companiesData = useLoaderData();

  const companiesRef = useRef(null);
  const handleScrollToCompanies = () => {
    companiesRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Hero onExploreClick={handleScrollToCompanies}></Hero>
      <HowItWorks></HowItWorks>
      <div ref={companiesRef}>
      <Companies companiesData={companiesData}></Companies>
      </div>
      <Highlights></Highlights>
      <Faq></Faq>
    </div>
  );
};

export default Home;

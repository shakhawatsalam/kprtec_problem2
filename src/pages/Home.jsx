import React from "react";
import AdvanceSection from "../component/Advanceyoursection/AdvanceSection";
import Connect from "../component/Connectsection/Connect";
import DiscoverResearch from "../component/Discoverscetion/DiscoverResearch";
import HeroSection from "../component/herosection/HeroSection";
import MeasureImpact from "../component/mesuresection/MeasureImpact";
import NaveBar from "../component/navbar/NaveBar";

const Home = () => {
    return (
        <>
            <NaveBar />
            <HeroSection />
            <DiscoverResearch />
            <Connect />
            <MeasureImpact />
            <AdvanceSection/>
        </>);
};

export default Home;

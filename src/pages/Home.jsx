import React from "react";
import Connect from "../component/Connectsection/Connect";
import DiscoverResearch from "../component/Discoverscetion/DiscoverResearch";
import HeroSection from "../component/herosection/HeroSection";
import NaveBar from "../component/navbar/NaveBar";

const Home = () => {
    return (
        <>
            <NaveBar />
            <HeroSection />
            <DiscoverResearch />
            <Connect/>
        </>);
};

export default Home;

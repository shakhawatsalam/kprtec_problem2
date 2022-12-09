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
            <Connect />
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sit assumenda totam qui iure corrupti deleniti placeat culpa vel, id esse dolor ullam earum! Quibusdam illo blanditiis vitae totam optio atque, delectus voluptatem reiciendis ratione excepturi, cumque ad odit possimus aliquid? Sint consequatur labore aliquam, velit similique maiores doloribus explicabo.</h1>
        </>);
};

export default Home;

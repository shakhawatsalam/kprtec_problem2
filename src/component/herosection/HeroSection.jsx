import React from "react";
import "./HeroSection.css";
import HeaderImg from "../../Assets/csm_people-worker-laboratory_113e01cc4a.jpg";

const HeroSection = () => {
  return (
    <>
      <div className='gray_background'></div>
      <header className='container'>
        <div className='header_container'>
          <div className='heder_content'>
            <h1>
              Discover scientific knowledge and stay connected to the world of
              science
            </h1>
            <button>Join for free</button>
          </div>
          <div className='header_img'>
              <img src={HeaderImg} alt='' />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroSection;

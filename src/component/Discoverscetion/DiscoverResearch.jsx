import React from "react";
import "./DiscoverResearch.css";
import DisImg from "../../Assets/index-discover.svg";
import * as CiIcons from "react-icons/ci";

const DiscoverResearch = () => {
  return (
    <>
      <div className='discover_section'>
        <div className='container'>
          <div className='discover_container'>
            <div className='discover_img'>
              <img src={DisImg} alt='' />
            </div>
            <div className='discover_content'>
              <h1>Discover research</h1>
              <p>
                Access over 135 million publication pages and stay up to date
                with what's happening in your field.
              </p>
              <div className="input">
               <div className="icon"><CiIcons.CiSearch /></div>
                <input type='text' placeholder='Search ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverResearch;

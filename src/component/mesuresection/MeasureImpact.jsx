import React from "react";
import "./MasureImpact.css";
import MeasureImg from "../../Assets/index-stats.svg";

function MeasureImpact() {
  return (
    <>
      <div className='measure_section'>
        <div className="container">
          <div className="measure_container">
            <div className="measure_img">
              <img src={MeasureImg} alt="" />
            </div>
            <div className="measure_content">
              <h1>Measure your impact</h1>
              <p>Get in-depth stats on who's been reading your work and keep track of your citations.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeasureImpact;

import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <>
      <div className='container'>
        <div className='connect_container'>
          <div className='Connect_content'>
            <h1>Connect with your scientific community</h1>
            <p>
              Share your research, collaborate with your peers, and get the
              support you need to advance your career.
            </p>
          </div>
          <div className='button_content'>
            <h5>VISIT TOPIC PAGES</h5>
            <div className='buttons'>
              <div>
                <a href='#'>Engineering</a>
              </div>
              <div>
                <a href='#'>Mathematics</a>
              </div>
              <div>
                <a href='#'>Biology</a>
              </div>
              <div>
                <a href='#'>Computer Science</a>
              </div>
              <div>
                <a href='#'>Climate Change</a>
              </div>
              <div>
                <a href='#'>Medicine</a>
              </div>
              <div>
                <a href='#'>Physics</a>
              </div>
              <div>
                <a href='#'>Social Science</a>
              </div>
              <div>
                <a href='#'>Astrophysics</a>
              </div>
              <div>
                <a href='#'>Chemistry</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;

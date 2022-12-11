import React from "react";
import "./Footer.css";
import HiringImg from "../../Assets/footer-hiring@2x.jpg";
import MarketingImg from "../../Assets/footer-advertising@2x.jpg";

const Footer = () => {
  return (
    <>
      <footer className='footer_container'>
        <div className='container'>
          <div className='footer_content'>
            <h3>ResearchGate Business Solutions</h3>
            <div className='photo_content'>
              <div className='Scientific'>
                <div className='Simg'>
                  <img src={HiringImg} alt='' />
                </div>
                <div className='Scontent'>
                  <h3>Scientific Recruitment</h3>
                  <p>
                    Hire qualified researchers and build the best teams in
                    science.
                  </p>
                  <button>Find out more</button>
                </div>
              </div>
              <div className='Scientific'>
                <div className='Simg'>
                  <img src={MarketingImg} alt='' />
                </div>
                <div className='Scontent'>
                  <h3>Scientific Recruitment</h3>
                  <p>
                    Hire qualified researchers and build the best teams in
                    science.
                  </p>
                  <button>Find out more</button>
                </div>
              </div>
            </div>
          </div>
          {/* about us section */}
          <div className='line'></div>
          <div className='About_content'>
            <div className='about_us'>
              <a href='#'>About Us</a>
              <a href='#'>News</a>
              <a href='#'>Careers</a>
              <a href='#'>Help Center</a>
              <a href='#'>Terms</a>
              <a href='#'>Privacy</a>
              <a href='#'>Copyright</a>
              <a href='#'>Imprint</a>
            </div>
            <div className='Copy_right'>
              <a href='#'>Researchers</a>
              <a href='#'>Q&A</a>
              <a href='#'>Publications</a>
              <a href='#'>Jobs</a>
              <a href='#'>Advertising</a>
              <a href='#'>Recruiting</a>
              <p>© 2008-2022 ResearchGate GmbH. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import HiringImg from "../../Assets/footer-hiring@2x.jpg";


const Footer = () => {
  return (
    <>
      <footer className='footer_container'>
        <div className='container'>
          <div className='footer_content'>
                      <h3>ResearchGate Business Solutions</h3>
                      <div className="photo_content">
                          <div className="Scientific">
                              <div className="Simg">
                                  <img src={HiringImg} alt="" />
                              </div>
                              <div className="Scontent">
                                  <h3>Scientific Recruitment</h3>
                                  <p>Hire qualified researchers and build the best teams in science.</p>
                                  <button>Find out more</button>
                              </div>
                          </div>
                          <div className="Scientific">
                          <div className="Simg">
                                  <img src={HiringImg} alt="" />
                              </div>
                              <div className="Scontent">
                                  <h3>Scientific Recruitment</h3>
                                  <p>Hire qualified researchers and build the best teams in science.</p>
                                  <button>Find out more</button>
                              </div>
                          </div>
                      </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

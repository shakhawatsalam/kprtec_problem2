import React from "react";
import './NavBar.css'
import logo from "../../Assets/new-index-logo.svg";
const NaveBar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav_items">
                        <a href="#" className="Log">Log in</a>
                        <a href="#" className="join">Join for free</a>
                    </div>

                </nav>

            </div>
        </>
    );
};

export default NaveBar;

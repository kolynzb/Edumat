import React from "react";
import "../Styles/components/Banner.css";
import bannerImage from "../assets/banner.jpg";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerContainer">
        <img src={bannerImage} className="bannerImage" alt="bannerImage" />
        <div className="bannerContents">
          <div className="bannerSocials">
            <div className="bannerLineTop"></div>
            <div className="bannerSocialIcons">
              <div className="bannerSocialIcon">
                <FaFacebook />
              </div>
              <div className="bannerSocialIcon">
                <FaPinterest />
              </div>
              <div className="bannerSocialIconGr">
                <GrInstagram />
              </div>
            </div>
            <div className="bannerLineBottom"></div>
          </div>
          <Link to="/shop">
            <button className="bannerbutton">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

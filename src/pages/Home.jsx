import React from "react";
import Banner from "../components/Banner";
import ServicesSection from "../components/ServicesSection";
import NewsLetter from "../components/NewsLetter";
import "../Styles/pages/Home.css";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <h2 className="homeSectTitle">Our Service Makes Life Easier</h2>
      <ServicesSection />
      <h2 className="homeSectTitle">Subscribe To Our Newsletter</h2>
      <NewsLetter />
    </div>
  );
};

export default Home;

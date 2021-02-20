import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import AllInfoSection from "../AllInfoSection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <AllInfoSection />
      <Footer />
    </>
  );
}

export default Home;

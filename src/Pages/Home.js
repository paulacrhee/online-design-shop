import React from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturesSecond from "../components/FeaturesSecond";
import NewItems from "../components/NewItems";
import Testimonial from "../components/Testimonial";
import Help from "../components/Help";
import Newsletter from "../components/Newsletter";
import BestSellers from "../components/BestSellers";
const Home = () => {
  return (
    <div>
      <Hero />
      <BestSellers />
      <Features />
      <FeaturesSecond />
      <NewItems />
      <Testimonial />
      <Help />
      <Newsletter />
    </div>
  );
};

export default Home;

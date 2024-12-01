import React from "react";
import Banner from "../components/Banner";
import Search from "../components/Banner"
import QuickLinks from "../components/QuickLinks";
import FeaturedJob from "../components/FeaturedJob";

const Home = () => {
  return (
    <>
      <Banner />
      <Search />
      <QuickLinks />
      <FeaturedJob />
    </>
  );
};

export default Home;

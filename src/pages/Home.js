import React from "react";
import SearchBar from "../components/SearchBar";
import Search from "../components/SearchBar"
import QuickLinks from "../components/QuickLinks";
import FeaturedJob from "../components/FeaturedJob";

const Home = () => {
  return (
    <>
      <SearchBarBar />
      <Search />
      <QuickLinks />
      <FeaturedJob />
    </>
  );
};

export default Home;

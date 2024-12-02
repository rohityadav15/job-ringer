import React from "react";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter"
import QuickJobs from "../components/QuickJobs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <SearchBar />
      <Filter />
      <QuickJobs />
      <Footer/>
    </>
  );
};

export default Home;

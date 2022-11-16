import React from "react";
import pageTitle from "../../utils/pageTitle";

const Home = ({ title }) => {
  return <div>{pageTitle(title)}</div>;
};

export default Home;

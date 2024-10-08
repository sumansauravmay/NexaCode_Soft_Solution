import React from "react";
import Header from "../Components/Header";
import Teachstack from "../Components/Tech/Teachstack";
import About from "./About";
import Contact from "./Contact";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="home" content="Home component" />
      </Helmet>

      <Header />
      <Teachstack />
      <About />
      <Contact />
    </div>
  );
};

export default Home;

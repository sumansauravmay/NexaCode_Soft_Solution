import React from "react";
import Founder from "../Components/About/Founder";
import CarreerBtn from "../Components/About/CarreerBtn";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About us</title>
        <meta name="description" content="About us component" />
      </Helmet>
      <CarreerBtn />
      <Founder />
    </>
  );
};

export default About;

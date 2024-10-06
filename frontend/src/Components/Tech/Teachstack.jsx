import React from "react";
import Marquee from "react-fast-marquee";
import { techData } from "./tech";
import { Avatar, Text } from "@chakra-ui/react";
import "./Techstack.css";

const Teachstack = () => {
  const skillBoxStyle = {
    backgroundColor: "#212121",
    boxShadow: `0px 0px 30px blue`,
  };

  return (
    <div className="skills">
      <div className="skillsHeader">
        <h2 style={{ color: "black" }}>Our Tech Stacks</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {techData.map((el) => (
              <div key={el.id} style={skillBoxStyle} className="skill--box">
                <img src={el.image} alt="image" />
                <h3 fontSize="lg">{el.skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Teachstack;

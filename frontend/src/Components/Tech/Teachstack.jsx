import React from "react";
import Marquee from "react-fast-marquee";
import { techData } from "./tech";
import { Avatar, Text, useBreakpointValue, Heading } from "@chakra-ui/react";
import "./Techstack.css";

const Teachstack = () => {
  const skillBoxStyle = {
    backgroundColor: "#212121",
    boxShadow: `0px 0px 30px blue`,
  };

  return (
    <div className="skills">
      <div className="skillsHeader">
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: useBreakpointValue({ base: '20%', md: '30%' }),
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'red.400',
              zIndex: -1,
            }}>
           Our Tech
          </Text>
          <Text color={'red.400'} ml={2} as={'span'}>
          Stacks
          </Text>{' '}
        </Heading>
       
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

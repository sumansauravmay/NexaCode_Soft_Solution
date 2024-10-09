import React from "react";
import Header from "../Components/Header";
import Teachstack from "../Components/Tech/Teachstack";
import About from "./About";
import Contact from "./Contact";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Header />
      <Teachstack />
      <section id="aboutus">
        <About />
      </section>

      <section id="contactus">
        <Contact />
      </section>

      <Helmet>
        <title>Home</title>
        <meta name="home" content="Home component" />
      </Helmet>
    </div>
  );
};

export default Home;

// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <section id="aboutus" style={{ padding: '100px 0' }}>
//         <h1>About Us Section</h1>
//         <p>This is the About Us section on the home page.</p>
//       </section>

//       <section id="contactus" style={{ padding: '100px 0' }}>
//         <h1>Contact Us Section</h1>
//         <p>This is the Contact Us section on the home page.</p>
//       </section>
//     </div>
//   );
// };

// export default Home;

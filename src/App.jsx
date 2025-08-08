import React from "react";
import Navbar from './componenets/Navbar/Navbar.jsx'
import About from "./componenets/About/About";
import Skills from "./componenets/Skills/Skills";
import Experience from "./componenets/Experience/Experience";
import Work from "./componenets/Work/Work";
import Education from "./componenets/Education/Education";
import Contact from "./componenets/Contact/Contact";
import Footer from "./componenets/Footer/Footer";
import BlurBlob from './componenets/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414]">

       <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
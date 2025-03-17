import React from "react";
import MyNavbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div>
      <MyNavbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";

import Home from "../src/Home";
import Navbar from "../src/Navbar";
import Projects from "../src/Projects";
import Contact from "../src/Contact";
import About from "../src/About";

import "./App.scss";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleScrollY = () => {
      const position = document.body.scrollTop;
      setScrollPosition(position);
    };

    document.body.addEventListener("scroll", handleScrollY, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollY);
  }, scrollPosition);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, [screenHeight]);

  // console.log("screen height =", screenHeight);

  // console.log("Scroll position = ", scrollPosition);

  return (
    <div className="App">
      <Navbar
        scrollPosition={scrollPosition}
        screenHeight={screenHeight}
      ></Navbar>
      {/* <Home></Home>
      <Projects></Projects> */}
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;

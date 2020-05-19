import React, { useEffect, useState } from "react";
import Home from "../src/Home";
import Navbar from "../src/Navbar";
import Projects from "../src/Projects";

import "./App.scss";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScrollY = () => {
      const position = document.body.scrollTop;
      setScrollPosition(position);
    };

    document.body.addEventListener("scroll", handleScrollY, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollY);
  }, scrollPosition);

  // console.log("Scroll position = ", scrollPosition);

  return (
    <div className="App">
      <Navbar scrollPosition={scrollPosition}></Navbar>
      <Home></Home>
      <Projects></Projects>
    </div>
  );
}

export default App;
